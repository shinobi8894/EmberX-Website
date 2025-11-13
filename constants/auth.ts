export const AUTH_STATS = [
  { value: '1M+', label: 'Users' },
  { value: '50K+', label: 'Brands' },
  { value: '500+', label: 'Cities' },
];

export const SIGNIN_SELECTION = {
  brandName: 'EmberX',
  title: 'Sign In to EmberX',
  subtitle: 'Choose how you want to access your account',
  userCard: {
    title: 'User Sign In',
    description: 'Access your rewards, collect tokens, and explore nearby offers',
    features: ['View your rewards', 'Collect tokens', 'Track locations'],
    buttonText: 'Sign In as User',
    href: '/signin/user',
  },
  brandCard: {
    title: 'Brand Sign In',
    description: 'Manage your campaigns, analytics, and customer engagement',
    features: ['Manage campaigns', 'View analytics', 'Track engagement'],
    buttonText: 'Sign In as Brand',
    href: '/signin/brand',
  },
};

export const USER_SIGNIN_CONTENT = {
  brandName: 'EmberX',
  backgroundAlt: 'EmberX Background',
  welcomeBadge: 'Welcome Back',
  mobileTitle: 'Welcome Back',
  mobileSubtitle: 'Sign in to continue',
  desktopTitle: 'User Sign In',
  desktopSubtitle: 'Enter your credentials to access your account',
  heroTitle: 'start your\nreward\njourney',
  heroHighlight: 'reward',
  heroDescription: 'Sign in to discover amazing rewards nearby, collect brand tokens, and be part of the future of location-based experiences.',
  form: {
    emailLabel: 'Email',
    emailPlaceholder: 'Enter your email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    forgotPassword: 'Forgot password?',
    submitButton: 'Sign In',
    loadingButton: 'Signing In...',
  },
  switch: {
    message: "Don't have an account?",
    link: 'Sign Up',
    brandMessage: 'Are you a brand?',
    brandLink: 'Sign in here',
  },
  demo: {
    title: 'Demo Credentials',
    email: 'user@emberx.com',
    password: 'demo123',
  },
};

export const BRAND_SIGNIN_CONTENT = {
  brandName: 'EmberX',
  backgroundAlt: 'EmberX Background',
  welcomeBadge: 'Brand Portal',
  mobileTitle: 'Brand Sign In',
  mobileSubtitle: 'Access your brand dashboard',
  desktopTitle: 'Brand Sign In',
  desktopSubtitle: 'Manage your campaigns and analytics',
  heroTitle: 'Welcome to Your',
  heroHighlight: 'Brand Dashboard',
  heroDescription: 'Access powerful tools to grow your brand, engage customers, and drive real results with location-based marketing.',
  navigation: {
    userLogin: 'User Login',
    contactSales: 'Contact Sales',
  },
  features: [
    {
      title: 'Real-time Analytics',
      description: 'Track performance metrics as they happen',
    },
    {
      title: 'Customer Insights',
      description: 'Understand your audience behavior',
    },
    {
      title: 'Campaign Management',
      description: 'Create and optimize campaigns easily',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption and protection',
    },
  ],
  stats: [
    { value: '50K+', label: 'Active Brands' },
    { value: '10M+', label: 'Monthly Impressions' },
    { value: '85%', label: 'Engagement Rate' },
  ],
  form: {
    emailLabel: 'Brand Email',
    emailPlaceholder: 'brand@company.com',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    submitButton: 'Access Dashboard',
    loadingButton: 'Signing In...',
  },
  switch: {
    message: "Don't have a brand account?",
    link: 'Contact Sales',
    userMessage: 'Are you a user?',
    userLink: 'Sign in here',
  },
  demo: {
    title: 'Demo Credentials',
    email: 'brand@emberx.com',
    password: 'demo123',
  },
};

export const SIGNUP_CONTENT = {
  brandName: 'EmberX',
  backgroundAlt: 'EmberX Background',
  badge: 'Join EmberX',
  mobileTitle: 'Create Account',
  mobileSubtitle: 'Start your reward journey',
  desktopTitle: 'Sign Up',
  desktopSubtitle: 'Create your account to get started',
  hero: {
    titleLine1: 'discover',
    titleLine2: 'rewards',
    titleLine3: 'everywhere',
    description: 'Join over 1 million users discovering rewards, collecting brand tokens, and exploring their cities in a whole new way.',
  },
  features: [
    'Location-based rewards',
    'Auto-collect within 8 meters',
    'Privacy-focused experience',
  ],
  form: {
    usernameLabel: 'Username',
    usernamePlaceholder: '@username',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter your email',
    mobileLabel: 'Mobile Number',
    mobilePlaceholder: '+1 (555) 000-0000',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Create a strong password',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: 'Re-enter your password',
    termsPrefix: 'I agree to the',
    termsLink: 'Terms of Service',
    termsAnd: 'and',
    privacyLink: 'Privacy Policy',
    marketingText: 'I want to receive marketing emails about new features and deals',
    submitButton: 'Create Account',
    loadingButton: 'Creating Account...',
  },
  passwordRequirements: [
    { id: 'length', text: 'At least 8 characters' },
    { id: 'uppercase', text: 'One uppercase letter' },
    { id: 'number', text: 'One number' },
  ],
  switch: {
    message: 'Already have an account?',
    link: 'Sign In',
  },
};

export const PASSWORD_VALIDATION = {
  length: (password: string) => password.length >= 8,
  uppercase: (password: string) => /[A-Z]/.test(password),
  number: (password: string) => /[0-9]/.test(password),
};

export const AUTH_ERRORS = {
  emptyFields: 'Please fill in all fields',
  usernameFormat: 'Username must start with @',
  passwordMismatch: 'Passwords do not match',
  passwordRequirements: 'Password does not meet requirements',
  agreeTerms: 'Please agree to the Terms of Service',
  invalidCredentials: 'Invalid email or password',
};

export const AUTH_IMAGE_URL = 'https://images.unsplash.com/photo-1611416507098-e0842376fad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjByZXdhcmRzfGVufDF8fHx8MTc2MjY5MDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080';
