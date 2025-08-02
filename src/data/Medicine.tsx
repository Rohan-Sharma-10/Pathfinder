import { UGDegree } from '@/types/UG';

export const medicineDegrees: UGDegree[] = [
  {
    id: 'mbbs',
    fullName: 'Bachelor of Medicine, Bachelor of Surgery',
    abbreviation: 'MBBS',
    description: 'The most prestigious medical degree qualifying graduates to practice as doctors after internship and licensing.',
    marketDemand: {
      level: 'High',
      explanation: 'Extremely high demand across all healthcare sectors with guaranteed employment opportunities.'
    },
    futureGrowth: {
      prospects: 'Excellent growth with increasing healthcare needs and medical tourism.',
      timeframe: '15-20% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 600000,
      midCareer: 1500000,
      senior: 3500000,
      years: [1, 3, 5, 8, 12],
      amounts: [600000, 900000, 1500000, 2200000, 3500000]
    },
    duration: '5.5 years (including 1 year internship)',
    eligibility: 'NEET-UG with Physics, Chemistry, Biology'
  },
  {
    id: 'bds',
    fullName: 'Bachelor of Dental Surgery',
    abbreviation: 'BDS',
    description: 'Specialized medical degree focusing on oral health, dental procedures, and maxillofacial surgery.',
    marketDemand: {
      level: 'High',
      explanation: 'Growing demand due to increased awareness of oral health and cosmetic dentistry.'
    },
    futureGrowth: {
      prospects: 'Strong growth in private practice and specialty dental services.',
      timeframe: '12-15% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 400000,
      midCareer: 1000000,
      senior: 2500000,
      years: [1, 3, 5, 8, 12],
      amounts: [400000, 600000, 1000000, 1600000, 2500000]
    },
    duration: '5 years (including 1 year internship)',
    eligibility: 'NEET-UG with Physics, Chemistry, Biology'
  },
  {
    id: 'bams',
    fullName: 'Bachelor of Ayurvedic Medicine and Surgery',
    abbreviation: 'BAMS',
    description: 'Traditional Indian medicine degree combining ancient Ayurvedic principles with modern medical knowledge.',
    marketDemand: {
      level: 'Medium',
      explanation: 'Growing demand for alternative medicine and government support for AYUSH systems.'
    },
    futureGrowth: {
      prospects: 'Increasing acceptance of integrated medicine and wellness tourism.',
      timeframe: '10-12% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 300000,
      midCareer: 700000,
      senior: 1500000,
      years: [1, 3, 5, 8, 12],
      amounts: [300000, 450000, 700000, 1000000, 1500000]
    },
    duration: '5.5 years (including 1 year internship)',
    eligibility: 'NEET-UG with Physics, Chemistry, Biology'
  },
  {
    id: 'bhms',
    fullName: 'Bachelor of Homeopathic Medicine and Surgery',
    abbreviation: 'BHMS',
    description: 'Homeopathic medicine degree focusing on natural healing and individualized treatment approaches.',
    marketDemand: {
      level: 'Medium',
      explanation: 'Steady demand for holistic healthcare and chronic disease management.'
    },
    futureGrowth: {
      prospects: 'Growing interest in preventive and holistic healthcare approaches.',
      timeframe: '8-10% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 250000,
      midCareer: 600000,
      senior: 1200000,
      years: [1, 3, 5, 8, 12],
      amounts: [250000, 400000, 600000, 850000, 1200000]
    },
    duration: '5.5 years (including 1 year internship)',
    eligibility: 'NEET-UG with Physics, Chemistry, Biology'
  },
  {
    id: 'bpt',
    fullName: 'Bachelor of Physiotherapy',
    abbreviation: 'BPT',
    description: 'Rehabilitation medicine degree focusing on movement therapy, injury recovery, and physical wellness.',
    marketDemand: {
      level: 'High',
      explanation: 'High demand due to aging population, sports injuries, and lifestyle diseases.'
    },
    futureGrowth: {
      prospects: 'Excellent growth with increasing focus on preventive healthcare.',
      timeframe: '18-20% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 350000,
      midCareer: 800000,
      senior: 1800000,
      years: [1, 3, 5, 8, 12],
      amounts: [350000, 500000, 800000, 1200000, 1800000]
    },
    duration: '4.5 years (including 6 months internship)',
    eligibility: 'Class 12 with Physics, Chemistry, Biology (50% aggregate)'
  },
  {
    id: 'bsc-nursing',
    fullName: 'Bachelor of Science in Nursing',
    abbreviation: 'BSc Nursing',
    description: 'Comprehensive nursing degree covering patient care, medical procedures, and healthcare management.',
    marketDemand: {
      level: 'High',
      explanation: 'Critical shortage of qualified nurses globally with excellent job security.'
    },
    futureGrowth: {
      prospects: 'Outstanding growth with global opportunities and specialty nursing roles.',
      timeframe: '20-25% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 300000,
      midCareer: 700000,
      senior: 1500000,
      years: [1, 3, 5, 8, 12],
      amounts: [300000, 450000, 700000, 1000000, 1500000]
    },
    duration: '4 years',
    eligibility: 'Class 12 with Physics, Chemistry, Biology (45% aggregate)'
  },
  {
    id: 'bpharm',
    fullName: 'Bachelor of Pharmacy',
    abbreviation: 'BPharm',
    description: 'Pharmaceutical sciences degree covering drug development, manufacturing, and dispensing.',
    marketDemand: {
      level: 'High',
      explanation: 'High demand in pharmaceutical industry, hospitals, and research organizations.'
    },
    futureGrowth: {
      prospects: 'Strong growth with expanding pharmaceutical sector and drug research.',
      timeframe: '15-18% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 350000,
      midCareer: 800000,
      senior: 2000000,
      years: [1, 3, 5, 8, 12],
      amounts: [350000, 500000, 800000, 1300000, 2000000]
    },
    duration: '4 years',
    eligibility: 'Class 12 with Physics, Chemistry, Mathematics/Biology'
  },
  {
    id: 'bmlt',
    fullName: 'Bachelor in Medical Laboratory Technology',
    abbreviation: 'BMLT',
    description: 'Laboratory medicine degree focusing on diagnostic testing, pathology, and medical equipment operation.',
    marketDemand: {
      level: 'High',
      explanation: 'High demand for diagnostic services and laboratory automation specialists.'
    },
    futureGrowth: {
      prospects: 'Excellent growth with advancing diagnostic technologies and personalized medicine.',
      timeframe: '16-18% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 250000,
      midCareer: 600000,
      senior: 1200000,
      years: [1, 3, 5, 8, 12],
      amounts: [250000, 400000, 600000, 850000, 1200000]
    },
    duration: '3-4 years',
    eligibility: 'Class 12 with Physics, Chemistry, Biology'
  },
  {
    id: 'bot',
    fullName: 'Bachelor of Occupational Therapy',
    abbreviation: 'BOT',
    description: 'Rehabilitation therapy degree helping patients regain independence in daily activities and work skills.',
    marketDemand: {
      level: 'Medium',
      explanation: 'Growing demand for rehabilitation services and workplace ergonomics.'
    },
    futureGrowth: {
      prospects: 'Good growth with increasing awareness of occupational health.',
      timeframe: '12-15% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 300000,
      midCareer: 650000,
      senior: 1300000,
      years: [1, 3, 5, 8, 12],
      amounts: [300000, 450000, 650000, 900000, 1300000]
    },
    duration: '4.5 years (including 6 months internship)',
    eligibility: 'Class 12 with Physics, Chemistry, Biology'
  },
  {
    id: 'bsc-radiology',
    fullName: 'Bachelor of Science in Medical Imaging & Radiology Technology',
    abbreviation: 'BSc Radiology',
    description: 'Medical imaging technology degree covering X-rays, CT scans, MRI, and advanced diagnostic imaging.',
    marketDemand: {
      level: 'High',
      explanation: 'High demand for imaging technologists with advancing medical imaging technology.'
    },
    futureGrowth: {
      prospects: 'Excellent growth with AI integration in medical imaging and telemedicine.',
      timeframe: '20-22% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 350000,
      midCareer: 750000,
      senior: 1600000,
      years: [1, 3, 5, 8, 12],
      amounts: [350000, 500000, 750000, 1100000, 1600000]
    },
    duration: '3-4 years',
    eligibility: 'Class 12 with Physics, Chemistry, Biology/Mathematics'
  },
  {
    id: 'bnys',
    fullName: 'Bachelor of Naturopathy and Yogic Sciences',
    abbreviation: 'BNYS',
    description: 'Natural healing degree combining naturopathy, yoga therapy, and holistic wellness approaches.',
    marketDemand: {
      level: 'Medium',
      explanation: 'Growing demand for wellness and preventive healthcare services.'
    },
    futureGrowth: {
      prospects: 'Good growth with increasing focus on wellness tourism and lifestyle medicine.',
      timeframe: '10-12% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 250000,
      midCareer: 550000,
      senior: 1100000,
      years: [1, 3, 5, 8, 12],
      amounts: [250000, 350000, 550000, 750000, 1100000]
    },
    duration: '5.5 years (including 1 year internship)',
    eligibility: 'Class 12 with Physics, Chemistry, Biology'
  },
  {
    id: 'bsc-psychology',
    fullName: 'Bachelor of Science in Psychology',
    abbreviation: 'BSc Psychology',
    description: 'Psychology degree focusing on mental health awareness, counseling basics, and behavioral sciences.',
    marketDemand: {
      level: 'Medium',
      explanation: 'Growing awareness of mental health creating demand for psychology professionals.'
    },
    futureGrowth: {
      prospects: 'Good growth with increasing mental health awareness and workplace wellness.',
      timeframe: '12-14% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 250000,
      midCareer: 500000,
      senior: 1000000,
      years: [1, 3, 5, 8, 12],
      amounts: [250000, 350000, 500000, 700000, 1000000]
    },
    duration: '3 years',
    eligibility: 'Class 12 with any stream (Psychology as subject preferred)'
  },
  {
    id: 'baslp',
    fullName: 'Bachelor of Audiology and Speech-Language Pathology',
    abbreviation: 'BASLP',
    description: 'Specialized degree focusing on hearing disorders, speech therapy, and communication rehabilitation.',
    marketDemand: {
      level: 'Medium',
      explanation: 'Steady demand for speech and hearing specialists in hospitals and special schools.'
    },
    futureGrowth: {
      prospects: 'Good growth with increasing awareness of communication disorders.',
      timeframe: '10-12% growth expected over next 10 years'
    },
    salaryProgression: {
      entryLevel: 300000,
      midCareer: 600000,
      senior: 1200000,
      years: [1, 3, 5, 8, 12],
      amounts: [300000, 420000, 600000, 850000, 1200000]
    },
    duration: '4 years (including 1 year internship)',
    eligibility: 'Class 12 with Physics, Chemistry, Biology'
  }
];