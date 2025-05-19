import { db } from "@/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

// 📁 Import real application data (ensure this is a valid JSON array)
import realData from "./realData.json";

const uploadRealData = async () => {
  try {
    const applicationsRef = collection(db, "applications");

    for (const entry of realData) {
      const formatted = {
        // Basic fields
        name: entry.name || "",
        email: entry.email || "",
        phone: String(entry.phone || ""),
        letRegNo: entry.letRegNo || "",
        letRank: entry.letRank || "",
        caste: entry.caste || "",
        religion: entry.religion || "",
        reservationCategory: entry.reservationCategory || entry.category || "Others",
        mark: Number(entry.mark || 0),
        distance: Number(entry.distance || 0),

        // Optional fields
        adharNumber: entry.adharNumber || "",
        age: entry.age ? Number(entry.age) : null,
        company: entry.company || "",
        experience: entry.experience ? Number(entry.experience) : null,
        address: entry.address || "",
        highestEducation: entry.highestEducation || "",

        // Priority choices formatted properly
        priorityChoices: {
          "1": entry.priorityChoices?.["1"] || "",
          "2": entry.priorityChoices?.["2"] || "",
          "3": entry.priorityChoices?.["3"] || "",
        },

        // Final timestamp
        submittedAt: Timestamp.now(),
      };

      // Upload to Firestore
      await addDoc(applicationsRef, formatted);
      console.log(`✅ Uploaded: ${formatted.name}`);
    }

    console.log("🎉 All data uploaded successfully.");
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
};

export default uploadRealData;
