import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/Form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

// Firebase
import { db } from "@/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const FormSchema = z.object({
  adharNumber: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  letRegNo: z.string().min(1, "LET registration number is required"),
  letRank: z.string().min(1, "LET Rank is required"),
  caste: z.string().min(1, "Caste is required"),
  religion: z.string().min(1, "Religion is required"),
  reservationCategory: z.string().min(1, "Reservation Category is required"),
  priorityChoices: z
    .object({
      "1": z.string().min(1, "Branch Option 1 is required"),
      "2": z.string().min(1, "Branch Option 2 is required"),
      "3": z.string().min(1, "Branch Option 3 is required"),
    })
    .refine(
      (data) => new Set([data["1"], data["2"], data["3"]]).size === 3,
      { message: "Branch options must be unique", path: ["priorityChoices"] }
    ),
  mark: z.string().min(1, "% marks is required"),
  age: z.string().optional(),
  company: z.string().optional(),
  experience: z.string().optional(),
  address: z.string().optional(),
  highestEducation: z.string().min(1, "Highest Education is required"),
  distance: z.string().min(1, "Distance is required"),
});

const initialFormData = {
  adharNumber: "",
  name: "",
  email: "",
  phone: "",
  letRegNo: "",
  letRank: "",
  caste: "",
  religion: "",
  reservationCategory: "",
  priorityChoices: { "1": "", "2": "", "3": "" },
  mark: "",
  age: "",
  company: "",
  experience: "",
  address: "",
  highestEducation: "",
  distance: "",
};

const getFirstErrorMessage = (errors) => {
  for (const key in errors) {
    if (!errors[key]) continue;

    if (typeof errors[key]?.message === "string") {
      return errors[key].message;
    }

    // Handle nested errors like priorityChoices
    if (typeof errors[key] === "object") {
      const nestedMessage = getFirstErrorMessage(errors[key]);
      if (nestedMessage) return nestedMessage;
    }
  }
  return null;
};

const onError = (errors) => {
  const message = getFirstErrorMessage(errors) || "Please correct the errors and try again.";
  toast.error("Submission Failed", {
    description: message,
  });
};



