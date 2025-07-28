import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    avatar: "SJ",
    rating: 5,
    text: "This app has completely transformed how I work. The interface is intuitive and the features are exactly what I needed."
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "MC",
    rating: 5,
    text: "Outstanding performance and reliability. I've never experienced any bugs or crashes. Highly recommended!"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: "ER",
    rating: 5,
    text: "The social features are amazing! It's so easy to collaborate with my team and share updates in real-time."
  },
  {
    name: "David Park",
    role: "Freelancer",
    avatar: "DP",
    rating: 5,
    text: "I love how secure and private this app is. Finally, an app that takes user privacy seriously while being feature-rich."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What Users
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from real users who have 
            experienced the power of our app.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-0 shadow-card-app hover:shadow-app transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;