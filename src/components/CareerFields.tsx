import { useState, useEffect } from "react";
import { 
  Stethoscope, 
  Calculator, 
  Palette, 
  Code, 
  Scale, 
  Building, 
  Atom, 
  Megaphone,
  Heart,
  Globe
} from "lucide-react";

const CareerFields = () => {
  const [activeField, setActiveField] = useState(0);

  const fields = [
    {
      icon: Stethoscope,
      title: "Medicine & Healthcare",
      description: "Heal, care, and make a difference in people's lives",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Code,
      title: "Engineering & Technology",
      description: "Build the future with innovation and technical expertise",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Calculator,
      title: "Commerce & Finance",
      description: "Navigate the world of business and financial growth",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Palette,
      title: "Arts & Design",
      description: "Express creativity and bring imagination to life",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Scale,
      title: "Law & Justice",
      description: "Uphold justice and make a meaningful impact on society",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: Building,
      title: "Management & Business",
      description: "Lead teams and drive organizational success",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Atom,
      title: "Science & Research",
      description: "Discover new frontiers and expand human knowledge",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50"
    },
    {
      icon: Megaphone,
      title: "Media & Communication",
      description: "Tell stories and connect with audiences worldwide",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: Heart,
      title: "Social Work & Psychology",
      description: "Support communities and understand human behavior",
      color: "text-rose-500",
      bgColor: "bg-rose-50"
    },
    {
      icon: Globe,
      title: "International Relations",
      description: "Bridge cultures and shape global policies",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveField((prev) => (prev + 1) % fields.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [fields.length]);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Diverse 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Career Fields</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the perfect field that matches your passion and skills. From traditional careers to emerging opportunities, 
            we help you explore all possibilities.
          </p>
        </div>

        {/* Featured Field Display */}
        <div className="mb-12">
          <div className="bg-gradient-card rounded-3xl p-12 text-center shadow-card animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className={`p-6 rounded-full ${fields[activeField].bgColor} transition-all duration-500`}>
                {(() => {
                  const IconComponent = fields[activeField].icon;
                  return <IconComponent className={`w-16 h-16 ${fields[activeField].color} animate-float`} />;
                })()}
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-500">
              {fields[activeField].title}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-500">
              {fields[activeField].description}
            </p>
          </div>
        </div>

        {/* Grid of All Fields */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {fields.map((field, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === activeField 
                  ? 'bg-primary text-primary-foreground shadow-glow scale-105' 
                  : 'bg-card hover:bg-accent text-card-foreground hover:shadow-card'
              }`}
              onClick={() => setActiveField(index)}
            >
              <div className="flex flex-col items-center text-center">
                {(() => {
                  const IconComponent = field.icon;
                  return <IconComponent className={`w-8 h-8 mb-3 ${
                    index === activeField ? 'text-white' : field.color
                  }`} />;
                })()}
                <h4 className="text-sm font-semibold leading-tight">
                  {field.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {fields.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeField ? 'w-8 bg-primary' : 'w-2 bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerFields;