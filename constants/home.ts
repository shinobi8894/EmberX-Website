import { MapPin, Smartphone, Store, Users, TrendingUp, Star, Zap, Shield, Clock, Target, Navigation, Award, Bell } from 'lucide-react';

export const HOME_HERO = {
  badge: 'The Future of Location-Based Rewards',
  title: 'Discover, Collect, Redeem. All in Your Pocket.',
  subtitle: 'EmberX revolutionizes how you discover and collect rewards. No scanning, no searching. Just walk, collect, and enjoy exclusive perks from your favorite brands.',
  cta: {
    primary: 'Start Exploring',
    secondary: 'For Businesses',
  },
  stats: [
    { value: '1M+', label: 'Active Users' },
    { value: '500+', label: 'Partner Brands' },
    { value: '50K+', label: 'Locations' },
  ],
};

export const HOME_FEATURES = [
  {
    number: '01',
    icon: MapPin,
    title: 'Location Intelligence',
    description: 'Advanced filtering from 500m to 200 miles. Find exactly what you need, when you need it.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Auto-Collect',
    description: 'Zero-friction rewards. Get within 8 meters and rewards are yours automatically.',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Privacy Control',
    description: 'From leaderboards to complete anonymity. Total control over your data.',
  },
  {
    number: '04',
    icon: Clock,
    title: 'Smart Timers',
    description: 'AI-powered prioritization ensures you never miss high-value opportunities.',
  },
];

export const BUSINESS_FEATURES = [
  {
    number: '01',
    title: 'Real-time Analytics',
    description: 'Track performance metrics as they happen',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Audience Targeting',
    description: 'Reach users based on location and behavior',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Smart Campaigns',
    description: 'AI-optimized timing and placement',
    color: 'from-orange-500 to-red-500',
  },
];

export const HOME_FAQ = [
  {
    question: "How does EmberX work?",
    answer: "EmberX uses your location to automatically discover rewards from nearby brands. Simply walk around your city, and when you get within 8 meters of a reward, it is automatically collected to your wallet.",
  },
  {
    question: "Is EmberX free to use?",
    answer: "Yes! EmberX is completely free for users. We make money by charging brands for campaign placements, allowing us to offer the service at no cost to you.",
  },
  {
    question: "How do I redeem my rewards?",
    answer: "Simply open your wallet, select the reward you want to use, and show the QR code to the brand partner at checkout. It is that easy!",
  },
  {
    question: "What about my privacy?",
    answer: "Privacy is our top priority. You have complete control over your data with multiple privacy levels - from public leaderboard participation to completely anonymous mode. Your location is never shared with brands without your explicit permission.",
  },
  {
    question: "Can I choose which brands I see?",
    answer: "Absolutely! EmberX offers brand opt-out functionality, allowing you to customize which brands appear in your feed. You are in complete control of your experience.",
  },
  {
    question: "How far can I filter rewards?",
    answer: "Our advanced filtering system lets you search for rewards from 500 meters up to 200 miles away, giving you flexibility whether you are exploring your neighborhood or planning trips across the city.",
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
