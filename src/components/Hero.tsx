import heroBackground from "@/assets/hero-bg.png";
import { TrendingUp, Target, Users } from "lucide-react";
const Hero = () => {
  const stats = [{
    value: "+18.3%",
    label: "Average annualized ROI",
    icon: TrendingUp,
    delay: "0.2s"
  }, {
    value: "3,427",
    label: "Active strategies",
    icon: Target,
    delay: "0.4s"
  }, {
    value: "72,000+",
    label: "Global users",
    icon: Users,
    delay: "0.6s"
  }];
  return <section className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroBackground})`
  }}>
      <div className="w-full section-padding">
        {/* Hero Content */}
        <div className="hero-content animate-fade-in">
          <h1 className="hero-headline">Intelligent investing made effortless</h1>
          
          <p className="hero-subtext">
            Harness the power of AI-driven investment strategies to optimize your portfolio and maximize returns with institutional-grade analytics.
          </p>
          
          <button className="btn-cta inline-flex items-center gap-2 animate-glow-pulse">
            Start Investing
            <TrendingUp className="w-5 h-5" />
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
                        <Icon className="w-6 h-6" />
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