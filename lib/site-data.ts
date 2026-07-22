/**
 * All copy, tours, vessel specs, heritage, testimonials and image references
 * for Blackhawk Boat Tours, pulled verbatim from blackhawknavaltours.com.
 * Centralized here so home + inner pages never drift from the source copy.
 */

const IMG = "/ingested/blackhawknavaltours";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/experiences" },
  { label: "Our Vessels", href: "/our-vessels" },
  { label: "About Us", href: "/about-us" },
];

export const footerQuickLinks = [
  { label: "Experiences", href: "/experiences" },
  { label: "Our Vessels", href: "/our-vessels" },
  { label: "About Us", href: "/about-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book Now", href: "/contact-us" },
];

export const footerTours = [
  { label: "Chicago River Tours", href: "/experiences" },
  { label: "Lake Michigan Ride", href: "/experiences" },
  { label: "Private Charters", href: "/experiences" },
  { label: "Custom Adventures", href: "/contact-us" },
];

export const credentials = [
  { label: "USCG Licensed" },
  { label: "Family Friendly" },
  { label: "5-Star Rated" },
];

export const statsBar = [
  { value: "10,000+", label: "HAPPY RIDERS" },
  { value: "5★", label: "AVERAGE RATING" },
  { value: "100%", label: "SAFETY RECORD" },
];

export const differentiators = [
  {
    title: "Up-close skyline views",
    body: "Get right up to Chicago's iconic skyline for a view you simply can't experience from land.",
  },
  {
    title: "Stories that bring Chicago's history to life",
    body: "Hear engaging stories that turn the city's landmarks into moments you'll actually remember.",
  },
  {
    title: "The thrill of a high-speed adventure on the water",
    body: "Feel the rush as you speed across the water, adding excitement to every second of your tour.",
  },
];

export const tours = [
  {
    slug: "adventure-lake-and-river-tour",
    name: "Adventure Lake and River Tour",
    featured: true,
    price: "Starting at $85/person",
    description:
      "Experience the ultimate adrenaline rush with high-speed runs on the open waters of Lake Michigan. Feel the power of our Navy-grade vessels.",
    cta: "EXPLORE THIS TOUR",
    image: `${IMG}/action-skyline-crew.webp`,
  },
  {
    slug: "lake-adventure-tour",
    name: "Lake Adventure Tour",
    featured: false,
    price: "Starting at $60/person",
    description: "Iconic architecture meets high-speed thrills through downtown.",
    cta: "LEARN MORE",
    image: `${IMG}/gallery-02.webp`,
  },
  {
    slug: "private-charters",
    name: "Private Charters",
    featured: false,
    price: null,
    description: "Exclusive experiences for groups and special celebrations.",
    cta: "LEARN MORE",
    image: `${IMG}/action-wide-crew.webp`,
  },
];

export const whyRideWithUs = [
  {
    title: "Unmatched Thrills",
    body: "Feel the G-force diesel engine propel you across the water faster than any other tour.",
  },
  {
    title: "Front Row Seats",
    body: "Our open-air, low-profile boats provide unobstructed 360-degree views of the skyline.",
  },
  {
    title: "VIP Treatment",
    body: "Small groups mean personalized attention from our expert captains and crew.",
  },
];

export const tourHighlights = [
  "Willis Tower",
  "The Merchandise Mart",
  "Centennial Fountain and Arc",
  "Chicago Harbor Light",
  "Soldier Field",
];

export const militaryPerformance = [
  {
    title: "Battle-Tested Safety",
    body: "Designed for extreme conditions, built for your peace of mind.",
  },
  {
    title: "Incredible Speed",
    body: "Reach speeds up to 40 MPH on the open water.",
  },
  {
    title: "Small Group Comfort",
    body: "Intimate capacity ensures personalized attention and maximum thrills.",
  },
];

export const vesselSpecs = [
  { label: "Type", value: "Rigid-Hull Inflatable Boats (RHIBs)" },
  { label: "Capacity", value: "6 passengers per boat" },
  { label: "Hull Design", value: "Deep-V fiberglass" },
  { label: "Engine", value: "Cummins Diesel" },
  { label: "Collar", value: "Multi-chamber inflatable" },
  { label: "Safety Gear", value: "USCG approved life jackets" },
];

