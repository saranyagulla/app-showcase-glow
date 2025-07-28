import { Badge } from "@/components/ui/badge";

const stats = [
  { number: "1M+", label: "Active Users" },
  { number: "4.9", label: "App Store Rating" },
  { number: "50M+", label: "Downloads" },
  { number: "99.9%", label: "Uptime" }
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30">
            Trusted Worldwide
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Join Millions of
            <span className="block">Happy Users</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our app has transformed the mobile experience for users across the globe.
            Be part of the revolution.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-white/70 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;