import heroBackground from "@/assets/hero-bg.png";

const Hero = () => {
  const stats = [
    { value: "+18.3%", label: "Average annualized ROI" },
    { value: "3,427", label: "Active strategies" },
    { value: "72,000+", label: "Global users" },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroBackground})`,
      }}
    >
      <div className="w-full px-6 py-20">
        {/* Hero Content */}
        <div className="pl-20 max-w-[550px] text-left">
          <h1 className="font-investment text-hero-text text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Smarter investing
            <br />
            starts here
          </h1>
          
          <p className="text-hero-text-secondary text-lg md:text-xl leading-relaxed mb-10">
            Harness the power of AI-driven investment strategies to optimize your portfolio and maximize returns with institutional-grade analytics.
          </p>
          
          <button className="btn-cta inline-flex items-center">
            Start Investing
          </button>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-20 left-6 right-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="stats-number">{stat.value}</div>
                  <div className="stats-label mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;