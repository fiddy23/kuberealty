export interface Villa {
  slug: string;
  name: string;
  tagline: string;
  heroTitle: string;
  image: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: string;
  overview: string[];
  highlights: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  location: string;
  priceRange: string;
  unitTypes: string[];
  amenities: string[];
  status: string;
  completionDate: string;
  overview: string[];
  landmarks: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string[];
}

export const villas: Villa[] = [
  {
    slug: '/m-villa/',
    name: 'M Villa',
    tagline: 'Smart and secure homes for modern living.',
    heroTitle: 'Designed for effortless luxury, privacy, and peace of mind.',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    location: 'Bella Vista, East Legon Hills - Katamanso, Accra',
    price: 'Request pricing',
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    status: 'Available',
    overview: [
      'M Villa introduces a smart-home lifestyle within Bella Vista, Kuber Realty’s flagship gated community in East Legon Hills.',
      'The homes are positioned for privacy and comfort, with contemporary interiors, secure entry systems, and carefully planned family spaces.',
      'Residents benefit from estate-level amenities including 24/7 security, paved walkways, green areas, and proximity to Kmart Mall and essential services.',
    ],
    highlights: [
      'Audio and video door entry system',
      'Secure gated community',
      'Landscaped walkways and green pockets',
      'Access to retail, pharmacy, and daily conveniences',
    ],
  },
  {
    slug: '/r-villa/',
    name: 'R Villa',
    tagline: 'A luxurious yet environmentally conscious living experience.',
    heroTitle: 'A refined villa concept that balances elegance with calm, sustainable living.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    location: 'Bella Vista, East Legon Hills - Katamanso, Accra',
    price: 'Request pricing',
    bedrooms: 4,
    bathrooms: 5,
    area: 3500,
    status: 'Available',
    overview: [
      'R Villa is curated for buyers who want a premium residence with generous indoor-outdoor flow and a more tranquil relationship with the surrounding landscape.',
      'The home concept emphasizes airy spaces, refined finishes, natural light, and the security of a fully managed estate environment.',
      'It sits within Bella Vista, giving residents convenient access to community amenities, paved roads, and nearby retail destinations.',
    ],
    highlights: [
      'Luxury villa layout with large family zones',
      'Eco-conscious planning and efficient living',
      '24/7 monitored estate access',
      'Integrated neighborhood amenities',
    ],
  },
  {
    slug: '/a-villa/',
    name: 'A Villa',
    tagline: 'Redefining luxury, exceptional design and premium amenities.',
    heroTitle: 'A signature Kuber villa for buyers seeking bold design and elevated comfort.',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    location: 'Bella Vista, East Legon Hills - Katamanso, Accra',
    price: 'Request pricing',
    bedrooms: 5,
    bathrooms: 5,
    area: 3900,
    status: 'Available',
    overview: [
      'A Villa is one of the premium home options inside Bella Vista, designed around a high-end buyer who values presence, comfort, and polished detailing.',
      'The scheme combines estate security, thoughtful circulation, and easy access to nearby landmarks to create a home that feels both private and connected.',
      'Everyday living is supported by the wider Bella Vista ecosystem, from secure access control to shopping and family-friendly conveniences nearby.',
    ],
    highlights: [
      'Premium design language and elevated finishes',
      'Large entertaining and family spaces',
      'Gated estate security and infrastructure',
      'Close to Kmart Mall and neighborhood services',
    ],
  },
];

