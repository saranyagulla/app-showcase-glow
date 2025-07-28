import { Button } from "@/components/ui/button";
import { Download, Play, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main CTA Content */}
          <div className="mb-12 animate-slide-up">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Your Mobile Experience?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Join millions of users who have already discovered the future of mobile apps. 
              Download now and experience the difference.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button variant="download" size="xl" className="group bg-white text-primary hover:bg-white/90">
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Download for iOS
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="download" size="xl" className="group bg-white text-primary hover:bg-white/90">
              <Play className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Download for Android
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Additional Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>No ads, no tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Premium features included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;