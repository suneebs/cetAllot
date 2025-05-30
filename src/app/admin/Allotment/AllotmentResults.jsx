import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export const AllotmentResults = () => {
  const [allottedData, setAllottedData] = useState({
    me: [],
    ee: [],
    mech: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchAllottedStudents = async () => {
    try {
      const departments = ["ce", "ee", "mech"];
      const data = { ce: [], ee: [], mech: [] };

      for (const dept of departments) {
        const snapshot = await getDocs(collection(db, `allotment/${dept}/students`));
        const students = [];

        snapshot.forEach((doc) => {
          const student = { id: doc.id, ...doc.data() };
          students.push(student);
        });

        // Sort by letRank (increasing order)
        students.sort((a, b) => {
          const rankA = Number(a.letRank);
          const rankB = Number(b.letRank);

          if (isNaN(rankA)) return 1; // push invalid ranks to bottom
          if (isNaN(rankB)) return -1;
          return rankA - rankB;
        });

        data[dept] = students;
      }

      setAllottedData(data);
    } catch (error) {
      console.error("Error fetching allotted students:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchAllottedStudents();
}, []);

  const renderTable = (students, deptName) => {
    if (students.length === 0) return null;

    return (
      <div className="border rounded-lg shadow-sm bg-white p-5 space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">{deptName} - Allotted Students</h2>
        <div className="overflow-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Distance</th>
                <th className="border px-4 py-2">LET Rank</th>
                <th className="border px-4 py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2 font-medium">{student.name}</td>
                  <td className="border px-4 py-2">{student.distance}</td>
                  <td className="border px-4 py-2">{student.letRank || "-"}</td>
                  <td className="border px-4 py-2">{student.reservationCategory || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center text-muted-foreground text-sm py-10">
        Loading allotted students...
      </div>
    );
  }

  if (
    allottedData.ce.length === 0 &&
    allottedData.ee.length === 0 &&
    allottedData.mech.length === 0
  ) {
    return (
      <div className="text-center text-muted-foreground text-sm py-10">
        No students allotted yet.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {renderTable(allottedData.ce, "CE")}
      {renderTable(allottedData.ee, "EE")}
      {renderTable(allottedData.mech, "MECH")}
    </div>
  );
};
