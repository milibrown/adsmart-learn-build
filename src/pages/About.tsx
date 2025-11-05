import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make quality education accessible to everyone, everywhere. We believe that learning should have no boundaries and everyone deserves the opportunity to grow and succeed.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the world's leading online education platform, empowering millions of learners to achieve their dreams through innovative and engaging learning experiences.",
    },
    {
      icon: Award,
      title: "Our Quality",
      description: "We maintain the highest standards in course content, instructor expertise, and student support. Every course is carefully designed to deliver real-world value.",
    },
    {
      icon: Users,
      title: "Our Community",
      description: "We foster a supportive learning community where students and instructors collaborate, share knowledge, and grow together in their educational journey.",
    },
  ];

  const team = [
    {
      name: "Dr. James Wilson",
      role: "CEO & Founder",
      description: "Former university professor with 20+ years in education technology",
    },
    {
      name: "Sarah Martinez",
      role: "Chief Academic Officer",
      description: "Leading curriculum development and instructor partnerships",
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      description: "Building innovative learning experiences through technology",
    },
    {
      name: "Emily Thompson",
      role: "Student Success Director",
      description: "Ensuring every student achieves their learning goals",
    },
  ];

  const stats = [
    { value: "2015", label: "Founded" },
    { value: "50K+", label: "Active Students" },
    { value: "500+", label: "Expert Instructors" },
    { value: "150+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About EduLearn</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            We're on a mission to democratize education and empower learners worldwide with the skills they need to succeed in the digital age.
          </p>
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

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground text-left">
              <p>
                EduLearn was founded in 2015 with a simple yet powerful vision: to make high-quality education accessible to everyone, regardless of their location or background. What started as a small platform with just 10 courses has grown into a thriving community of over 50,000 learners worldwide.
              </p>
              <p>
                Our founders, experienced educators and technologists, recognized the transformative power of online learning. They saw an opportunity to break down traditional barriers to education and create a platform where anyone with internet access could learn from the world's best instructors.
              </p>
              <p>
                Today, EduLearn offers over 1,000 courses across dozens of disciplines, taught by 500+ expert instructors. We've helped thousands of students advance their careers, start new businesses, and achieve their personal goals. But we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-3">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to transforming education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-border text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Start your learning journey today and become part of our global community of learners.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
