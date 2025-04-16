import React from "react";
import { Link } from "react-router-dom"; // Replace Next.js Link with React Router Link
import { ArrowRight, BookOpen, Calendar, CheckCircle, GraduationCap, Users } from "lucide-react";
import { Button } from "../components/ui/button"; // Make sure you have this component in your app
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"; // Ensure these components are available

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Pursue Your PhD at College of Engineering Trivandrum
              </h1>
              <p className="text-xl text-muted-foreground">
                Join our community of researchers and innovators. Applications for the 2024-2025 academic year are now
                open.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply">
                  <Button size="lg" className="w-full sm:w-auto">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/cet2.jpeg?height=400&width=600"
                alt="CET Campus"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our PhD Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of doctoral programs designed to push the boundaries of knowledge and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Computer Science & Engineering",
                description: "Research in AI, machine learning, cybersecurity, and more.",
                icon: <BookOpen className="h-10 w-10 text-primary" />,
              },
              {
                title: "Electrical Engineering",
                description: "Advanced research in power systems, communications, and electronics.",
                icon: <GraduationCap className="h-10 w-10 text-primary" />,
              },
              {
                title: "Mechanical Engineering",
                description: "Innovations in thermal sciences, manufacturing, and robotics.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
            ].map((program, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-4">{program.icon}</div>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/programs#${program.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <Button variant="outline">
                View All Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined admission process is designed to identify and support the most promising researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "1. Application",
                description: "Submit your online application with all required documents.",
                icon: <Calendar className="h-10 w-10 text-primary" />,
              },
              {
                title: "2. Review",
                description: "Applications are reviewed by the departmental committee.",
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
              },
              {
                title: "3. Interview",
                description: "Shortlisted candidates are invited for an interview.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                title: "4. Admission",
                description: "Selected candidates receive admission offers.",
                icon: <GraduationCap className="h-10 w-10 text-primary" />,
              },
            ].map((step, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/admission">
              <Button>
                Learn More About Admissions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Dates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar with these important dates for the 2024-2025 PhD admission cycle.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  date: "January 15, 2024",
                  event: "Application Portal Opens",
                },
                {
                  date: "March 31, 2024",
                  event: "Application Deadline",
                },
                {
                  date: "April 15-30, 2024",
                  event: "Interview Process",
                },
                {
                  date: "May 15, 2024",
                  event: "Admission Results Announced",
                },
                {
                  date: "June 30, 2024",
                  event: "Confirmation Deadline",
                },
                {
                  date: "August 1, 2024",
                  event: "Program Commencement",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-card">
                  <div className="min-w-[120px] font-semibold">{item.date}</div>
                  <div>{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Research Journey?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Join our vibrant community of researchers and make significant contributions to your field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
