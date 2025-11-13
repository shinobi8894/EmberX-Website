// Hero Section
export const LEGAL_HERO = {
  badge: 'Legal Documents',
  title: {
    line1: 'Is data security',
    line2: 'info correct/accurate?'
  },
  description: 'Privacy controls – anonymity of users, we only request their email and telephone number.',
};

// Legal Documents Navigation
export const LEGAL_DOCS = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: 'Shield',
    number: '01',
    clickText: 'Click to view details'
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    icon: 'FileText',
    number: '02',
    clickText: 'Click to view details'
  },
  {
    id: 'business',
    title: 'Business Terms',
    icon: 'Building2',
    number: '03',
    clickText: 'Click to view details'
  },
  {
    id: 'cookies',
    title: 'Cookie Policy',
    icon: 'Cookie',
    number: '04',
    clickText: 'Click to view details'
  }
];

// Privacy Policy Content
export const PRIVACY_POLICY = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: December 1, 2024',
  sections: [
    {
      id: 'information-collect',
      title: 'Information We Collect',
      icon: 'Database',
      description: 'At EmberX, we collect information to provide you with the best location-based rewards experience.',
      items: [
        { 
          title: 'Location Data', 
          desc: 'Precise location to show nearby rewards and enable auto-collection' 
        },
        { 
          title: 'Account Information', 
          desc: 'Email, name, and profile details you provide during signup' 
        },
        { 
          title: 'Usage Data', 
          desc: 'How you interact with the app and rewards collected' 
        },
        { 
          title: 'Device Information', 
          desc: 'Device type, OS, and app version for compatibility' 
        }
      ]
    },
    {
      id: 'privacy-controls',
      title: 'Privacy Controls',
      icon: 'Lock',
      description: 'You have comprehensive control over your privacy settings.',
      items: [
        'Location sharing levels',
        'Notification preferences',
        'Data access requests',
        'Account deletion',
        'Brand opt-out controls',
        'Profile visibility'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: 'Eye',
      description: 'We use industry-standard security measures to protect your information including end-to-end encryption, regular security audits, and secure cloud infrastructure with 99.9% uptime.',
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Monitoring' }
      ]
    }
  ]
};

