export type Region =
  | "Everywhere"
  | "Asia"
  | "Africa"
  | "Europe"
  | "Oceania"
  | "North America"
  | "South America";

export const REGIONS: Region[] = [
  "Everywhere",
  "Asia",
  "Africa",
  "Europe",
  "Oceania",
  "North America",
  "South America",
];

export const TRIP_STYLES = [
  "Beach & Relaxation",
  "Outdoor Adventures",
  "Great Food & Cuisine",
  "Art & Culture",
  "Underrated Destinations",
  "Nightlife & Entertainment",
] as const;

export type TripStyle = (typeof TRIP_STYLES)[number];

export type Airport = {
  code: string;
  city: string;
  country: string;
  region: Exclude<Region, "Everywhere">;
  domestic: boolean;
  embassy: string;
};

export const AIRPORTS: Airport[] = [
  { code: "JFK", city: "New York", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "LAX", city: "Los Angeles", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "ORD", city: "Chicago", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "MIA", city: "Miami", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "LHR", city: "London", country: "United Kingdom", region: "Europe", domestic: false, embassy: "https://www.gov.uk/browse/visas-immigration" },
  { code: "CDG", city: "Paris", country: "France", region: "Europe", domestic: false, embassy: "https://france-visas.gouv.fr" },
  { code: "FCO", city: "Rome", country: "Italy", region: "Europe", domestic: false, embassy: "https://vistoperitalia.esteri.it" },
  { code: "LIS", city: "Lisbon", country: "Portugal", region: "Europe", domestic: false, embassy: "https://vistos.mne.gov.pt" },
  { code: "DXB", city: "Dubai", country: "United Arab Emirates", region: "Asia", domestic: false, embassy: "https://u.ae/en/information-and-services/visa-and-emirates-id" },
  { code: "DPS", city: "Bali", country: "Indonesia", region: "Asia", domestic: false, embassy: "https://evisa.imigrasi.go.id" },
  { code: "BKK", city: "Bangkok", country: "Thailand", region: "Asia", domestic: false, embassy: "https://www.thaievisa.go.th" },
  { code: "HND", city: "Tokyo", country: "Japan", region: "Asia", domestic: false, embassy: "https://www.mofa.go.jp/j_info/visit/visa" },
  { code: "DEL", city: "New Delhi", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "CPT", city: "Cape Town", country: "South Africa", region: "Africa", domestic: false, embassy: "https://www.dha.gov.za" },
  { code: "RAK", city: "Marrakech", country: "Morocco", region: "Africa", domestic: false, embassy: "https://www.consulat.ma" },
  { code: "SYD", city: "Sydney", country: "Australia", region: "Oceania", domestic: false, embassy: "https://immi.homeaffairs.gov.au" },
  { code: "AKL", city: "Auckland", country: "New Zealand", region: "Oceania", domestic: false, embassy: "https://www.immigration.govt.nz" },
  { code: "GIG", city: "Rio de Janeiro", country: "Brazil", region: "South America", domestic: false, embassy: "https://www.gov.br/mre" },
  { code: "LIM", city: "Lima", country: "Peru", region: "South America", domestic: false, embassy: "https://www.gob.pe/migraciones" },
  { code: "MEX", city: "Mexico City", country: "Mexico", region: "North America", domestic: false, embassy: "https://www.inm.gob.mx" },
  // --- Worldwide coverage ---
  // India
  { code: "BOM", city: "Mumbai", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "BLR", city: "Bengaluru", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "MAA", city: "Chennai", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "HYD", city: "Hyderabad", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "CCU", city: "Kolkata", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "COK", city: "Kochi", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "GOI", city: "Goa", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "JAI", city: "Jaipur", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "AMD", city: "Ahmedabad", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "PNQ", city: "Pune", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "TRV", city: "Thiruvananthapuram", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "LKO", city: "Lucknow", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  { code: "IXL", city: "Leh", country: "India", region: "Asia", domestic: false, embassy: "https://indianvisaonline.gov.in" },
  // Rest of Asia
  { code: "SIN", city: "Singapore", country: "Singapore", region: "Asia", domestic: false, embassy: "https://www.ica.gov.sg" },
  { code: "KUL", city: "Kuala Lumpur", country: "Malaysia", region: "Asia", domestic: false, embassy: "https://malaysiavisa.imi.gov.my" },
  { code: "HKG", city: "Hong Kong", country: "China", region: "Asia", domestic: false, embassy: "https://www.immd.gov.hk" },
  { code: "PEK", city: "Beijing", country: "China", region: "Asia", domestic: false, embassy: "https://bio.visaforchina.cn" },
  { code: "PVG", city: "Shanghai", country: "China", region: "Asia", domestic: false, embassy: "https://bio.visaforchina.cn" },
  { code: "ICN", city: "Seoul", country: "South Korea", region: "Asia", domestic: false, embassy: "https://www.visa.go.kr" },
  { code: "KIX", city: "Osaka", country: "Japan", region: "Asia", domestic: false, embassy: "https://www.mofa.go.jp/j_info/visit/visa" },
  { code: "TPE", city: "Taipei", country: "Taiwan", region: "Asia", domestic: false, embassy: "https://visawebapp.boca.gov.tw" },
  { code: "MNL", city: "Manila", country: "Philippines", region: "Asia", domestic: false, embassy: "https://evisa.gov.ph" },
  { code: "SGN", city: "Ho Chi Minh City", country: "Vietnam", region: "Asia", domestic: false, embassy: "https://evisa.gov.vn" },
  { code: "HAN", city: "Hanoi", country: "Vietnam", region: "Asia", domestic: false, embassy: "https://evisa.gov.vn" },
  { code: "REP", city: "Siem Reap", country: "Cambodia", region: "Asia", domestic: false, embassy: "https://www.evisa.gov.kh" },
  { code: "CMB", city: "Colombo", country: "Sri Lanka", region: "Asia", domestic: false, embassy: "https://www.eta.gov.lk" },
  { code: "KTM", city: "Kathmandu", country: "Nepal", region: "Asia", domestic: false, embassy: "https://nepaliport.immigration.gov.np" },
  { code: "MLE", city: "Malé", country: "Maldives", region: "Asia", domestic: false, embassy: "https://imuga.immigration.gov.mv" },
  { code: "DOH", city: "Doha", country: "Qatar", region: "Asia", domestic: false, embassy: "https://portal.moi.gov.qa" },
  { code: "AUH", city: "Abu Dhabi", country: "United Arab Emirates", region: "Asia", domestic: false, embassy: "https://u.ae/en/information-and-services/visa-and-emirates-id" },
  { code: "IST", city: "Istanbul", country: "Türkiye", region: "Asia", domestic: false, embassy: "https://www.evisa.gov.tr" },
  { code: "TLV", city: "Tel Aviv", country: "Israel", region: "Asia", domestic: false, embassy: "https://www.gov.il" },
  { code: "RUH", city: "Riyadh", country: "Saudi Arabia", region: "Asia", domestic: false, embassy: "https://visa.visitsaudi.com" },
  { code: "KHI", city: "Karachi", country: "Pakistan", region: "Asia", domestic: false, embassy: "https://visa.nadra.gov.pk" },
  { code: "DAC", city: "Dhaka", country: "Bangladesh", region: "Asia", domestic: false, embassy: "https://www.visa.gov.bd" },
  // Europe
  { code: "AMS", city: "Amsterdam", country: "Netherlands", region: "Europe", domestic: false, embassy: "https://ind.nl" },
  { code: "BCN", city: "Barcelona", country: "Spain", region: "Europe", domestic: false, embassy: "https://www.exteriores.gob.es" },
  { code: "MAD", city: "Madrid", country: "Spain", region: "Europe", domestic: false, embassy: "https://www.exteriores.gob.es" },
  { code: "FRA", city: "Frankfurt", country: "Germany", region: "Europe", domestic: false, embassy: "https://videx.diplo.de" },
  { code: "BER", city: "Berlin", country: "Germany", region: "Europe", domestic: false, embassy: "https://videx.diplo.de" },
  { code: "MUC", city: "Munich", country: "Germany", region: "Europe", domestic: false, embassy: "https://videx.diplo.de" },
  { code: "ZRH", city: "Zurich", country: "Switzerland", region: "Europe", domestic: false, embassy: "https://www.sem.admin.ch" },
  { code: "VIE", city: "Vienna", country: "Austria", region: "Europe", domestic: false, embassy: "https://www.bmeia.gv.at" },
  { code: "PRG", city: "Prague", country: "Czechia", region: "Europe", domestic: false, embassy: "https://ipc.gov.cz" },
  { code: "BUD", city: "Budapest", country: "Hungary", region: "Europe", domestic: false, embassy: "https://konzuliszolgalat.kormany.hu" },
  { code: "ATH", city: "Athens", country: "Greece", region: "Europe", domestic: false, embassy: "https://www.mfa.gr" },
  { code: "CPH", city: "Copenhagen", country: "Denmark", region: "Europe", domestic: false, embassy: "https://www.nyidanmark.dk" },
  { code: "ARN", city: "Stockholm", country: "Sweden", region: "Europe", domestic: false, embassy: "https://www.migrationsverket.se" },
  { code: "OSL", city: "Oslo", country: "Norway", region: "Europe", domestic: false, embassy: "https://www.udi.no" },
  { code: "HEL", city: "Helsinki", country: "Finland", region: "Europe", domestic: false, embassy: "https://um.fi" },
  { code: "KEF", city: "Reykjavik", country: "Iceland", region: "Europe", domestic: false, embassy: "https://utl.is" },
  { code: "DUB", city: "Dublin", country: "Ireland", region: "Europe", domestic: false, embassy: "https://www.irishimmigration.ie" },
  { code: "EDI", city: "Edinburgh", country: "United Kingdom", region: "Europe", domestic: false, embassy: "https://www.gov.uk/browse/visas-immigration" },
  { code: "WAW", city: "Warsaw", country: "Poland", region: "Europe", domestic: false, embassy: "https://www.gov.pl" },
  { code: "OPO", city: "Porto", country: "Portugal", region: "Europe", domestic: false, embassy: "https://vistos.mne.gov.pt" },
  { code: "MXP", city: "Milan", country: "Italy", region: "Europe", domestic: false, embassy: "https://vistoperitalia.esteri.it" },
  { code: "VCE", city: "Venice", country: "Italy", region: "Europe", domestic: false, embassy: "https://vistoperitalia.esteri.it" },
  { code: "SVO", city: "Moscow", country: "Russia", region: "Europe", domestic: false, embassy: "https://electronic-visa.kdmid.ru" },
  // Africa
  { code: "CAI", city: "Cairo", country: "Egypt", region: "Africa", domestic: false, embassy: "https://visa2egypt.gov.eg" },
  { code: "NBO", city: "Nairobi", country: "Kenya", region: "Africa", domestic: false, embassy: "https://www.etakenya.go.ke" },
  { code: "JRO", city: "Kilimanjaro", country: "Tanzania", region: "Africa", domestic: false, embassy: "https://visa.immigration.go.tz" },
  { code: "JNB", city: "Johannesburg", country: "South Africa", region: "Africa", domestic: false, embassy: "https://www.dha.gov.za" },
  { code: "CMN", city: "Casablanca", country: "Morocco", region: "Africa", domestic: false, embassy: "https://www.consulat.ma" },
  { code: "LOS", city: "Lagos", country: "Nigeria", region: "Africa", domestic: false, embassy: "https://portal.immigration.gov.ng" },
  { code: "ACC", city: "Accra", country: "Ghana", region: "Africa", domestic: false, embassy: "https://www.gis.gov.gh" },
  { code: "ADD", city: "Addis Ababa", country: "Ethiopia", region: "Africa", domestic: false, embassy: "https://www.evisa.gov.et" },
  { code: "MRU", city: "Port Louis", country: "Mauritius", region: "Africa", domestic: false, embassy: "https://passport.govmu.org" },
  // North America
  { code: "SFO", city: "San Francisco", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "SEA", city: "Seattle", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "BOS", city: "Boston", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "LAS", city: "Las Vegas", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "DEN", city: "Denver", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "HNL", city: "Honolulu", country: "United States", region: "North America", domestic: true, embassy: "https://travel.state.gov" },
  { code: "YYZ", city: "Toronto", country: "Canada", region: "North America", domestic: false, embassy: "https://www.canada.ca/en/immigration-refugees-citizenship.html" },
  { code: "YVR", city: "Vancouver", country: "Canada", region: "North America", domestic: false, embassy: "https://www.canada.ca/en/immigration-refugees-citizenship.html" },
  { code: "CUN", city: "Cancún", country: "Mexico", region: "North America", domestic: false, embassy: "https://www.inm.gob.mx" },
  { code: "SJO", city: "San José", country: "Costa Rica", region: "North America", domestic: false, embassy: "https://www.migracion.go.cr" },
  { code: "HAV", city: "Havana", country: "Cuba", region: "North America", domestic: false, embassy: "https://www.cubatravel.cu" },
  { code: "PUJ", city: "Punta Cana", country: "Dominican Republic", region: "North America", domestic: false, embassy: "https://eticket.migracion.gob.do" },
  // South America
  { code: "GRU", city: "São Paulo", country: "Brazil", region: "South America", domestic: false, embassy: "https://www.gov.br/mre" },
  { code: "EZE", city: "Buenos Aires", country: "Argentina", region: "South America", domestic: false, embassy: "https://www.argentina.gob.ar/interior/migraciones" },
  { code: "SCL", city: "Santiago", country: "Chile", region: "South America", domestic: false, embassy: "https://serviciomigraciones.cl" },
  { code: "BOG", city: "Bogotá", country: "Colombia", region: "South America", domestic: false, embassy: "https://www.cancilleria.gov.co" },
  { code: "CUZ", city: "Cusco", country: "Peru", region: "South America", domestic: false, embassy: "https://www.gob.pe/migraciones" },
  { code: "UIO", city: "Quito", country: "Ecuador", region: "South America", domestic: false, embassy: "https://www.cancilleria.gob.ec" },
  { code: "MVD", city: "Montevideo", country: "Uruguay", region: "South America", domestic: false, embassy: "https://www.gub.uy" },
  // Oceania
  { code: "MEL", city: "Melbourne", country: "Australia", region: "Oceania", domestic: false, embassy: "https://immi.homeaffairs.gov.au" },
  { code: "BNE", city: "Brisbane", country: "Australia", region: "Oceania", domestic: false, embassy: "https://immi.homeaffairs.gov.au" },
  { code: "PER", city: "Perth", country: "Australia", region: "Oceania", domestic: false, embassy: "https://immi.homeaffairs.gov.au" },
  { code: "ZQN", city: "Queenstown", country: "New Zealand", region: "Oceania", domestic: false, embassy: "https://www.immigration.govt.nz" },
  { code: "NAN", city: "Nadi", country: "Fiji", region: "Oceania", domestic: false, embassy: "https://www.immigration.gov.fj" },
  { code: "PPT", city: "Papeete", country: "French Polynesia", region: "Oceania", domestic: false, embassy: "https://www.polynesie-francaise.pref.gouv.fr" },
];

/** Build an Airport entry for a city the user typed that isn't in our list. */
export function customAirport(input: string): Airport {
  const clean = input.trim().replace(/\s+/g, " ");
  const code = clean.replace(/[^a-zA-Z]/g, "").slice(0, 3).toUpperCase() || "ANY";
  return {
    code,
    city: clean,
    country: "Custom search",
    region: "Asia",
    domestic: false,
    embassy: "https://www.iatatravelcentre.com/passport-visa-health-travel-document-requirements.htm",
  };
}

export function searchAirports(query: string, limit = 8): Airport[] {
  const q = query.trim().toLowerCase();
  if (!q) return AIRPORTS.slice(0, limit);
  return AIRPORTS.filter(
    (a) =>
      a.city.toLowerCase().includes(q) ||
      a.country.toLowerCase().includes(q) ||
      a.code.toLowerCase().includes(q) ||
      a.region.toLowerCase().includes(q),
  ).slice(0, limit);
}

export type Flight = {
  id: string;
  airline: string;
  logo: string;
  flightNumber: string;
  from: string;
  to: string;
  depart: string;
  arrive: string;
  duration: string;
  stops: number;
  price: number;
  seatsLeft: number;
  aircraft: string;
  refundable: boolean;
};

const AIRLINES: [string, string][] = [
  ["Emirates", "🇦🇪"],
  ["Qatar Airways", "🇶🇦"],
  ["Singapore Airlines", "🇸🇬"],
  ["Lufthansa", "🇩🇪"],
  ["Delta", "🇺🇸"],
  ["British Airways", "🇬🇧"],
  ["Air France", "🇫🇷"],
  ["ANA", "🇯🇵"],
  ["Qantas", "🇦🇺"],
  ["Turkish Airlines", "🇹🇷"],
];

// Carriers that actually operate domestic routes inside a country.
export const COUNTRY_AIRLINES: Record<string, [string, string][]> = {
  India: [
    ["IndiGo", "🇮🇳"],
    ["Vistara", "🇮🇳"],
    ["SpiceJet", "🇮🇳"],
    ["Air India", "🇮🇳"],
    ["Akasa Air", "🇮🇳"],
    ["Air India Express", "🇮🇳"],
  ],
  "South Africa": [
    ["FlySafair", "🇿🇦"],
    ["South African Airways", "🇿🇦"],
    ["Airlink", "🇿🇦"],
    ["CemAir", "🇿🇦"],
    ["LIFT", "🇿🇦"],
  ],
  "United States": [
    ["Delta", "🇺🇸"],
    ["American Airlines", "🇺🇸"],
    ["United", "🇺🇸"],
    ["Southwest", "🇺🇸"],
    ["JetBlue", "🇺🇸"],
  ],
  "United Kingdom": [
    ["British Airways", "🇬🇧"],
    ["easyJet", "🇬🇧"],
    ["Loganair", "🇬🇧"],
  ],
  Australia: [
    ["Qantas", "🇦🇺"],
    ["Virgin Australia", "🇦🇺"],
    ["Jetstar", "🇦🇺"],
    ["Rex", "🇦🇺"],
  ],
  Japan: [
    ["ANA", "🇯🇵"],
    ["Japan Airlines", "🇯🇵"],
    ["Skymark", "🇯🇵"],
    ["Peach", "🇯🇵"],
  ],
  China: [
    ["Air China", "🇨🇳"],
    ["China Eastern", "🇨🇳"],
    ["China Southern", "🇨🇳"],
    ["Hainan Airlines", "🇨🇳"],
  ],
  Brazil: [
    ["LATAM Brasil", "🇧🇷"],
    ["GOL", "🇧🇷"],
    ["Azul", "🇧🇷"],
  ],
  Indonesia: [
    ["Garuda Indonesia", "🇮🇩"],
    ["Lion Air", "🇮🇩"],
    ["Citilink", "🇮🇩"],
  ],
  Spain: [
    ["Iberia", "🇪🇸"],
    ["Vueling", "🇪🇸"],
    ["Air Europa", "🇪🇸"],
  ],
  Germany: [
    ["Lufthansa", "🇩🇪"],
    ["Eurowings", "🇩🇪"],
  ],
  France: [
    ["Air France", "🇫🇷"],
    ["Transavia France", "🇫🇷"],
  ],
  Italy: [
    ["ITA Airways", "🇮🇹"],
    ["Aeroitalia", "🇮🇹"],
  ],
  Canada: [
    ["Air Canada", "🇨🇦"],
    ["WestJet", "🇨🇦"],
    ["Porter Airlines", "🇨🇦"],
  ],
  Mexico: [
    ["Aeroméxico", "🇲🇽"],
    ["Volaris", "🇲🇽"],
    ["VivaAerobus", "🇲🇽"],
  ],
  Thailand: [
    ["Thai Airways", "🇹🇭"],
    ["Bangkok Airways", "🇹🇭"],
    ["Thai AirAsia", "🇹🇭"],
  ],
  "South Korea": [
    ["Korean Air", "🇰🇷"],
    ["Asiana Airlines", "🇰🇷"],
    ["Jeju Air", "🇰🇷"],
  ],
  Vietnam: [
    ["Vietnam Airlines", "🇻🇳"],
    ["VietJet Air", "🇻🇳"],
  ],
};

function seeded(n: number) {
  const x = Math.sin(n * 9973) * 10000;
  return x - Math.floor(x);
}

const codeSeed = (s: string) =>
  s.toUpperCase().split("").reduce((acc, c, i) => acc + c.charCodeAt(0) * (i + 3), 0);

const countryOf = (code: string) =>
  AIRPORTS.find((a) => a.code === code.toUpperCase())?.country ?? "";

export function generateFlights(from: string, to: string): Flight[] {
  const fromCountry = countryOf(from);
  const toCountry = countryOf(to);
  const isDomestic = !!fromCountry && fromCountry === toCountry;
  const pool =
    (isDomestic ? COUNTRY_AIRLINES[fromCountry] : undefined) ??
    (fromCountry && COUNTRY_AIRLINES[fromCountry]
      ? [...COUNTRY_AIRLINES[fromCountry]!, ...AIRLINES]
      : AIRLINES);

  return Array.from({ length: 18 }, (_, i) => {
    const r = seeded(i * 31 + codeSeed(from) * 7 + codeSeed(to) * 13);
    const [airline, logo] = pool[i % pool.length]!;
    const stops = isDomestic ? (r > 0.75 ? 1 : 0) : r > 0.72 ? 2 : r > 0.42 ? 1 : 0;
    const depHour = (5 + i) % 24;
    const durH = isDomestic
      ? 1 + Math.round(r * 2) + stops
      : 3 + Math.round(r * 12) + stops * 2;
    const arrHour = (depHour + durH) % 24;
    const pad = (n: number) => String(n).padStart(2, "0");
    return {
      id: `${from}-${to}-${i}`,
      airline,
      logo,
      flightNumber: `${airline.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}${100 + i * 7}`,
      from,
      to,
      depart: `${pad(depHour)}:${pad(Math.round(r * 5) * 10)}`,
      arrive: `${pad(arrHour)}:${pad(Math.round(r * 4) * 10)}`,
      duration: `${durH}h ${Math.round(r * 55)}m`,
      stops,
      price: isDomestic
        ? Math.round(45 + r * 220 + stops * 15)
        : Math.round(180 + r * 1400 + stops * -60),
      seatsLeft: 1 + Math.round(r * 24),
      aircraft: isDomestic
        ? r > 0.5
          ? "Airbus A320neo"
          : "Boeing 737"
        : r > 0.5
          ? "Boeing 777"
          : "Airbus A350",
      refundable: r > 0.55,
    };
  });
}


export type Destination = {
  id: string;
  name: string;
  country: string;
  emoji: string;
  region: Exclude<Region, "Everywhere">;
  price: number;
  rating: number;
  reviews: number;
  styles: TripStyle[];
  bestTime: string;
  weather: string;
  currency: string;
  description: string;
  airport: string;
};

export const DESTINATIONS: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    emoji: "🏝️",
    region: "Asia",
    price: 599,
    rating: 4.8,
    reviews: 2341,
    styles: ["Beach & Relaxation", "Great Food & Cuisine", "Art & Culture"],
    bestTime: "Apr–Oct",
    weather: "Warm & Sunny, 28°C",
    currency: "IDR (Rupiah)",
    description:
      "Volcanic ridges, rice terraces and surf beaches. Temple mornings, beach-club evenings, and some of the best value villas in Asia.",
    airport: "DPS",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    emoji: "🗼",
    region: "Asia",
    price: 890,
    rating: 4.9,
    reviews: 4120,
    styles: ["Great Food & Cuisine", "Art & Culture", "Nightlife & Entertainment"],
    bestTime: "Mar–May, Oct–Nov",
    weather: "Mild & Crisp, 18°C",
    currency: "JPY (Yen)",
    description:
      "The densest food city on earth. Michelin counters, backstreet izakaya, and neighbourhoods that each feel like their own town.",
    airport: "HND",
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    emoji: "🚋",
    region: "Europe",
    price: 445,
    rating: 4.7,
    reviews: 1876,
    styles: ["Great Food & Cuisine", "Art & Culture", "Underrated Destinations"],
    bestTime: "Mar–Jun, Sep–Oct",
    weather: "Sunny & Breezy, 22°C",
    currency: "EUR (Euro)",
    description:
      "Tiled hills over the Tagus. Cheap pastéis, tram rides, and a nightlife that runs from fado houses to Bairro Alto until sunrise.",
    airport: "LIS",
  },
  {
    id: "capetown",
    name: "Cape Town",
    country: "South Africa",
    emoji: "🏔️",
    region: "Africa",
    price: 720,
    rating: 4.8,
    reviews: 1522,
    styles: ["Outdoor Adventures", "Great Food & Cuisine", "Beach & Relaxation"],
    bestTime: "Nov–Mar",
    weather: "Dry & Warm, 26°C",
    currency: "ZAR (Rand)",
    description:
      "Table Mountain on one side, two oceans on the other. Wine valleys within an hour and hikes that start inside the city.",
    airport: "CPT",
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    emoji: "🕌",
    region: "Africa",
    price: 510,
    rating: 4.6,
    reviews: 998,
    styles: ["Art & Culture", "Great Food & Cuisine", "Underrated Destinations"],
    bestTime: "Oct–Apr",
    weather: "Dry & Hot, 30°C",
    currency: "MAD (Dirham)",
    description:
      "Riads behind medina walls, souks that swallow an afternoon, and the Atlas mountains a short drive from the square.",
    airport: "RAK",
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    emoji: "🌊",
    region: "Oceania",
    price: 1180,
    rating: 4.7,
    reviews: 2044,
    styles: ["Beach & Relaxation", "Outdoor Adventures", "Nightlife & Entertainment"],
    bestTime: "Sep–Nov, Mar–May",
    weather: "Warm & Coastal, 24°C",
    currency: "AUD (Dollar)",
    description:
      "Harbour city with a coastal walk between every beach. Great coffee, big national parks, and long light-filled summers.",
    airport: "SYD",
  },
  {
    id: "rio",
    name: "Rio de Janeiro",
    country: "Brazil",
    emoji: "🏖️",
    region: "South America",
    price: 780,
    rating: 4.6,
    reviews: 1330,
    styles: ["Beach & Relaxation", "Nightlife & Entertainment", "Outdoor Adventures"],
    bestTime: "Dec–Mar",
    weather: "Hot & Humid, 31°C",
    currency: "BRL (Real)",
    description:
      "Beaches framed by granite peaks. Samba nights in Lapa, hikes up Pedra da Gávea, and sunset from Arpoador every day.",
    airport: "GIG",
  },
  {
    id: "lima",
    name: "Lima",
    country: "Peru",
    emoji: "🍽️",
    region: "South America",
    price: 640,
    rating: 4.5,
    reviews: 870,
    styles: ["Great Food & Cuisine", "Art & Culture", "Underrated Destinations"],
    bestTime: "Dec–Apr",
    weather: "Mild & Coastal, 23°C",
    currency: "PEN (Sol)",
    description:
      "The gateway to the Andes and a world-ranked food capital. Ceviche on the coast, then a short hop to Cusco.",
    airport: "LIM",
  },
  {
    id: "mexicocity",
    name: "Mexico City",
    country: "Mexico",
    emoji: "🌮",
    region: "North America",
    price: 380,
    rating: 4.7,
    reviews: 2610,
    styles: ["Great Food & Cuisine", "Art & Culture", "Nightlife & Entertainment"],
    bestTime: "Mar–May",
    weather: "Mild & Dry, 25°C",
    currency: "MXN (Peso)",
    description:
      "Murals, markets and taquerías on every corner. Cheap flights from the US and one of the best museum densities anywhere.",
    airport: "MEX",
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    emoji: "🏜️",
    region: "Asia",
    price: 690,
    rating: 4.5,
    reviews: 3105,
    styles: ["Beach & Relaxation", "Nightlife & Entertainment", "Outdoor Adventures"],
    bestTime: "Nov–Mar",
    weather: "Warm & Clear, 27°C",
    currency: "AED (Dirham)",
    description:
      "Desert dunes, beach clubs and a global airline hub. Easy stopover on almost any long-haul route east.",
    airport: "DXB",
  },
];