export const projects: Project[] = [
  {
    slug: '/bella-vida/',
    name: 'Bella Vida',
    tagline: 'A modern residential community designed with a focus on comfort.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    location: 'East Legon Hills - Katamanso',
    priceRange: 'Premium gated-community pricing',
    unitTypes: ['M Villa', 'R Villa', 'A Villa'],
    amenities: [
      'Gated community',
      '24/7 security',
      'Paved walkways',
      'Swimming pool',
      'Audio/video door entry system',
      'Access to Kmart Mall',
    ],
    status: 'Selling Now',
    completionDate: 'Phased delivery',
    overview: [
      'Bella Vida is Kuber Realty’s modern residential community in East Legon Hills, created for buyers seeking serenity, convenience, and strong long-term value.',
      'The development combines well-planned roads, green spaces, children’s play areas, and a secure gated entrance to form a lifestyle-driven neighborhood.',
      'Its mix of villa options and nearby shopping access makes it one of the company’s most visible mixed-lifestyle destinations.',
    ],
    landmarks: [
      'Kotoka International Airport',
      'Accra Mall',
      'Katamanso Police Station',
      'Melcom Shopping Mall',
      'Ghana Water Service, Katamanso',
    ],
  },
  {
    slug: '/kmart-bella-vista/',
    name: 'Kmart Bella Vista',
    tagline: 'Retail convenience embedded inside a premium residential ecosystem.',
    image:
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    location: 'Bella Vista, East Legon Hills',
    priceRange: 'Commercial enquiries open',
    unitTypes: ['Retail Units', 'Service Suites'],
    amenities: ['Daily convenience retail', 'Pharmacy access', 'Residential foot traffic', 'Strategic positioning'],
    status: 'Open for enquiries',
    completionDate: 'Current phase',
    overview: [
      'Kmart Bella Vista extends the Bella Vista community by integrating convenience retail directly into the residential environment.',
      'The project is positioned to serve residents with everyday essentials while giving business operators access to an active and growing neighborhood.',
      'It supports the broader Kuber vision of combining residential comfort with practical, well-located commercial amenities.',
    ],
    landmarks: ['Bella Vida villas', 'East Legon Hills road network', 'Katamanso community'],
  },
  {
    slug: '/oxford-towers/',
    name: 'Oxford Towers',
    tagline: 'Premium commercial space for ambitious businesses.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    location: 'Accra',
    priceRange: 'Commercial pricing on request',
    unitTypes: ['Office layouts', 'Retail spaces'],
    amenities: ['High-speed elevators', '24/7 security', 'Ample parking', 'Premium finishing'],
    status: 'Selling Now',
    completionDate: 'Q2 2027',
    overview: [
      'Oxford Towers is presented as a premium commercial development for brands and businesses that want visibility, convenience, and a polished professional address.',
      'The scheme focuses on efficient office and retail layouts supported by secure operations, parking, and upscale finishing standards.',
      'It complements Kuber Realty’s residential pipeline by extending the brand into destination commercial real estate.',
    ],
    landmarks: ['Accra business districts', 'Retail corridors', 'Premium office catchment'],
  },
  {
    slug: '/kmart-shopping-mall/',
    name: 'Kmart Shopping Mall',
    tagline: 'A neighborhood retail destination shaped around convenience and visibility.',
    image:
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    location: 'Accra',
    priceRange: 'Retail leasing and sales enquiries',
    unitTypes: ['Anchor retail', 'Inline shops', 'Service spaces'],
    amenities: ['Accessible shopping', 'Neighbourhood catchment', 'Commercial frontage', 'Everyday convenience'],
    status: 'Open for enquiries',
    completionDate: 'Current pipeline',
    overview: [
      'Kmart Shopping Mall is designed as a practical retail destination that supports Kuber Realty’s surrounding communities and nearby catchment areas.',
      'The project emphasizes everyday accessibility and recurring customer traffic, making it suitable for convenience-led commercial operators.',
      'It anchors the company’s strategy of pairing residential development with lifestyle and retail infrastructure.',
    ],
    landmarks: ['Residential catchment communities', 'Transit access routes', 'Daily convenience corridor'],
  },
  {
    slug: '/mamobi-pride/',
    name: 'Mamobi Pride',
    tagline: 'A city-focused development with strong community and regeneration potential.',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    location: 'Mamobi, Accra',
    priceRange: 'Mixed-use enquiries open',
    unitTypes: ['Residential units', 'Commercial opportunities'],
    amenities: ['Urban accessibility', 'Community-focused planning', 'Mixed-use potential'],
    status: 'In development',
    completionDate: 'To be announced',
    overview: [
      'Mamobi Pride reflects Kuber Realty’s interest in projects that combine local relevance, improved quality of life, and visible urban transformation.',
      'The development is positioned around accessibility and community value, with a program that can support both residential and commercial use.',
      'Its identity suggests a project grounded in place, uplift, and long-term neighborhood impact.',
    ],
    landmarks: ['Central Accra routes', 'Established urban neighborhoods', 'Community services'],
  },
  {
    slug: '/11th-june-club-2/',
    name: '11th June Club',
    tagline: 'A lifestyle-focused destination built around leisure, connection, and community.',
    image:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    location: 'Accra',
    priceRange: 'Membership and partnership enquiries',
    unitTypes: ['Lifestyle spaces', 'Event and leisure zones'],
    amenities: ['Community gathering spaces', 'Lifestyle programming', 'Brand activation potential'],
    status: 'Upcoming',
    completionDate: 'To be announced',
    overview: [
      '11th June Club is presented as a lifestyle and gathering concept that broadens the Kuber brand beyond residential and office-led developments.',
      'The project signals a focus on curated experiences, social connection, and premium hospitality-style programming.',
      'It fits naturally into a broader real-estate ecosystem where community, leisure, and destination-making reinforce property value.',
    ],
    landmarks: ['Accra lifestyle districts', 'Hospitality and leisure nodes'],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: '/diaspora-property-expo-2025/',
    title: 'Diaspora Property Expo 2025',
    date: 'March 19, 2023',
    author: 'pingo',
    category: 'Real Estate',
    tags: ['dpe2025', 'apartment'],
    excerpt:
      'Kuber Realty shares updates around Diaspora Property Expo 2025 and the opportunities it creates for buyers, investors, and the wider diaspora market.',
    content: [
      'Diaspora Property Expo 2025 highlights Kuber Realty’s commitment to engaging buyers and investors who want a trusted path into Ghanaian real estate.',
      'The event creates space for conversations around secure property acquisition, premium residential living, and the long-term value of well-planned developments.',
      'For Kuber Realty, the expo supports a larger mission: connecting quality projects with a global audience that cares about transparency, lifestyle, and enduring investment potential.',
    ],
  },
];