export const ApplicationForm = ({ onSuccess }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: initialFormData,
    mode: "onTouched",
  });

  const allBranches = [
    "Civil Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
  ];

  const [selectedBranches, setSelectedBranches] = useState({
    "1": "",
    "2": "",
    "3": "",
  });

  const handleBranchChange = (key, value) => {
    setSelectedBranches((prev) => ({ ...prev, [key]: value }));
    form.setValue(`priorityChoices.${key}`, value);
  };

  const onSubmit = async (data) => {
    const isValid = await form.trigger();
    if (!isValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
  
    const confirmed = window.confirm(
      "Are you sure all fields are filled in correctly?"
    );
    if (!confirmed) return;
  
    try {
      const formattedData = {
        ...data,
        age: data.age ? Number(data.age) : null,
        experience: data.experience ? Number(data.experience) : null,
        mark: Number(data.mark),
        distance: data.distance ? Number(data.distance) : null,
        category: data.reservationCategory,
        submittedAt: Timestamp.now(),
      };
  
      await addDoc(collection(db, "applications"), formattedData);
  
      toast.success("Submitted!", {
  duration: 4000,
  description: "We’ve received your application.",
});

  
      form.reset(initialFormData); // 👈 Reset the form
      setSelectedBranches({ "1": "", "2": "", "3": "" }); // 👈 Reset selected branches
      onSuccess?.(); // optional callback
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission failed!", {
  description: "Please try again later or contact support.",
});

    }
  };
  

  const required = (label) => (
    <span>
      {label} <span className="text-red-500">*</span>
    </span>
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit,onError)} className="space-y-4">
        {/* Required Inputs */}
        {[
          { name: "name", label: required("Name") },
          { name: "email", label: required("Email Address") },
          { name: "phone", label: required("Phone Number (preferably with WA)"), type: "number" },
          { name: "letRegNo", label: required("LET Registration Number (enter 0 if not written)"), type: "text" },
          { name: "letRank", label: required("LET Rank (enter 0 if not written)"), type: "number" },
          // { name: "highestEducation", label: required("Highest Education") },
          // {
          //   name: "mark",
          //   label: required("Marks % ( Obtained in diploma/Bsc/BVoc exam )"),
          //   type: "number",
          //   step: "0.01",
          // },
          {
            name: "distance",
            label: required("Distance in KM (between your workplace and CET)"),
            type: "number",
          },
        ].map(({ name, label, type = "text", step }) => (
          <FormField
            key={name}
            name={name}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={type}
                    step={step}
                    // placeholder={name}
                    className={fieldState.invalid ? "border-red-500" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

{/* Caste Dropdown */}
<FormField
  name="highestEducation"
  render={({ field }) => (
    <FormItem>
      <FormLabel>{required("Education Type")}</FormLabel>
      <FormControl>
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select your highest education type" />
          </SelectTrigger>
          <SelectContent>
            {["BTech","BE","Diploma", "BSc", "DVoc"].map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
            key={"mark"}
            name={"mark"}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>{required("Highest Education Marks % ( Obtained in BTech/BE/Diploma/Bsc/DVoc exam )")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={"number"}
                    step={"0.01"}
                    // placeholder={name}
                    className={fieldState.invalid ? "border-red-500" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
  name="caste"
  render={({ field }) => (
    <FormItem>
      <FormLabel>{required("Caste")}</FormLabel>
      <FormControl>
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select your caste" />
          </SelectTrigger>
          <SelectContent>
            {["Latin Catholic","Roman Catholic","Orthodox Syrian",  "Jacobite Syrian", "Marthoma","Dalit Christian",
            "Mappila","Islam",
            "Nair","Ezhava","Nadar","Viswakarma","Thiyya","Pulaya","Cheramar", "Panan",  "Velan", "Chakyar","Brahmin", "Others"].map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


{/* Religion Dropdown */}
<FormField
  name="religion"
  render={({ field }) => (
    <FormItem>
      <FormLabel>{required("Religion")}</FormLabel>
      <FormControl>
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select your religion" />
          </SelectTrigger>
          <SelectContent>
            {["Hindu", "Muslim/Islam", "Christian", "Other"].map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


        

        {/* Reservation Category */}
        <FormField
          name="reservationCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{required("Reservation Category")}</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent>
                    {["EWS","Ezhava","Muslim","Other Backward Hindu","Latin Catholic and Anglo Indian","Dheevara","Viswakarma","Kusavan","OBC Christian","Kudumbi","SC", "ST", "Physically Disabled","Transgender", "Sports", "DTE Staff","Central govt. employee", "General"].map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Branch Priority */}
        {["1", "2", "3"].map((key) => {
          const otherSelected = Object.entries(selectedBranches)
            .filter(([k]) => k !== key)
            .map(([, v]) => v);

          const availableOptions = allBranches.filter(
            (branch) => !otherSelected.includes(branch)
          );

          return (
            <FormField
              key={key}
              name={`priorityChoices.${key}`}
              render={() => (
                <FormItem>
                  <FormLabel>{required(`Branch - Option ${key}`)}</FormLabel>
                  <FormControl>
                    <Select
                      value={selectedBranches[key]}
                      onValueChange={(value) => handleBranchChange(key, value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={`Select Branch Option ${key}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {availableOptions.map((branch) => (
                          <SelectItem key={branch} value={branch}>
                            {branch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}

        {/* Optional Inputs */}
        {[
          { name: "adharNumber", label: "Aadhaar Number", type: "number" },
          { name: "age", label: "Age", type: "number" },
          { name: "company", label: "Company" },
          { name: "experience", label: "Experience (in years)", type: "number" },
          { name: "address", label: "Address" },
        ].map(({ name, label, type = "text", step }) => (
          <FormField
            key={name}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input {...field} type={type} step={step}  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full mt-6 bg-primary text-white"
        >
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
};
