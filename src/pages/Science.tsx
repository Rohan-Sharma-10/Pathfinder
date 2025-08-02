import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, TrendingUp, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { scienceDegrees } from "@/data/Science&Research";
import { CourseCard } from "@/components/Course";

const ScienceResearch = () => {
  const navigate = useNavigate();

  const formatSalary = (amount: number): string => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}K`;
    }
    return `₹${amount}`;
  };

  // Calculate statistics
  const totalDegrees = scienceDegrees.length;
  const highDemandDegrees = scienceDegrees.filter(degree => degree.marketDemand.level === "High").length;
  const salaries = scienceDegrees.map(degree => degree.salaryProgression.entryLevel);
  const avgSalaryMin = Math.min(...salaries);
  const avgSalaryMax = Math.max(...salaries);

  return (
    <div className="min-h-screen deep-purple-bg py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/fields")}
            className="mb-6 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Fields
          </Button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Science & Research Degrees
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore undergraduate science degrees that form the foundation of scientific research and innovation. From pure sciences to applied research fields.
            </p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="gradient-card border-border/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Programs
              </CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{totalDegrees}</div>
              <p className="text-xs text-muted-foreground">
                Comprehensive science degrees
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                High Demand
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{highDemandDegrees}</div>
              <p className="text-xs text-muted-foreground">
                Programs with excellent prospects
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Research Focus
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">95%</div>
              <p className="text-xs text-muted-foreground">
                Strong research opportunities
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Salary Range
              </CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {formatSalary(avgSalaryMin)} - {formatSalary(avgSalaryMax)}
              </div>
              <p className="text-xs text-muted-foreground">
                Entry-level annual package
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Degrees Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Science Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover diverse science and research programs across pure and applied sciences, each offering unique pathways to scientific careers and advanced research opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scienceDegrees.map((degree) => (
              <CourseCard key={degree.id} degree={degree} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceResearch;