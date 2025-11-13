# Content Management Guide

## Overview
All website content is now managed through constants files in the `/constants` folder. This makes it easy to update text, labels, and other content without touching the page components.

## Constants Structure

### `/constants` folder contains:

- **home.ts** - All homepage content
- **about.ts** - About page content
- **auth.ts** - Sign in/Sign up pages content
- **brand.ts** - Brand console content
- **legal.ts** - Legal pages content
- **coming-soon.ts** - Coming soon page content
- **navigation.ts** - Navigation menu content
- **onboarding.ts** - Onboarding flow content
- **types.ts** - TypeScript type definitions
- **index.ts** - Exports all constants

## How to Edit Content

### Homepage (`constants/home.ts`)

#### Hero Section
```typescript
export const HOME_HERO = {
  titleLine1: 'discover',      // First line of hero title
  titleLine2: 'rewards',        // Second line (highlighted in orange)
  subtitle: 'Location-based rewards...',  // Hero subtitle
  cta: {
    primary: 'Start earning now',    // Primary button text
    secondary: 'How it works',       // Secondary button text
  },
  stats: [
    { value: '1M+', label: 'Users' },  // Update stats values/labels
  ],
};
```

#### Bold Statement Section
```typescript
export const HOME_STATEMENT = {
  badge: 'Live now',
  title: {
    line1: 'We believe the best way...',
    line2: 'stop searching',     // Grey text
    line3: 'and',
    line4: 'start discovering',  // Orange text
  },
  subtitle: 'EmberX uses your location...',
};
```

#### Features Section
```typescript
export const HOME_FEATURES_SECTION = {
  title: {
    line1: 'who our',
    line2: 'services',  // Orange text
  },
  subtitle: 'Everything you need...',
  additionalFeatures: [
    // Add more features here
  ],
};
```

#### Stats Section
```typescript
export const HOME_STATS_SECTION = {
  title: {
    line1: 'data that',
    line2: 'proves',
    line3: 'our impact',  // Orange text
  },
  stats: [
    { 
      number: '1M+', 
      label: 'Active Users', 
      sublabel: 'Growing daily' 
    },
  ],
};
```

#### Business Section
```typescript
export const HOME_BUSINESS_SECTION = {
  badge: 'Brand Console',
  title: {
    line1: 'our work',
    line2: 'speaks for us',  // Orange text
  },
  subtitle: 'Deploy campaigns, track performance...',
  ctaText: 'Access Console',
  ctaLink: '/brand',
};
```

#### Team Section
```typescript
export const HOME_TEAM_SECTION = {
  title: {
    line1: 'the team behind',
    line2: 'your success',  // Orange text
  },
  members: [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://...',  // Update team member images
    },
  ],
  statsBar: [
    { number: '50+', label: 'Team Members' },
  ],
};
```

#### FAQ Section
```typescript
export const HOME_FAQ_SECTION = {
  title: {
    line1: 'common',
    line2: 'questions',  // Orange text
  },
  subtitle: 'Everything you need to know...',
};

export const HOME_FAQ = [
  {
    question: "How does EmberX work?",
    answer: "EmberX uses your location...",
  },
];
```

#### Final CTA
```typescript
export const HOME_FINAL_CTA = {
  title: {
    line1: 'ready to',
    line2: 'get started?',  // Orange text
  },
  subtitle: 'Join over 1 million users...',
  cta: {
    primary: 'Get started free',
    secondary: 'Schedule a demo',
  },
  stats: [
    { value: '1M+', label: 'Active users' },
  ],
};
```

### About Page (`constants/about.ts`)

#### Hero Section
```typescript
export const ABOUT_HERO = {
  badge: 'About EmberX',
  titleLine1: 'revolutionizing',
  titleLine2: 'rewards',  // Orange text
  subtitle: 'We\'re building the future...',
  images: {
    hero: 'https://...',  // Update hero image
  },
};
```

#### Stats
```typescript
export const ABOUT_STATS = [
  { 
    value: '1M+', 
    label: 'Active Users', 
    description: 'Discovering rewards daily' 
  },
];
```

#### Values Section
```typescript
export const ABOUT_VALUES_SECTION = {
  title: {
    line1: 'our',
    line2: 'values',  // Orange text
  },
  subtitle: 'The principles that guide...',
};

export const ABOUT_VALUES = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Creating meaningful connections...',
  },
];
```

#### Mobile Section
```typescript
export const ABOUT_MOBILE_SECTION = {
  badge: 'The Experience',
  title: {
    line1: 'discover',
    line2: 'rewards',
    line3: 'everywhere',  // Orange text
  },
  subtitle: 'EmberX transforms how you interact...',
  ctaText: 'Download Now',
  ctaLink: '/coming-soon',
};
```

