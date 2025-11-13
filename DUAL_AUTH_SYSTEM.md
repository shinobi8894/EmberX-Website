# Dual Authentication System

## Overview
Implemented a clean dual sign-in system that separates user and brand authentication flows for better user experience and clarity.

## New Pages Created

### 1. Sign-In Selection Page (`/signin`)
- **Location**: `app/signin/page.tsx`
- **Purpose**: Landing page that presents users with two clear options
- **Features**:
  - Side-by-side cards for User and Brand sign-in
  - Visual distinction with icons (Users icon vs Building2 icon)
  - Feature lists for each account type
  - Clean, modern design matching EmberX branding

### 2. User Sign-In Page (`/signin/user`)
- **Location**: `app/signin/user/page.tsx`
- **Purpose**: Dedicated sign-in page for regular users
- **Features**:
  - User-focused messaging and branding
  - Demo credentials: `user@emberx.com` / `demo123`
  - Link to brand sign-in for users who need to switch
  - Redirects to homepage on successful login

### 3. Brand Sign-In Page (`/signin/brand`)
- **Location**: `app/signin/brand/page.tsx`
- **Purpose**: Dedicated sign-in page for brand/business accounts
- **Features**:
  - Brand-focused messaging with Building2 icon
  - Brand-specific stats (50K+ Brands, 10M+ Impressions, 85% Engagement)
  - Demo credentials: `brand@emberx.com` / `demo123`
  - Link to user sign-in for switching account types
  - "Contact Sales" link for new brand accounts
  - Redirects to brand dashboard (`/brand`) on successful login

## Updated Components

### Website Header (`components/website/website-header.tsx`)
- **Desktop Navigation**: Now shows two separate buttons:
  - "User Sign In" → `/signin/user`
  - "Brand Sign In" → `/signin/brand`
  - "Get Started" button remains for signup
  
- **Mobile Navigation**: Updated with both sign-in options
  - Clean separation between user and brand access
  - Maintains consistent styling and behavior

## Updated Constants (`constants/auth.ts`)

### New Constants Added:
1. **SIGNIN_SELECTION**: Content for the selection page
   - Card titles, descriptions, features, and button text
   
2. **USER_SIGNIN_CONTENT**: User-specific sign-in content
   - User-focused messaging
   - Separate demo credentials
   - Cross-linking to brand sign-in
   
3. **BRAND_SIGNIN_CONTENT**: Brand-specific sign-in content
   - Brand-focused messaging
   - Professional language (e.g., "Access Dashboard" vs "Sign In")
   - "Contact Sales" for new brands
   - Cross-linking to user sign-in

## User Flow

### For Users:
1. Click "User Sign In" from header or `/signin` selection page
2. Enter credentials on `/signin/user`
3. On success → Redirects to homepage
4. Can easily switch to brand sign-in if needed

### For Brands:
1. Click "Brand Sign In" from header or `/signin` selection page
2. Enter credentials on `/signin/brand`
3. On success → Redirects to brand dashboard (`/brand`)
4. Can contact sales or switch to user sign-in if needed

## Demo Credentials

### User Account:
- Email: `user@emberx.com`
- Password: `demo123`
- Redirects to: Homepage (`/`)

### Brand Account:
- Email: `brand@emberx.com`
- Password: `demo123`
- Redirects to: Brand Dashboard (`/brand`)

## Benefits

1. **Clear Separation**: Users and brands have distinct entry points
2. **Better UX**: No confusion about which account type to use
3. **Professional**: Brands get a dedicated, professional-looking sign-in
4. **Flexible**: Easy to switch between account types if needed
5. **Scalable**: Foundation for different features and permissions per account type

## Technical Details

- All pages follow existing design patterns and component structure
- Responsive design works on mobile and desktop
- Proper TypeScript typing maintained
- Build successful with no errors
- All routes properly configured in Next.js app router
