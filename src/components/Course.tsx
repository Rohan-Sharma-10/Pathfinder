import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { SalaryChart } from './SalaryChart';
import { UGDegree } from '@/types/UG';
import { Clock, GraduationCap, TrendingUp, IndianRupee } from 'lucide-react';

interface CourseCardProps {
  degree: UGDegree;
}

export const CourseCard: React.FC<CourseCardProps> = ({ degree }) => {
  const getDemandColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Medium':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'Low':
        return 'bg-red-500/10 text-red-600 border-red-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getDemandProgress = (level: string) => {
    switch (level) {
      case 'High':
        return 85;
      case 'Medium':
        return 60;
      case 'Low':
        return 35;
      default:
        return 0;
    }
  };

  const formatSalary = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {degree.abbreviation}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1 font-medium">
              {degree.fullName}
            </p>
          </div>
          <Badge className={`shrink-0 ${getDemandColor(degree.marketDemand.level)}`}>
            {degree.marketDemand.level} Demand
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          {degree.description}
        </p>
      </CardHeader>

      <CardContent className="relative space-y-6">
        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{degree.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Bachelor's</span>
          </div>
        </div>

        {/* Market Demand */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm text-foreground">Market Demand</h4>
            <span className="text-xs text-muted-foreground">{degree.marketDemand.level}</span>
          </div>
          <Progress value={getDemandProgress(degree.marketDemand.level)} className="h-2" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            {degree.marketDemand.explanation}
          </p>
        </div>

        {/* Future Growth */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <h4 className="font-semibold text-sm text-foreground">Growth Prospects</h4>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {degree.futureGrowth.prospects}
          </p>
          <p className="text-xs font-medium text-green-600">
            {degree.futureGrowth.timeframe}
          </p>
        </div>

        {/* Salary Range */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-sm text-foreground">Salary Progression</h4>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Entry</p>
              <p className="text-sm font-semibold text-foreground">
                {formatSalary(degree.salaryProgression.entryLevel)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Mid-Career</p>
              <p className="text-sm font-semibold text-foreground">
                {formatSalary(degree.salaryProgression.midCareer)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Senior</p>
              <p className="text-sm font-semibold text-foreground">
                {formatSalary(degree.salaryProgression.senior)}
              </p>
            </div>
          </div>
        </div>

        {/* Salary Chart */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-foreground">Career Growth Timeline</h4>
          <SalaryChart degree={degree} />
        </div>

        {/* Eligibility */}
        <div className="space-y-2 pt-4 border-t border-border/50">
          <h4 className="font-semibold text-sm text-foreground">Eligibility</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {degree.eligibility}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};