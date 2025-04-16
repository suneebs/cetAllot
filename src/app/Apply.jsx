import React from "react";
import { useForm, FormProvider } from "react-hook-form"; // Import FormProvider
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; 
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the Zod schema for validation.
const FormSchema = z.object({
  adharNumber: z
    .string()
    .length(12, "Adhar number must be exactly 12 digits")
    .regex(/^\d+$/, "Adhar number must be numeric"),

  name: z.string().min(2, "Name must be at least 2 characters long"),

  email: z.string().email("Invalid email address"),

  age: z
    .string()
    .refine((val) => !isNaN(val) && Number(val) >= 18 && Number(val) <= 80, {
      message: "Age must be a number between 18 and 80",
    }),

  company: z.string().min(1, "Company is required"),

  experience: z.string().min(1, "Experience is required"),

  address: z.string().min(1, "Address is required"),

  highestEducation: z.string().min(1, "Highest Education is required"),

  mark: z.string().min(1, "Mark is required"),

  category: z.string().min(1, "Category is required"),

  distance: z
    .string()
    .refine((val) => !isNaN(val) && Number(val) <= 75, {
      message: "Distance must be less than or equal to 75",
    }),

  priorityChoices: z
    .object({
      1: z.string().min(1, "Priority choice 1 is required"),
      2: z.string().min(1, "Priority choice 2 is required"),
      3: z.string().min(1, "Priority choice 3 is required"),
    })
    .refine((data) => {
      const priorities = [data[1], data[2], data[3]];
      return new Set(priorities).size === priorities.length; // Check if priorities are unique
    }, {
      message: "Priority choices must be unique",
    }),
});

// Initial form data.
const initialFormData = {
  adharNumber: "",
  name: "",
  email: "",
  age: "",
  company: "",
  experience: "",
  address: "",
  highestEducation: "",
  mark: "",
  category: "",
  distance: "",
  priorityChoices: { 1: "", 2: "", 3: "" },
};

export default function Apply() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: initialFormData,
  });

  // Function to handle form submission.
  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    // You can add further processing logic here.
  };

  return (
    <div className="container mx-auto p-6 md:p-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Application Form</h1>

      {/* Wrap the form with FormProvider */}
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto space-y-6"
        >
          {/* Adhar Number */}
          <FormField
            name="adharNumber"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Adhar Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Adhar Number"
                    {...field}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                {fieldState?.error && <FormMessage message={fieldState.error.message} />}
              </FormItem>
            )}
          />

          {/* Name */}
          <FormField
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Name"
                    {...field}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                {fieldState?.error && <FormMessage message={fieldState.error.message} />}
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Email"
                    {...field}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                {fieldState?.error && <FormMessage message={fieldState.error.message} />}
              </FormItem>
            )}
          />

          {/* Age */}
          <FormField
  name="age"
  render={({ field, fieldState }) => (
    <FormItem>
      <FormLabel>Age</FormLabel>
      <FormControl>
        <Input
          type="number"
          placeholder="Enter your Age"
          {...field}
          className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </FormControl>
      {fieldState?.error && <FormMessage message={fieldState.error.message} />}
    </FormItem>
  )}
/>


          {/* Company */}
          <FormField
            name="company"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Company"
                    {...field}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                {fieldState?.error && <FormMessage message={fieldState.error.message} />}
              </FormItem>
            )}
          />

          {/* Experience */}
         <FormField
  name="experience"
  render={({ field, fieldState }) => (
    <FormItem>
      <FormLabel>Experience (in years)</FormLabel>
      <FormControl>
        <Input
          type="number"
          placeholder="Enter your Experience"
          {...field}
          className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </FormControl>
      {fieldState?.error && <FormMessage message={fieldState.error.message} />}
    </FormItem>
  )}
/>


          {/* Address */}
          <FormField
            name="address"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Address"
                    {...field}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                {fieldState?.error && <FormMessage message={fieldState.error.message} />}
              </FormItem>
            )}
          />

          {/* Highest Education */}
          <FormField
            name="highestEducation"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Highest Education</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Highest Education"
                    {...field}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                {fieldState?.error && <FormMessage message={fieldState.error.message} />}
              </FormItem>
            )}
          />

          {/* Mark */}
          <FormField
            name="mark"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Mark</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Mark"
                    {...field}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                {fieldState?.error && <FormMessage message={fieldState.error.message} />}
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            name="category"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Category"
                    {...field}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                {fieldState?.error && <FormMessage message={fieldState.error.message} />}
              </FormItem>
            )}
          />

          {/* Distance */}
          <FormField
  name="distance"
  render={({ field, fieldState }) => (
    <FormItem>
      <FormLabel>Distance</FormLabel>
      <FormControl>
        <Input
          type="number"
          placeholder="Enter your Distance"
          {...field}
          className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </FormControl>
      {fieldState?.error && <FormMessage message={fieldState.error.message} />}
    </FormItem>
  )}
/>


         {/* Priority Choices Dropdown */}
         {["1", "2", "3"].map((key) => (
  <FormField
    key={key}
    name={`priorityChoices.${key}`}
    render={({ field }) => (
      <FormItem>
        <FormLabel>Priority {key}</FormLabel>
        <Select
          value={field.value}
          onValueChange={field.onChange}
          defaultValue={field.value}
        >
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={`Select Department for Priority ${key}`} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="ME">ME</SelectItem>
            <SelectItem value="EE">EE</SelectItem>
            <SelectItem value="EC">EC</SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
))}


          <Button type="submit" className="w-full py-3 bg-primary text-white rounded-lg mt-8">
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
