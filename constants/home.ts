import { MapPin, Smartphone, Store, Users, TrendingUp, Star, Zap, Shield, Clock, Target, Navigation, Award, Bell } from 'lucide-react';

export const HOME_HERO = {
  badge: 'The Future of Location-Based Rewards',
  titleLine1: 'Discover Hidden',
  titleLine2: 'Rewards',
  subtitle: 'Brands control rewards; customers collect effortlessly and redeem instantly.',
  cta: {
    primary: 'Get rewards',
    secondary: 'How it works',
  },
  stats: [
    { value: '500K+', label: 'Active Users' },
    { value: '10K+', label: 'Partner Brands' },
    { value: '$5M+', label: 'Rewards Distributed' },
  ],
  floatingBadge: {
    label: 'Collect Reward within',
    value: '8 meters',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1575655273633-6ac40769c587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwc21hcnRwaG9uZSUyMGNpdHl8ZW58MXx8fHwxNjc2MjQzNTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Person using EmberX app',
  },
};

export const HOME_FEATURES = [
  {
    number: '01',
    icon: MapPin,
    title: 'Discover Nearby Rewards',
    description: 'Browse location-based rewards from your favorite brands in real-time.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Auto-Collect',
    description: 'Walk within 8 meters of a reward location to collect it automatically.',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Instant Redemption',
    description: 'Redeem rewards directly from the app—no codes, no hassle.',
  },
  {
    number: '04',
    icon: Clock,
    title: 'Track Your Savings',
    description: 'View your collection history and total savings in your wallet.',
  },
  {
    number: '05',
    icon: Shield,
    title: 'Route Plan Rewards',
    description: 'EmberX provides gainful route options',
  },
  {
    number: '06',
    icon: Clock,
    title: 'Seamless Redemption',
    description: 'Simply go to the store and redeem your rewards',
  },
];

export const BUSINESS_FEATURES = [
  {
    number: '01',
    title: 'Real-Time Analytics',
    description: 'Monitor performance with live dashboards and insights',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Location-Based Campaigns',
    description: 'Target users near your stores or specific areas',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Flexible Budget Control',
    description: 'Set limits, pause campaigns, and optimize spending',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    title: 'Customer Engagement Insights',
    description: 'Understand customer behavior and optimize your rewards strategy',
    color: 'from-green-500 to-emerald-500',
  },
  {
    number: '05',
    title: 'Advanced Control Functions',
    description: 'Control campaigns from value to redemption times',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    number: '06',
    title: 'Automatic Reward Pool Redemption',
    description: 'Rewards and value recycled where unused',
    color: 'from-red-500 to-rose-500',
  },
];

export const HOME_FAQ = [
  {
    question: "How does EmberX work?",
    answer: "EmberX uses location technology to detect when you are near a reward. When you are within 8 meters of a participating brand, the reward is automatically added to your wallet. No scanning or checking in required.",
  },
  {
    question: "Is EmberX free to use?",
    answer: "Yes! EmberX is 100% free for users. Brands pay to list their rewards, which means you collect and redeem without any cost.",
  },
  {
    question: "What types of rewards are available?",
    answer: "Rewards vary by brand and can include discounts, free items, cashback, loyalty points, and exclusive offers. Each reward is clearly labeled with its value and expiration date.",
  },
  {
    question: "How do I redeem a reward?",
    answer: "Once a reward is in your wallet, tap it to open the redemption screen. Show the QR code or unique code to the cashier at checkout. The reward will be marked as used automatically.",
  },
  {
    question: "Do I need to keep the app open to collect rewards?",
    answer: "No. EmberX works in the background. As long as location services are enabled, you will collect rewards automatically - even if the app is not open.",
  },
  {
    question: "Can brands track my location?",
    answer: "No. Brands never see your exact location. They only receive anonymized data about how many users collected their rewards and general foot traffic trends.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Marketing Director, Urban Coffee Co.",
    content: "EmberX has transformed how we engage with customers. The foot traffic increase is remarkable.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Power User",
    content: "I've collected over $500 in rewards just by walking my usual routes. It's incredible!",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Small Business Owner",
    content: "Finally, a platform that levels the playing field. We compete with big brands effectively.",
    rating: 5,
  },
];