export const contactInfo = {
  phone: '+233264277988',
  email: 'info@kuberealty.com',
  address: 'KUBER REALTY, 49 Kofi Annan St., Airport Residential Area 2, Accra',
};

export const archivePages = {
  '/blog/blog/': {
    title: 'News From Kuber Realty',
    intro: 'Updates, announcements, and market-facing stories from the Kuber Realty team.',
    posts: blogPosts,
  },
  '/2023/': {
    title: 'Archive: 2023',
    intro: 'A yearly archive of Kuber Realty stories and announcements published in 2023.',
    posts: blogPosts,
  },
  '/2023/03/': {
    title: 'Archive: March 2023',
    intro: 'All posts published by Kuber Realty during March 2023.',
    posts: blogPosts,
  },
  '/category/real-estate/': {
    title: 'Category: Real Estate',
    intro: 'Stories focused on property, development, investment, and Kuber Realty’s market activity.',
    posts: blogPosts.filter((post) => post.category === 'Real Estate'),
  },
  '/author/pingo/': {
    title: 'Author: pingo',
    intro: 'Posts published under the Kuber Realty author profile pingo.',
    posts: blogPosts.filter((post) => post.author === 'pingo'),
  },
  '/tag/dpe2025/': {
    title: 'Tag: dpe2025',
    intro: 'Posts related to Diaspora Property Expo 2025.',
    posts: blogPosts.filter((post) => post.tags.includes('dpe2025')),
  },
  '/tag/apartment/': {
    title: 'Tag: apartment',
    intro: 'Posts and updates related to apartment and residential property topics.',
    posts: blogPosts.filter((post) => post.tags.includes('apartment')),
  },
};
