import { UGDegree } from '@/types/UG';

export const engineeringDegrees: UGDegree[] = [
  // Core Engineering
  {
    id: "btech-cse",
    fullName: "Bachelor of Technology in Computer Science and Engineering",
    abbreviation: "B.Tech CSE",
    description: "Comprehensive program covering programming, algorithms, software development, and emerging technologies like AI and machine learning.",
    marketDemand: {
      level: "High",
      explanation: "Extremely high demand across all industries with digital transformation driving massive recruitment in tech companies, startups, and traditional businesses."
    },
    futureGrowth: {
      prospects: "Outstanding growth with emerging technologies like AI, cloud computing, and blockchain creating new opportunities",
      timeframe: "Expected 25-30% growth over next 10 years"
    },
    salaryProgression: {
      entryLevel: 600000,
      midCareer: 1500000,
      senior: 3500000,
      years: [0, 2, 5, 8, 12],
      amounts: [600000, 900000, 1500000, 2500000, 3500000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Valid JEE Main/Advanced score required for top colleges."
  },
  {
    id: "btech-mechanical",
    fullName: "Bachelor of Technology in Mechanical Engineering",
    abbreviation: "B.Tech Mechanical",
    description: "Traditional engineering discipline covering design, manufacturing, thermal systems, and automation in various industries.",
    marketDemand: {
      level: "High",
      explanation: "Strong demand in automotive, aerospace, manufacturing, and energy sectors with increasing focus on automation and sustainable technologies."
    },
    futureGrowth: {
      prospects: "Steady growth with Industry 4.0, green energy, and advanced manufacturing technologies",
      timeframe: "15-20% growth expected over next 8 years"
    },
    salaryProgression: {
      entryLevel: 450000,
      midCareer: 1200000,
      senior: 2800000,
      years: [0, 2, 5, 8, 12],
      amounts: [450000, 650000, 1200000, 2000000, 2800000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Valid JEE Main score required."
  },
  {
    id: "btech-civil",
    fullName: "Bachelor of Technology in Civil Engineering",
    abbreviation: "B.Tech Civil",
    description: "Infrastructure development focusing on construction, transportation, water resources, and smart city development.",
    marketDemand: {
      level: "High",
      explanation: "High demand driven by infrastructure development, smart cities initiative, and sustainable construction practices."
    },
    futureGrowth: {
      prospects: "Strong growth with infrastructure development and green building technologies",
      timeframe: "18-22% growth over next 10 years"
    },
    salaryProgression: {
      entryLevel: 400000,
      midCareer: 1000000,
      senior: 2500000,
      years: [0, 2, 5, 8, 12],
      amounts: [400000, 600000, 1000000, 1800000, 2500000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Valid JEE Main score required."
  },
  {
    id: "btech-electrical",
    fullName: "Bachelor of Technology in Electrical Engineering",
    abbreviation: "B.Tech Electrical",
    description: "Power systems, electrical machinery, control systems, and renewable energy technologies for modern electrical infrastructure.",
    marketDemand: {
      level: "High",
      explanation: "Strong demand in power sector, renewable energy, electric vehicles, and smart grid technologies."
    },
    futureGrowth: {
      prospects: "Excellent growth with renewable energy transition and electric vehicle adoption",
      timeframe: "20-25% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 450000,
      midCareer: 1100000,
      senior: 2600000,
      years: [0, 2, 5, 8, 12],
      amounts: [450000, 650000, 1100000, 1900000, 2600000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Valid JEE Main score required."
  },
  {
    id: "btech-ece",
    fullName: "Bachelor of Technology in Electronics and Communication Engineering",
    abbreviation: "B.Tech ECE",
    description: "Electronics, communication systems, signal processing, and embedded systems for telecommunications and consumer electronics.",
    marketDemand: {
      level: "High",
      explanation: "High demand in telecommunications, consumer electronics, IoT, and embedded systems development."
    },
    futureGrowth: {
      prospects: "Strong growth with 5G, IoT, and smart device proliferation",
      timeframe: "22-28% growth over next 10 years"
    },
    salaryProgression: {
      entryLevel: 500000,
      midCareer: 1300000,
      senior: 3000000,
      years: [0, 2, 5, 8, 12],
      amounts: [500000, 750000, 1300000, 2200000, 3000000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Valid JEE Main score required."
  },
  {
    id: "btech-chemical",
    fullName: "Bachelor of Technology in Chemical Engineering",
    abbreviation: "B.Tech Chemical",
    description: "Process engineering, chemical processes, biotechnology, and sustainable manufacturing in chemical and process industries.",
    marketDemand: {
      level: "Medium",
      explanation: "Steady demand in chemical, pharmaceutical, petrochemical, and food processing industries."
    },
    futureGrowth: {
      prospects: "Moderate growth with green chemistry and sustainable process development",
      timeframe: "12-15% growth over next 8 years"
    },
    salaryProgression: {
      entryLevel: 450000,
      midCareer: 1200000,
      senior: 2700000,
      years: [0, 2, 5, 8, 12],
      amounts: [450000, 650000, 1200000, 2000000, 2700000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Valid JEE Main score required."
  },

  // Emerging Tech
  {
    id: "btech-ai-ml",
    fullName: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
    abbreviation: "B.Tech AI & ML",
    description: "Cutting-edge program focused on AI algorithms, machine learning, deep learning, and intelligent system development.",
    marketDemand: {
      level: "High",
      explanation: "Extremely high demand as AI transforms every industry with massive investment in AI research and development."
    },
    futureGrowth: {
      prospects: "Exceptional growth as AI becomes integral to all sectors",
      timeframe: "40-50% growth expected over next 10 years"
    },
    salaryProgression: {
      entryLevel: 800000,
      midCareer: 2000000,
      senior: 4500000,
      years: [0, 2, 5, 8, 12],
      amounts: [800000, 1200000, 2000000, 3200000, 4500000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Strong aptitude for programming and mathematics."
  },
  {
    id: "btech-data-science",
    fullName: "Bachelor of Technology in Data Science",
    abbreviation: "B.Tech Data Science",
    description: "Data analytics, statistical modeling, big data technologies, and business intelligence for data-driven decision making.",
    marketDemand: {
      level: "High",
      explanation: "Very high demand as organizations seek data-driven insights with shortage of skilled data professionals."
    },
    futureGrowth: {
      prospects: "Outstanding growth with data becoming crucial for business strategy",
      timeframe: "35-40% growth over next 10 years"
    },
    salaryProgression: {
      entryLevel: 700000,
      midCareer: 1800000,
      senior: 4000000,
      years: [0, 2, 5, 8, 12],
      amounts: [700000, 1100000, 1800000, 2800000, 4000000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Strong analytical and programming skills preferred."
  },
  {
    id: "btech-cybersecurity",
    fullName: "Bachelor of Technology in Cyber Security",
    abbreviation: "B.Tech Cyber Security",
    description: "Information security, ethical hacking, network security, and digital forensics to protect digital infrastructure.",
    marketDemand: {
      level: "High",
      explanation: "Extremely high demand due to increasing cyber threats and regulatory compliance requirements across all sectors."
    },
    futureGrowth: {
      prospects: "Exceptional growth with increasing digitalization and cyber threats",
      timeframe: "30-35% growth over next 10 years"
    },
    salaryProgression: {
      entryLevel: 600000,
      midCareer: 1600000,
      senior: 3800000,
      years: [0, 2, 5, 8, 12],
      amounts: [600000, 900000, 1600000, 2600000, 3800000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Interest in security and ethical hacking."
  },

  // Specialized Engineering
  {
    id: "btech-aerospace",
    fullName: "Bachelor of Technology in Aerospace Engineering",
    abbreviation: "B.Tech Aerospace",
    description: "Aircraft and spacecraft design, propulsion systems, and aerodynamics for aviation and space industries.",
    marketDemand: {
      level: "Medium",
      explanation: "Growing demand with India's space program expansion and increasing aviation sector."
    },
    futureGrowth: {
      prospects: "Strong growth with space commercialization and aviation expansion",
      timeframe: "20-25% growth over next 10 years"
    },
    salaryProgression: {
      entryLevel: 550000,
      midCareer: 1400000,
      senior: 3200000,
      years: [0, 2, 5, 8, 12],
      amounts: [550000, 800000, 1400000, 2300000, 3200000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics. Strong mathematical and analytical skills."
  },
  {
    id: "btech-biomedical",
    fullName: "Bachelor of Technology in Biomedical Engineering",
    abbreviation: "B.Tech Biomedical",
    description: "Medical device development, biomedical instrumentation, and healthcare technology solutions.",
    marketDemand: {
      level: "Medium",
      explanation: "Growing demand in healthcare technology sector with increasing focus on medical devices and digital health."
    },
    futureGrowth: {
      prospects: "Strong growth with healthcare digitization and aging population",
      timeframe: "25-30% growth over next 10 years"
    },
    salaryProgression: {
      entryLevel: 500000,
      midCareer: 1300000,
      senior: 2900000,
      years: [0, 2, 5, 8, 12],
      amounts: [500000, 750000, 1300000, 2100000, 2900000]
    },
    duration: "4 years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics/Biology. Interest in healthcare technology."
  }
];