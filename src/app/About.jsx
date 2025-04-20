import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Our PhD Program</h1>
        <p className="text-xl text-muted-foreground">
          Discover the excellence and innovation that defines our doctoral
          studies.
        </p>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">
              Excellence in Research and Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The College of Engineering and Technology (CET) has been at the
              forefront of technological research and innovation for over 50
              years...
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With state-of-the-art facilities, world-class faculty, and a
              collaborative research environment...
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Founded in 1970",
                "200+ PhD Graduates",
                "50+ Research Labs",
                "100+ Faculty Members",
              ].map((item, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/photo.webp"
              alt="CET Campus"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mb-16 bg-muted py-12 px-6 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission and Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To foster a culture of research excellence and innovation...
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be recognized globally as a center of excellence in
                  doctoral education...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Key Features of Our PhD Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What sets our doctoral program apart from others...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Research Excellence",
              description: "Access to cutting-edge research...",
              icon: <BookOpen className="h-10 w-10 text-primary" />,
            },
            {
              title: "Expert Faculty",
              description: "Learn from internationally recognized experts...",
              icon: <Users className="h-10 w-10 text-primary" />,
            },
            {
              title: "Interdisciplinary Approach",
              description: "Opportunities for cross-disciplinary research...",
              icon: <GraduationCap className="h-10 w-10 text-primary" />,
            },
            {
              title: "Industry Connections",
              description: "Strong partnerships with industry leaders...",
              icon: <Award className="h-10 w-10 text-primary" />,
            },
            {
              title: "Global Perspective",
              description: "International collaborations, exchange programs...",
              icon: <Users className="h-10 w-10 text-primary" />,
            },
            {
              title: "Comprehensive Support",
              description: "Financial support, career guidance...",
              icon: <GraduationCap className="h-10 w-10 text-primary" />,
            },
          ].map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Faculty Spotlight</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet some of our distinguished faculty members...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Sarah Johnson",
              title: "Professor of Computer Science",
              specialization: "AI and ML",
              image: "/placeholder.svg",
            },
            {
              name: "Dr. Robert Williams",
              title: "Professor of Electrical Engineering",
              specialization: "Power Systems",
              image: "/placeholder.svg",
            },
            {
              name: "Dr. Thomas Brown",
              title: "Professor of Mechanical Engineering",
              specialization: "Thermal Sciences",
              image: "/placeholder.svg",
            },
          ].map((faculty, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardTitle>{faculty.name}</CardTitle>
                <CardDescription>{faculty.title}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  {faculty.specialization}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/faculty">
            <Button variant="outline">
              View All Faculty <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="mb-16 bg-muted py-12 px-6 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Research Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our state-of-the-art facilities provide the perfect environment
              for groundbreaking research.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                name: "Advanced Computing Lab",
                description:
                  "Equipped with HPC clusters and specialized AI software...",
              },
              {
                name: "Robotics and Automation Lab",
                description:
                  "Features industrial robots and control systems...",
              },
              {
                name: "Energy Systems Research Center",
                description: "Dedicated to renewable energy and smart grid...",
              },
              {
                name: "Materials Science Lab",
                description:
                  "Facilities for materials testing and development...",
              },
            ].map((facility, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{facility.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Alumni Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our PhD graduates have gone on to achieve remarkable success...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Dr. Michael Chen",
              graduation: "PhD in Computer Science, 2018",
              achievement: "Founded a successful AI startup...",
              quote: "My doctoral research at CET provided the foundation...",
              image: "/placeholder.svg",
            },
            {
              name: "Dr. Emily Rodriguez",
              graduation: "PhD in Electrical Engineering, 2016",
              achievement: "Leading researcher at NASA...",
              quote: "The interdisciplinary approach at CET prepared me...",
              image: "/placeholder.svg",
            },
          ].map((alumni, index) => (
            <Card key={index} className="flex flex-col md:flex-row gap-6 p-6">
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{alumni.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {alumni.graduation}
                </p>
                <p className="mb-4">{alumni.achievement}</p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "{alumni.quote}"
                </blockquote>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/alumni">
            <Button variant="outline">
              More Success Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Begin Your Research Journey</h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Join our community of researchers and make significant contributions
          to your field.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/apply">
            <Button size="lg" variant="secondary">
              Apply Now
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
