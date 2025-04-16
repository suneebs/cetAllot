"use client"

import { useState } from "react"
import { Link } from "react-router-dom";

    import { zodResolver } from "@hookform/resolvers/zod"
    import { useForm } from "react-hook-form"
    import { z } from "zod"
import { ArrowLeft, ArrowRight, Check, Info, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/Input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"
import { Checkbox } from "@/components/ui/Checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Form schema
const applicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
  gender: z.enum(["male", "female", "other"], { message: "Please select a gender." }),
  nationality: z.string().min(2, { message: "Nationality is required." }),
  address: z.string().min(5, { message: "Address is required." }),

  // Academic Information
  bachelorDegree: z.string().min(2, { message: "Bachelor's degree is required." }),
  bachelorInstitution: z.string().min(2, { message: "Institution name is required." }),
  bachelorYear: z.string().min(4, { message: "Year of completion is required." }),
  bachelorGrade: z.string().min(1, { message: "Grade/CGPA is required." }),

  masterDegree: z.string().min(2, { message: "Master's degree is required." }),
  masterInstitution: z.string().min(2, { message: "Institution name is required." }),
  masterYear: z.string().min(4, { message: "Year of completion is required." }),
  masterGrade: z.string().min(1, { message: "Grade/CGPA is required." }),

  // Program Information
  department: z.string().min(1, { message: "Please select a department." }),
  researchArea: z.string().min(5, { message: "Research area is required." }),
  researchProposal: z.string().min(100, { message: "Research proposal must be at least 100 characters." }),

  // Additional Information
  fundingSource: z.enum(["self", "scholarship", "sponsorship"], { message: "Please select a funding source." }),
  publications: z.string().optional(),

  // Terms and Conditions
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions." }),
  }),
})



export default function Apply() {
    const [activeTab, setActiveTab] = useState("personal")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [applicationId, setApplicationId] = useState("")
  
    const form = useForm({
      resolver: zodResolver(applicationSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: undefined,
        nationality: "",
        address: "",
  
        bachelorDegree: "",
        bachelorInstitution: "",
        bachelorYear: "",
        bachelorGrade: "",
  
        masterDegree: "",
        masterInstitution: "",
        masterYear: "",
        masterGrade: "",
  
        department: "",
        researchArea: "",
        researchProposal: "",
  
        fundingSource: undefined,
        publications: "",
  
        agreeTerms: false,
      },
    })
  
    function onSubmit(data) {
      setIsSubmitting(true)
  
      // Simulate API call
      setTimeout(() => {
        console.log(data)
        setIsSubmitting(false)
        setIsSubmitted(true)
        setApplicationId("PHD" + Math.floor(100000 + Math.random() * 900000))
      }, 2000)
    }
  
    const nextTab = (tab) => {
      setActiveTab(tab)
    }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-3xl">
        <Card className="border-green-500">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Application Submitted Successfully!</CardTitle>
            <CardDescription>Thank you for applying to our PhD program</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Application ID</AlertTitle>
              <AlertDescription>
                Your application ID is <span className="font-bold">{applicationId}</span>. Please save this for future
                reference.
              </AlertDescription>
            </Alert>
            <p className="text-center text-muted-foreground">
              We have sent a confirmation email to your registered email address. Our team will review your application
              and get back to you soon.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">PhD Application Form</h1>
        <p className="text-xl text-muted-foreground">Complete the form below to apply for our PhD program.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="additional">Additional</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nationality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nationality</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., United States" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your full address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="button" onClick={() => nextTab("academic")}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              {/* Academic Information */}
              <TabsContent value="academic" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Bachelor's Degree</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="bachelorDegree"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Degree</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., B.Tech in Computer Science" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bachelorInstitution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institution</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., MIT" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="bachelorYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year of Completion</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 2020" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bachelorGrade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grade/CGPA</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 3.8/4.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Master's Degree</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="masterDegree"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Degree</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., M.Tech in Computer Science" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="masterInstitution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institution</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Stanford University" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="masterYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year of Completion</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 2022" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="masterGrade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grade/CGPA</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 3.9/4.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => nextTab("personal")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button type="button" onClick={() => nextTab("research")}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              {/* Research Information */}
              <TabsContent value="research" className="space-y-6 mt-6">
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="computer-science">Computer Science & Engineering</SelectItem>
                          <SelectItem value="electrical">Electrical Engineering</SelectItem>
                          <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                          <SelectItem value="civil">Civil Engineering</SelectItem>
                          <SelectItem value="chemical">Chemical Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="researchArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Research Area of Interest</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Machine Learning, Robotics" {...field} />
                      </FormControl>
                      <FormDescription>
                        Specify your primary research interests within your chosen department.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="researchProposal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Research Proposal Summary</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe your research proposal"
                          className="min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a brief summary of your research proposal (minimum 100 characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => nextTab("academic")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button type="button" onClick={() => nextTab("additional")}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              {/* Additional Information */}
              <TabsContent value="additional" className="space-y-6 mt-6">
                <FormField
                  control={form.control}
                  name="fundingSource"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Funding Source</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="self" />
                            </FormControl>
                            <FormLabel className="font-normal">Self-funded</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="scholarship" />
                            </FormControl>
                            <FormLabel className="font-normal">Applying for scholarship</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="sponsorship" />
                            </FormControl>
                            <FormLabel className="font-normal">External sponsorship</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="publications"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Publications (if any)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="List your publications in standard format"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>List your publications in a standard format (optional).</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agreeTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I agree to the terms and conditions</FormLabel>
                        <FormDescription>
                          By submitting this application, I certify that all information provided is accurate and
                          complete.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => nextTab("research")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </Form>
      </div>
    </div>
  )
}