import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AnimatedCard = ({ children, delay = 0 }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="h-full"
  >
    {children}
  </motion.div>
);

const SectionWrapper = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      id={id}
      className="overflow-hidden"
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const heroControls = useAnimation();
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (heroInView) {
      heroControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [heroControls, heroInView]);

  // Display Notices for Notice section
const [notices, setNotices] = useState([]);

useEffect(() => {
  const fetchNotices = async () => {
    try {
      const snapshot = await getDocs(collection(db, "notices"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotices(data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  fetchNotices();
}, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-20"></div>
          <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 40 }}
              animate={heroControls}
              className="space-y-6"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Admission to BTech Working Professionals program{" "}<br />
                <span className="text-primary text-3xl md:text-4xl">
                  College of Engineering Trivandrum
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Join our community of engineers and innovators.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {/* <Link to="/apply">
                  <Button
                    size="lg"
                    className="w-full md:w-auto hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </Button>
                </Link> */}
                
              </motion.div>
            </motion.div> 

            <motion.div
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/cet0.jpg?height=400&width=600"
                alt="CET Campus"
                className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* notice section  */}
<SectionWrapper>
  <div className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Latest Notices
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Stay updated with important announcements and updates.
        </p>
      </motion.div>

      {/* Notices List */}
      <motion.div
        className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        {notices.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">
            No notices at the moment.
          </p>
        ) : (
          notices
            .sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds)
            .slice(0, 6)
            .map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index }}
                whileHover={{ scale: 1.03 }}
                className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 flex flex-col justify-between group cursor-pointer transition-transform"
              >
                <div className="flex justify-between items-start mb-3">
                  <time
                    className="text-sm font-semibold text-indigo-600"
                    dateTime={new Date(
                      notice.createdAt?.seconds * 1000
                    ).toISOString()}
                  >
                    {new Date(notice.createdAt?.seconds * 1000).toLocaleDateString(
                      "en-GB",
                      { day: "2-digit", month: "short", year: "numeric" }
                    )}
                  </time>

                  {notice.important && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-300 select-none">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                        ></path>
                      </svg>
                      Important
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {notice.title}
                </h3>

                <p className="text-gray-600 whitespace-pre-line">
                  {notice.message}
                </p>
              </motion.div>
            ))
        )}
      </motion.div>
    </div>
  </div>
</SectionWrapper>

