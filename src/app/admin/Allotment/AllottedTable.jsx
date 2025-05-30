// components/AllottedTable.js

import React from "react";

const AllottedTable = ({ students, deptName }) => {
  if (!students || students.length === 0) return null;

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

export default AllottedTable;
