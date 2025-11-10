export const AUTH_STATS = [
  { value: '1M+', label: 'Users' },
  { value: '50K+', label: 'Brands' },
  { value: '500+', label: 'Cities' },
];

export const SIGNIN_CONTENT = {
  welcomeBadge: 'Welcome Back',
  mobileTitle: 'Welcome Back',
  mobileSubtitle: 'Sign in to continue',
  desktopTitle: 'Sign In',
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
  },
  demo: {
    title: 'Demo Credentials',
    email: 'demo@emberx.com',
    password: 'demo123',
  },
};

export const SIGNUP_CONTENT = {
  badge: 'Join EmberX',
  mobileTitle: 'Create Account',
  mobileSubtitle: 'Start your reward journey',
  desktopTitle: 'Sign Up',
  desktopSubtitle: 'Create your account to get started',
  heroTitle: 'become\npart of the\nfuture',
  heroHighlight: 'future',
  heroDescription: 'Join millions discovering and collecting rewards effortlessly. Your journey to smarter shopping starts here.',
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
    termsText: 'I agree to the Terms of Service and Privacy Policy',
    marketingText: 'I want to receive marketing updates and promotions',
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