// Terms of Service Content
export const TERMS_OF_SERVICE = {
  title: 'EmberX Rewards — Global Terms & Conditions',
  lastUpdated: 'Version: 8 November 2025',
  intro: 'By accessing, using or otherwise interacting directly or indirectly with EmberX website, products and services, you are consenting and agreeing to be bound by these Global terms and Conditions ("Terms"). These Terms and the Schedules form a binding agreement between you and EmberX Limited ("EmberX", "we", "us", "our"). Nothing herein is to be treated as advice or guidance in any way including legal, tax, financial, jurisdictional or investment advice of any kind. Words in the singular include the plural and vice versa.',
  sections: [
    {
      title: '1. Key Definitions',
      content: 'Account: Your registered EmberX profile. Brand: A participating merchant, venue, government, country, institution or organisation. Collect/Collection: Any form of acquisition of Tokens, Loyalty Perks, Rewards or otherwise through EmberX products and services. Ember Token (Tokens): A separate, optional, or non-optional transferable and non-transferable digital utility token that may be offered by EmberX (where permitted) and may be wrapped by EmberX to create the EmberX Token. EmberX Token (Tokens): A separate, optional, or non-optional, transferable and non-transferable digital utility token that may be offered by EmberX. Jurisdiction Packs: Country or region-specific consumer law, rules, regulations, principles and taxes including annexes that supplement these Terms. Loyalty Perks (Tokens): Benefits obtainable through EmberX products and services. Programme: The EmberX loyalty and rewards ecosystem. Rewards: Non-transferable, non-cash loyalty credits issued by EmberX or a Brand via the EmberX platform. Third Party Services: Third-party service providers utilised by EmberX from time to time. Wrapped Brand Tokens (Tokens): The Brand-specific utility wrappers of points, rewards and other denominals usable within that Brand\'s programme.'
    },
    {
      title: '2. Programme Overview',
      items: [
        '2.1 Rewards: Unless expressly stated otherwise, Rewards represent a conditional discount/price adjustment on eligible purchases with Brands. Rewards have no cash value, are non-transferable, non-tradable, designed for utility and are not legal tender.',
        '2.2 Settlement & records: Issuance and redemption events may be recorded using Third Party Services and mirrored in our ledger. The blockchain records are for auditability, confidential and are not a money transmission services.',
        '2.3 Eligibility: You must be 18+ years of age and legally capable in your country of residence. If you are under 18 years of age you must have a consenting adult before using any products or services. EmberX reserves the right to run additional KYC and AML checks at any time without notice.',
        '2.4 Account security: You are responsible for all information, credentials, APIs, devices, and wallets connected to your Account and you have a duty to notify us immediately if you know or suspect compromise.',
        '2.5 Suspension and Termination: We may suspend or terminate Accounts for any reason including breach, fraud, abuse, suspected criminal activity, or legal/regulatory reason without consequence or liability.',
        '2.6 Territorial controls: Features may be geo-fenced, secured, locked, unlocked, enabled, disabled, removed, updated or modified to comply with local laws or for any other reason.'
      ]
    },
    {
      title: '3. Collecting Rewards',
      items: [
        '3.1 Collecting rules: Collecting is triggered by qualifying spend, physical pick-up, targeted and non-targeted drops, campaigns or actions published by a Brand or EmberX. EmberX may cap, revise, or withdraw collection rules at any time without notice.',
        '3.2 Reversals: Returns, chargebacks, refunds, or abuse may lead to reversal, removals, clawback, suspension, termination or negative balances.',
        '3.3 No guarantees: Collections, values, amounts, rates, tiers, and benefits are promotional and can change or end at any time without notice.',
        '3.4 Promotions: Sign-up, referral and airdrop-style promotions may be restricted, taxed, or unavailable in some jurisdictions. Users must adhere to local rules, laws and regulations without exception.'
      ]
    },
    {
      title: '4. Redeeming Rewards and Collections',
      items: [
        '4.1 How to redeem: Redeem via the App, at point of sale, or as otherwise notified. Redemption is final, we cannot reverse redemptions once undertaken.',
        '4.2 Restrictions: Rewards may not be sold, assigned, pledged, or exchanged for cash.',
        '4.3 Expiry & breakage: Rewards expire after the period shown in-app. Expired Rewards are forfeited without exception.',
        '4.4 Stock & availability: Rewards are subject to availability and may be changed, modified, withdrawn or enhanced without notice.'
      ]
    },
    {
      title: '5. Wrapped Brand Tokens & Ember Token',
      items: [
        '5.1 Wrapped Brand Tokens: Certain Rewards may be wrapped into a Brand-specific token. Wrapped Brand Tokens remain promotional instruments with no redemption-for-cash right.',
        '5.2 Ember Token: The Ember and EmberX Tokens are utility/access tokens for programme features, not an investment, deposit, or e-money. Transfers may be enabled; additional network fees may apply. Value can fluctuate; you assume all market, technology, legal and regulatory risks. We may restrict access in certain jurisdictions without notice.',
        '5.3 No expectation of profit: You acknowledge you are not acquiring Tokens and Rewards with an expectation of profit.',
        '5.4 Regulatory changes: We may modify, suspend, or migrate Reward and Token functionality to comply with law or regulator direction.'
      ]
    },
    {
      title: '6. Fees',
      items: [
        '6.1 Fees: EmberX endeavours to provide predictable and transparent fees; third-party network/processor fees may apply and EmberX shall have no liability for any such fees.',
        '6.2 No gross-up: All amounts are exclusive of any taxes; all users and Brands are responsible for their own taxes.'
      ]
    },
    {
      title: '7. Prohibited Conduct',
      content: 'Users and Brands must not: (a) game the Programme; (b) create fake/referral farms; (c) use bots or exploits; (d) resell Rewards; (e) breach KYC/AML/sanctions laws; (f) use the Programme for unlawful purposes; (g) engage in market manipulation; (h) circumvent geo-fences or eligibility rules. Any violation will result in suspension or termination and EmberX reserves the right to report to relevant authorities.'
    },
    {
      title: '8. Privacy & Data',
      content: 'We process personal data per our Privacy Rules. We may share data with Brands and service providers to operate EmberX, prevent fraud, and meet legal obligations. Cross-border transfers may occur subject to appropriate safeguards. Brands act as independent controllers for their own processing.'
    },
    {
      title: '9. Platform Availability, Changes & Force Majeure',
      content: 'We may alter, suspend, or end parts of the Programme. Where required by law, we will provide notice but otherwise we are under no obligation. Features may vary by Brand, region, or device. We are not responsible for delays caused by events beyond our reasonable control.'
    },
    {
      title: '10. Intellectual Property & Open Source',
      content: 'The Programme, content, trademarks, products, services and software are owned by EmberX and/or its licensors. You receive a limited, revocable, non-transferable licence to use the App per these Terms. Open-source components are licensed under their respective licences.'
    },
    {
      title: '11. Merchant Relationship',
      content: 'Brands are independent from EmberX. EmberX is not the merchant of record for your purchases. Brands are responsible for products, pricing, VAT/GST, taxes, funding, liability, and compliance with consumer law.'
    },
    {
      title: '12. Liability',
      items: [
        '12.1 No consequential loss: To the fullest extent permitted by law, EmberX excludes liability for indirect, incidental, special, punitive, or consequential losses.',
        '12.2 Cap: EmberX\'s aggregate liability will not exceed the lesser of £100 or the total fees you paid to EmberX in the preceding six months.',
        '12.3 Liability: Nothing limits liability for fraud, gross negligence or liability which cannot be limited by law.',
        '12.4 Third-party risks: EmberX is not liable for losses caused by third-party wallets, exchanges, validators, software, hardware, or networks.'
      ]
    },
    {
      title: '13. Dispute Resolution, Governing Law & Global Coverage',
      items: [
        '13.1 Global coverage: These Terms apply globally, subject to mandatory local laws and Jurisdiction Packs.',
        '13.2 Governing law: Unless mandatory local law applies, these Terms are governed exclusively by the laws of the British Virgin Islands. EmberX reserves the right to bring legal proceedings in any jurisdiction.',
        '13.3 Venue: All resolutions shall be undertaken by binding arbitration in the British Virgin Islands at the BVI IAC.'
      ]
    },
    {
      title: '14. Changes to Terms & Notices',
      content: 'EmberX may update these Terms without notice. Continued participation after the effective date constitutes acceptance. Notices may be delivered in-app, by email, telephone, text or on our website.'
    },
    {
      title: '15. Assignment, Severability & Survival',
      content: 'No Brand or user is authorised to assign rights under these Terms. EmberX reserves the right to assign to an affiliate or group entity. If any clause is invalid, the remainder survives. Sections that by nature survive termination continue to apply.'
    },
    {
      title: '16. Contact',
      content: 'Support: info@emberx.io'
    }
  ],
  schedules: [
    {
      title: 'Schedule A — Global Tax, VAT/GST & Reporting',
      items: [
        'A1. No tax advice; user responsibility: Users and Brands are solely responsible for assessing, reporting, and paying any taxes. EmberX does not provide tax, accounting, or legal advice.',
        'A2. Consumer rewards structured as discounts: Rewards function as discounts/price adjustments on qualifying purchases. VAT/GST applies to the discounted price.',
        'A3. Airdrops, sign-up, referral: Rewards not linked to qualifying spend may be taxable upon receipt.',
        'A4. Tokens and disposals: Acquisitions, conversions, and disposals may be taxable. Users must maintain records.',
        'A5. Employment, creators, and partners: Rewards in connection with employment or services may be subject to withholding and reporting.',
        'A6. Reporting, withholding & documentation: EmberX may report transactions to tax authorities. You must provide required tax documentation.',
        'A7. Cross-border & nexus: User residency determines tax obligations. Brands are responsible for VAT/GST on their supplies.',
        'A8. Customs & duties: Rewards for physical goods may attract import duties payable by you.',
        'A9. Changes in law: EmberX may adjust features to reflect tax law changes without notice.'
      ]
    },
    {
      title: 'Schedule B — Merchant (Brand) Addendum',
      items: [
        'B1. Independent parties: Parties are independent contractors. No agency or partnership is created.',
        'B2. Breakage & liability: Brand sets Reward rules and bears liability for redemptions. Brand must fulfil all Rewards.',
        'B3. Fraud & clawback: EmberX may reverse suspicious rewards and impose risk controls.',
        'B4. Audit & records: Parties will keep records and cooperate for audit and legal enquiries.',
        'B5. Tax & invoicing: Brands are responsible for VAT/GST and local taxes on supplies.',
        'B6. Marketing standards: Brands must avoid investment language and comply with advertising laws.'
      ]
    },
    {
      title: 'Schedule C — Token Transferability',
      items: [
        'C1. Opt-in: Transferable Token features are opt-in and may be limited in certain jurisdictions.',
        'C2. Restrictions: EmberX may geo-fence, modify or disable transfers to comply with law.',
        'C3. No investment features: Tokens do not pay interest, dividends, or profit-share.',
        'C4. Market & technology risk: Users accept volatility, smart-contract risks, forks, and outages.',
        'C5. Regulatory actions: EmberX may freeze, cancel, or migrate Tokens to comply with court orders or sanctions.'
      ]
    },
    {
      title: 'Schedule D — Compliance, KYC/AML, Sanctions & Anti-Corruption',
      items: [
        'D1. KYC/AML: Users agree to provide information to satisfy KYC/AML/CTF obligations.',
        'D2. Sanctions: Users represent they are not subject to sanctions and will not use the Programme in sanctioned countries.',
        'D3. Anti-corruption: Users will comply with UK Bribery Act, US FCPA, and anti-corruption laws.',
        'D4. Law-enforcement requests: EmberX may cooperate with lawful requests and disclose data as required.'
      ]
    },
    {
      title: 'Schedule E — Consumer Law, Promotions & Prize Mechanics',
      items: [
        'E1. Mandatory rights: Nothing affects rights that cannot be waived under consumer laws.',
        'E2. Cooling-off/returns: Returns remedies are provided by the Brand as merchant of record.',
        'E3. Promotions: Promotions may require local filings, age limits, disclaimers. EmberX and Brands may cancel or modify to comply with law.'
      ]
    },
    {
      title: 'Schedule F — Jurisdiction Packs & Conflict Handling',
      items: [
        'F1. Packs: EmberX may publish Jurisdiction Packs that supplement these Terms with local notes.',
        'F2. Conflict: If a Jurisdiction Pack conflicts with these Terms, the Pack prevails to the extent required by mandatory local law.',
        'F3. Availability: If no Pack is published, these global Terms apply subject to mandatory local law.'
      ]
    }
  ]
};

