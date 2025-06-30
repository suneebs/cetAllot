import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import AllottedTable from "./AllottedTable";
import * as XLSX from "xlsx";
import { Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { distance } from "framer-motion";

export const AllotmentResults = () => {
  const [allottedData, setAllottedData] = useState({ ce: [], ee: [], mech: [] });
  const [loading, setLoading] = useState(true);
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    const fetchAllottedStudents = async () => {
      try {
        const departments = ["Civil Engineering", "Electrical and Electronics Engineering", "Mechanical Engineering"];
        const data = { ce: [], ee: [], mech: [] };

        for (const dept of departments) {
          const snapshot = await getDocs(collection(db, `allotment/${dept}/students`));
          // console.log(snapshot);
          
          const students = [];

          snapshot.forEach((doc) => {
            const student = { id: doc.id, ...doc.data() };
           
            students.push(student);
          });

          students.sort((a, b) => {
            const rankA = Number(a.letRank);
            const rankB = Number(b.letRank);
            if (isNaN(rankA)) return 1;
            if (isNaN(rankB)) return -1;
            return rankA - rankB;
          });

          data[dept] = students;
        }
console.log("Allotted Data:", data);

        setAllottedData(data);
      } catch (error) {
        // console.error("Error fetching allotted students:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchPublishStatus = async () => {
      try {
        const docRef = doc(db, "allotment", "publishStatus");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIsPublished(!!docSnap.data().published);
        }
      } catch (error) {
        // console.error("Error fetching publish status:", error);
      }
    };

    fetchAllottedStudents();
    fetchPublishStatus();
  }, []);

  const togglePublish = async () => {
    try {
      const newStatus = !isPublished;
      await setDoc(doc(db, "allotment", "publishStatus"), {
        published: newStatus,
        timestamp: new Date().toISOString(),
      });
      setIsPublished(newStatus);
      alert(`Allotment ${newStatus ? "published" : "unpublished"} successfully.`);
    } catch (error) {
      // console.error("Error updating publish status:", error);
      alert("Failed to update publish status.");
    }
  };

  const exportToExcel = () => {
  const workbook = XLSX.utils.book_new();

  const appendWithDept = (students, deptLabel) => {
    const sheetData = students.map((student,index) => ({
        Name: student.name,
        LET_Rank: student.letRank,
    Reservation_Category: student.allottedCategory,
    address:student.address,
    aadhar: student.adharNumber,
    age: student.age,
    caste: student.caste,
    category: student.category,
    company: student.company,
    distance: student.distance,
    email: student.email,
    experience: student.experience,
    Education: student.highestEducation,
    let_Reg: student.letRegNo,
    mark: student.mark,
    Phone: student.phone,
    Priority_1: student.priorityChoices[1],
    Priority_2: student.priorityChoices[2],
    Priority_3: student.priorityChoices[3],
    religion: student.religion,

        Department: deptLabel
    }));
    const worksheet = XLSX.utils.json_to_sheet(sheetData);
          XLSX.utils.book_append_sheet(workbook, worksheet, deptLabel);

  };

  appendWithDept(allottedData['Civil Engineering'], "Civil Engineering");
  appendWithDept(allottedData['Electrical and Electronics Engineering'], "Electrical Engineering");
  appendWithDept(allottedData['Mechanical Engineering'], "Mechanical Engineering");
  XLSX.writeFile(workbook, "Allotment_Results.xlsx");

};


  if (loading) {
    return (
      <div className="text-center text-muted-foreground text-sm py-10">
        Loading allotted students...
      </div>
    );
  }

  if (
    allottedData['Civil Engineering'].length === 0 &&
    allottedData['Electrical and Electronics Engineering'].length === 0 &&
    allottedData['Mechanical Engineering'].length === 0
  ) {
    return (
      <div className="text-center text-muted-foreground text-sm py-10">
        No students allotted yet.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between mb-4">
        <Button
          onClick={exportToExcel}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download className="h-5 w-5" />
          Export
        </Button>

        <Button
          onClick={togglePublish}
          className={`px-4 py-2 rounded-md text-white font-medium ${
            isPublished ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isPublished ? "Unpublish Allotment" : "Publish Allotment"}
        </Button>
      </div>

      <AllottedTable students={allottedData['Civil Engineering']} deptName="Civil Engineering" />
      <AllottedTable students={allottedData['Electrical and Electronics Engineering']} deptName="Electrical & Electronics Engineering" />
      <AllottedTable students={allottedData['Mechanical Engineering']} deptName="Mechanical Engineering" />
    </div>
  );
};
