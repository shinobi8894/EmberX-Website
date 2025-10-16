"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { WebsiteHeader } from '@/components/website/website-header';
import { WebsiteFooter } from '@/components/website/website-footer';
import { 
  Target, 
  Users, 
  Globe, 
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Award
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe in creating meaningful connections between businesses and customers through innovative technology.'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Every feature we build is designed with our users\' needs and privacy at the forefront.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data belongs to you. We provide comprehensive privacy controls and transparent data practices.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with location-based technology and reward systems.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'EmberX was born from the vision to revolutionize location-based rewards'
    },
    {
      year: '2024',
      title: 'Global Launch',
      description: 'Expanded to 500+ cities worldwide with over 50,000 partner businesses'
    },
    {
      year: '2024',
      title: '1M+ Users',
      description: 'Reached our first million active users across the platform'
    },
    {
      year: '2024',
      title: '$10M+ Distributed',
      description: 'Facilitated over $10 million in rewards to our community'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former product lead at major tech companies. Passionate about creating user-centric experiences.'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Expert in location technology and blockchain systems. 15+ years in fintech.'
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Business Development',
      bio: 'Builds partnerships with brands and businesses. Former consultant with deep retail experience.'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Product',
      bio: 'Designs intuitive experiences for millions of users. Background in mobile and UX design.'
    }
  ];

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <WebsiteHeader />
      
      {/* Hero Section */}
      <section className="relative bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <Badge className="bg-primary/20 text-primary mb-6">
              About EmberX
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Building the Future of
              <span className="block text-primary">Rewards & Discovery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to connect people with amazing local experiences and help 
              businesses build meaningful relationships with their customers through innovative 
              location-based technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To create a world where discovering and supporting local businesses is 
                effortless, rewarding, and meaningful. We believe that technology should 
                bring people closer to their communities, not further apart.
              </p>
              <p className="text-lg text-muted-foreground">
                Through EmberX, we're building bridges between businesses and customers, 
                creating win-win relationships that benefit entire communities.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <ImageWithFallback 
                src="/imgs/bg.png"
                alt="Modern city skyline representing our vision"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in building the EmberX platform
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The passionate people building the future of rewards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary mb-6">
                Innovation
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Technology That Powers Connection
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform combines cutting-edge location technology, blockchain-based 
                token systems, and AI-driven personalization to create unique experiences 
                for both users and businesses.
              </p>
              
              <div className="space-y-4">
                {[
                  'Advanced geolocation with 8-meter precision',
                  'Blockchain-based token economy with EmberX and brand tokens',
                  'Privacy-first architecture with user-controlled data',
                  'AI-powered personalization and recommendations',
                  'Real-time analytics and campaign optimization'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-card border-border">
                <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Platform Uptime</div>
              </Card>
              <Card className="p-6 bg-card border-border">
                <div className="text-2xl font-bold text-primary mb-2">&lt;100ms</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </Card>
              <Card className="p-6 bg-card border-border">
                <div className="text-2xl font-bold text-primary mb-2">8m</div>
                <div className="text-sm text-muted-foreground">Location Precision</div>
              </Card>
              <Card className="p-6 bg-card border-border">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Global Support</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            We'd love to hear from you. Whether you're a potential user, business partner, 
            or just curious about our mission, don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@emberx.com"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Our Team
            </a>
            <a 
              href="mailto:press@emberx.com"
              className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Press Inquiries
            </a>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
}