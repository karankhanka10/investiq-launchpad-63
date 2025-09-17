import heroBackground from "@/assets/hero-bg.png";
import { TrendingUp, Target, Users, ArrowRight } from "lucide-react";
const Hero = () => {
  const stats = [{
    value: "+24.7%",
    label: "Average annualized ROI",
    icon: TrendingUp,
    delay: "0.2s"
  }, {
    value: "5,892",
    label: "Active strategies",
    icon: Target,
    delay: "0.4s"
  }, {
    value: "156,000+",
    label: "Global users",
    icon: Users,
    delay: "0.6s"
  }];
  return <section className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat hero-background">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay noise-texture"></div>
      
      <div className="relative w-full hero-section-padding">
        {/* Hero Content */}
        <div className="hero-content-enhanced animate-fade-in">
          <h1 className="hero-headline">Intelligent investing made effortless</h1>
          
          <p className="hero-subtext">Leverage AI-powered insights to build a smarter portfolio, reduce risk, and capture opportunities that traditional analysis might miss.</p>
          
          <button className="btn-cta-glass group inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span>Start Investing</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </button>
        </div>

        {/* Enhanced Stats Section */}
        <div className="absolute bottom-20 left-6 right-6">
          <div className="max-w-7xl mx-auto">
            <div className="stats-container">
              {stats.map((stat, index) => {
              const Icon = stat.icon;
              return <div key={index} className="stats-item animate-slide-up" style={{
                animationDelay: stat.delay
              }}>
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <div className="stats-icon">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="stats-number">{stat.value}</div>
                  </div>
                    <div className="stats-label">{stat.label}</div>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;