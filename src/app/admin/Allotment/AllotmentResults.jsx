import React from "react";

export const AllotmentResults = ({ applications }) => {
  const getAllottedStudents = () => {
    return applications.filter(
      (app) => app.allotmentStatus?.toLowerCase() === "allotted"
    );
  };

  const allottedStudents = getAllottedStudents();

  return (
    <div className="space-y-6">
      {allottedStudents.length === 0 ? (
        <div className="text-center text-muted-foreground text-sm py-10">
          No students allotted yet.
        </div>
      ) : (
        <ul className="space-y-1 text-sm">
          {allottedStudents.map((student) => (
            <li key={student.id} className="flex justify-between">
              <span>{student.name}</span>
              <span className="text-muted-foreground">{student.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
