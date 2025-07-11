import React from "react";

const AllottedTable = ({ students, deptName }) => {
  if (!students || students.length === 0) return null;

  // Define education priority order
  const educationOrder = {
    'BE': 1,
    'BTech': 1,
    'Diploma': 2,
    'BSc': 3,
    'BVoc': 4
  };

  // ✅ Sort students: First by education priority, then by rank
  const sortedStudents = [...students].sort((a, b) => {
    // Get education priorities (default to 999 for unknown education types)
    const eduPriorityA = educationOrder[a.education] || 999;
    const eduPriorityB = educationOrder[b.education] || 999;

    // First sort by education priority
    if (eduPriorityA !== eduPriorityB) {
      return eduPriorityA - eduPriorityB;
    }

    // If education is the same, sort by rank
    const rankA = parseFloat(a.letRank ?? Infinity);
    const rankB = parseFloat(b.letRank ?? Infinity);

    return rankA - rankB;
  });

  return (
    <div className="backdrop-blur-sm bg-white/80 border border-gray-200 rounded-3xl shadow-xl p-6 transition-all duration-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
        {deptName} <span className="text-gray-500 text-lg font-medium">— Allotted Students</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-primary text-white uppercase text-xs tracking-widest">
            <tr>
              <th className="px-3 py-3 rounded-tl-2xl border-r border-white/30">No.</th>
              <th className="px-3 py-3 border-r border-white/30">Name</th>
              <th className="px-3 py-3 border-r border-white/30">Education</th>
              <th className="px-3 py-3 border-r border-white/30">Rank</th>
              <th className="px-3 py-3 rounded-tr-2xl">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedStudents.map((student, index) => (
              <tr
                key={student.id}
                className="hover:bg-gray-50 transition duration-150"
              >
                <td className="px-3 py-3 font-medium text-gray-800 border-r border-gray-200/50 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="px-3 py-3 border-r border-gray-200/50 whitespace-nowrap">
                  {student.name}
                </td>
                <td className="px-3 py-3 border-r border-gray-200/50 whitespace-nowrap">
                  {student.education || "-"}
                </td>
                <td className="px-3 py-3 border-r border-gray-200/50 whitespace-nowrap">
                  {student.letRank || "-"}
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  {student.allottedCategory}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllottedTable;