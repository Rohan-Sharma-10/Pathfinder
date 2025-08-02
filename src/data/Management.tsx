import { UGDegree } from '@/types/UG';

export const managementDegrees: UGDegree[] = [
  // Core Business Degrees
  {
    id: "bba",
    fullName: "Bachelor of Business Administration",
    abbreviation: "BBA",
    description: "Comprehensive business education covering management, marketing, finance, and organizational behavior.",
    marketDemand: {
      level: "High",
      explanation: "High demand across all industries for management trainees and business development roles."
    },
    futureGrowth: {
      prospects: "Strong growth with expanding business landscape and entrepreneurship",
      timeframe: "25-30% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 350000,
      midCareer: 900000,
      senior: 2500000,
      years: [0, 2, 5, 8, 12],
      amounts: [350000, 550000, 900000, 1500000, 2500000]
    },
    duration: "3 years",
    eligibility: "10+2 with any stream. Good communication and leadership aptitude."
  },
  {
    id: "bbm",
    fullName: "Bachelor of Business Management",
    abbreviation: "BBM",
    description: "Business management fundamentals with focus on operations, strategy, and human resource management.",
    marketDemand: {
      level: "High",
      explanation: "Strong demand in management roles across manufacturing, services, and consulting sectors."
    },
    futureGrowth: {
      prospects: "Steady growth with focus on operational excellence",
      timeframe: "20-25% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 320000,
      midCareer: 850000,
      senior: 2200000,
      years: [0, 2, 5, 8, 12],
      amounts: [320000, 500000, 850000, 1400000, 2200000]
    },
    duration: "3 years",
    eligibility: "10+2 with any stream. Interest in management and leadership."
  },
  {
    id: "bms",
    fullName: "Bachelor of Management Studies",
    abbreviation: "BMS",
    description: "Management studies with emphasis on analytical thinking, strategic planning, and business analytics.",
    marketDemand: {
      level: "High",
      explanation: "High demand in consulting, analytics, and strategic planning roles."
    },
    futureGrowth: {
      prospects: "Excellent growth with increasing need for data-driven management",
      timeframe: "28-32% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 380000,
      midCareer: 950000,
      senior: 2600000,
      years: [0, 2, 5, 8, 12],
      amounts: [380000, 580000, 950000, 1600000, 2600000]
    },
    duration: "3 years",
    eligibility: "10+2 with good analytical and mathematical skills."
  },
  {
    id: "bbs",
    fullName: "Bachelor of Business Studies",
    abbreviation: "BBS",
    description: "Business studies covering entrepreneurship, business ethics, and international business practices.",
    marketDemand: {
      level: "Medium",
      explanation: "Good demand in business development, sales, and entrepreneurial ventures."
    },
    futureGrowth: {
      prospects: "Good growth with entrepreneurship ecosystem development",
      timeframe: "22-26% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 300000,
      midCareer: 800000,
      senior: 2000000,
      years: [0, 2, 5, 8, 12],
      amounts: [300000, 450000, 800000, 1300000, 2000000]
    },
    duration: "3 years",
    eligibility: "10+2 with any stream. Entrepreneurial mindset preferred."
  },
  {
    id: "bibf",
    fullName: "Bachelor of International Business and Finance",
    abbreviation: "BIBF",
    description: "International business operations, global finance, cross-cultural management, and trade regulations.",
    marketDemand: {
      level: "High",
      explanation: "Strong demand in multinational companies and international trade organizations."
    },
    futureGrowth: {
      prospects: "Strong growth with globalization and international trade expansion",
      timeframe: "24-28% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 450000,
      midCareer: 1100000,
      senior: 2800000,
      years: [0, 2, 5, 8, 12],
      amounts: [450000, 700000, 1100000, 1800000, 2800000]
    },
    duration: "3 years",
    eligibility: "10+2 with good English communication and cultural awareness."
  },

  // Specialized BBA Programs
  {
    id: "bba-finance",
    fullName: "Bachelor of Business Administration in Finance",
    abbreviation: "BBA Finance",
    description: "Financial management, investment analysis, corporate finance, and financial planning specialization.",
    marketDemand: {
      level: "High",
      explanation: "Very high demand in banking, financial services, and investment management."
    },
    futureGrowth: {
      prospects: "Excellent growth with expanding financial services sector",
      timeframe: "30-35% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 400000,
      midCareer: 1200000,
      senior: 3000000,
      years: [0, 2, 5, 8, 12],
      amounts: [400000, 650000, 1200000, 2000000, 3000000]
    },
    duration: "3 years",
    eligibility: "10+2 with Mathematics. Strong analytical and quantitative skills."
  },
  {
    id: "bba-marketing",
    fullName: "Bachelor of Business Administration in Marketing",
    abbreviation: "BBA Marketing",
    description: "Digital marketing, brand management, consumer behavior, and sales strategy specialization.",
    marketDemand: {
      level: "High",
      explanation: "High demand in digital marketing, e-commerce, and brand management roles."
    },
    futureGrowth: {
      prospects: "Strong growth with digital transformation and e-commerce boom",
      timeframe: "26-30% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 350000,
      midCareer: 1000000,
      senior: 2500000,
      years: [0, 2, 5, 8, 12],
      amounts: [350000, 550000, 1000000, 1700000, 2500000]
    },
    duration: "3 years",
    eligibility: "10+2 with creativity and communication skills."
  },
  {
    id: "bba-hr",
    fullName: "Bachelor of Business Administration in Human Resource Management",
    abbreviation: "BBA HRM",
    description: "Human resource management, organizational psychology, talent acquisition, and workplace diversity.",
    marketDemand: {
      level: "High",
      explanation: "Strong demand in HR departments and consulting firms focusing on talent management."
    },
    futureGrowth: {
      prospects: "Good growth with focus on employee experience and workplace culture",
      timeframe: "20-24% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 320000,
      midCareer: 900000,
      senior: 2300000,
      years: [0, 2, 5, 8, 12],
      amounts: [320000, 500000, 900000, 1500000, 2300000]
    },
    duration: "3 years",
    eligibility: "10+2 with good interpersonal and communication skills."
  },
  {
    id: "bba-international-business",
    fullName: "Bachelor of Business Administration in International Business",
    abbreviation: "BBA IB",
    description: "Global business strategies, international trade, cross-cultural management, and export-import operations.",
    marketDemand: {
      level: "High",
      explanation: "High demand in multinational corporations and international trade companies."
    },
    futureGrowth: {
      prospects: "Strong growth with increasing globalization",
      timeframe: "25-28% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 420000,
      midCareer: 1100000,
      senior: 2700000,
      years: [0, 2, 5, 8, 12],
      amounts: [420000, 650000, 1100000, 1800000, 2700000]
    },
    duration: "3 years",
    eligibility: "10+2 with excellent English and cultural adaptability."
  },
  {
    id: "bba-entrepreneurship",
    fullName: "Bachelor of Business Administration in Entrepreneurship",
    abbreviation: "BBA Entrepreneurship",
    description: "Startup management, business plan development, venture capital, and innovation management.",
    marketDemand: {
      level: "High",
      explanation: "Growing demand with startup ecosystem and government support for entrepreneurship."
    },
    futureGrowth: {
      prospects: "Excellent growth with startup India initiatives",
      timeframe: "35-40% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 380000,
      midCareer: 1200000,
      senior: 3500000,
      years: [0, 2, 5, 8, 12],
      amounts: [380000, 600000, 1200000, 2200000, 3500000]
    },
    duration: "3 years",
    eligibility: "10+2 with innovative thinking and risk-taking ability."
  },
  {
    id: "bba-business-analytics",
    fullName: "Bachelor of Business Administration in Business Analytics",
    abbreviation: "BBA Analytics",
    description: "Data analytics, business intelligence, predictive modeling, and data-driven decision making.",
    marketDemand: {
      level: "High",
      explanation: "Very high demand with businesses adopting data-driven strategies."
    },
    futureGrowth: {
      prospects: "Outstanding growth with big data and AI integration",
      timeframe: "40-45% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 500000,
      midCareer: 1400000,
      senior: 3200000,
      years: [0, 2, 5, 8, 12],
      amounts: [500000, 750000, 1400000, 2300000, 3200000]
    },
    duration: "3 years",
    eligibility: "10+2 with strong mathematical and analytical skills."
  },
  {
    id: "bba-logistics",
    fullName: "Bachelor of Business Administration in Logistics & Supply Chain Management",
    abbreviation: "BBA Logistics",
    description: "Supply chain optimization, logistics management, warehouse operations, and transportation planning.",
    marketDemand: {
      level: "High",
      explanation: "High demand with e-commerce growth and supply chain complexities."
    },
    futureGrowth: {
      prospects: "Strong growth with e-commerce and global trade expansion",
      timeframe: "28-32% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 380000,
      midCareer: 1000000,
      senior: 2600000,
      years: [0, 2, 5, 8, 12],
      amounts: [380000, 580000, 1000000, 1600000, 2600000]
    },
    duration: "3 years",
    eligibility: "10+2 with problem-solving and analytical abilities."
  },
  {
    id: "bba-hospitality",
    fullName: "Bachelor of Business Administration in Hospitality and Tourism",
    abbreviation: "BBA Hospitality",
    description: "Hotel management, tourism operations, customer service excellence, and hospitality marketing.",
    marketDemand: {
      level: "Medium",
      explanation: "Good demand in hospitality industry with tourism sector recovery and growth."
    },
    futureGrowth: {
      prospects: "Good growth with tourism industry revival and sustainable tourism",
      timeframe: "22-26% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 300000,
      midCareer: 850000,
      senior: 2200000,
      years: [0, 2, 5, 8, 12],
      amounts: [300000, 450000, 850000, 1400000, 2200000]
    },
    duration: "3 years",
    eligibility: "10+2 with good communication skills and service orientation."
  }
];