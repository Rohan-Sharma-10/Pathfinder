export interface UGDegree {
  id: string;
  fullName: string;
  abbreviation: string;
  description: string;
  marketDemand: {
    level: 'High' | 'Medium' | 'Low';
    explanation: string;
  };
  futureGrowth: {
    prospects: string;
    timeframe: string;
  };
  salaryProgression: {
    entryLevel: number;
    midCareer: number;
    senior: number;
    years: number[];
    amounts: number[];
  };
  duration: string;
  eligibility: string;
}

export interface SalaryChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension: number;
  }[];
}