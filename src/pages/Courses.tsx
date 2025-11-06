import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, Users, Star, BookOpen } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript from scratch. Build responsive websites and modern web applications.",
      category: "Web Development",
      level: "Beginner",
      duration: "8 weeks",
      students: 1234,
      rating: 4.8,
      price: "$49.99",
    },
    {
      title: "Advanced React Development",
      description: "Master React, hooks, state management, and build production-ready applications.",
      category: "Web Development",
      level: "Advanced",
      duration: "10 weeks",
      students: 856,
      rating: 4.9,
      price: "$79.99",
    },
    {
      title: "Python for Data Science",
      description: "Learn Python programming and data analysis using pandas, NumPy, and visualization libraries.",
      category: "Data Science",
      level: "Intermediate",
      duration: "12 weeks",
      students: 2103,
      rating: 4.7,
      price: "$69.99",
    },
    {
      title: "Digital Marketing Mastery",
      description: "Comprehensive guide to SEO, social media marketing, content strategy, and analytics.",
      category: "Marketing",
      level: "Beginner",
      duration: "6 weeks",
      students: 987,
      rating: 4.6,
      price: "$39.99",
    },
    {
      title: "UI/UX Design Principles",
      description: "Create beautiful, user-friendly interfaces. Learn design thinking and prototyping.",
      category: "Design",
      level: "Beginner",
      duration: "8 weeks",
      students: 1456,
      rating: 4.8,
      price: "$59.99",
    },
    {
      title: "Machine Learning Basics",
      description: "Introduction to ML algorithms, neural networks, and practical AI applications.",
      category: "Data Science",
      level: "Intermediate",
      duration: "14 weeks",
      students: 743,
      rating: 4.9,
      price: "$89.99",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-accent text-accent-foreground";
      case "Intermediate":
        return "bg-secondary text-secondary-foreground";
      case "Advanced":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Next Skill</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Choose from 1,500+ industry-aligned courses with new content added weekly
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge variant="outline">{course.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-semibold">{course.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">(Reviews)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-4 border-t">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                  <Button variant="default">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">What You'll Get</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every course includes comprehensive resources to support your learning journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Lifetime Access", description: "Access all course materials forever" },
              { icon: Users, title: "Community Support", description: "Connect with fellow learners" },
              { icon: Star, title: "Certificate", description: "Earn a certificate upon completion" },
              { icon: Clock, title: "Self-Paced", description: "Learn at your own schedule" },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-3">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