// Bold Statement Section
export const HOME_STATEMENT = {
  badge: 'Live now',
  title: {
    line1: 'We believe the best way,',
    line2: 'to earn rewards and incentives',
    line3: ' is through',
    line4: 'everyday actions',
  },
  subtitle: 'EmberX enables location-based rewards, see, collect and redeem',
};

// Features Section
export const HOME_FEATURES_SECTION = {
  title: {
    line1: 'Intelligent',
    line2: 'features',
  },
  subtitle: 'Collecting rewards has never been this simple',
};

// Stats Section
export const HOME_STATS_SECTION = {
  title: {
    line1: 'By the',
    line2: 'Numbers',
    line3: '',
  },
  stats: [
    { number: '500K+', label: 'Active Users', sublabel: 'and counting' },
    { number: '10K+', label: 'Partner Brands', sublabel: 'nationwide' },
    { number: '$5M+', label: 'Rewards Distributed', sublabel: 'to date' },
    { number: '4.8★', label: 'Average Rating', sublabel: 'on app stores' },
  ],
};

// Product Showcase Section - How It Works
export const HOME_PRODUCT_SHOWCASE = {
  title: {
    line1: 'How It',
    line2: 'Works',
  },
  subtitle: 'Collecting rewards is simple and effortless. Follow these four easy steps.',
  cards: [
    {
      type: 'gradient',
      number: '01',
      title: 'Identify a Reward',
      description: 'Open the EmberX app and browse available rewards near you on the map.',
      gradient: 'from-[#FF6900] to-[#FF3399]',
    },
    {
      type: 'gradient',
      number: '02',
      title: 'Walk to Reward',
      description: 'Head towards the reward location shown on your map.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      type: 'gradient',
      number: '03',
      title: 'Tap Collect',
      description: 'Within 8m of the reward location, tap the collect button to claim it.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'gradient',
      number: '04',
      title: 'Redeem the Reward',
      description: 'Visit the store and redeem your reward directly from your wallet.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ],
  largeFeature: {
    title: 'Start Collecting Rewards Today',
    subtitle: 'Join thousands of users who are earning rewards effortlessly.',
    image: {
      src: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB1c2luZyUyMHBob25lJTIwY2l0eXxlbnwxfHx8fDE3NjI0MzYxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'EmberX in action',
    },
    stats: [
      { value: '$50K+', label: 'Collected Daily' },
      { value: '24/7', label: 'Always Active' },
      { value: '8m', label: 'Auto-collect Range' },
    ],
  },
};

// Business Section
export const HOME_BUSINESS_SECTION = {
  badge: 'For Brands',
  badgeIcon: 'Store',
  title: {
    line1: 'Drive Foot Traffic',
    line2: 'Like Never Before',
  },
  subtitle: 'EmberX helps brands reach customers at the perfect moment - when they are nearby and ready to visit.',
  ctaText: 'Learn More',
  ctaLink: '/brand',
  image: {
    src: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjIxNjUyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Brand Console Dashboard',
  },
};

// Team Section
export const HOME_TEAM_SECTION = {
  title: {
    line1: 'Meet the',
    line2: 'Team',
  },
  members: [
    {
      name: 'Nicholas Blomfield',
      role: 'CEO & Co-Founder',
      image: '/imgs/nicol.jpg',
    },
    {
      name: 'Tadashi Amano',
      role: 'CTO',
      image: '/imgs/tadashi.png',
    },
    {
      name: 'Taylor Rivera',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    },
    {
      name: 'Morgan Patel',
      role: 'Head of Partnerships',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    },
  ],
  statsBar: [
    { number: '30+', label: 'Team Members' },
    { number: '5', label: 'Cities' },
    { number: '3yrs', label: 'In Market' },
    { number: '24/7', label: 'Support' },
  ],
};

// FAQ Section
export const HOME_FAQ_SECTION = {
  title: {
    line1: 'Frequently Asked',
    line2: 'Questions',
  },
  subtitle: 'Got questions? We have got answers.',
};

// Final CTA Section
export const HOME_FINAL_CTA = {
  title: {
    line1: 'Get rewards',
    line2: 'Today',
  },
  subtitle: 'Download EmberX and discover rewards everywhere you go.',
  cta: {
    primary: 'Download Now',
    secondary: 'Sign Up',
  },
  stats: [
    { value: '500K+', label: 'Active users' },
    { value: '10K+', label: 'Partner brands' },
    { value: '$5M+', label: 'Rewards distributed' },
  ],
};