{/*Fees Structure */}
<SectionWrapper>
  <div className="py-16 bg-background relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="text-center mb-12" variants={fadeIn}>
        <h2 className="text-3xl font-bold mb-4">Fee Structure</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Below is the detailed breakdown of the fee components applicable at the time of admission and during the course.
        </p>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto space-y-6 text-base leading-relaxed text-muted-foreground"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-foreground">Admission Fee</span>
          <span>Rs. 1500/- <span className="text-sm text-gray-500">(to be paid at the time of admission)</span></span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-foreground">Tuition Fee</span>
          <span>Rs. 31,000/- <span className="text-sm text-gray-500">(per semester)</span></span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-foreground">Special Fee</span>
          <span>Rs. 3,150/- <span className="text-sm text-gray-500">(per year)</span></span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-foreground">Caution Deposit</span>
          <span>Rs. 2,500/- <span className="text-sm text-gray-500">(to be paid at the time of admission [refundable])</span></span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-foreground">Pre-Matriculation & Registration Fee</span>
          <span>Rs. 4,955/-</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-foreground">PTA Fees</span>
          <span>Rs. 10,000/-</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-foreground">Bus Fee</span>
          <span>Rs. 2,000/-</span>
        </div>

        {/* Highlighted Note */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          <strong>Note:</strong> Government and University fee payment is accepted only through <strong>QR Code, UPI, or Online payment methods</strong>. <br />
          <span className="font-medium">Card and cash payments are not accepted.</span>
        </div>
      </motion.div>
    </div>
  </div>
</SectionWrapper>


      {/* Programs Section */}
      <SectionWrapper>
        <div className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12" variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4">Our BTech Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of bachelors programs designed to push
                the boundaries of knowledge and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
  title: "Electrical and Electronics Engineering",
  description:
    "Covers power generation, electrical machines, control systems, electronics, and renewable energy technologies.",
  icon: <BookOpen className="h-10 w-10 text-primary" />,
},
{
  title: "Civil Engineering",
  description:
    "Focuses on structural engineering, transportation systems, geotechnical engineering, water resources, and construction management.",
  icon: <GraduationCap className="h-10 w-10 text-primary" />,
},
{
  title: "Mechanical Engineering",
  description:
    "Explores thermodynamics, fluid mechanics, manufacturing processes, machine design, CAD/CAM, and automotive systems.",
  icon: <Users className="h-10 w-10 text-primary" />,
},

              ].map((program, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group">
                    <CardHeader>
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                        {program.icon}
                      </div>
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        to={`/programs#${program.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {/* <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary/10 group-hover:text-primary"
                        >
                          Learn More{" "}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button> */}
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Admission Process */}
      <SectionWrapper>
        <div className="py-16 bg-muted relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div className="text-center mb-12" variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined admission process is designed to identify and
                support the most promising engineers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "1. Application",
                  description:
                    "Submit your online application with all required documents.",
                  icon: <Calendar className="h-10 w-10 text-primary" />,
                },
                {
                  title: "2. Allotment",
                  description:
                    "Applications are reviewed and and allotment will be published based on the choice of candidates, LET rank list and reservations.",
                  icon: <CheckCircle className="h-10 w-10 text-primary" />,
                },
                {
                  title: "3. Document Verification",
                  description:(
    <>
      Candidates will have to appear physically at CET with the originals of all documents mentioned for admission. Admission will be guaranteed only on payment of full fees on the day of admission. Fees has to be paid electronically via digipay. No cash payment is allowed.
      <br />
      <span className="text-sm">
        Documents to be produced at the time of admission:{" "}
        <Link
          to="https://drive.google.com/file/d/1KNvGF_31V_tL_hl0X3VbDy1QnPttbAju/view?usp=sharing"
          className="text-primary underline hover:text-primary/80"
        >
          Click here
        </Link>
      </span>
      <br />
      <span className="text-sm">
        Instructions to candidate:{" "}
        <Link
          to="https://drive.google.com/file/d/1WLgFCCfhTuiGxBcKL0uLFjzzd1K3CrUz/view?usp=sharing"
          className="text-primary underline hover:text-primary/80"
        >
          Click here
        </Link>
      </span>
    </>
  ),
  icon: <Users className="h-10 w-10 text-primary" />,
                },
                {
                  title: "4. Commencement of classes",
                  description: "Admitted candidates will have to attend classes commencing from July 1st.",
                  icon: <GraduationCap className="h-10 w-10 text-primary" />,
                },
              ].map((step, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <Card className="transition-all hover:shadow-lg hover:border-primary/30 group h-full">
                    <CardHeader>
                      <div className="mb-4 group-hover:-translate-y-1 transition-transform">
                        {step.icon}
                      </div>
                      <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              {/* <Link to="/admission">
                <Button className="hover:scale-105 transition-transform">
                  Learn More About Admissions{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link> */}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      

      {/* CTA Section */}
      <SectionWrapper>
        <div className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Begin Your BTech Journey?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Join our vibrant community of engineers and make significant
                contributions to your field.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <Link to="/apply">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto hover:scale-105 transition-transform hover:shadow-lg"
                  >
                    Apply Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary text-black hover:bg-primary/10 hover:scale-105 transition-transform"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link to="https://drive.google.com/file/d/1N9gARnxlDe95UEgKyLyoqndtDi17Qcy1/view?usp=sharing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary text-black hover:bg-primary/10 hover:scale-105 transition-transform"
                  >
                    Press Release
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
