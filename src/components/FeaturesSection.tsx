import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Shield, Zap, Heart, Users, Star } from "lucide-react";
import featuresMockup from "@/assets/app-features-mockup.png";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for smooth user experience",
    color: "bg-yellow-500/10 text-yellow-600"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level security with end-to-end encryption",
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: Heart,
    title: "Intuitive Design",
    description: "Beautiful interface designed for everyone",
    color: "bg-red-500/10 text-red-600"
  },
  {
    icon: Users,
    title: "Social Integration",
    description: "Connect and share with friends seamlessly",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Smartphone,
    title: "Cross Platform",
    description: "Available on iOS and Android devices",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Ad-free premium features for power users",
    color: "bg-orange-500/10 text-orange-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Features
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Everything You Need
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              In One App
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover powerful features designed to enhance your mobile experience 
            with cutting-edge technology and intuitive design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group bg-gradient-card border-0 shadow-card-app hover:shadow-app transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* App Screens Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img 
                src={featuresMockup}
                alt="App features mockup"
                className="w-full h-auto max-w-2xl drop-shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;