import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Users, Award, Clock, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of experience",
    },
    {
      icon: Users,
      title: "Interactive Learning",
      description: "Engage with peers and instructors in real-time discussions",
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "Earn recognized certifications to advance your career",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace, anytime and anywhere",
    },
  ];

  const stats = [
    { value: "50,000+", label: "Active Students" },
    { value: "500+", label: "Expert Instructors" },
    { value: "1,000+", label: "Online Courses" },
    { value: "98%", label: "Success Rate" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      content: "The courses are well-structured and the instructors are incredibly knowledgeable. I've advanced my career significantly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Analyst",
      content: "Flexible learning schedule allowed me to balance work and education perfectly. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      content: "The certification I earned opened up new opportunities. The quality of education exceeded my expectations.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your Future with Online Learning
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Access world-class education from anywhere. Learn new skills, advance your career, and achieve your goals with our expert-led courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/courses">Browse Courses</Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20 text-primary-foreground">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src={heroImage}
                alt="Students learning online"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EduLearn?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive learning experiences designed to help you succeed in your educational journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-3">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">
                Start Your Learning Journey Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of successful students who have transformed their careers through our platform.
              </p>
              <ul className="space-y-4">
                {[
                  "Lifetime access to course materials",
                  "Certificate of completion",
                  "24/7 student support",
                  "Money-back guarantee",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" asChild>
                <Link to="/courses">Get Started Now</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <Card className="bg-gradient-primary text-primary-foreground border-0">
                <CardHeader>
                  <CardTitle className="text-3xl">98%</CardTitle>
                  <CardDescription className="text-primary-foreground/80">Student Satisfaction</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-secondary text-secondary-foreground border-0">
                <CardHeader>
                  <CardTitle className="text-3xl">1000+</CardTitle>
                  <CardDescription className="text-secondary-foreground/80">Courses Available</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-accent text-accent-foreground border-0">
                <CardHeader>
                  <CardTitle className="text-3xl">50K+</CardTitle>
                  <CardDescription className="text-accent-foreground/80">Active Students</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-primary text-primary-foreground border-0">
                <CardHeader>
                  <CardTitle className="text-3xl">24/7</CardTitle>
                  <CardDescription className="text-primary-foreground/80">Support Available</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read success stories from our community of learners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of learners and take the first step towards achieving your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20 text-primary-foreground" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
