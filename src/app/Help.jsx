import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Info, BookOpen, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Help() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const branches = [
    {
      name: "Electrical Engineering (EE)",
      totalSeats: 30,
      categorySeats: {
        General: 15,
        OBC: 8,
        SC: 4,
        ST: 3,
      },
      description:
        "Focuses on power systems, electrical machines, and control systems",
    },
    {
      name: "Electronics & Communication (EC)",
      totalSeats: 30,
      categorySeats: {
        General: 15,
        OBC: 8,
        SC: 4,
        ST: 3,
      },
      description:
        "Covers analog/digital electronics, communication systems, and VLSI",
    },
    {
      name: "Mechanical Engineering (ME)",
      totalSeats: 30,
      categorySeats: {
        General: 15,
        OBC: 8,
        SC: 4,
        ST: 3,
      },
      description:
        "Includes thermal engineering, manufacturing, and machine design",
    },
  ];

  const faqs = [
    {
      question: "How are seats allocated in the part-time BTech program?",
      answer:
        "Seats are allocated based on CET entrance exam rank and reservation norms of the Kerala Government.",
    },
    {
      question: "Is there any management quota in part-time BTech?",
      answer:
        "No, CET follows strict merit-based admission for all seats in the part-time program.",
    },
    {
      question: "Can I apply for multiple branches?",
      answer:
        "Yes, you can indicate branch preferences in your application form.",
    },
    {
      question: "What's the duration of the part-time BTech program?",
      answer:
        "The program duration is 4 years (8 semesters) with classes typically on weekends and evenings.",
    },
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden min-h-screen">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"
        style={{ y }}
      />

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-600">
            College of Engineering Trivandrum (CET)
          </p>
        </motion.div>

        {/* Seat Availability Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-black">
            <Users className="h-6 w-6" /> Seat Availability (2024 Intake)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {branch.name}
                    </CardTitle>
                    <CardDescription>{branch.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Total Seats:</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {branch.totalSeats}
                        </span>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-3">
                          Category-wise Distribution:
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(branch.categorySeats).map(
                            ([category, seats]) => (
                              <div
                                key={category}
                                className="flex justify-between"
                              >
                                <span>{category}:</span>
                                <span className="font-medium">{seats}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
            <Info className="h-6 w-6" /> Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
            <BookOpen className="h-6 w-6" /> Helpful Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="border border-blue-100">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Syllabus & Curriculum
                  </CardTitle>
                  <CardDescription>
                    Detailed syllabus for all semesters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/syllabus">
                    <Button variant="outline" className="gap-2 w-full">
                      View Syllabus <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="border border-blue-100">
                <CardHeader>
                  <CardTitle className="text-lg">Academic Calendar</CardTitle>
                  <CardDescription>
                    Important dates and schedules
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/calendar">
                    <Button variant="outline" className="gap-2 w-full">
                      View Calendar <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div> */}

        {/* Contact Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Phone className="h-6 w-6" /> Need More Help?
              </CardTitle>
              <CardDescription>
                Contact our part-time BTech program office
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> ptbtech@cet.ac.in
                </p>
                <p>
                  <strong>Phone:</strong> +91 471 251 5530
                </p>
                <p>
                  <strong>Office Hours:</strong> Mon-Fri, 10 AM to 4 PM
                </p>
              </div>
            </CardContent>
            <CardContent>
              <Link to="/contact">
                <div className="flex justify-center">
                  <Button className="bg-primary gap-2 items-center">
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Link>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </div>
  );
}
