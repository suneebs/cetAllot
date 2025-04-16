import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabList, TabPanel, Tab } from "@headlessui/react"; // Use @headlessui/react for tabs

export default function Programs() {
  const programs = [
    {
      id: "computer-science-engineering",
      title: "Computer Science & Engineering",
      description: "Research in AI, machine learning, cybersecurity, and more.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      image: "/placeholder.svg?height=300&width=500",
      areas: [
        "Artificial Intelligence and Machine Learning",
        "Cybersecurity and Network Security",
        "Big Data Analytics and Cloud Computing",
        "Computer Vision and Image Processing",
        "Internet of Things (IoT)",
        "Human-Computer Interaction",
      ],
      faculty: [
        { name: "Dr. Sarah Johnson", specialization: "AI and Machine Learning" },
        { name: "Dr. Michael Chen", specialization: "Cybersecurity" },
        { name: "Dr. Emily Rodriguez", specialization: "Computer Vision" },
      ],
    },
    {
      id: "electrical-engineering",
      title: "Electrical Engineering",
      description: "Advanced research in power systems, communications, and electronics.",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      image: "/placeholder.svg?height=300&width=500",
      areas: [
        "Power Systems and Smart Grid",
        "Renewable Energy Systems",
        "Communication Systems",
        "Signal Processing",
        "VLSI Design",
        "Control Systems",
      ],
      faculty: [
        { name: "Dr. Robert Williams", specialization: "Power Systems" },
        { name: "Dr. Lisa Kumar", specialization: "Communication Systems" },
        { name: "Dr. James Lee", specialization: "VLSI Design" },
      ],
    },
    {
      id: "mechanical-engineering",
      title: "Mechanical Engineering",
      description: "Innovations in thermal sciences, manufacturing, and robotics.",
      icon: <Users className="h-10 w-10 text-primary" />,
      image: "/placeholder.svg?height=300&width=500",
      areas: [
        "Thermal and Fluid Sciences",
        "Manufacturing Engineering",
        "Robotics and Automation",
        "Materials Science",
        "Computational Mechanics",
        "Energy Systems",
      ],
      faculty: [
        { name: "Dr. Thomas Brown", specialization: "Thermal Sciences" },
        { name: "Dr. Anita Patel", specialization: "Robotics" },
        { name: "Dr. David Wilson", specialization: "Materials Science" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">PhD Programs</h1>
        <p className="text-xl text-muted-foreground">
          Explore our diverse range of doctoral programs designed to push the boundaries of knowledge and innovation.
        </p>
      </div>

      <div className="space-y-16">
        {programs.map((program) => (
          <section key={program.id} id={program.id} className="scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div className="order-2 lg:order-1">
                <div className="mb-4">{program.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{program.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{program.description}</p>
                <Link to="/apply">
                  <Button>
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <img src={program.image || "/placeholder.svg"} alt={program.title} className="object-cover w-full h-full" />
              </div>
            </div>

            <Tabs>
              <TabList className="grid w-full grid-cols-3">
                <Tab>Research Areas</Tab>
                <Tab>Faculty</Tab>
                <Tab>Requirements</Tab>
              </TabList>

              <TabPanel className="p-4 border rounded-lg mt-2">
                <h3 className="text-xl font-semibold mb-4">Research Areas</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.areas.map((area, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      {area}
                    </li>
                  ))}
                </ul>
              </TabPanel>

              <TabPanel className="p-4 border rounded-lg mt-2">
                <h3 className="text-xl font-semibold mb-4">Faculty Members</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {program.faculty.map((faculty, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{faculty.name}</CardTitle>
                        <CardDescription>{faculty.specialization}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabPanel>

              <TabPanel className="p-4 border rounded-lg mt-2">
                <h3 className="text-xl font-semibold mb-4">Program Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Coursework</h4>
                    <p className="text-muted-foreground">Minimum of 18 credit hours of graduate-level courses.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Qualifying Examination</h4>
                    <p className="text-muted-foreground">
                      Must be completed within the first two years of the program.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Dissertation</h4>
                    <p className="text-muted-foreground">
                      Original research contribution to the field, defended before a committee.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Publication Requirement</h4>
                    <p className="text-muted-foreground">
                      At least two publications in peer-reviewed journals or conferences.
                    </p>
                  </div>
                </div>
              </TabPanel>
            </Tabs>

            <div className="border-b my-12"></div>
          </section>
        ))}
      </div>
    </div>
  );
}
