import { lawDegrees } from '@/data/Law';
import { ArrowLeft, Scale, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CourseCard } from '@/components/Course';

export default function LawJustice() {
  const totalDegrees = lawDegrees.length;
  const highDemandDegrees = lawDegrees.filter(d => d.marketDemand.level === 'High').length;
  const avgSalaryRange = {
    min: Math.min(...lawDegrees.map(d => d.salaryProgression.entryLevel)),
    max: Math.max(...lawDegrees.map(d => d.salaryProgression.senior))
  };

  const formatSalary = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/fields">
              <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
                <ArrowLeft className="h-4 w-4" />
                Back to Fields
              </Button>
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Scale className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Undergraduate Degrees in
              <span className="block text-primary mt-2">Law & Justice</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore comprehensive legal career paths from traditional law practice to specialized legal domains. 
              Discover detailed insights into market demand, salary progression, and future growth prospects in the justice system.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">{totalDegrees}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Degree Programs</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="text-2xl font-bold text-foreground">{highDemandDegrees}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">High Demand</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">85%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Job Security</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg">₹</span>
                    <span className="text-2xl font-bold text-foreground">
                      {formatSalary(avgSalaryRange.min)}-{formatSalary(avgSalaryRange.max)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Salary Range</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Degrees Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Legal Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each program includes detailed market analysis, career progression insights, and realistic salary expectations 
              to help you make informed decisions about your legal career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawDegrees.map((degree) => (
              <CourseCard key={degree.id} degree={degree} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}