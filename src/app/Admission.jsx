import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle, FileText, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Admission() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">PhD Admission Process</h1>
        <p className="text-xl text-muted-foreground">
          Our streamlined admission process is designed to identify and support the most promising researchers.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            title: "1. Application",
            description: "Submit your online application with all required documents.",
            icon: <Calendar className="h-10 w-10 text-primary" />,
          },
          {
            title: "2. Review",
            description: "Applications are reviewed by the departmental committee.",
            icon: <CheckCircle className="h-10 w-10 text-primary" />,
          },
          {
            title: "3. Interview",
            description: "Shortlisted candidates are invited for an interview.",
            icon: <Users className="h-10 w-10 text-primary" />,
          },
          {
            title: "4. Admission",
            description: "Selected candidates receive admission offers.",
            icon: <GraduationCap className="h-10 w-10 text-primary" />,
          },
        ].map((step, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="mb-4">{step.icon}</div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Required Documents */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Academic */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Academic Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Bachelor's and Master's degree certificates and transcripts",
                  "Statement of Purpose (SOP) outlining research interests",
                  "Research proposal (3-5 pages)",
                  "List of publications (if any)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Personal */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Personal Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Curriculum Vitae (CV) or Resume",
                  "Two letters of recommendation",
                  "Valid ID proof",
                  "Passport-sized photographs",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Dates */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Key Dates</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { date: "January 15, 2024", event: "Application Portal Opens" },
              { date: "March 31, 2024", event: "Application Deadline" },
              { date: "April 15-30, 2024", event: "Interview Process" },
              { date: "May 15, 2024", event: "Admission Results Announced" },
              { date: "June 30, 2024", event: "Confirmation Deadline" },
              { date: "August 1, 2024", event: "Program Commencement" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-card">
                <div className="min-w-[120px] font-semibold">{item.date}</div>
                <div>{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "What is the minimum eligibility criteria for PhD admission?",
              answer: "Candidates must have a Master's degree in the relevant field with at least 60% marks or equivalent CGPA from a recognized university.",
            },
            {
              question: "Is there an entrance examination for PhD admission?",
              answer: "Yes, shortlisted candidates will need to appear for a written entrance examination followed by an interview.",
            },
            {
              question: "What is the duration of the PhD program?",
              answer: "The minimum duration is 3 years and the maximum is 6 years.",
            },
            {
              question: "Are there any scholarships available for PhD students?",
              answer: "Yes, the college offers various scholarships and research assistantships based on merit and need.",
            },
            {
              question: "Can I apply for multiple departments?",
              answer: "Yes, you can apply for up to two departments, but you will need to submit separate applications for each.",
            },
            {
              question: "Is there a provision for part-time PhD?",
              answer: "Yes, working professionals can apply for part-time PhD programs, subject to certain conditions.",
            },
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Research Journey?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join our vibrant community of researchers and make significant contributions to your field.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/apply">
            <Button size="lg">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/eligibility">
            <Button size="lg" variant="outline">
              Check Eligibility
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
