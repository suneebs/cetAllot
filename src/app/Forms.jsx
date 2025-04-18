import { Link } from "react-router-dom";

import { ArrowDown, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default function Forms() {
  const forms = [
    {
      title: "PhD Application Form",
      description: "Main application form for PhD admission",
      format: "PDF",
      size: "245 KB",
      lastUpdated: "January 10, 2024",
    },
    {
      title: "Research Proposal Template",
      description: "Template for preparing your research proposal",
      format: "DOCX",
      size: "125 KB",
      lastUpdated: "January 5, 2024",
    },
    {
      title: "Recommendation Letter Format",
      description: "Format for recommendation letters from referees",
      format: "PDF",
      size: "120 KB",
      lastUpdated: "December 15, 2023",
    },
    {
      title: "Statement of Purpose Guidelines",
      description: "Guidelines for writing your statement of purpose",
      format: "PDF",
      size: "180 KB",
      lastUpdated: "December 20, 2023",
    },
    {
      title: "International Student Form",
      description: "Additional form for international applicants",
      format: "PDF",
      size: "210 KB",
      lastUpdated: "January 8, 2024",
    },
    {
      title: "Scholarship Application Form",
      description: "Form for applying to various scholarship programs",
      format: "PDF",
      size: "195 KB",
      lastUpdated: "January 12, 2024",
    },
    {
      title: "Academic Transcript Request Form",
      description: "Form to request academic transcripts from the university",
      format: "PDF",
      size: "150 KB",
      lastUpdated: "November 30, 2023",
    },
    {
      title: "CV/Resume Template",
      description: "Suggested template for your curriculum vitae",
      format: "DOCX",
      size: "135 KB",
      lastUpdated: "December 5, 2023",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Downloadable Forms</h1>
        <p className="text-xl text-muted-foreground">
          Download all the necessary forms and templates for your PhD
          application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {forms.map((form, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                {form.title}
              </CardTitle>
              <CardDescription>{form.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-medium">{form.format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size:</span>
                  <span>{form.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span>{form.lastUpdated}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-2">
                <ArrowDown className="h-4 w-4" /> Download
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Online Application</CardTitle>
            <CardDescription>
              You can also apply online without downloading any forms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our online application system allows you to complete your
              application entirely online. You can save your progress and return
              to complete it later.
            </p>
            <Link href="/apply">
              <Button className="gap-2">
                Apply Online <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Contact our admissions office if you need assistance with any
              forms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about the application forms or process,
              our admissions team is here to help.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="gap-2">
                Contact Admissions <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
