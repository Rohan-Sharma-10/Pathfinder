import { CheckCircle, Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Personalized Guidance",
      description: "Get tailored advice based on your interests, strengths, and career aspirations."
    },
    {
      icon: Users,
      title: "Expert Counselors",
      description: "Learn from experienced professionals who understand the current job market."
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "Join thousands of successful students who found their perfect career path."
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Support",
      description: "From course selection to career planning, we're with you every step of the way."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Our Platform?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand that choosing your career path after 12th grade is one of life's most important decisions. 
            That's why we're here to guide you through every step of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <feature.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;