export const initialApplications = [
    {
      id: "PHD123456",
      name: "John Smith",
      email: "john.smith@example.com",
      department: "Computer Science & Engineering",
      submittedDate: "2024-01-15",
      status: "pending",
      allotmentStatus: null,
    },
    // ... rest of the initial applications data
  ];
  
  export const initialDepartments = [
    {
      id: 1,
      name: "Computer Science & Engineering",
      totalSeats: 30,
      filledSeats: 12,
      description: "Focuses on computer systems and computational processes",
    },
    // ... rest of the initial departments data
  ];
  
  export const initialNotices = [
    {
      id: 1,
      title: "Application Deadline Extended",
      message:
        "The deadline for BTech applications has been extended to March 31, 2024.",
      date: "2024-01-25",
      important: true,
    },
    // ... rest of the initial notices data
  ];