export type Stay = {
  id: string;
  name: string;
  location: string;
  stars: number;
  rating: number;
  reviews: number;
  price: number;
  roomsLeft: number;
  amenities: string[];
  roomType: string;
  photos: string[];
};

export const STAYS: Stay[] = [
  {
    id: "s1",
    name: "Taj Oceanfront Resort",
    location: "Seminyak, Bali",
    stars: 5,
    rating: 9.4,
    reviews: 1284,
    price: 150,
    roomsLeft: 4,
    amenities: ["WiFi", "Pool", "Gym", "Spa", "Parking"],
    roomType: "Suite",
    photos: ["🏖️", "🛏️", "🏊"],
  },
  {
    id: "s2",
    name: "Ubud Jungle Villas",
    location: "Ubud, Bali",
    stars: 4,
    rating: 9.1,
    reviews: 642,
    price: 88,
    roomsLeft: 7,
    amenities: ["WiFi", "Pool", "Kitchen"],
    roomType: "Apartment",
    photos: ["🌴", "🛁", "🍽️"],
  },
  {
    id: "s3",
    name: "Harbour View Loft",
    location: "Circular Quay, Sydney",
    stars: 4,
    rating: 8.8,
    reviews: 921,
    price: 210,
    roomsLeft: 2,
    amenities: ["WiFi", "Kitchen", "Gym", "Parking"],
    roomType: "Double",
    photos: ["🌉", "🛋️", "☕"],
  },
  {
    id: "s4",
    name: "Riad Almeria",
    location: "Medina, Marrakech",
    stars: 3,
    rating: 8.6,
    reviews: 388,
    price: 54,
    roomsLeft: 9,
    amenities: ["WiFi", "Pool", "Spa"],
    roomType: "Double",
    photos: ["🕌", "🫖", "🛏️"],
  },
  {
    id: "s5",
    name: "Shinjuku Capsule Plus",
    location: "Shinjuku, Tokyo",
    stars: 3,
    rating: 8.2,
    reviews: 2210,
    price: 42,
    roomsLeft: 20,
    amenities: ["WiFi", "Gym"],
    roomType: "Single",
    photos: ["🏙️", "🛌", "🍜"],
  },
  {
    id: "s6",
    name: "Alfama Tile House",
    location: "Alfama, Lisbon",
    stars: 4,
    rating: 9.0,
    reviews: 511,
    price: 119,
    roomsLeft: 3,
    amenities: ["WiFi", "Kitchen", "Parking"],
    roomType: "Apartment",
    photos: ["🚋", "🪟", "🥐"],
  },
];

