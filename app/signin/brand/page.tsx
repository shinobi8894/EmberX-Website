"use client"

import { TrendingUp, Users, BarChart3, Shield } from 'lucide-react';
import { BRAND_SIGNIN_CONTENT, AUTH_ERRORS } from '@/constants';
import { 
  AuthNavigation, 
  BrandHeroSection, 
  BrandFeatureCard, 
  TrustIndicators, 
  BrandSignInForm 
} from '@/components/auth';

export default function BrandSignInPage() {
  const featureIcons = [TrendingUp, Users, BarChart3, Shield];

  const handleSignIn = async (email: string, password: string) => {
    if (!email || !password) {
      return { error: AUTH_ERRORS.emptyFields };
    }

    return new Promise<{ error?: string }>((resolve) => {
      setTimeout(() => {
        if (email === BRAND_SIGNIN_CONTENT.demo.email && password === BRAND_SIGNIN_CONTENT.demo.password) {
          window.location.href = '/brand';
          resolve({});
        } else {
          resolve({ error: AUTH_ERRORS.invalidCredentials });
        }
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <AuthNavigation
        brandName={BRAND_SIGNIN_CONTENT.brandName}
        userLoginText={BRAND_SIGNIN_CONTENT.navigation.userLogin}
        contactSalesText={BRAND_SIGNIN_CONTENT.navigation.contactSales}
      />

      <div className="min-h-screen flex items-center justify-center py-24">
        <div className="w-full max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Features & Benefits */}
            <div className="space-y-8 order-2 lg:order-1">
              <BrandHeroSection
                badge={BRAND_SIGNIN_CONTENT.welcomeBadge}
                title={BRAND_SIGNIN_CONTENT.heroTitle}
                highlightText={BRAND_SIGNIN_CONTENT.heroHighlight}
                description={BRAND_SIGNIN_CONTENT.heroDescription}
              />

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {BRAND_SIGNIN_CONTENT.features.map((feature, index) => (
                  <BrandFeatureCard
                    key={index}
                    icon={featureIcons[index]}
                    title={feature.title}
                    description={feature.description}
                    delay={0.8 + (index * 0.15)}
                  />
                ))}
              </div>

              <TrustIndicators stats={BRAND_SIGNIN_CONTENT.stats} />
            </div>

            {/* Right Side - Login Form */}
            <div className="order-1 lg:order-2">
              <BrandSignInForm
                title={BRAND_SIGNIN_CONTENT.desktopTitle}
                subtitle={BRAND_SIGNIN_CONTENT.desktopSubtitle}
                emailLabel={BRAND_SIGNIN_CONTENT.form.emailLabel}
                emailPlaceholder={BRAND_SIGNIN_CONTENT.form.emailPlaceholder}
                passwordLabel={BRAND_SIGNIN_CONTENT.form.passwordLabel}
                passwordPlaceholder={BRAND_SIGNIN_CONTENT.form.passwordPlaceholder}
                rememberMeText={BRAND_SIGNIN_CONTENT.form.rememberMe}
                forgotPasswordText={BRAND_SIGNIN_CONTENT.form.forgotPassword}
                submitButtonText={BRAND_SIGNIN_CONTENT.form.submitButton}
                loadingButtonText={BRAND_SIGNIN_CONTENT.form.loadingButton}
                demoTitle={BRAND_SIGNIN_CONTENT.demo.title}
                demoEmail={BRAND_SIGNIN_CONTENT.demo.email}
                demoPassword={BRAND_SIGNIN_CONTENT.demo.password}
                switchMessage={BRAND_SIGNIN_CONTENT.switch.userMessage}
                switchLink={BRAND_SIGNIN_CONTENT.switch.userLink}
                switchHref="/signin/user"
                onSubmit={handleSignIn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
