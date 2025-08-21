import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { UGDegree } from '@/types/UG';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface SalaryChartProps {
  degree: UGDegree;
}

export const SalaryChart: React.FC<SalaryChartProps> = ({ degree }) => {
  const formatSalary = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        titleColor: 'hsl(var(--popover-foreground))',
        bodyColor: 'hsl(var(--popover-foreground))',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            return `Salary: ${formatSalary(context.parsed.y)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255,255,255,0.2)',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
      y: {
        grid: {
          color: 'rgba(255,255,255,0.2)',
        },
        ticks: {
          color: '#FFFFFF',
          callback: function(value: any) {
            return formatSalary(value);
          },
        },
      },
    },
  };

  const data = {
    labels: degree.salaryProgression.years.map(year => `${year} Year${year > 1 ? 's' : ''}`),
    datasets: [
      {
        label: 'Salary Progression',
        data: degree.salaryProgression.amounts,
        borderColor: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: 'hsl(var(--background))',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  return (
    <div className="h-64 w-full">
      <Line options={options} data={data} />
    </div>
  );
};