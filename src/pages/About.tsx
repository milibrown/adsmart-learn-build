import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To eliminate the gap between learning and earning by providing market-aligned, career-focused education that delivers immediate value to professionals and organizations worldwide.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the world's most trusted career accelerator, using AI and industry partnerships to create the shortest path from learning to career success for every individual.",
    },
    {
      icon: Award,
      title: "Our Quality",
      description: "Every course is co-created with industry leaders, validated by hiring managers, and continuously updated to match current market demands. We measure success by career outcomes.",
    },
    {
      icon: Users,
      title: "Our Community",
      description: "A global network of professionals, mentors, and employers working together. Our community doesn't just learn together—they hire, mentor, and grow together.",
    },
  ];

  const team = [
    {
      name: "Jordan Park",
      role: "CEO & Co-Founder",
      description: "Ex-Google engineer passionate about democratizing tech education",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Chief Learning Officer",
      description: "PhD in Learning Sciences, former Stanford professor",
    },
    {
      name: "Ryan Nguyen",
      role: "Head of AI & Product",
      description: "Building next-gen personalized learning with machine learning",
    },
    {
      name: "Sofia Ramirez",
      role: "VP of Partnerships",
      description: "Connecting learners with top employers and mentors globally",
    },
  ];

  const stats = [
    { value: "2018", label: "Founded" },
    { value: "75K+", label: "Active Learners" },
    { value: "800+", label: "Industry Experts" },
    { value: "180+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Elearn now</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            We're revolutionizing online education with AI-powered learning paths and industry partnerships that directly connect skills to careers.
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
                Elearn now was born in 2018 from a bold vision: to bridge the gap between education and employment by creating learning experiences that directly translate to career success. Starting with 15 cutting-edge tech courses, we've evolved into a global platform serving 75,000+ learners across 180 countries.
              </p>
              <p>
                Founded by former Silicon Valley engineers and educators, we leverage AI and data science to create personalized learning journeys. Our approach combines real-world projects, live mentorship from industry leaders, and partnerships with Fortune 500 companies to ensure every skill you learn has immediate market value.
              </p>
              <p>
                Today, Elearn now offers 1,500+ courses spanning technology, business, design, and data science, taught by 800+ practitioners from companies like Google, Amazon, and Microsoft. We've helped launch thousands of careers, facilitated hundreds of promotions, and enabled countless entrepreneurial ventures. This is just the beginning.
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
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join 75,000+ professionals advancing their careers with Elearn now. Your future starts here.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
