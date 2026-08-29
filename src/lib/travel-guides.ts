import { AIRPORTS, type Airport } from "./travel-data";

export type TravelGuide = {
  place: string;
  country: string;
  kind: "country" | "city";
  summary: string;
  attractions: string[];
  hotels: { name: string; area: string; price: number }[];
  itinerary: { day: string; plan: string }[];
  bestTime: string;
  tips: string[];
  flights: { from: string; airport: string; price: number; duration: string }[];
  currency: string;
};

type GuideSeed = {
  aliases: string[];
  place: string;
  country: string;
  kind: "country" | "city";
  summary: string;
  attractions: string[];
  hotels: [string, string, number][];
  itinerary: [string, string][];
  bestTime: string;
  tips: string[];
  currency: string;
  airports: string[];
};

const SEEDS: GuideSeed[] = [
  {
    aliases: ["india", "bharat"],
    place: "India",
    country: "India",
    kind: "country",
    summary:
      "A subcontinent of palaces, Himalayan trails, backwaters and street food. Two weeks covers the Golden Triangle plus one beach or mountain add-on.",
    attractions: [
      "Taj Mahal, Agra",
      "Amber Fort & City Palace, Jaipur",
      "Kerala backwaters, Alleppey",
      "Beaches & night markets of Goa",
      "Varanasi ghats at sunrise",
      "Leh–Ladakh high-altitude road trip",
      "Golden Temple, Amritsar",
      "Hampi ruins, Karnataka",
    ],
    hotels: [
      ["The Oberoi Amarvilas", "Agra", 320],
      ["Rambagh Palace", "Jaipur", 480],
      ["Taj Lake Palace", "Udaipur", 520],
      ["Kumarakom Lake Resort", "Kerala", 210],
      ["Zostel Hostels", "Pan-India", 15],
    ],
    itinerary: [
      ["Day 1–3", "Delhi: Old Delhi food walk, Qutub Minar, Humayun's Tomb"],
      ["Day 4–5", "Agra: sunrise Taj Mahal, Agra Fort, Mehtab Bagh sunset"],
      ["Day 6–8", "Jaipur: Amber Fort, Hawa Mahal, bazaars and block printing"],
      ["Day 9–12", "Kerala or Goa: backwater houseboat, beaches, Ayurveda"],
      ["Day 13–14", "Mumbai: Marine Drive, Elephanta Caves, Bandra cafés"],
    ],
    bestTime: "October to March (cool, dry). Avoid May–June heat and July–Sept monsoon in most regions.",
    tips: [
      "e-Visa available for 160+ nationalities — apply 4 days ahead",
      "Use UPI or cards in cities; carry small cash for markets",
      "Book trains on IRCTC early; flights are cheap between metros",
      "Drink sealed bottled water and start street food gently",
    ],
    currency: "INR (₹)",
    airports: ["DEL", "BOM", "BLR", "MAA", "GOI", "COK"],
  },
  {
    aliases: ["mumbai", "bombay"],
    place: "Mumbai",
    country: "India",
    kind: "city",
    summary: "India's coastal megacity: Art Deco promenades, Bollywood, colonial landmarks and legendary street food.",
    attractions: [
      "Gateway of India & Colaba",
      "Marine Drive at dusk",
      "Elephanta Caves ferry",
      "Chhatrapati Shivaji Terminus",
      "Dharavi community walk",
      "Bandra street art & cafés",
    ],
    hotels: [
      ["Taj Mahal Palace", "Colaba", 400],
      ["The Oberoi", "Nariman Point", 350],
      ["Abode Bombay", "Colaba", 120],
      ["Backpacker Panda", "Andheri", 18],
    ],
    itinerary: [
      ["Day 1", "South Mumbai heritage walk, Gateway of India, Leopold Café"],
      ["Day 2", "Elephanta Caves morning, Chor Bazaar, Marine Drive sunset"],
      ["Day 3", "Bandra + Juhu: street food, sea link views, night out"],
    ],
    bestTime: "November to February — pleasant and dry.",
    tips: ["Local trains are fastest but avoid rush hour", "Try vada pav, pav bhaji and Mohammed Ali Road kebabs"],
    currency: "INR (₹)",
    airports: ["BOM"],
  },
  {
    aliases: ["delhi", "new delhi"],
    place: "New Delhi",
    country: "India",
    kind: "city",
    summary: "Mughal monuments, Lutyens' boulevards and the best food crawl in North India.",
    attractions: ["Red Fort", "Qutub Minar", "Humayun's Tomb", "India Gate", "Chandni Chowk", "Lotus Temple"],
    hotels: [
      ["The Imperial", "Janpath", 260],
      ["The Leela Palace", "Chanakyapuri", 380],
      ["Bloomrooms", "New Delhi Station", 45],
    ],
    itinerary: [
      ["Day 1", "Old Delhi: Red Fort, Jama Masjid, Chandni Chowk food walk"],
      ["Day 2", "New Delhi: Humayun's Tomb, Lodhi Art District, Hauz Khas"],
      ["Day 3", "Day trip to Agra by Gatimaan Express"],
    ],
    bestTime: "October to March. Winter smog peaks in November.",
    tips: ["Metro is clean and cheap", "Prebook Taj Mahal tickets for the Agra day trip"],
    currency: "INR (₹)",
    airports: ["DEL"],
  },
  {
    aliases: ["japan"],
    place: "Japan",
    country: "Japan",
    kind: "country",
    summary: "Temples, bullet trains, alpine onsen and the world's best food scene — easy and safe for first-timers.",
    attractions: [
      "Fushimi Inari & Kiyomizu-dera, Kyoto",
      "Shibuya, Shinjuku & teamLab, Tokyo",
      "Mount Fuji / Hakone",
      "Nara deer park",
      "Osaka Dotonbori food street",
      "Hiroshima & Miyajima",
    ],
    hotels: [
      ["Park Hotel Tokyo", "Shiodome", 190],
      ["Hoshinoya Kyoto", "Arashiyama", 620],
      ["Nine Hours capsule", "Multiple cities", 40],
    ],
    itinerary: [
      ["Day 1–4", "Tokyo: Asakusa, Shibuya, Akihabara, day trip to Nikko"],
      ["Day 5–6", "Hakone: onsen, Fuji views, open-air museum"],
      ["Day 7–10", "Kyoto & Nara: temples, bamboo grove, tea ceremony"],
      ["Day 11–12", "Osaka: street food, castle, fly out from KIX"],
    ],
    bestTime: "Late March–April (cherry blossom) and October–November (autumn colour).",
    tips: ["Buy a JR Pass before arrival", "Carry cash — many small shops are cash only", "IC card (Suica) for city transit"],
    currency: "JPY (¥)",
    airports: ["HND", "KIX"],
  },
  {
    aliases: ["thailand"],
    place: "Thailand",
    country: "Thailand",
    kind: "country",
    summary: "Beaches, temples and night markets at some of the best value in the world.",
    attractions: [
      "Grand Palace & Wat Pho, Bangkok",
      "Chiang Mai temples and elephant sanctuaries",
      "Phi Phi & Railay, Krabi",
      "Koh Samui and Koh Tao diving",
      "Ayutthaya ruins",
    ],
    hotels: [
      ["Mandarin Oriental", "Bangkok", 420],
      ["137 Pillars House", "Chiang Mai", 230],
      ["Rayavadee", "Krabi", 480],
      ["Lub d Hostel", "Bangkok", 20],
    ],
    itinerary: [
      ["Day 1–3", "Bangkok temples, river boats, Chatuchak market"],
      ["Day 4–6", "Chiang Mai: Doi Suthep, cooking class, ethical elephant park"],
      ["Day 7–10", "Krabi or Koh Samui island hopping"],
    ],
    bestTime: "November to March (dry, cooler).",
    tips: ["Visa exemption for many passports up to 30–60 days", "Use Grab for taxis", "Cover shoulders and knees at temples"],
    currency: "THB (฿)",
    airports: ["BKK"],
  },
  {
    aliases: ["italy"],
    place: "Italy",
    country: "Italy",
    kind: "country",
    summary: "Ancient Rome, Renaissance cities, Alpine lakes and a coastline built for slow travel.",
    attractions: ["Colosseum & Vatican, Rome", "Duomo & Uffizi, Florence", "Venice canals", "Amalfi Coast", "Cinque Terre", "Lake Como"],
    hotels: [
      ["Hotel Artemide", "Rome", 210],
      ["Portrait Firenze", "Florence", 520],
      ["Hotel Antiche Figure", "Venice", 240],
    ],
    itinerary: [
      ["Day 1–3", "Rome: Colosseum, Trastevere, Vatican Museums"],
      ["Day 4–6", "Florence + Tuscany wine day trip"],
      ["Day 7–8", "Venice: islands, Gallerie dell'Accademia"],
      ["Day 9–11", "Amalfi Coast: Positano, Capri, Pompeii"],
    ],
    bestTime: "April–June and September–October: warm, fewer crowds.",
    tips: ["Book Colosseum and Uffizi slots online", "Validate regional train tickets", "Coperto charge is normal at restaurants"],
    currency: "EUR (€)",
    airports: ["FCO", "MXP", "VCE"],
  },
  {
    aliases: ["france", "paris"],
    place: "France",
    country: "France",
    kind: "country",
    summary: "Paris plus lavender fields, Alpine peaks, Loire châteaux and Riviera beaches.",
    attractions: ["Eiffel Tower & Louvre", "Versailles", "Mont Saint-Michel", "Provence lavender", "French Riviera", "Chamonix"],
    hotels: [
      ["Hôtel Le Six", "Paris", 250],
      ["Le Négresco", "Nice", 380],
      ["Generator Paris", "Paris", 55],
    ],
    itinerary: [
      ["Day 1–4", "Paris museums, Montmartre, Seine cruise, Versailles day trip"],
      ["Day 5–7", "Loire Valley or Normandy"],
      ["Day 8–10", "Provence & Nice by TGV"],
    ],
    bestTime: "May–June and September for mild weather.",
    tips: ["Museum Pass saves money and queue time", "Book TGV early for cheap fares"],
    currency: "EUR (€)",
    airports: ["CDG"],
  },
  {
    aliases: ["united arab emirates", "uae", "dubai"],
    place: "United Arab Emirates",
    country: "United Arab Emirates",
    kind: "country",
    summary: "Desert adventure, record-breaking skylines, souks and stopover-friendly luxury.",
    attractions: ["Burj Khalifa", "Dubai Marina & Palm Jumeirah", "Desert safari", "Sheikh Zayed Grand Mosque", "Louvre Abu Dhabi", "Gold & spice souks"],
    hotels: [
      ["Atlantis The Palm", "Palm Jumeirah", 420],
      ["Rove Downtown", "Downtown Dubai", 110],
      ["Emirates Palace", "Abu Dhabi", 560],
    ],
    itinerary: [
      ["Day 1", "Downtown: Burj Khalifa, Dubai Mall fountains"],
      ["Day 2", "Old Dubai souks, abra ride, Al Fahidi"],
      ["Day 3", "Desert safari with dune bashing and BBQ"],
      ["Day 4", "Abu Dhabi: Grand Mosque and Louvre"],
    ],
    bestTime: "November to March — summer exceeds 45°C.",
    tips: ["Visa on arrival for many nationalities", "Dress modestly at mosques", "Alcohol only in licensed venues"],
    currency: "AED (د.إ)",
    airports: ["DXB", "AUH"],
  },
  {
    aliases: ["united states", "usa", "america"],
    place: "United States",
    country: "United States",
    kind: "country",
    summary: "City breaks, national parks and coast-to-coast road trips — pick one region per trip.",
    attractions: ["New York City", "Grand Canyon", "Yosemite & San Francisco", "Miami & the Keys", "Las Vegas", "Hawaii"],
    hotels: [
      ["The Standard High Line", "New York", 300],
      ["Hotel Zephyr", "San Francisco", 220],
      ["The Cosmopolitan", "Las Vegas", 190],
    ],
    itinerary: [
      ["Day 1–4", "New York: Midtown, Brooklyn, museums"],
      ["Day 5–8", "West Coast: San Francisco and Yosemite"],
      ["Day 9–12", "Southwest loop: Vegas, Grand Canyon, Zion"],
    ],
    bestTime: "May–June and September–October nationwide.",
    tips: ["ESTA required for visa-waiver countries", "Tipping 15–20% is expected", "Domestic flights beat long drives"],
    currency: "USD ($)",
    airports: ["JFK", "LAX", "SFO", "MIA"],
  },
  {
    aliases: ["indonesia", "bali"],
    place: "Indonesia",
    country: "Indonesia",
    kind: "country",
    summary: "17,000 islands: Bali's rice terraces and surf, Komodo dragons, Java volcanoes.",
    attractions: ["Ubud rice terraces", "Uluwatu Temple & surf", "Mount Batur sunrise trek", "Nusa Penida", "Borobudur", "Komodo National Park"],
    hotels: [
      ["Four Seasons Sayan", "Ubud", 700],
      ["Potato Head Suites", "Seminyak", 260],
      ["Kailash Hostel", "Canggu", 16],
    ],
    itinerary: [
      ["Day 1–3", "Canggu/Seminyak beaches and cafés"],
      ["Day 4–6", "Ubud: rice terraces, waterfalls, Batur sunrise"],
      ["Day 7–9", "Nusa Penida or Gili Islands snorkelling"],
    ],
    bestTime: "April to October (dry season).",
    tips: ["Visa on arrival extendable to 60 days", "Rent a scooter only with an IDP", "Carry cash for warungs"],
    currency: "IDR (Rp)",
    airports: ["DPS"],
  },
  {
    aliases: ["spain"],
    place: "Spain",
    country: "Spain",
    kind: "country",
    summary: "Gaudí, tapas, flamenco and Mediterranean beaches with late-night energy.",
    attractions: ["Sagrada Família, Barcelona", "Alhambra, Granada", "Prado, Madrid", "Seville's Alcázar", "Ibiza & Mallorca", "Camino de Santiago"],
    hotels: [
      ["Hotel Casa Fuster", "Barcelona", 290],
      ["Only YOU Boutique", "Madrid", 210],
      ["Hotel Alfonso XIII", "Seville", 340],
    ],
    itinerary: [
      ["Day 1–3", "Barcelona: Gaudí trail, Gothic Quarter, Barceloneta"],
      ["Day 4–6", "Madrid: museums, Retiro, day trip to Toledo"],
      ["Day 7–9", "Andalusia: Seville, Córdoba, Granada"],
    ],
    bestTime: "April–June, September–October.",
    tips: ["Dinner starts after 9pm", "Book Alhambra weeks ahead", "High-speed AVE trains link major cities"],
    currency: "EUR (€)",
    airports: ["BCN", "MAD"],
  },
  {
    aliases: ["australia"],
    place: "Australia",
    country: "Australia",
    kind: "country",
    summary: "Reef, outback and beach cities — vast distances, so plan two or three hubs.",
    attractions: ["Sydney Opera House & Bondi", "Great Barrier Reef", "Uluru", "Great Ocean Road", "Whitsundays", "Melbourne laneways"],
    hotels: [
      ["Park Hyatt Sydney", "Sydney", 700],
      ["QT Melbourne", "Melbourne", 240],
      ["Reef House", "Palm Cove", 280],
    ],
    itinerary: [
      ["Day 1–4", "Sydney: harbour, coastal walk, Blue Mountains"],
      ["Day 5–7", "Melbourne + Great Ocean Road"],
      ["Day 8–11", "Cairns: reef dives and Daintree rainforest"],
    ],
    bestTime: "September–November and March–May.",
    tips: ["eVisitor/ETA required for most visitors", "Sun protection is essential", "Domestic flights save days of driving"],
    currency: "AUD (A$)",
    airports: ["SYD", "MEL", "BNE"],
  },
  {
    aliases: ["egypt"],
    place: "Egypt",
    country: "Egypt",
    kind: "country",
    summary: "Pyramids, Nile cruises and Red Sea reefs in one compact itinerary.",
    attractions: ["Pyramids of Giza", "Egyptian Museum, Cairo", "Luxor temples & Valley of the Kings", "Abu Simbel", "Nile cruise Aswan–Luxor", "Dahab diving"],
    hotels: [
      ["Marriott Mena House", "Giza", 200],
      ["Sofitel Winter Palace", "Luxor", 180],
      ["Old Cataract", "Aswan", 320],
    ],
    itinerary: [
      ["Day 1–3", "Cairo: Giza, Saqqara, Khan el-Khalili"],
      ["Day 4–7", "Nile cruise Aswan to Luxor"],
      ["Day 8–10", "Red Sea: Hurghada or Dahab"],
    ],
    bestTime: "October to April.",
    tips: ["e-Visa online before travel", "Agree taxi fares upfront", "Carry cash for temple tips"],
    currency: "EGP (E£)",
    airports: ["CAI"],
  },
  {
    aliases: ["united kingdom", "uk", "england", "london"],
    place: "United Kingdom",
    country: "United Kingdom",
    kind: "country",
    summary: "London plus castles, coastlines and Highlands within a few hours by rail.",
    attractions: ["Tower of London & British Museum", "Stonehenge & Bath", "Edinburgh Old Town", "Lake District", "Scottish Highlands", "Oxford & Cambridge"],
    hotels: [
      ["The Hoxton Shoreditch", "London", 230],
      ["The Balmoral", "Edinburgh", 380],
      ["Premier Inn", "Nationwide", 90],
    ],
    itinerary: [
      ["Day 1–4", "London museums, West End, Greenwich"],
      ["Day 5–6", "Bath, Stonehenge, Cotswolds"],
      ["Day 7–10", "Edinburgh and a Highlands loop"],
    ],
    bestTime: "May to September for long daylight hours.",
    tips: ["Advance rail tickets are far cheaper", "Contactless taps work on all London transport", "Pack a rain layer year-round"],
    currency: "GBP (£)",
    airports: ["LHR", "EDI"],
  },
  {
    aliases: ["singapore"],
    place: "Singapore",
    country: "Singapore",
    kind: "city",
    summary: "A hyper-efficient garden city — perfect 3-day stopover with world-class hawker food.",
    attractions: ["Gardens by the Bay", "Marina Bay Sands SkyPark", "Sentosa", "Chinatown & Little India", "Singapore Zoo & Night Safari", "Jewel Changi"],
    hotels: [
      ["Marina Bay Sands", "Marina Bay", 480],
      ["Hotel G", "Bugis", 150],
      ["The Pod", "Beach Road", 45],
    ],
    itinerary: [
      ["Day 1", "Marina Bay, Gardens by the Bay light show"],
      ["Day 2", "Chinatown, Little India, Kampong Glam, hawker crawl"],
      ["Day 3", "Sentosa beaches or Singapore Zoo"],
    ],
    bestTime: "February to April — least rain.",
    tips: ["Visa-free for most nationalities", "MRT covers nearly everything", "Chewing gum import is restricted"],
    currency: "SGD (S$)",
    airports: ["SIN"],
  },
  {
    aliases: ["turkey", "türkiye", "istanbul"],
    place: "Türkiye",
    country: "Türkiye",
    kind: "country",
    summary: "Where Europe meets Asia: Byzantine domes, Cappadocian balloons and turquoise coast.",
    attractions: ["Hagia Sophia & Blue Mosque", "Grand Bazaar", "Cappadocia balloon ride", "Pamukkale terraces", "Ephesus", "Antalya coast"],
    hotels: [
      ["Çırağan Palace Kempinski", "Istanbul", 500],
      ["Museum Hotel", "Cappadocia", 300],
      ["Cheers Lighthouse", "Istanbul", 30],
    ],
    itinerary: [
      ["Day 1–3", "Istanbul: Sultanahmet, Bosphorus cruise, bazaars"],
      ["Day 4–6", "Cappadocia: balloons, cave hotels, Göreme valleys"],
      ["Day 7–9", "Antalya or Ephesus and Pamukkale"],
    ],
    bestTime: "April–June and September–October.",
    tips: ["e-Visa online for many passports", "Domestic flights are cheap", "Haggle politely in bazaars"],
    currency: "TRY (₺)",
    airports: ["IST"],
  },
];

const NEARBY_ORIGINS = ["JFK", "LHR", "DXB", "SIN", "DEL"];

function seededPrice(seed: string, base: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 9973;
  return base + (h % 700);
}

function flightsTo(airports: Airport[], place: string) {
  const targets = airports.length ? airports : [];
  return NEARBY_ORIGINS.slice(0, 4).map((code, i) => {
    const origin = AIRPORTS.find((a) => a.code === code)!;
    const dest = targets[i % Math.max(targets.length, 1)];
    const price = seededPrice(place + code, 240);
    return {
      from: `${origin.city} (${origin.code})`,
      airport: dest ? `${dest.city} (${dest.code})` : place,
      price,
      duration: `${4 + ((price / 90) | 0)}h ${(price % 6) * 10}m`,
    };
  });
}

/** Airports that serve a typed city or country name. */
export function airportsFor(query: string): Airport[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return AIRPORTS.filter(
    (a) =>
      a.city.toLowerCase().includes(q) ||
      a.country.toLowerCase().includes(q) ||
      a.code.toLowerCase() === q,
  );
}

/** Build a travel guide for any typed country or city, worldwide. */
export function getTravelGuide(query: string): TravelGuide | null {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return null;

  const seed =
    SEEDS.find((s) => s.aliases.some((a) => a === q)) ??
    SEEDS.find((s) => s.aliases.some((a) => a.includes(q) || q.includes(a)));

  if (seed) {
    const air = seed.airports.map((c) => AIRPORTS.find((a) => a.code === c)).filter(Boolean) as Airport[];
    return {
      place: seed.place,
      country: seed.country,
      kind: seed.kind,
      summary: seed.summary,
      attractions: seed.attractions,
      hotels: seed.hotels.map(([name, area, price]) => ({ name, area, price })),
      itinerary: seed.itinerary.map(([day, plan]) => ({ day, plan })),
      bestTime: seed.bestTime,
      tips: seed.tips,
      flights: flightsTo(air, seed.place),
      currency: seed.currency,
    };
  }

  // Fallback: build a sensible guide for any place we have an airport for,
  // or for a completely unknown place the user typed.
  const matches = airportsFor(q);
  const first = matches[0];
  const place = first
    ? first.city.toLowerCase() === q || first.city.toLowerCase().includes(q)
      ? first.city
      : first.country
    : query.trim().replace(/\b\w/g, (c) => c.toUpperCase());
  const country = first?.country ?? place;
  const base = seededPrice(place, 180);

  return {
    place,
    country,
    kind: first && first.country.toLowerCase() === q ? "country" : "city",
    summary: `Popular travel plans for ${place}. Here's a starting itinerary, where to stay, and typical flight pricing — refine it by asking about budget, season or trip style.`,
    attractions: [
      `${place} historic centre and main landmarks`,
      `Top-rated museums and galleries in ${place}`,
      `Local food markets and street-food streets`,
      `Best viewpoint / sunset spot in ${place}`,
      `Popular day trip from ${place}`,
      `Nightlife and live-music district`,
    ],
    hotels: [
      { name: `${place} Grand Hotel`, area: "City centre", price: base },
      { name: `Boutique Stay ${place}`, area: "Old town", price: Math.round(base * 0.6) },
      { name: `${place} Backpackers`, area: "Near transit hub", price: Math.round(base * 0.15) },
    ],
    itinerary: [
      { day: "Day 1", plan: `Arrive in ${place}, walking tour of the old town, sunset viewpoint` },
      { day: "Day 2", plan: "Museums and landmarks in the morning, food market in the evening" },
      { day: "Day 3", plan: `Day trip outside ${place} — nature, coast or heritage site` },
      { day: "Day 4", plan: "Shopping, cafés and departure" },
    ],
    bestTime: "Shoulder seasons (spring and autumn) usually offer the best weather-to-crowd ratio.",
    tips: [
      "Check visa and passport validity at least 6 months before travel",
      "Book accommodation near a metro or main transit line",
      "Carry a little local cash for markets and taxis",
      "Travel insurance is strongly recommended",
    ],
    flights: flightsTo(matches, place),
    currency: first?.country === "United States" ? "USD ($)" : "Local currency",
  };
}
