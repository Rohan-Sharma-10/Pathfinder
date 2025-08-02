import { UGDegree } from '@/types/UG';

export const lawDegrees: UGDegree[] = [
  // Traditional Law Degrees
  {
    id: "llb",
    fullName: "Bachelor of Laws",
    abbreviation: "LL.B",
    description: "3-year law degree after graduation covering constitutional law, criminal law, civil procedure, and legal practice.",
    marketDemand: {
      level: "High",
      explanation: "High demand in legal firms, judiciary, government services, and corporate legal departments."
    },
    futureGrowth: {
      prospects: "Strong growth with increasing legal complexity and regulatory requirements",
      timeframe: "20-25% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 300000,
      midCareer: 800000,
      senior: 2500000,
      years: [0, 2, 5, 8, 12],
      amounts: [300000, 450000, 800000, 1500000, 2500000]
    },
    duration: "3 years",
    eligibility: "Bachelor's degree in any discipline with minimum 45-50% marks."
  },
  {
    id: "ba-llb",
    fullName: "Bachelor of Arts and Bachelor of Laws",
    abbreviation: "B.A. LL.B (Hons.)",
    description: "5-year integrated course combining liberal arts education with comprehensive legal studies.",
    marketDemand: {
      level: "High",
      explanation: "Very high demand for integrated law graduates in top law firms, judiciary, and policy-making roles."
    },
    futureGrowth: {
      prospects: "Excellent growth with preference for integrated law education",
      timeframe: "25-30% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 400000,
      midCareer: 1000000,
      senior: 3000000,
      years: [0, 2, 5, 8, 12],
      amounts: [400000, 600000, 1000000, 1800000, 3000000]
    },
    duration: "5 years",
    eligibility: "10+2 with any stream. Minimum 50% marks. Clear entrance exams like CLAT, AILET."
  },
  {
    id: "bba-llb",
    fullName: "Bachelor of Business Administration and Bachelor of Laws",
    abbreviation: "BBA LL.B (Hons.)",
    description: "Business management combined with legal studies, ideal for corporate law and business advisory roles.",
    marketDemand: {
      level: "High",
      explanation: "High demand in corporate law firms, business consulting, and multinational corporations."
    },
    futureGrowth: {
      prospects: "Outstanding growth with expanding business law and corporate compliance",
      timeframe: "30-35% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 450000,
      midCareer: 1200000,
      senior: 3500000,
      years: [0, 2, 5, 8, 12],
      amounts: [450000, 700000, 1200000, 2200000, 3500000]
    },
    duration: "5 years",
    eligibility: "10+2 with any stream. Good academic record and entrance exam clearance."
  },
  {
    id: "bcom-llb",
    fullName: "Bachelor of Commerce and Bachelor of Laws",
    abbreviation: "B.Com LL.B (Hons.)",
    description: "Commerce and legal studies integration focusing on taxation, financial law, and commercial litigation.",
    marketDemand: {
      level: "High",
      explanation: "Strong demand in taxation law, financial advisory, and commercial dispute resolution."
    },
    futureGrowth: {
      prospects: "Strong growth with increasing financial regulations and taxation complexity",
      timeframe: "22-28% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 380000,
      midCareer: 950000,
      senior: 2800000,
      years: [0, 2, 5, 8, 12],
      amounts: [380000, 580000, 950000, 1600000, 2800000]
    },
    duration: "5 years",
    eligibility: "10+2 Commerce preferred. Mathematics and accounting knowledge beneficial."
  },
  {
    id: "bsc-llb",
    fullName: "Bachelor of Science and Bachelor of Laws",
    abbreviation: "B.Sc LL.B (Hons.)",
    description: "Science background with legal studies, specializing in intellectual property, environmental, and technology law.",
    marketDemand: {
      level: "High",
      explanation: "Growing demand in IP law, environmental regulations, and technology-related legal issues."
    },
    futureGrowth: {
      prospects: "Excellent growth with expanding technology and environmental law sectors",
      timeframe: "28-32% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 420000,
      midCareer: 1100000,
      senior: 3200000,
      years: [0, 2, 5, 8, 12],
      amounts: [420000, 650000, 1100000, 2000000, 3200000]
    },
    duration: "5 years",
    eligibility: "10+2 Science stream. PCM/PCB with good academic record."
  },

  // Specialized Law Areas
  {
    id: "criminal-law",
    fullName: "Criminal Law Specialization",
    abbreviation: "Criminal Law",
    description: "Specialized focus on criminal procedure, forensic law, and criminal justice system.",
    marketDemand: {
      level: "High",
      explanation: "Consistent demand in prosecution, defense, and criminal justice administration."
    },
    futureGrowth: {
      prospects: "Steady growth with evolving criminal justice system",
      timeframe: "18-22% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 350000,
      midCareer: 900000,
      senior: 2500000,
      years: [0, 2, 5, 8, 12],
      amounts: [350000, 500000, 900000, 1400000, 2500000]
    },
    duration: "5 years + specialization",
    eligibility: "Law degree with specialization in criminal law."
  },
  {
    id: "corporate-law",
    fullName: "Corporate Law Specialization",
    abbreviation: "Corporate Law",
    description: "Business law, mergers & acquisitions, corporate governance, and securities regulation.",
    marketDemand: {
      level: "High",
      explanation: "Very high demand in corporate law firms and multinational companies."
    },
    futureGrowth: {
      prospects: "Outstanding growth with expanding business regulations",
      timeframe: "35-40% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 600000,
      midCareer: 1500000,
      senior: 4000000,
      years: [0, 2, 5, 8, 12],
      amounts: [600000, 900000, 1500000, 2500000, 4000000]
    },
    duration: "5 years + specialization",
    eligibility: "Law degree with corporate law specialization and relevant experience."
  },
  {
    id: "cyber-law",
    fullName: "Cyber Law and Information Technology Law",
    abbreviation: "Cyber Law",
    description: "Digital privacy, cybercrime, data protection, and technology-related legal issues.",
    marketDemand: {
      level: "High",
      explanation: "Rapidly growing demand with increasing digitalization and cyber threats."
    },
    futureGrowth: {
      prospects: "Explosive growth with digital transformation",
      timeframe: "45-50% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 500000,
      midCareer: 1300000,
      senior: 3500000,
      years: [0, 2, 5, 8, 12],
      amounts: [500000, 750000, 1300000, 2200000, 3500000]
    },
    duration: "5 years + specialization",
    eligibility: "Law degree with IT law specialization and technology understanding."
  },
  {
    id: "intellectual-property",
    fullName: "Intellectual Property Law",
    abbreviation: "IP Law",
    description: "Patents, trademarks, copyrights, and intellectual property protection and litigation.",
    marketDemand: {
      level: "High",
      explanation: "High demand with innovation economy and technology startups."
    },
    futureGrowth: {
      prospects: "Strong growth with increasing innovation and R&D",
      timeframe: "32-38% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 550000,
      midCareer: 1400000,
      senior: 3800000,
      years: [0, 2, 5, 8, 12],
      amounts: [550000, 800000, 1400000, 2400000, 3800000]
    },
    duration: "5 years + specialization",
    eligibility: "Law degree with IP law specialization. Technical background preferred."
  },
  {
    id: "environmental-law",
    fullName: "Environmental Law and Policy",
    abbreviation: "Environmental Law",
    description: "Environmental regulations, climate law, sustainability compliance, and green policy.",
    marketDemand: {
      level: "Medium",
      explanation: "Growing demand with environmental awareness and sustainability regulations."
    },
    futureGrowth: {
      prospects: "Strong growth with climate change focus",
      timeframe: "25-30% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 380000,
      midCareer: 1000000,
      senior: 2800000,
      years: [0, 2, 5, 8, 12],
      amounts: [380000, 550000, 1000000, 1700000, 2800000]
    },
    duration: "5 years + specialization",
    eligibility: "Law degree with environmental law focus. Science background helpful."
  }
];