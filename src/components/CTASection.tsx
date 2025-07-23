import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Star className="w-6 h-6 text-white" />
        </div>
        <div className="absolute top-20 right-20 animate-float delay-1000">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float delay-2000">
          <Users className="w-7 h-7 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float delay-500">
          <Star className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Shape Your
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Bright Future?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't let uncertainty hold you back. Take the first step towards your dream career today. 
            Our expert counselors are ready to guide you on your journey to success.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">1-on-1 Guidance</h3>
              <p className="text-white/80 text-sm">Personalized counseling sessions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Career Insights</h3>
              <p className="text-white/80 text-sm">Latest industry trends & opportunities</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Star className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Success Support</h3>
              <p className="text-white/80 text-sm">End-to-end career planning</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="explore" 
              size="xl"
              className="group bg-white text-primary hover:bg-white/90 hover:scale-105 animate-slide-in-right"
            >
              Explore All Courses
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="xl"
              className="text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 animate-slide-in-right delay-200"
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-4">Trusted by students from top schools</p>
            <div className="flex justify-center items-center space-x-8 text-white/60">
              <span className="text-sm">DPS Schools</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Kendriya Vidyalaya</span>
              <span className="text-sm">•</span>
              <span className="text-sm">CBSE Schools</span>
              <span className="text-sm">•</span>
              <span className="text-sm">State Boards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;