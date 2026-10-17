# Glassy Getaways

TRAVELMATE - TRAVEL WEB APP DEVELOPMENT PROMPT

PROJECT: Build a mobile-first travel web app with iPhone glassmorphism design

GOAL: Complete travel booking platform for flights, stays, and cars

DESIGN: iPhone glassy effect with frosted glass cards and blur effects

================================================================================

REQUIREMENT 1: FLIGHT SEARCH

================================================================================

FEATURE: Search Flights by Source and Destination

FUNCTIONALITY:

- Input field for departure city/airport (auto-complete)

- Input field for arrival city/airport (auto-complete)

- Date picker for travel dates

- Passenger count selector (adults, children)

- Toggle button: Domestic vs International flights

- Search button

IMPORTANT REQUIREMENT - Visa & Travel Requirements Check:

When user selects destination, show modal/popup with:

[⚠️ IMPORTANT - CHECK YOUR TRAVEL REQUIREMENTS]

Destination: [Selected Country]

☐ Passport valid for at least 6 months

☐ Visa check with [Country] embassy - REQUIRED

☐ Check travel insurance requirements

☐ Verify vaccination requirements

☐ Travel permits (if applicable)

[Visit Official Embassy Website] - Link based on country

[Get Travel Documents Guide] - Link to resources

