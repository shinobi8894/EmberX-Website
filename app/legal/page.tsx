"use client"

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { WebsiteHeader } from '@/components/website/website-header';
import { WebsiteFooter } from '@/components/website/website-footer';
import { FadeIn } from '@/components/animations';
import { 
  Shield, 
  FileText, 
  Building2, 
  Cookie,
  ArrowRight,
  Check,
  Lock,
  Eye,
  Database
} from 'lucide-react';
import {
  LEGAL_HERO,
  LEGAL_DOCS,
  PRIVACY_POLICY,
  TERMS_OF_SERVICE,
  BUSINESS_TERMS,
  COOKIE_POLICY,
  LEGAL_CTA
} from '@/constants/legal';

const iconMap: Record<string, typeof Shield> = {
  Shield,
  FileText,
  Building2,
  Cookie,
  Database,
  Lock,
  Eye
};

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('privacy');
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-black text-white">
      <WebsiteHeader />
      
      {/* Hero Section */}
      <section key={pathname} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF6900]/10 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            key={`${pathname}-badge`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block bg-[#FF6900]/20 backdrop-blur-sm border border-[#FF6900]/30 rounded-full px-6 py-3 mb-8">
              <span className="text-sm uppercase tracking-wider text-[#FF6900]">{LEGAL_HERO.badge}</span>
            </div>
          </motion.div>
          
          <motion.div
            key={`${pathname}-title`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-[0.9] mb-8 uppercase">
              <span className="block text-white">{LEGAL_HERO.title.line1}</span>
              <span className="block text-[#FF6900]">{LEGAL_HERO.title.line2}</span>
            </h1>
          </motion.div>
          
          <motion.div
            key={`${pathname}-description`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12">
              {LEGAL_HERO.description}
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            key={`${pathname}-scroll`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-16"
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 mx-auto">
                <div className="w-1.5 h-3 bg-white/50 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Document Selector Section */}
      <section className="relative py-20 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEGAL_DOCS.map((doc, index) => {
              const Icon = iconMap[doc.icon];
              const isActive = activeTab === doc.id;
              
              return (
                <FadeIn key={doc.id} delay={0.2 + (index * 0.1)} direction="up">
                  <button
                    onClick={() => setActiveTab(doc.id)}
                    className={`relative group text-left transition-all duration-300 w-full ${
                      isActive ? 'scale-105' : 'hover:scale-105'
                    }`}
                  >
                    <div className={`relative rounded-3xl p-8 overflow-hidden ${
                      isActive 
                        ? 'bg-gradient-to-br from-[#FF6900] to-[#FF3399]' 
                        : 'bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-[#FF6900]/50'
                    }`}>
                      {/* Number Background */}
                      <div className={`absolute -top-4 -right-4 text-[120px] font-bold leading-none ${
                        isActive ? 'text-white/10' : 'text-white/5'
                      }`}>
                        {doc.number}
                      </div>
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                          isActive ? 'bg-white/20' : 'bg-[#FF6900]/20'
                        }`}>
                          <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-[#FF6900]'}`} />
                        </div>
                        
                        <h3 className={`text-2xl font-bold mb-2 ${isActive ? 'text-white' : 'text-white'}`}>
                          {doc.title}
                        </h3>
                        
                        <div className={`text-sm ${isActive ? 'text-white/80' : 'text-zinc-400'}`}>
                          {doc.clickText}
                        </div>
                      </div>
                    </div>
                  </button>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Privacy Policy */}
          {activeTab === 'privacy' && (
            <motion.div
              key="privacy"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-2xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white">{PRIVACY_POLICY.title}</h2>
                  <p className="text-zinc-400 mt-2">{PRIVACY_POLICY.lastUpdated}</p>
                </div>
              </motion.div>

              <div className="space-y-12">
                {PRIVACY_POLICY.sections.map((section, idx) => {
                  const SectionIcon = iconMap[section.icon];
                  
                  return (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF6900]/30 transition-colors"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-[#FF6900]/20 rounded-xl flex items-center justify-center">
                          <SectionIcon className="w-8 h-8 text-[#FF6900]" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">{section.title}</h3>
                      </div>
                      <p className="text-zinc-300 text-lg mb-6">
                        {section.description}
                      </p>
                      
                      {section.id === 'information-collect' && section.items && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {section.items.map((item: any, i: number) => (
                            <div key={i} className="flex items-start gap-3 bg-zinc-900/50 rounded-xl p-4">
                              <div className="w-6 h-6 bg-[#FF6900] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                <p className="text-zinc-400 text-sm">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.id === 'privacy-controls' && section.items && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {section.items.map((item: any, i: number) => (
                            <div key={i} className="flex items-center gap-3 bg-zinc-900/50 rounded-xl p-4">
                              <Check className="w-5 h-5 text-[#FF6900] flex-shrink-0" />
                              <span className="text-white">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.id === 'data-security' && 'stats' in section && section.stats && (
                        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {section.stats.map((stat: any, i: number) => (
                              <div key={i}>
                                <div className="text-4xl font-bold text-[#FF6900] mb-2">{stat.value}</div>
                                <div className="text-zinc-400">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Terms of Service */}
          {activeTab === 'terms' && (
            <motion.div
              key="terms"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-2xl flex items-center justify-center">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white">{TERMS_OF_SERVICE.title}</h2>
                  <p className="text-zinc-400 mt-2">{TERMS_OF_SERVICE.lastUpdated}</p>
                </div>
              </motion.div>

              {/* Introduction */}
              {'intro' in TERMS_OF_SERVICE && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 mb-12"
                >
                  <p className="text-zinc-300 text-lg leading-relaxed">{TERMS_OF_SERVICE.intro}</p>
                </motion.div>
              )}

              {/* Main Sections */}
              <div className="space-y-8">
                {TERMS_OF_SERVICE.sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF6900]/30 transition-colors"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    {'content' in section && <p className="text-zinc-300 text-lg leading-relaxed">{section.content}</p>}
                    {'items' in section && section.items && (
                      <div className="space-y-3 mt-4">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#FF6900] flex-shrink-0 mt-1" />
                            <span className="text-zinc-300 text-base leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Schedules */}
              {'schedules' in TERMS_OF_SERVICE && TERMS_OF_SERVICE.schedules && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="mt-16"
                >
                  <h3 className="text-4xl font-bold text-white mb-8 uppercase">Schedules</h3>
                  <div className="space-y-8">
                    {TERMS_OF_SERVICE.schedules.map((schedule, idx) => (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 hover:border-[#FF6900]/30 transition-colors"
                      >
                        <h4 className="text-2xl font-bold text-[#FF6900] mb-6">{schedule.title}</h4>
                        <div className="space-y-3">
                          {schedule.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#FF6900] rounded-full flex-shrink-0 mt-2" />
                              <span className="text-zinc-300 text-base leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Business Terms */}
          {activeTab === 'business' && (
            <motion.div
              key="business"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-2xl flex items-center justify-center">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white">{BUSINESS_TERMS.title}</h2>
                  <p className="text-zinc-400 mt-2">{BUSINESS_TERMS.lastUpdated}</p>
                </div>
              </motion.div>

              <div className="space-y-12">
                {BUSINESS_TERMS.sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8"
                  >
                    <h3 className="text-3xl font-bold text-white mb-6">{section.title}</h3>
                    <div className="space-y-3">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#FF6900] flex-shrink-0 mt-1" />
                          <span className="text-zinc-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Cookie Policy */}
          {activeTab === 'cookies' && (
            <motion.div
              key="cookies"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-2xl flex items-center justify-center">
                  <Cookie className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white">{COOKIE_POLICY.title}</h2>
                  <p className="text-zinc-400 mt-2">{COOKIE_POLICY.lastUpdated}</p>
                </div>
              </motion.div>

              <div className="space-y-12">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8"
                >
                  <h3 className="text-3xl font-bold text-white mb-6">{COOKIE_POLICY.intro.title}</h3>
                  <p className="text-zinc-300 text-lg">
                    {COOKIE_POLICY.intro.content}
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {COOKIE_POLICY.types.map((type, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 hover:border-[#FF6900]/30 transition-colors"
                    >
                      <h4 className="text-xl font-bold text-white mb-2">{type.title}</h4>
                      <p className="text-zinc-400 mb-4">{type.desc}</p>
                      <div className="space-y-2">
                        {type.examples.map((ex, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FF6900] rounded-full" />
                            <span className="text-zinc-300 text-sm">{ex}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-32 bg-gradient-to-br from-[#FF6900] to-[#FF3399]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn delay={0.2} direction="up">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 uppercase text-white">
              {LEGAL_CTA.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              {LEGAL_CTA.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center bg-white text-[#FF6900] hover:bg-zinc-100 px-10 h-14 rounded-full font-semibold transition-colors shadow-lg group">
                {LEGAL_CTA.buttons.primary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#FF6900] px-10 h-14 rounded-full font-semibold transition-colors">
                {LEGAL_CTA.buttons.secondary}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
}
