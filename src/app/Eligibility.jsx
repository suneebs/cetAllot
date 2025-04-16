import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Eligibility() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Eligibility Criteria</h1>
        <p className="text-xl text-muted-foreground">
          Check if you meet the requirements for our PhD programs.
        </p>
      </div>

      <Tabs defaultValue="general" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General Criteria</TabsTrigger>
          <TabsTrigger value="department">Department-Specific</TabsTrigger>
          <TabsTrigger value="international">International Students</TabsTrigger>
        </TabsList>

        {/* General Criteria Tab */}
        <TabsContent value="general" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Requirements</CardTitle>
              <CardDescription>Basic academic qualifications required for all PhD applicants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Master's Degree",
                  description:
                    "A Master's degree in the relevant field with at least 60% marks or equivalent CGPA from a recognized university.",
                },
                {
                  title: "Bachelor's Degree",
                  description:
                    "A Bachelor's degree with at least 65% marks or equivalent CGPA from a recognized university.",
                },
                {
                  title: "Entrance Examination",
                  description:
                    "Qualified in a national level entrance examination like GATE/NET/SLET or equivalent.",
                },
                {
                  title: "Research Proposal",
                  description: "A well-defined research proposal in the area of interest.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience Requirements</CardTitle>
              <CardDescription>Professional experience considerations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Research Experience (Preferred)",
                  description:
                    "Prior research experience in the form of publications, projects, or work in research organizations is preferred.",
                },
                {
                  title: "Industry Experience (For Part-time PhD)",
                  description:
                    "Minimum 2 years of relevant industry experience for candidates applying for part-time PhD programs.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Age Limit</CardTitle>
              <CardDescription>Age restrictions for applicants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">No Age Limit</p>
                  <p className="text-muted-foreground">
                    There is no upper age limit for PhD admission. However, candidates must be at least 21 years of age
                    at the time of application.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Department-Specific Tab */}
        <TabsContent value="department" className="space-y-6 mt-6">
          {[
            {
              title: "Computer Science & Engineering",
              description: "Specific requirements for Computer Science PhD applicants",
              points: [
                {
                  title: "Master's Specialization",
                  description:
                    "M.Tech/M.E. in Computer Science, Information Technology, or related disciplines.",
                },
                {
                  title: "Programming Skills",
                  description:
                    "Proficiency in at least one programming language (C++, Java, Python, etc.).",
                },
                {
                  title: "Mathematics Background",
                  description:
                    "Strong foundation in discrete mathematics, algorithms, and data structures.",
                },
              ],
            },
            {
              title: "Electrical Engineering",
              description: "Specific requirements for Electrical Engineering PhD applicants",
              points: [
                {
                  title: "Master's Specialization",
                  description:
                    "M.Tech/M.E. in Electrical Engineering, Electronics, Communication, or related disciplines.",
                },
                {
                  title: "Technical Skills",
                  description:
                    "Experience with circuit design, signal processing, or power systems depending on the area of research.",
                },
                {
                  title: "Laboratory Experience",
                  description:
                    "Hands-on experience with electrical engineering laboratory equipment and software tools.",
                },
              ],
            },
            {
              title: "Mechanical Engineering",
              description: "Specific requirements for Mechanical Engineering PhD applicants",
              points: [
                {
                  title: "Master's Specialization",
                  description:
                    "M.Tech/M.E. in Mechanical Engineering, Manufacturing, Thermal Sciences, or related disciplines.",
                },
                {
                  title: "Technical Skills",
                  description:
                    "Experience with CAD/CAM software, thermal analysis, or manufacturing processes depending on the area of research.",
                },
                {
                  title: "Design Experience",
                  description: "Experience in mechanical design, analysis, or experimental work.",
                },
              ],
            },
          ].map((dept, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{dept.title}</CardTitle>
                <CardDescription>{dept.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {dept.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{pt.title}</p>
                      <p className="text-muted-foreground">{pt.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* International Students Tab */}
        <TabsContent value="international" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Additional Requirements for International Students</CardTitle>
              <CardDescription>Special requirements for applicants from outside the country</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "English Proficiency",
                  description: "TOEFL score of at least 80 (iBT) or IELTS score of at least 6.5 or equivalent.",
                },
                {
                  title: "Degree Equivalence",
                  description:
                    "Foreign degrees must be recognized as equivalent to Indian degrees by the Association of Indian Universities (AIU) or other authorized bodies.",
                },
                {
                  title: "Visa Requirements",
                  description: "Valid student visa for the entire duration of the PhD program.",
                },
                {
                  title: "Financial Support",
                  description: "Proof of financial support or scholarship for the duration of the program.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scholarships for International Students</CardTitle>
              <CardDescription>Financial aid opportunities for international applicants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "CET International Scholarship",
                  description:
                    "Merit-based scholarship covering tuition fees and providing a monthly stipend for outstanding international applicants.",
                },
                {
                  title: "Government Scholarships",
                  description:
                    "Various government-sponsored scholarships for international students from specific countries.",
                },
                {
                  title: "Research Assistantships",
                  description:
                    "Opportunities to work as research assistants with faculty members on funded projects.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          If you meet the eligibility criteria, we encourage you to apply to our PhD program.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/apply">
            <Button size="lg">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Contact Admissions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
