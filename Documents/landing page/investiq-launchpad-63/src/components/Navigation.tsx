import { ArrowRight } from "lucide-react";

const Navigation = () => {
  const navLinks = [
    { name: "Platform", href: "#platform" },
    { name: "Strategies", href: "#strategies" },
    { name: "Insights", href: "#insights" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="font-investment text-nav-text text-xl font-bold">
          InvestAI
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-nav-text hover:text-nav-text-hover transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Sign In */}
        <div className="flex items-center space-x-2">
          <a
            href="#signin"
            className="text-nav-text hover:text-nav-text-hover transition-colors duration-200 font-medium flex items-center gap-1"
          >
            Sign In
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;