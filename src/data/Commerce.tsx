import { UGDegree } from '@/types/UG';

export const commerceDegrees: UGDegree[] = [
  // Core Commerce
  {
    id: "bcom",
    fullName: "Bachelor of Commerce",
    abbreviation: "B.Com",
    description: "Comprehensive business education covering accounting, finance, economics, and business management fundamentals.",
    marketDemand: {
      level: "High",
      explanation: "High demand across all business sectors with versatile career options in accounting, finance, banking, and corporate management."
    },
    futureGrowth: {
      prospects: "Steady growth with evolving business landscape and digital transformation",
      timeframe: "15-20% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 300000,
      midCareer: 800000,
      senior: 2000000,
      years: [0, 2, 5, 8, 12],
      amounts: [300000, 450000, 800000, 1400000, 2000000]
    },
    duration: "3 years",
    eligibility: "10+2 with any stream. Commerce stream preferred for better foundation."
  },
  {
    id: "bcom-hons",
    fullName: "Bachelor of Commerce (Honours)",
    abbreviation: "B.Com (Hons.)",
    description: "Advanced commerce program with specialized focus on accounting, finance, and business analytics with research components.",
    marketDemand: {
      level: "High",
      explanation: "High demand in premium corporate roles, consulting, and financial services with preference for honors graduates."
    },
    futureGrowth: {
      prospects: "Excellent growth with preference for specialized commerce professionals",
      timeframe: "18-22% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 400000,
      midCareer: 1000000,
      senior: 2500000,
      years: [0, 2, 5, 8, 12],
      amounts: [400000, 600000, 1000000, 1700000, 2500000]
    },
    duration: "3 years",
    eligibility: "10+2 with minimum 60% marks. Commerce with Mathematics preferred."
  },
  {
    id: "ba-economics",
    fullName: "Bachelor of Arts in Economics",
    abbreviation: "B.A. Economics",
    description: "Economic theory, policy analysis, econometrics, and quantitative methods for understanding market dynamics and policy impact.",
    marketDemand: {
      level: "High",
      explanation: "Strong demand in policy research, financial analysis, consulting, and government sectors."
    },
    futureGrowth: {
      prospects: "Good growth with increasing need for economic analysis and policy research",
      timeframe: "16-20% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 350000,
      midCareer: 900000,
      senior: 2200000,
      years: [0, 2, 5, 8, 12],
      amounts: [350000, 500000, 900000, 1500000, 2200000]
    },
    duration: "3 years",
    eligibility: "10+2 with any stream. Good mathematical aptitude preferred."
  },
  {
    id: "bba",
    fullName: "Bachelor of Business Administration",
    abbreviation: "BBA",
    description: "Management fundamentals, leadership skills, marketing, operations, and strategic thinking for business leadership roles.",
    marketDemand: {
      level: "High",
      explanation: "High demand for management trainees and business development roles across all industries."
    },
    futureGrowth: {
      prospects: "Strong growth with expanding business landscape and entrepreneurship",
      timeframe: "20-25% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 350000,
      midCareer: 950000,
      senior: 2300000,
      years: [0, 2, 5, 8, 12],
      amounts: [350000, 550000, 950000, 1600000, 2300000]
    },
    duration: "3 years",
    eligibility: "10+2 with any stream. Good communication and leadership aptitude."
  },

  // Specialized Commerce
  {
    id: "bcom-accounting-finance",
    fullName: "Bachelor of Commerce in Accounting and Finance",
    abbreviation: "B.Com A&F",
    description: "Specialized focus on financial accounting, cost accounting, financial management, and corporate finance.",
    marketDemand: {
      level: "High",
      explanation: "Very high demand in accounting firms, financial services, and corporate finance departments."
    },
    futureGrowth: {
      prospects: "Excellent growth with digital accounting and financial technology integration",
      timeframe: "22-26% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 380000,
      midCareer: 1100000,
      senior: 2600000,
      years: [0, 2, 5, 8, 12],
      amounts: [380000, 580000, 1100000, 1800000, 2600000]
    },
    duration: "3 years",
    eligibility: "10+2 Commerce with Accounts and Mathematics. Good numerical aptitude."
  },
  {
    id: "bcom-banking-insurance",
    fullName: "Bachelor of Commerce in Banking and Insurance",
    abbreviation: "B.Com B&I",
    description: "Banking operations, insurance products, risk management, and financial services for banking and insurance sectors.",
    marketDemand: {
      level: "High",
      explanation: "Strong demand in banking, insurance, and financial services with sector expansion."
    },
    futureGrowth: {
      prospects: "Good growth with fintech integration and financial inclusion initiatives",
      timeframe: "18-22% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 320000,
      midCareer: 850000,
      senior: 2100000,
      years: [0, 2, 5, 8, 12],
      amounts: [320000, 480000, 850000, 1450000, 2100000]
    },
    duration: "3 years",
    eligibility: "10+2 with any stream. Commerce background preferred."
  },
  {
    id: "bsc-finance",
    fullName: "Bachelor of Science in Finance",
    abbreviation: "B.Sc. Finance",
    description: "Quantitative finance, investment analysis, financial modeling, and risk assessment for finance professionals.",
    marketDemand: {
      level: "High",
      explanation: "High demand in investment banking, wealth management, and financial analysis roles."
    },
    futureGrowth: {
      prospects: "Strong growth with increasing complexity of financial markets",
      timeframe: "24-28% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 450000,
      midCareer: 1200000,
      senior: 2800000,
      years: [0, 2, 5, 8, 12],
      amounts: [450000, 700000, 1200000, 2000000, 2800000]
    },
    duration: "3 years",
    eligibility: "10+2 with Mathematics. Strong analytical and quantitative skills."
  },
  {
    id: "bba-finance",
    fullName: "Bachelor of Business Administration in Finance",
    abbreviation: "BBA Finance",
    description: "Business management with finance specialization covering corporate finance, investment management, and financial planning.",
    marketDemand: {
      level: "High",
      explanation: "High demand in corporate finance, financial consulting, and investment management."
    },
    futureGrowth: {
      prospects: "Excellent growth with expanding financial services sector",
      timeframe: "25-30% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 400000,
      midCareer: 1100000,
      senior: 2700000,
      years: [0, 2, 5, 8, 12],
      amounts: [400000, 650000, 1100000, 1850000, 2700000]
    },
    duration: "3 years",
    eligibility: "10+2 with any stream. Good mathematical and analytical skills."
  },

  // Integrated Programs
  {
    id: "bcom-ca",
    fullName: "Bachelor of Commerce with Chartered Accountancy",
    abbreviation: "B.Com + CA",
    description: "Integrated program combining commerce degree with CA foundation and intermediate preparation.",
    marketDemand: {
      level: "High",
      explanation: "Extremely high demand for qualified CAs in accounting, taxation, auditing, and financial advisory."
    },
    futureGrowth: {
      prospects: "Outstanding growth with increasing compliance requirements and business complexity",
      timeframe: "30-35% growth over next 10 years"
    },
    salaryProgression: {
      entryLevel: 600000,
      midCareer: 1500000,
      senior: 3500000,
      years: [0, 2, 5, 8, 12],
      amounts: [600000, 900000, 1500000, 2500000, 3500000]
    },
    duration: "3+3 years",
    eligibility: "10+2 Commerce with good academic record. Dedication for rigorous study required."
  },
  {
    id: "bba-mba",
    fullName: "Bachelor of Business Administration with MBA Integration",
    abbreviation: "BBA + MBA",
    description: "Integrated 5-year program providing comprehensive business education from undergraduate to postgraduate level.",
    marketDemand: {
      level: "High",
      explanation: "High demand for management graduates with comprehensive business education."
    },
    futureGrowth: {
      prospects: "Excellent growth with preference for integrated management education",
      timeframe: "22-27% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 500000,
      midCareer: 1300000,
      senior: 3000000,
      years: [0, 2, 5, 8, 12],
      amounts: [500000, 750000, 1300000, 2200000, 3000000]
    },
    duration: "5 years",
    eligibility: "10+2 with good academic record. Leadership aptitude and communication skills."
  }
];