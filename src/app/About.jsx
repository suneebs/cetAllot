import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Briefcase,
  Globe,
  Code,
  Microscope,
  Rocket,
  Zap,
  Cpu,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  // Parallax scrolling setup
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0.5, 1, 1, 0.5]
  );

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} // triggers once when 50% in view
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Transform Your Future with Our B.Tech Program
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Industry-aligned engineering education with cutting-edge curriculum
            and hands-on learning experiences.
          </motion.p>
        </motion.div>

        {/* CET Overview Section with Parallax */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20 relative"
        >
          {/* Parallax Glow */}
          <motion.div
            style={{ y: isMobile ? 0 : parallaxY2 }}
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text Content */}
            <motion.div variants={fadeIn} className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4">
                College of Engineering Trivandrum
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Established in 1939, CET is one of the oldest and most
                prestigious engineering colleges in India, consistently ranked
                among the top institutions in the country.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Offering a rich blend of academic excellence, research
                innovation, and industry collaborations, CET provides a
                world-class platform for aspiring engineers and technocrats.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Established in 1939",
                  "Top NIRF Rankings",
                  "20+ UG & PG Programs",
                  "Strong Alumni Worldwide",
                ].map((item, i) => (
                  <motion.div
                    variants={fadeIn}
                    className="flex items-center gap-2"
                    key={i}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              variants={fadeIn}
              className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="/photo.webp"
                alt="College of Engineering Trivandrum"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Programs Offered with Smoother Animation */}
        <motion.section
          style={{ opacity, y: isMobile ? 0 : parallaxY1 }}
          className="mb-20 relative z-10"
        >
          {/* Background blur element */}
          <motion.div
            style={{ y: isMobile ? 0 : parallaxY3 }}
            className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"
          />

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our B.Tech Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our accredited engineering specializations
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Electrical Engineering",
                icon: <Zap className="h-12 w-12 text-primary" />,
                duration: "4 Years",
                seats: "30 Seats",
              },
              {
                title: "Mechanical Engineering",
                icon: <Settings className="h-12 w-12 text-primary" />,
                duration: "4 Years",
                seats: "30 Seats",
              },
              {
                title: "Electronics Engineering",
                icon: <Cpu className="h-12 w-12 text-primary" />,
                duration: "4 Years",
                seats: "30 Seats",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Card className="h-full transition-all hover:shadow-lg text-center">
                  <CardHeader className="flex flex-col items-center">
                    <div className="flex items-center justify-center p-5 rounded-full bg-primary/10 mb-4">
                      {program.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{program.duration}</p>
                    <p className="text-sm text-muted-foreground">
                      {program.seats}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us with Parallax */}
        <motion.section
          className="mb-20 bg-gradient-to-r from-primary/5 to-blue-500/5 py-16 px-6 rounded-xl relative overflow-hidden"
          style={{ y: isMobile ? 0 : parallaxY2 }}
        >
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"
            style={{ y: isMobile ? 0 : parallaxY3 }}
          />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our B.Tech Program?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We prepare engineers for the future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Industry-Aligned Curriculum",
                  description:
                    "Courses designed with industry input to ensure relevance",
                  icon: <Briefcase className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Hands-on Learning",
                  description: "Extensive lab work and project-based learning",
                  icon: <BookOpen className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Internship Opportunities",
                  description: "Mandatory industry internships from 3rd year",
                  icon: <GraduationCap className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Global Exposure",
                  description:
                    "Student exchange programs with international universities",
                  icon: <Globe className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Placement Support",
                  description:
                    "Dedicated placement cell with 90% placement rate",
                  icon: <Award className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Startup Incubation",
                  description:
                    "Support for student entrepreneurs with funding opportunities",
                  icon: <Rocket className="h-6 w-6 text-primary" />,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/30">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Admission Process with Enhanced Timeline Animation */}
        <motion.section className="relative py-16 sm:py-24 lg:py-32">
          {/* Background blur blob */}
          <motion.div
            className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"
            style={{ y: isMobile ? 0 : parallaxY3 }}
          />

          {/* Heading */}
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Simple steps to join our engineering program
            </p>
          </div>

          {/* Timeline Content */}
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="relative">
              {/* Timeline vertical line for md+ */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-primary/10 -translate-x-1/2"></div>

              <div className="space-y-10 md:space-y-16">
                {[
                  {
                    step: "1",
                    title: "Check Eligibility",
                    description: "Minimum 60% in 10+2 with PCM",
                    icon: <BookOpen className="h-5 w-5" />,
                  },
                  {
                    step: "2",
                    title: "Entrance Exam",
                    description: "Appear for CET/JEE Main or equivalent",
                    icon: <GraduationCap className="h-5 w-5" />,
                  },
                  {
                    step: "3",
                    title: "Application Submission",
                    description: "Fill online application form",
                    icon: <Briefcase className="h-5 w-5" />,
                  },
                  {
                    step: "4",
                    title: "Counseling",
                    description: "Participate in admission counseling",
                    icon: <Users className="h-5 w-5" />,
                  },
                  {
                    step: "5",
                    title: "Fee Payment",
                    description: "Complete admission formalities",
                    icon: <Award className="h-5 w-5" />,
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, type: "spring", damping: 12 }}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-6`}
                  >
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.step}
                    </div>

                    {/* Step Content Card */}
                    <Card className="w-full flex-1">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {step.icon}
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced CTA Section with Floating Animation */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-xl p-8 md:p-12 text-center shadow-xl overflow-hidden relative"
        >
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            Start Your Engineering Journey
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto relative z-10">
            Applications for 2024 admissions are now open. Secure your seat in
            our prestigious B.Tech program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/apply">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" className="shadow-md">
                  Apply Now
                </Button>
              </motion.div>
            </Link>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground shadow-md"
                >
                  Contact Admissions
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
