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
            BTech Admission Results
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Check your admission status for CET's industry-renowned evening program
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
              Admission Results
            </motion.h2>
            
            {/* Admission Result Details */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Result Announcement</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Results Published</h4>
                    <p className="text-muted-foreground text-sm">August 15, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Admission Confirmation Deadline</h4>
                    <p className="text-muted-foreground text-sm">August 25, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Classes Commence</h4>
                    <p className="text-muted-foreground text-sm">September 1, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Merit List Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Merit List Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>Entrance Test Score: 70% weightage</li>
                    <li>Interview Performance: 20% weightage</li>
                    <li>Work Experience: 10% weightage</li>
                    <li>Category reservations as per government norms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    Next Steps for Selected Candidates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 list-decimal pl-5">
                    <li>Download admission letter from portal</li>
                    <li>Submit original documents for verification</li>
                    <li>Pay first semester fees</li>
                    <li>Complete registration formalities</li>
                    <li>Attend orientation program</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="absolute inset-0 bg-white/30 z-0" />
        </motion.div>

        

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Next Steps for Your Engineering Journey
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Selected candidates should complete the admission formalities to secure their seat in CET's prestigious part-time B.Tech program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission-portal">
              <Button size="lg" className="group">
                Check Your Result{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Admission Help Desk
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}