export type Car = {
  id: string;
  model: string;
  type: string;
  emoji: string;
  rate: number;
  transmission: "Manual" | "Automatic";
  mileage: "Limited" | "Unlimited";
  insurance: string;
  insuranceCost: number;
  cancellation: string;
  seats: number;
};

export const CARS: Car[] = [
  { id: "c1", model: "Toyota Yaris 2024", type: "Economy", emoji: "🚙", rate: 28, transmission: "Manual", mileage: "Limited", insurance: "Basic", insuranceCost: 9, cancellation: "Free cancellation up to 48h", seats: 4 },
  { id: "c2", model: "Honda Civic 2024", type: "Sedan", emoji: "🚗", rate: 45, transmission: "Automatic", mileage: "Unlimited", insurance: "Basic", insuranceCost: 12, cancellation: "Free cancellation up to 24h", seats: 5 },
  { id: "c3", model: "Toyota Fortuner 2024", type: "SUV", emoji: "🚐", rate: 60, transmission: "Automatic", mileage: "Unlimited", insurance: "Premium", insuranceCost: 50, cancellation: "Free cancellation up to 24h", seats: 7 },
  { id: "c4", model: "BMW 5 Series 2025", type: "Luxury", emoji: "🏎️", rate: 145, transmission: "Automatic", mileage: "Limited", insurance: "Full Coverage", insuranceCost: 65, cancellation: "Non-refundable", seats: 5 },
  { id: "c5", model: "VW Caravelle 2023", type: "Van", emoji: "🚌", rate: 92, transmission: "Manual", mileage: "Unlimited", insurance: "Premium", insuranceCost: 38, cancellation: "Free cancellation up to 72h", seats: 9 },
  { id: "c6", model: "Ford Ranger 2024", type: "Truck", emoji: "🛻", rate: 78, transmission: "Automatic", mileage: "Limited", insurance: "No Insurance", insuranceCost: 0, cancellation: "Free cancellation up to 24h", seats: 5 },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need a visa to travel to my destination?",
    a: "Visa requirements depend on your nationality and destination country. Most countries require visas for international visitors. Use our Visa Checker at the top of flight search, or visit the official embassy website for your destination — we link directly to it in every destination guide.",
  },
  {
    q: "What documents do I need for international travel?",
    a: "Typically: a valid passport with 6+ months validity, a visa if required, travel insurance (strongly recommended), vaccination certificates where required, your flight confirmation and hotel booking, and proof of a return ticket. Check the destination guide for specifics.",
  },
  {
    q: "What's the best way to book refundable flights?",
    a: "Look for the \"Refundable\" tag on search results. These allow full cancellation and refund within a specified timeframe. Cost is usually $20–50 more than basic economy — worth it if your plans may change.",
  },
  {
    q: "How do I get an International Driving Permit (IDP)?",
    a: "Apply at your local motor vehicle department with a valid driver's license, passport and photos. Processing takes 1–2 weeks and costs $10–30. Required in many countries when renting a car, and recommended even where it is optional.",
  },
  {
    q: "What's the best time to visit my chosen destination?",
    a: "Every destination has peak and off-seasons. Each destination card lists the best months, typical weather and local currency. Peak season usually means higher prices but more reliable weather.",
  },
  {
    q: "How do I track my booking using the reference tracer?",
    a: "Open the Bookings tab and enter your confirmation number in the Booking Reference Tracer. You'll see flight, hotel and car rental details, and can manage or modify your booking from there.",
  },
  {
    q: "Is travel insurance really necessary?",
    a: "Strongly recommended. It covers flight cancellations, medical emergencies, baggage loss, trip delays and other emergencies. Cost is usually 2–5% of your trip total.",
  },
  {
    q: "Can I modify or cancel my flight after booking?",
    a: "It depends on your ticket type. Refundable tickets allow free cancellation; restricted tickets may carry fees. Use the Booking Reference Tracer to modify, or contact the airline directly. The cancellation policy is shown at purchase.",
  },
  {
    q: "How far in advance should I book flights and hotels?",
    a: "Flights: 6–8 weeks before travel. Hotels: 4–6 weeks before. Cars: 2–4 weeks before. Last-minute deals do appear 1–2 weeks out, but availability is unpredictable.",
  },
  {
    q: "What should I do if my flight is delayed or cancelled?",
    a: "Contact your airline immediately and check the delay policy in your booking. Travel insurance may cover delays over 3 hours, and the airline may provide meal vouchers or a hotel. Use the Booking Reference Tracer to reach support fast.",
  },
];

