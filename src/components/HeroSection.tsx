import { Button } from "@/components/ui/button";
import { Download, Play, Star } from "lucide-react";
import heroMockup from "@/assets/app-mockup-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="relative container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                  Mobile Apps
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 max-w-2xl">
                Experience the most innovative mobile application with cutting-edge features, 
                stunning design, and seamless performance.
              </p>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="download" size="xl" className="group">
                <Download className="w-6 h-6 mr-3" />
                Download on App Store
              </Button>
              <Button variant="download" size="xl" className="group">
                <Play className="w-6 h-6 mr-3" />
                Get it on Google Play
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/90">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="text-white/70">
                <span className="font-bold text-white">1M+</span> Downloads
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img 
                src={heroMockup} 
                alt="App mockup"
                className="w-full max-w-md lg:max-w-lg h-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-[3rem] animate-glow-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;