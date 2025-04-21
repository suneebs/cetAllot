import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Briefcase,
  FileText,
  Users,
  Calendar,
  Building,
  Aperture,
  BookOpen,
  CheckCircle,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PartTimeBtech() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
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
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Part-Time B.Tech at CET
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Earn your engineering degree while working through CET's
            industry-renowned evening program
          </motion.p>
        </motion.div>

        {/* Program Highlights with Parallax */}
        <motion.div
          style={{ y, opacity }}
          className="relative bg-gradient-to-br from-primary/10 to-blue-900/10 rounded-3xl p-8 mb-16 overflow-hidden"
        >
          <div className="relative z-10">
            <motion.h2
              className="text-2xl font-bold mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Program Highlights
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Working Professionals",
                  description:
                    "Designed for employed individuals with diploma qualifications",
                  icon: <Briefcase className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Evening Classes",
                  description:
                    "6:00 PM to 9:00 PM on weekdays + Saturday sessions",
                  icon: <Clock className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Duration",
                  description:
                    "4-year program (8 semesters) following Kerala University syllabus",
                  icon: <Calendar className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Eligibility",
                  description:
                    "Diploma in Engineering with 1 year work experience",
                  icon: <BookOpen className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Specializations",
                  description:
                    "Electronics, Electrical, Mechanical, and Civil Engineering",
                  icon: <Aperture className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Approval",
                  description: "Approved by AICTE and Kerala University",
                  icon: <Building className="h-10 w-10 text-primary" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="transition-all hover:shadow-md h-full">
                    <CardHeader>
                      <motion.div
                        className="mb-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring" }}
                      >
                        {item.icon}
                      </motion.div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-white/30 z-0" />
        </motion.div>

        {/* Admission Process */}
        <div className="mt-30">
          <section className="mb-16 px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-12 text-center mt-12 sm:mt-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-primary  text-transparent bg-clip-text">
                Admission Process
              </span>
            </motion.h2>

            <div className="relative max-w-5xl mx-auto">
              {/* Animated vertical timeline line */}
              <motion.div
                className="absolute left-6 sm:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/30 to-blue-600/30 -z-0"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              {[
                {
                  title: "Application Submission",
                  description:
                    "Submit online application with work experience proof and diploma certificates",
                  date: "June 2024",
                  icon: <FileText className="h-5 w-5" />,
                },
                {
                  title: "Entrance Test",
                  description:
                    "CET-conducted written test (Maths, English, General Knowledge)",
                  date: "July 2024",
                  icon: <BookOpen className="h-5 w-5" />,
                },
                {
                  title: "Interview",
                  description:
                    "Personal interview assessing work experience and motivation",
                  date: "July 2024",
                  icon: <Users className="h-5 w-5" />,
                },
                {
                  title: "Merit List",
                  description:
                    "Based on test (70%), interview (20%), and experience (10%)",
                  date: "August 2024",
                  icon: <CheckCircle className="h-5 w-5" />,
                },
                {
                  title: "Admission",
                  description:
                    "Document verification and fee payment at CET campus",
                  date: "August 2024",
                  icon: <GraduationCap className="h-5 w-5" />,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`mb-12 flex flex-col md:flex-row items-center relative z-10 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                >
                  {/* Left/Right Card */}
                  <motion.div
                    className={`w-full md:w-1/2 px-4 ${
                      index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                    }`}
                    whileHover={{
                      x: index % 2 === 0 ? 5 : -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div
                      className={`p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md border border-gray-100 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 md:justify-start">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        {step.description}
                      </p>
                      <div className="text-sm font-medium text-primary flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {step.date}
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated Center Circle */}
                  <motion.div
                    className="my-6 md:my-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-bold text-lg z-20 shadow-lg border-4 border-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Empty space for alignment */}
                  <div className={`w-full md:w-1/2 px-4 hidden md:block`} />
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Fee Structure */}
        <section className="mb-16 px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Fee Structure (2024-25)
          </motion.h2>

          <motion.div
            className="overflow-x-auto rounded-lg border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Particulars
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount (₹)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { item: "Tuition Fee (per semester)", amount: "12,500" },
                  { item: "University Fee", amount: "3,000" },
                  { item: "Caution Deposit (one-time)", amount: "5,000" },
                  { item: "Library Fee", amount: "1,000" },
                  { item: "Exam Fee", amount: "2,500" },
                  { item: "Total per semester", amount: "24,000" },
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{row.item}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.amount}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        <section className="mb-16 px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-10 text-primary text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {[
              {
                question: "Who can apply for part-time B.Tech at CET?",
                answer:
                  "Diploma holders in engineering with minimum 1 year work experience in relevant field. No age limit.",
              },
              {
                question: "What are the class timings?",
                answer:
                  "Evening classes from 6:00 PM to 9:00 PM on weekdays (Mon-Fri) and 9:00 AM to 4:00 PM on Saturdays.",
              },
              {
                question: "Is the degree different from regular B.Tech?",
                answer:
                  "Degree certificate mentions 'Part-Time' mode but has equal recognition for employment and higher studies.",
              },
              {
                question: "Are placements available for part-time students?",
                answer:
                  "While CET doesn't provide formal placements, part-time students often get promoted in their current organizations or find better opportunities.",
              },
              {
                question: "Can I switch to regular B.Tech later?",
                answer:
                  "No, part-time and regular programs have separate structures and cannot be interchanged.",
              },
              {
                question: "Is hostel facility available?",
                answer:
                  "No, the program is designed for working professionals who typically arrange their own accommodation.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-4 border border-muted rounded-lg overflow-hidden"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="px-4 py-4 text-base sm:text-lg font-medium hover:text-primary transition-colors">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-base text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Advance Your Career with CET's Part-Time B.Tech
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Balance work and study while earning a prestigious engineering
            degree from Kerala's top technical institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button size="lg" className="group">
                Apply Now{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