export type BookingRecord = {
  ref: string;
  kind: "flight" | "hotel" | "car";
  title: string;
  status: string;
  when: string;
  timeline: "Upcoming" | "Current Trip" | "Past";
  total: number;
  details: { label: string; value: string }[];
  sections: { heading: string; rows: { label: string; value: string }[] }[];
  actions: string[];
};

export const BOOKINGS: BookingRecord[] = [
  {
    ref: "ABC123DEF456",
    kind: "flight",
    title: "Emirates EK201 · JFK → DXB",
    status: "CONFIRMED",
    when: "Dec 15, 2026",
    timeline: "Upcoming",
    total: 1500,
    details: [
      { label: "Airline", value: "Emirates" },
      { label: "Flight Number", value: "EK201" },
      { label: "Aircraft", value: "Boeing 777" },
    ],
    sections: [
      {
        heading: "📅 Departure",
        rows: [
          { label: "Date", value: "Dec 15, 2026" },
          { label: "Time", value: "14:30 (2:30 PM)" },
          { label: "Airport", value: "JFK (New York)" },
        ],
      },
      {
        heading: "📍 Arrival",
        rows: [
          { label: "Date", value: "Dec 16, 2026" },
          { label: "Time", value: "04:45 (next day)" },
          { label: "Airport", value: "DXB (Dubai)" },
        ],
      },
      {
        heading: "👥 Passengers & Seats",
        rows: [
          { label: "Passengers", value: "2 Adults, 1 Child" },
          { label: "Seats", value: "12A, 12B, 12C" },
          { label: "Class", value: "Economy" },
          { label: "Type", value: "Window, Middle, Window" },
        ],
      },
      {
        heading: "💰 Price Summary",
        rows: [
          { label: "Ticket Cost", value: "$450 per person" },
          { label: "Taxes & Fees", value: "$50 per person" },
          { label: "Total", value: "$1,500 (3 passengers)" },
        ],
      },
      {
        heading: "📦 Baggage Allowance",
        rows: [
          { label: "Carry-on", value: "1 × 7kg / 15 lbs" },
          { label: "Checked", value: "1 × 23kg / 50 lbs" },
          { label: "Extra baggage", value: "Available (+$50)" },
        ],
      },
    ],
    actions: [
      "Check-in Online",
      "Change Seat",
      "Add Baggage",
      "Modify Flight",
      "View Cancellation Policy",
      "Download Ticket (PDF)",
      "Contact Support",
    ],
  },
  {
    ref: "HTL789GHI012",
    kind: "hotel",
    title: "Taj Oceanfront Resort · Bali",
    status: "CONFIRMED",
    when: "Dec 15–20, 2026",
    timeline: "Upcoming",
    total: 825,
    details: [
      { label: "Location", value: "Bali, Indonesia" },
      { label: "Rating", value: "⭐⭐⭐⭐⭐" },
      { label: "Room Type", value: "Deluxe Ocean View" },
    ],
    sections: [
      {
        heading: "📅 Stay",
        rows: [
          { label: "Check-in", value: "Dec 15, 2026" },
          { label: "Check-out", value: "Dec 20, 2026" },
          { label: "Duration", value: "5 nights" },
          { label: "Guests", value: "2 Adults, 1 Child" },
        ],
      },
      {
        heading: "🛏️ Room",
        rows: [
          { label: "Type", value: "Deluxe Ocean View" },
          { label: "Amenities", value: "WiFi, Pool, Gym, Spa, Restaurant" },
        ],
      },
      {
        heading: "💰 Price Summary",
        rows: [
          { label: "Per night", value: "$150" },
          { label: "Subtotal (5 nights)", value: "$750" },
          { label: "Taxes & Fees", value: "$75" },
          { label: "Total", value: "$825" },
        ],
      },
    ],
    actions: [
      "Modify Dates",
      "Change Room",
      "Add Services",
      "Download Receipt",
      "Contact Hotel Support",
    ],
  },
  {
    ref: "CAR345JKL678",
    kind: "car",
    title: "Toyota Fortuner 2024 · Bali Airport",
    status: "CONFIRMED",
    when: "Dec 15–20, 2026",
    timeline: "Upcoming",
    total: 385,
    details: [
      { label: "Category", value: "SUV" },
      { label: "Color", value: "Black" },
      { label: "Mileage", value: "Unlimited" },
    ],
    sections: [
      {
        heading: "🏁 Pickup & Dropoff",
        rows: [
          { label: "Pickup", value: "Dec 15, 2026 at 10:00 AM" },
          { label: "Dropoff", value: "Dec 20, 2026 at 10:00 AM" },
          { label: "Location", value: "Bali International Airport" },
          { label: "Duration", value: "5 days" },
        ],
      },
      {
        heading: "💰 Price Summary",
        rows: [
          { label: "Rental", value: "$300 (5 days × $60)" },
          { label: "Insurance", value: "Premium Coverage $50" },
          { label: "Taxes & Fees", value: "$35" },
          { label: "Total", value: "$385" },
        ],
      },
      {
        heading: "👨‍💼 Driver Requirements",
        rows: [
          { label: "License", value: "Valid driver's license (original)" },
          { label: "IDP", value: "International Driving Permit" },
          { label: "ID", value: "Passport for verification" },
          { label: "Minimum age", value: "25 years" },
          { label: "Payment", value: "Credit card for authorization" },
        ],
      },
    ],
    actions: [
      "Modify Dates",
      "Add Driver (+$15/day)",
      "Upgrade Insurance",
      "Download Agreement",
      "Contact Support",
    ],
  },
  {
    ref: "FLT908MNO321",
    kind: "flight",
    title: "Qatar Airways QR703 · LHR → DOH",
    status: "COMPLETED",
    when: "Feb 04, 2026",
    timeline: "Past",
    total: 640,
    details: [
      { label: "Airline", value: "Qatar Airways" },
      { label: "Flight Number", value: "QR703" },
      { label: "Aircraft", value: "Airbus A350" },
    ],
    sections: [
      {
        heading: "📅 Trip",
        rows: [
          { label: "Departure", value: "Feb 04, 2026 · 09:10 · LHR" },
          { label: "Arrival", value: "Feb 04, 2026 · 19:05 · DOH" },
          { label: "Passengers", value: "1 Adult" },
        ],
      },
      {
        heading: "💰 Price Summary",
        rows: [
          { label: "Ticket Cost", value: "$580" },
          { label: "Taxes & Fees", value: "$60" },
          { label: "Total", value: "$640" },
        ],
      },
    ],
    actions: ["Download Receipt", "Rebook This Route", "Contact Support"],
  },
];