export const safetyPoints = [
  "Coast Guard Licensed Captains",
  "Emergency Protocols in Place",
  "Premium Life Jackets Provided",
];

export const heritage = [
  {
    ship: "USS Laboon",
    boat: "Bravo-22",
    body: "Bravo-22 traces its origins to the USS Laboon, carrying forward a legacy of strength, precision, and performance built in the U.S. Navy.",
    note: "Originally served on the USS Laboon stationed at Norfolk, VA.",
    crest: `${IMG}/crest-uss-laboon.webp`,
  },
  {
    ship: "USS Leyte Gulf",
    boat: "Hotel-26",
    body: "Hotel-26 traces its origins to the USS Leyte Gulf, carrying forward a legacy of strength, precision, and mission-ready performance built in the U.S. Navy.",
    note: "Originally served on the USS Leyte Gulf stationed at Norfolk, VA but is now decommissioned.",
    crest: `${IMG}/crest-uss-leytegulf.webp`,
  },
];

export const missionStatement =
  "Our mission is to provide safe, intimate, and unforgettable boating experiences led by highly trained, Coast Guard-licensed captains with Navy RHIB expertise. We pride ourselves on delivering family-friendly adventures in a relaxed, uncrowded setting, where every guest feels welcome and cared for. Through professionalism, local knowledge, and a commitment to safety, we create memorable moments on the water that are both exciting and accessible for all ages.";

export const aboutMission =
  "To provide the most thrilling, safe, and unforgettable way to experience the beauty and power of Chicago's waterways.";

export const blackhawkStory = [
  "Blackhawk Boat Tours was founded by Chicago locals who believed the city's incredible waterways deserved an equally incredible way to experience them.",
  "Existing tour options were slow, crowded, and predictable. So we introduced military-grade RHIBs, combining traditional sightseeing with high-speed adventure.",
];

export const captainKenBio = [
  "Captain Ken's journey didn't begin in Chicago, it began on the waters of New York City in 2014. While finishing his career as a U.S. Coast Guard recruiter, he spent his weekends on the Hudson and East Rivers, guiding visitors through the skyline and stories of the city. What started as a side job quickly became something more: out on the water, he discovered a new version of himself, one that thrived on connection, storytelling, and the simple joy of sharing an experience.",
  "In 2017, after retiring from the U.S. Coast Guard, Ken made a bold move to Chicago in search of a new beginning. With a passion for service still driving him, he pursued a career in education, but the water kept calling. He joined Chicago's tour boat companies, gaining experience and insight into the industry. Yet something was missing.",
  "Ken realized he didn't just want to work on the water, he wanted to create something of his own.",
  "In 2022, he took a leap of faith and purchased an ex-Navy rigid hull inflatable boat, the start of a vision to offer something different from traditional tours: a more personal, more exciting way to experience Chicago.",
  "Today, Captain Ken invites families and small groups to see the city from a new perspective, where history comes alive, the skyline feels within reach, and the thrill of a fast boat ride turns a simple outing into an unforgettable adventure.",
];

export const captainKenCredentials = [
  "20 years in the U.S. Coast Guard as a Federal Boarding Officer and Search and Rescue specialist.",
  "Served with the Harry S. Truman battle group in 2003, supporting Operation Enduring Freedom and Iraqi Freedom.",
  "Now teaches Naval Science at William Howard Taft High School in Chicago.",
];

export const aboutDifferentiators = [
  { title: "Military Precision", body: "Navy RHIB expertise and Coast Guard-licensed captains on every run." },
  { title: "Local Expertise", body: "Chicago locals who know the waterways, the history, and the best lines on the lake." },
  { title: "Small Group Experience", body: "Capped at 14 passengers, so every guest gets real attention." },
];

export const closingLine = "This isn't just a tour. It's Chicago, told at full speed.";

export const teamTagline = "Expert captains who live for the water and love sharing Chicago's story.";