#### Journey Section
```typescript
export const ABOUT_JOURNEY_SECTION = {
  title: {
    line1: 'our',
    line2: 'journey',  // Orange text
  },
  subtitle: 'Building the future...',
  milestones: [
    {
      year: '2023',
      title: 'Founded',
      description: 'EmberX was born',
      stat: 'Day 1',
    },
  ],
};
```

### Authentication Pages (`constants/auth.ts`)

#### Sign In Page
```typescript
export const SIGNIN_CONTENT = {
  welcomeBadge: 'Welcome Back',
  mobileTitle: 'Welcome Back',
  mobileSubtitle: 'Sign in to continue',
  desktopTitle: 'Sign In',
  desktopSubtitle: 'Enter your credentials...',
  heroTitle: 'start your\nreward\njourney',
  heroHighlight: 'reward',  // Orange text
  heroDescription: 'Sign in to discover...',
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
```

#### Sign Up Page
```typescript
export const SIGNUP_CONTENT = {
  badge: 'Join EmberX',
  mobileTitle: 'Create Account',
  mobileSubtitle: 'Start your reward journey',
  desktopTitle: 'Sign Up',
  desktopSubtitle: 'Create your account...',
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
    termsText: 'I agree to the Terms...',
    marketingText: 'I want to receive marketing...',
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
```

#### Error Messages
```typescript
export const AUTH_ERRORS = {
  emptyFields: 'Please fill in all fields',
  usernameFormat: 'Username must start with @',
  passwordMismatch: 'Passwords do not match',
  passwordRequirements: 'Password does not meet requirements',
  agreeTerms: 'Please agree to the Terms of Service',
  invalidCredentials: 'Invalid email or password',
};
```

#### Stats (used on auth pages)
```typescript
export const AUTH_STATS = [
  { value: '1M+', label: 'Users' },
  { value: '50K+', label: 'Brands' },
  { value: '500+', label: 'Cities' },
];
```

## Common Editing Tasks

### 1. Changing Hero Text
Navigate to the appropriate constants file and update the `title` or `titleLine1/titleLine2` properties.

### 2. Updating Stats
Find the `stats` array in the section you want to modify and update `value` and `label` properties.

### 3. Modifying Button Text
Look for `cta` or `buttons` objects and update the `primary` and `secondary` properties.

### 4. Changing Images
Update the `image` or `images` properties with new URLs.

### 5. Adding/Removing Features
Add or remove objects from the arrays like `HOME_FEATURES`, `ABOUT_VALUES`, etc.

### 6. Updating Form Labels
Navigate to the `form` object in auth constants and update individual field labels and placeholders.

## Best Practices

1. **Keep text concise** - Shorter text works better in the design
2. **Maintain consistency** - Use similar tone across all sections
3. **Test after changes** - Run `npm run build` to verify no errors
4. **Use proper formatting** - Respect line breaks with `\n` where needed
5. **Update all related content** - If changing a stat, update it everywhere it appears

## File Structure

```
constants/
├── index.ts           # Exports all constants
├── home.ts           # Homepage content
├── about.ts          # About page content
├── auth.ts           # Authentication pages
├── brand.ts          # Brand console
├── legal.ts          # Legal pages
├── coming-soon.ts    # Coming soon page
├── navigation.ts     # Navigation menus
├── onboarding.ts     # Onboarding flow
└── types.ts          # TypeScript types
```

## Testing Your Changes

After making changes to any constants file:

1. Save the file
2. Run `npm run build` to check for errors
3. Run `npm run dev` to see changes locally
4. Check that all text displays correctly
5. Verify responsive design on different screen sizes

## Need Help?

If you encounter issues or need to add new sections:
1. Check the existing constants structure
2. Follow the same pattern for new content
3. Import the new constant in the page component
4. Use it in the JSX like other constants

## Common Patterns

### Multi-line Titles
```typescript
title: {
  line1: 'first line',
  line2: 'second line',  // Often highlighted in orange
  line3: 'third line',   // Optional
}
```

### CTA Buttons
```typescript
cta: {
  primary: 'Primary Action',
  secondary: 'Secondary Action',
}
```

### Stats Arrays
```typescript
stats: [
  { value: '1M+', label: 'Metric Name', sublabel: 'Optional detail' },
]
```

### Feature Lists
```typescript
features: [
  {
    number: '01',
    icon: IconComponent,
    title: 'Feature Name',
    description: 'Feature description',
  },
]
```
