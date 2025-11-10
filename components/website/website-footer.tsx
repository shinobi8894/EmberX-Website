import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Github, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WebsiteFooter() {
  return (
    <footer className="relative bg-zinc-900 dark:bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#FF6900]/10 via-transparent to-transparent" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">EmberX</span>
            </div>
            <p className="text-zinc-400 text-lg mb-8 max-w-md leading-relaxed">
              The future of location-based rewards. Discover, collect, and redeem from your favorite brands.
            </p>
            
            {/* Newsletter */}
            <div className="max-w-md">
              <h3 className="font-semibold mb-4 text-white">Stay updated</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 h-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#FF6900]/50"
                />
                <Button 
                  className="bg-[#FF6900] hover:bg-[#E55A00] text-white h-12 w-12 p-0 rounded-xl flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <Link href="/brand" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    For Businesses
                  </Link>
                </li>
                <li>
                  <a href="#pricing" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a href="#careers" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#press" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#help" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#docs" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#api" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/legal" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <a href="#licenses" className="text-zinc-400 hover:text-[#FF6900] transition-colors">
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-zinc-400 text-sm">
              © 2025 EmberX. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#twitter" 
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:border-[#FF6900]/50 group"
              >
                <Twitter className="w-4 h-4 text-zinc-400 group-hover:text-[#FF6900]" />
              </a>
              <a 
                href="#linkedin" 
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:border-[#FF6900]/50 group"
              >
                <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-[#FF6900]" />
              </a>
              <a 
                href="#instagram" 
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:border-[#FF6900]/50 group"
              >
                <Instagram className="w-4 h-4 text-zinc-400 group-hover:text-[#FF6900]" />
              </a>
              <a 
                href="#github" 
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:border-[#FF6900]/50 group"
              >
                <Github className="w-4 h-4 text-zinc-400 group-hover:text-[#FF6900]" />
              </a>
              <a 
                href="mailto:hello@emberx.com" 
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:border-[#FF6900]/50 group"
              >
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-[#FF6900]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}