[I've checked all requirements] - Checkbox to proceed

BLOCKING: User MUST check the checkbox before proceeding to booking

FLIGHT RESULTS DISPLAY:

- Airline name and logo

- Departure time → Arrival time

- Flight duration

- Number of stops (Direct, 1 Stop, Multiple Stops)

- Price per passenger

- Total price (for all passengers)

- Seat availability

- "View Details" and "Book" buttons

================================================================================

REQUIREMENT 2: ADVANCED FILTERS

================================================================================

FILTER SECTION 1: Flight Type Filter

[☐ Direct Flights Only]

[☐ One Stop Flights Only]

[☐ Show All Flights] - Default selected

FILTER SECTION 2: Trip Budget Calculator

Interactive slider display:

┌─────────────────────────────────┐

│ Budget Range: $100 - $10,000+   │

│ ◄─────●─────►                  │ ← Slider

│ Current Budget: $2,500          │

└─────────────────────────────────┘

Budget breakdown shown:

- Flight cost portion

- Hotel estimate per night

- Local transport estimate

- Total trip estimate

Real-time result: "23 flights found in your budget"

FILTER SECTION 3: Trip Style (Multi-Select Checkboxes)

[☐] Beach & Relaxation

[☐] Outdoor Adventures

[☐] Great Food & Cuisine

[☐] Art & Culture

[☐] Underrated Destinations

[☐] Nightlife & Entertainment

FILTER SECTION 4: Explore Regions (Single Selection)

[○] Everywhere - Global

[○] Asia

[○] Africa

[○] Europe

[○] Oceania

[○] North America

[○] South America

FILTER ACTIONS:

[CLEAR ALL FILTERS] button - Shows when any filter active

Live results update - Show count: "XX flights found"

Sort options: Price (Low-High | High-Low), Duration, Best Value

Results display instantly on filter change

================================================================================

REQUIREMENT 3: DASHBOARD WITH SERVICES

================================================================================

DASHBOARD LAYOUT: Tab Navigation

┌──────────────────────────────────────┐

│ Flights | Stays | Cars | AI Search   │

└──────────────────────────────────────┘

TAB 1: FLIGHTS

- Flight search results

- Booking confirmation

- Flight details

TAB 2: STAYS (Hotels & Airbnb)

Search Options:

- Destination input

- Check-in date picker

- Check-out date picker

- Number of guests

- Number of rooms

Filters:

- Price range per night ($20-$500+)

- Star rating (1⭐ to 5⭐)

- Amenities: WiFi, Pool, Kitchen, Gym, Spa, Parking

- Room type: Single, Double, Suite, Apartment

- Guest rating

Display per listing:

- Property name

- Star rating and review count

- Photos gallery (at least 3 images)

- Price per night

- Available rooms count

- "View Details" and "Book Now" buttons

REQUIRED DOCUMENTS FOR STAYS:

📋 Documents Needed:

✓ Valid Passport or Government ID

✓ Credit card for booking

✓ Contact information (email, phone)

✓ Travel insurance (optional but recommended)

TAB 3: CARS (Car Rentals)

Search Options:

- Pickup location

- Dropoff location (optional)

- Pickup date and time

- Dropoff date and time

- Driver age

Filters:

- Car type: Economy, Sedan, SUV, Luxury, Van, Truck

- Daily rate range ($20-$200+)

- Insurance: No Insurance, Basic, Premium, Full Coverage

- Mileage limit: Limited, Unlimited

- Transmission: Manual, Automatic

Display per listing:

- Car model name with photo

- Daily rental rate

- Insurance option and cost

- Mileage limit

- Cancellation policy

- "View Details" and "Rent Now" buttons

REQUIRED DOCUMENTS FOR CARS:

📋 Documents Needed:

✓ Valid driving license

✓ International Driving Permit (IDP) - if applicable

✓ Credit card for rental charges

✓ Passport or Government ID

✓ Proof of car insurance (optional)

✓ Minimum age verification (usually 25+)

TAB 4: AI SEARCH (Conversational)

Chat interface for natural language search:

"Show me beach destinations under $1000 for 5 days"

"Best food cities in Asia"

"Adventure trips for couples"

"Family-friendly destinations with kids"

AI should:

- Understand natural language queries

- Provide personalized recommendations

- Show available flights/hotels/cars

- Display best prices and deals

- Provide instant booking options

================================================================================

REQUIREMENT 4: POPULAR DESTINATIONS SECTION

================================================================================

DISPLAY EACH DESTINATION AS CARD:

┌──────────────────────────────┐

│  [Destination Image/Icon]    │

├──────────────────────────────┤

│ Destination Name             │

│ ⭐⭐⭐⭐⭐ (234 reviews)      │

│ from $599                    │

│ Best for: Beach & Culture    │

│ Best time: Nov-Feb           │

│ Weather: Warm & Sunny        │

│ [Explore] [Save] buttons     │

└──────────────────────────────┘

Information to Display:

- Destination name

- Destination image or emoji icon

- Starting price (e.g., "from $599")

- Average rating out of 5 stars

- Number of reviews/travelers

- Trip style tags (e.g., Beach, Culture, Adventure)

- Best time to visit

- Weather description

- Currency used

- Brief 2-3 line description

FILTERS FOR DESTINATIONS:

- Sort by: Price (Low-High), Popularity, Best Rated, Trending

- Filter by trip style

- Filter by region

- Filter by rating (4⭐+, 3⭐+, etc.)

- Search by destination name

ACTION BUTTONS:

[Explore] - Shows flights + stays + cars for that destination

[Save] - Add to wishlist

[Share] - Share with friends

================================================================================

REQUIREMENT 5: FAQ SECTION

================================================================================

FORMAT: Accordion (Click to expand/collapse)

Include these 10+ FAQ questions with comprehensive answers:

Q1: Do I need a visa to travel to [destination]?

A: Visa requirements depend on your nationality and destination country. 

Most countries require visas for international visitors. Use our Visa Checker 

tool or visit the official embassy website for your home country. We provide 

direct links to all embassy websites in your destination guide.

Q2: What documents do I need for international travel?

A: Typically you'll need:

- Valid passport with 6+ months validity

- Visa (if required for your destination)

- Travel insurance (strongly recommended)

- Vaccination certificates (if required by destination)

- Flight confirmation and hotel booking

- Return ticket proof

Check your destination guide for specific requirements.

Q3: What's the best way to book refundable flights?

A: Look for "Refundable" or "Flexible" ticket types during search. These 

allow full cancellation and refund within specified timeframes. Cost is 

usually $20-50 higher than basic economy. Recommended if travel plans may change.

Q4: How do I get an International Driving Permit (IDP)?

A: Apply at your local motor vehicle department with valid driver's license, 

passport, and photos. Processing time: 1-2 weeks. Cost: $10-30. Required in 

many countries when renting cars. Recommended even if optional.

Q5: What's the best time to visit my chosen destination?

A: Each destination has peak and off-seasons. Check our destination guide 

for weather patterns, festivals, holidays, and seasonal events. Peak season 

usually means higher prices but better weather.

Q6: How do I track my booking using the reference tracer?

A: Use "Booking Reference Tracer" below. Enter your confirmation/reference 

number to view flight details, hotel info, car rental details, and make changes.

Q7: Is travel insurance really necessary?

A: Strongly recommended. It covers flight cancellations, medical emergencies, 

baggage loss, trip delays, and other emergencies. Cost is usually 2-5% of 

trip total. Compare options in our Travel Insurance section.

Q8: Can I modify or cancel my flight after booking?

A: Depends on your ticket type. Refundable tickets allow free cancellation. 

Restricted tickets may have fees. Use Booking Reference Tracer to modify or 

contact airline directly. Cancellation policy shown at purchase.

Q9: How far in advance should I book flights and hotels?

A: General recommendations:

- Flights: 6-8 weeks before travel

- Hotels: 4-6 weeks before

- Cars: 2-4 weeks before

Last-minute deals available 1-2 weeks before travel.

Q10: What should I do if my flight is delayed or cancelled?

A: Contact your airline immediately. Check delay policy in your booking. 

Travel insurance may cover delays over 3 hours. Airline may provide meal 

vouchers and hotel. Use Booking Reference Tracer to contact support.

================================================================================

REQUIREMENT 5: BOOKING REFERENCE TRACER

================================================================================

SEARCH SECTION:

Search input:

[🔍 ___________________________] [Search Button]

Enter your confirmation/reference number

Quick access buttons:

[Recent Bookings] [Import from Email]

BOOKING DETAILS DISPLAY:

When user enters reference number, show:

FLIGHT BOOKING:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Confirmation #: ABC123DEF456

Status: ✓ CONFIRMED

✈️ Flight Details

Airline: Emirates

Flight Number: EK201

Aircraft: Boeing 777

📅 Departure

Date: Dec 15, 2024

Time: 14:30 (2:30 PM)

Airport: JFK (New York)

📍 Arrival

Date: Dec 15, 2024

Time: 04:45 (4:45 AM next day)

Airport: DXB (Dubai)

👥 Passengers: 2 Adults, 1 Child

💺 Seat Assignment

Seats: 12A, 12B, 12C

Class: Economy

Type: Window, Middle, Window

💰 Price Summary

Ticket Cost: $450 per person

Taxes & Fees: $50 per person

Total: $1,500 (3 passengers)

📦 Baggage Allowance

✓ 1x Carry-on (7kg/15 lbs)

✓ 1x Checked baggage (23kg/50 lbs)

□ Extra baggage available (+$50)

✨ Manage Booking

[Check-in Online] - Available 24 hours before

[Change Seat] - Re-select seats

[Add Baggage] - Purchase extra baggage

[Modify Flight] - Change date/time (if allowed)

[View Cancellation Policy]

[Download Ticket (PDF)]

[Contact Support]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HOTEL BOOKING:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Confirmation #: HTL789GHI012

Status: ✓ CONFIRMED

🏨 Hotel Details

Hotel Name: Taj Oceanfront Resort

Location: Bali, Indonesia

Rating: ⭐⭐⭐⭐⭐

📅 Check-in: Dec 15, 2024

📅 Check-out: Dec 20, 2024

Duration: 5 nights

👥 Guests: 2 Adults, 1 Child

🛏️ Room Type: Deluxe Ocean View

Amenities: Free WiFi, Pool, Gym, Spa, Restaurant

💰 Price Summary

Per night: $150

Subtotal (5 nights): $750

Taxes & Fees: $75

Total: $825

✨ Manage Booking

[Modify Dates] - Change check-in/out

[Change Room] - Upgrade/downgrade room

[Add Services] - Spa, dining, activities

[Download Receipt]

[Contact Hotel Support]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CAR RENTAL BOOKING:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Confirmation #: CAR345JKL678

Status: ✓ CONFIRMED

🚗 Car Details

Vehicle: Toyota Fortuner 2024

Category: SUV

Color: Black

Mileage: Unlimited

🏁 Pickup

Date: Dec 15, 2024 at 10:00 AM

Location: Bali International Airport

🏁 Dropoff

Date: Dec 20, 2024 at 10:00 AM

Location: Bali International Airport

Duration: 5 days

Daily Rate: $60

Total Days: 5

💰 Price Summary

Rental: $300 (5 days × $60)

Insurance: Premium Coverage $50

Taxes & Fees: $35

Total: $385

👨‍💼 Driver Requirements

✓ Valid driver's license (original)

✓ International Driving Permit (IDP)

✓ Passport for ID verification

✓ Minimum age: 25 years

✓ Credit card for authorization

✨ Manage Booking

[Modify Dates] - Change rental period

[Add Driver] - Add additional driver (+$15/day)

[Upgrade Insurance]

[Download Agreement]

[Contact Support]

BOOKING HISTORY:

- Timeline view of all bookings

- Filter by: Upcoming, Current Trip, Past Bookings

- Ability to archive old bookings

- Notifications for:

  - 7 days before trip

  - 24 hours before travel

  - 2 hours before departure

  - Check-in reminders

================================================================================

DESIGN REQUIREMENT: iPhone GLASSMORPHISM EFFECT

================================================================================

OVERALL THEME:

- iPhone device frame mockup (iPhone 12-15)

- Frosted glass card effect throughout

- Semi-transparent overlays with blur

- Gradient background

- Smooth animations and transitions

- Bottom navigation bar always visible

- Safe area awareness (notch, home indicator)

COLOR PALETTE:

Primary Gradient Background:

- Start color: #667eea (Blue-Purple)

- End color: #764ba2 (Deep Purple)

- Direction: 135 degrees

Text Colors:

- Primary text: #1a1a1a (Very Dark Gray/Black)

- Secondary text: #666 (Medium Gray)

- Muted text: #999 (Light Gray)

- Accent text: #667eea (Purple-Blue)

Card/Glass Colors:

- Background: rgba(255, 255, 255, 0.7) - 70% opacity white

- Backdrop filter: blur(10px) - 10 pixel blur

- Border: 1px solid rgba(255, 255, 255, 0.8) - 80% opacity white

- Shadow: 0 8px 32px rgba(31, 38, 135, 0.15)

Status Colors:

- Success: #10b981 (Green)

- Danger: #ef4444 (Red)

- Warning: #f59e0b (Orange)

- Info: #3b82f6 (Blue)

TYPOGRAPHY:

Font Family: System fonts

- macOS/iOS: -apple-system, BlinkMacSystemFont

- Android: Roboto

- Fallback: Segoe UI

Text Sizes:

- Main Header (H1): 28px, font-weight 700, color #1a1a1a

- Section Title (H2): 16px, font-weight 600, color #1a1a1a

- Body Text: 15px, font-weight 400, color #1a1a1a

- Label Text: 13px, font-weight 400, color #666

- Small Text: 12px, font-weight 400, color #999

- Button Text: 15px, font-weight 600

Line Height: 1.5 for body text, 1.2 for headings

CARD STYLING:

All cards should have:

- Background: rgba(255, 255, 255, 0.7)

- Backdrop filter: blur(10px)

- Border: 1px solid rgba(255, 255, 255, 0.8)

- Border radius: 16-20px

- Padding: 16px

- Margin: 8px 12px

- Box shadow: 0 8px 32px rgba(31, 38, 135, 0.15)

Hover state:

- Transform: translateY(-4px)

- Box shadow: 0 12px 40px rgba(31, 38, 135, 0.2)

- Transition: all 0.3s ease

LAYOUT DIMENSIONS:

iPhone Device:

- Device width: 380px

- Device height: 812px

- Notch: 44px height at top

- Safe area bottom: 34px for home indicator

Content Area:

- Content width: 100% (full width)

- Horizontal padding: 12px left and right

- Effective content width: 356px

- Scrollable height: Full minus navigation

Bottom Navigation:

- Height: 60px

- Fixed position: stays visible when scrolling

- Contains 4-5 navigation items

- Icons above text labels

SPACING & GAPS:

Padding:

- Page/screen: 12px horizontal, 16px vertical

- Cards: 16px

- Inside cards: 12px

Gaps between elements:

- Small gap: 8px

- Medium gap: 12px

- Large gap: 16px

- Extra large: 20-24px

BUTTON STYLING:

- Height: 44-48px minimum

- Width: Full width or 100px+ for icon buttons

- Border radius: 12-16px

- Padding: 12px 24px

- Font size: 15px bold

- Transition: 0.3s ease

Primary buttons:

- Background: Linear gradient (#667eea to #764ba2)

- Text color: White

- Hover: scale(0.98) with enhanced shadow

Secondary buttons:

- Background: rgba(255, 255, 255, 0.6)

- Border: 1px solid rgba(255, 255, 255, 0.8)

- Text color: #667eea

- Hover: background #667eea, text white

INPUT FIELDS:

- Height: 44px

- Padding: 12px 16px

- Border: 1px solid #ddd

- Border radius: 12px

- Background: rgba(255, 255, 255, 0.8)

- Focus border: 2px solid #667eea

- Focus shadow: 0 0 0 3px rgba(102, 126, 234, 0.1)

INTERACTIVE ANIMATIONS:

- Page transitions: 0.3s fade + slide

- Button tap: 0.1s scale down then up

- List item updates: 0.2s smooth fade

- Modal open: 0.3s scale + fade in

- Dropdown: 0.2s slide down

================================================================================

TECHNICAL REQUIREMENTS

================================================================================

FRONTEND TECHNOLOGY:

- Framework: React 18+ or Vue 3

- Language: JavaScript/TypeScript

- Styling: Tailwind CSS + Custom CSS

- State management: Redux Toolkit or Pinia

- HTTP client: Axios

- Responsive: Mobile-first (375px to 428px width)

- PWA: Progressive Web App capable

BACKEND TECHNOLOGY:

- Runtime: Node.js with Express.js OR Python with FastAPI

- Language: JavaScript or Python

- Database: MongoDB or PostgreSQL

- Caching: Redis

- Authentication: JWT tokens + OAuth 2.0

- Email service: SendGrid or AWS SES

THIRD-PARTY INTEGRATIONS:

- Flight API: Skyscanner, Amadeus, or Kayak API

- Weather API: OpenWeather API

- Currency exchange: Open Exchange Rates API

- Payment gateway: Stripe or Razorpay

- Maps: Google Maps API

- Email: SendGrid or AWS SES

HOSTING & DEPLOYMENT:

- Frontend: Vercel or Netlify

- Backend: AWS, Google Cloud, or DigitalOcean

- Database: MongoDB Atlas or AWS RDS

- CDN: Cloudflare

- Analytics: Google Analytics

================================================================================

FEATURES PRIORITY

================================================================================

MUST HAVE (MVP - Minimum Viable Product):

1. Flight search by source and destination

2. Filters: budget, flight type, region

3. Booking reference tracer

4. iPhone glassy UI design

5. Payment integration

6. Mobile responsive layout

7. Visa requirement checker

SHOULD HAVE:

1. Stays (hotels) booking

2. Cars rental booking

3. AI search chatbot

4. FAQ section

5. Popular destinations display

6. Trip style recommendations

NICE TO HAVE:

1. User accounts and booking history

2. Price alerts and notifications

3. Travel insurance options

4. Multiple language support

5. Dark mode toggle

6. Social sharing features

================================================================================

ESTIMATED PROJECT SCOPE

================================================================================

Timeline: 12-16 weeks

Team size: 4-6 developers

Scope: Complete web application

Phase 1 (Weeks 1-2): Design & Prototyping

Phase 2 (Weeks 3-6): Frontend Development

Phase 3 (Weeks 4-7): Backend Development

Phase 4 (Weeks 7-9): API Integration & Testing

Phase 5 (Weeks 10-12): Bug Fixes & Optimization

Phase 6 (Weeks 13-14): Deployment & Launch

Phase 7 (Weeks 15-16): Monitoring & Support

================================================================================

DELIVERABLES

================================================================================

✓ Fully functional flight search

✓ Advanced filtering system

✓ Stays and cars booking modules

✓ AI-powered search assistant

✓ Budget calculator

✓ Booking reference tracer

✓ FAQ section

✓ iPhone glassmorphism design

✓ Mobile responsive

✓ Payment integration

✓ Email notifications

✓ Complete documentation

✓ API documentation

✓ User guide

✓ Admin dashboard (optional)

================================================================================

HOW TO USE THIS PROMPT WITH AI TOOLS

================================================================================

USAGE EXAMPLE 1 - Full App Development:

"Using the complete TRAVELMATE prompt provided, create a full-stack 

travel web app. Start with React components for the flight search feature 

with iPhone glassmorphism design."

USAGE EXAMPLE 2 - Specific Feature:

"Using REQUIREMENT 1: FLIGHT SEARCH and DESIGN REQUIREMENT sections, 

create React code for the flight search module with visa checker popup."

USAGE EXAMPLE 3 - Database Design:

"Using the TECHNICAL REQUIREMENTS section, design a MongoDB database 

schema for flights, hotels, car rentals, and user bookings."

USAGE EXAMPLE 4 - API Development:

"Using REQUIREMENT 3: DASHBOARD WITH SERVICES, create Node.js/Express 

REST API endpoints for flights, stays, and cars with detailed 

documentation."

USAGE EXAMPLE 5 - UI/UX Design:

"Using the DESIGN REQUIREMENT: iPhone GLASSMORPHISM EFFECT section, 

create Figma mockups for all 5 dashboard tabs with accurate colors 

and spacing."

================================================================================

END OF PROMPT

================================================================================

Version: 2.0

Last Updated: August 2026

Status: Ready for AI Development

Save this entire document and use with any AI tool:

- Claude (claude.ai)

- ChatGPT (openai.com)

- Gemini (gemini.google.com)

- Any other AI coding assistant

Simply copy and paste the entire content or specific sections as needed.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://my-travel-project.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7ee85693-cd80-4a8c-8f9e-0eae09dc9802).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