// Business Terms Content
export const BUSINESS_TERMS = {
  title: 'Business Terms',
  lastUpdated: 'Last updated: December 1, 2024',
  sections: [
    {
      title: 'Eligibility',
      items: [
        'Be authorized to represent the business',
        'Provide accurate business information',
        'Have a legitimate business presence'
      ]
    },
    {
      title: 'Campaign Management',
      items: [
        'Responsible for campaign content and compliance',
        'Campaigns must follow content guidelines',
        'Cannot create misleading offers'
      ]
    },
    {
      title: 'Fees & Payments',
      items: [
        'Setup fees as outlined in your agreement',
        'Performance fees based on collections',
        'All fees are non-refundable'
      ]
    }
  ]
};

// Cookie Policy Content
export const COOKIE_POLICY = {
  title: 'Cookie Policy',
  lastUpdated: 'Last updated: December 1, 2024',
  intro: {
    title: 'What Are Cookies',
    content: 'Cookies are small text files stored on your device to help us provide a better experience and understand how you use our platform.'
  },
  types: [
    {
      title: 'Essential Cookies',
      desc: 'Required for platform functionality',
      examples: ['Authentication', 'Security', 'Performance']
    },
    {
      title: 'Analytics Cookies',
      desc: 'Help us understand usage',
      examples: ['Page views', 'Feature usage', 'Error tracking']
    },
    {
      title: 'Preference Cookies',
      desc: 'Remember your settings',
      examples: ['Theme', 'Language', 'Notifications']
    },
    {
      title: 'Marketing Cookies',
      desc: 'Personalized content',
      examples: ['Recommendations', 'Campaigns', 'Integrations']
    }
  ]
};

// Contact CTA Section
export const LEGAL_CTA = {
  title: 'Have Questions?',
  description: 'Our legal team is here to help clarify any questions about our policies',
  buttons: {
    primary: 'Contact Legal Team',
    secondary: 'Privacy Questions'
  }
};