/** Only Peter's quote was published with the review; the rest are name-only guest photos, exactly as sourced. */
export const featuredTestimonial = {
  quote:
    "This wasn't just a boat tour, it was pure adrenaline! The captain was incredible, and the views of Chicago from the water were breath-taking. Best tour we've ever taken.",
  name: "Peter",
  image: `${IMG}/testimonial-peter-victor.webp`,
};

export const guestPhotos = [
  { name: "Peter", image: `${IMG}/testimonial-peter-victor.webp` },
  { name: "Victor", image: `${IMG}/testimonial-peter-victor.webp` },
  { name: "Osinachi", image: `${IMG}/testimonial-osinachi.webp` },
  { name: "Maria L.", location: "Chicago, IL", image: `${IMG}/testimonial-mariaL.webp` },
  { name: "Klaus", image: `${IMG}/testimonial-klaus.webp` },
  { name: "Bryan", image: `${IMG}/testimonial-bryan.webp` },
];

export const gallerySectionCopy = {
  title: "Gallery",
  tagline: "Glimpses of the adventure. See what awaits you on a Blackhawk Boat Tour.",
};

export const galleryImages = [
  { src: `${IMG}/gallery-01.webp`, alt: "Blackhawk RHIB speeding past Navy Pier, Chicago skyline behind" },
  { src: `${IMG}/gallery-02.webp`, alt: "Guests riding the Blackhawk RHIB along the Chicago skyline" },
  { src: `${IMG}/gallery-03.webp`, alt: "Blackhawk RHIB carving through Lake Michigan near downtown Chicago" },
  { src: `${IMG}/gallery-04.webp`, alt: "Crew and guests speeding across Lake Michigan past the Chicago skyline" },
  { src: `${IMG}/gallery-05.webp`, alt: "Guests waving from the Blackhawk RHIB as it races the waves" },
  { src: `${IMG}/gallery-06.webp`, alt: "Blackhawk RHIB airborne off a wake with the Chicago skyline behind" },
  { src: `${IMG}/action-skyline-crew.webp`, alt: "Captain and guests aboard the RHIB with the Chicago skyline and sailboats" },
  { src: `${IMG}/action-wide-crew.webp`, alt: "Guests cheering aboard the Blackhawk RHIB near downtown Chicago" },
  { src: `${IMG}/action-cloudy-crew.webp`, alt: "Captain and guests aboard the RHIB under a cloudy Chicago sky" },
  { src: `${IMG}/action-choppy-crew.webp`, alt: "Guests riding through choppy water on the Blackhawk RHIB" },
  { src: `${IMG}/gallery-navypier.webp`, alt: "Blackhawk RHIB passing Navy Pier on Lake Michigan" },
  { src: `${IMG}/captain-dockside.webp`, alt: "Captain at the helm with the Chicago skyline behind" },
  { src: `${IMG}/captain-about.webp`, alt: "Captain steering the RHIB with downtown Chicago in the background" },
  { src: `${IMG}/captain-ken-portrait.webp`, alt: "Captain Ken aboard the boat with the Chicago skyline behind him" },
];

export const images = {
  heroAction: `${IMG}/action-skyline-crew.webp`,
  heroSecondary: `${IMG}/gallery-03.webp`,
  differentiators: `${IMG}/captain-dockside.webp`,
  vessels: `${IMG}/action-wide-crew.webp`,
  storyAction: `${IMG}/captain-ken-portrait.webp`,
  captainPortrait: `${IMG}/captain-ken-portrait.webp`,
  aboutHero: `${IMG}/gallery-navypier.webp`,
  aboutStory: `${IMG}/captain-about.webp`,
  vesselsHero: `${IMG}/action-choppy-crew.webp`,
  vesselsMachine: `${IMG}/action-cloudy-crew.webp`,
  experiencesHero: `${IMG}/gallery-01.webp`,
  galleryHero: `${IMG}/gallery-06.webp`,
  contactHero: `${IMG}/gallery-02.webp`,
};

export const contactCopy = {
  title: "YOUR ARRIVAL GUIDE",
  subtitle: "FIND US WITHOUT THE STRESS",
  body: "Everything you need to know before you arrive, watch our quick video walkthrough for a seamless experience.",
};
