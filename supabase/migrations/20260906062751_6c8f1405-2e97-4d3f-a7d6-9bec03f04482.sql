CREATE TABLE public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  reference text NOT NULL UNIQUE,
  airline text NOT NULL,
  flight_number text NOT NULL,
  from_code text NOT NULL,
  from_city text NOT NULL,
  to_code text NOT NULL,
  to_city text NOT NULL,
  depart_time text NOT NULL,
  arrive_time text NOT NULL,
  duration text NOT NULL,
  stops integer NOT NULL DEFAULT 0,
  cabin text NOT NULL DEFAULT 'Economy',
  depart_date date,
  return_date date,
  adults integer NOT NULL DEFAULT 1,
  children integer NOT NULL DEFAULT 0,
  infants integer NOT NULL DEFAULT 0,
  currency text NOT NULL DEFAULT 'USD',
  unit_price numeric NOT NULL,
  total_price numeric NOT NULL,
  contact_email text NOT NULL,
  contact_phone text NOT NULL,
  card_brand text,
  card_last4 text,
  card_holder text,
  payment_status text NOT NULL DEFAULT 'authorized',
  status text NOT NULL DEFAULT 'Confirmed',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own bookings" ON public.bookings
  FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.booking_passengers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  passenger_type text NOT NULL,
  first_name text NOT NULL,
  middle_name text,
  last_name text NOT NULL,
  dob date,
  gender text,
  nationality text,
  document_number text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX booking_passengers_booking_id_idx ON public.booking_passengers(booking_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.booking_passengers TO authenticated;
GRANT ALL ON public.booking_passengers TO service_role;
ALTER TABLE public.booking_passengers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage passengers on their own bookings" ON public.booking_passengers
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.bookings b WHERE b.id = booking_id AND b.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.bookings b WHERE b.id = booking_id AND b.user_id = auth.uid()));

CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();