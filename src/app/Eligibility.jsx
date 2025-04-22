import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Eligibility() {
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
            Eligibility Criteria
          </h1>{" "}
          <p className="text-xl text-gray-600">
            College of Engineering Trivandrum (CET)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-blue-50 to-indigo-50 h-12">
              <TabsTrigger
                value="general"
                className="text-base data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                General Criteria
              </TabsTrigger>
              <TabsTrigger
                value="branch"
                className="text-base data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Branch Specific
              </TabsTrigger>
            </TabsList>

            {/* General Criteria */}
            <TabsContent value="general" className="space-y-6 mt-6">
              <motion.div variants={fadeIn}>
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-black black text-2xl">
                      Academic Qualifications
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Minimum requirements for all part-time BTech applicants
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Diploma in Engineering",
                        description:
                          "3-year diploma in relevant engineering branch with minimum 50% marks from Kerala State Board of Technical Education or equivalent",
                      },
                      {
                        title: "Work Experience",
                        description:
                          "Minimum 2 years of professional experience in relevant field after diploma",
                      },
                      {
                        title: "CET Admission Test",
                        description:
                          "Qualified in CET's part-time BTech entrance examination",
                      },
                      {
                        title: "Employer NOC",
                        description:
                          "No Objection Certificate from current employer (for working professionals)",
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-lg">{item.title}</p>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} transition={{ delay: 0.2 }}>
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-black  text-2xl">
                      Age & Other Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <XCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-lg">No Age Limit</p>
                        <p className="text-gray-600">
                          No upper age limit, but candidates must be at least 18
                          years old
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-lg">Residency</p>
                        <p className="text-gray-600">
                          Preference given to candidates currently working in
                          Kerala
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Branch Specific Criteria */}
            <TabsContent value="branch" className="space-y-6 mt-6">
              {[
                {
                  title: "Electrical Engineering (EE)",
                  points: [
                    "Diploma in Electrical Engineering/Power Systems",
                    "Work experience in electrical maintenance, power distribution, or related fields",
                    "Basic knowledge of electrical circuits and machines",
                  ],
                },
                {
                  title: "Electronics & Communication (EC)",
                  points: [
                    "Diploma in Electronics/Communication Engineering",
                    "Experience in electronics manufacturing, telecom, or related industries",
                    "Familiarity with electronic components and circuits",
                  ],
                },
                {
                  title: "Mechanical Engineering (ME)",
                  points: [
                    "Diploma in Mechanical/Automobile Engineering",
                    "Experience in mechanical workshops, manufacturing, or related fields",
                    "Knowledge of mechanical drawings and workshop practices",
                  ],
                },
              ].map((branch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-primary text-2xl">
                        {branch.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {branch.points.map((point, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-indigo-50 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx + 0.1 * index }}
                        >
                          <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600 text-lg">{point}</p>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Ready to Join CET's Part-Time BTech?
          </h2>
          <p className="text-gray-600 text-xl mb-6 max-w-2xl mx-auto">
            Applications are accepted annually through the Kerala Technical
            University portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button className="bg-primary text-lg px-8 py-6">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-blak-600 text-black hover:bg-blue-50 text-lg px-8 py-6"
              >
                Contact Us
              </Button>
            </Link>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            Last updated: June 2023 | College of Engineering Trivandrum
          </p>
        </motion.div>
      </div>
    </div>
  );
}
