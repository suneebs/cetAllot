// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   BarChart3,
//   Download,
//   FileText,
//   Filter,
//   Inbox,
//   Loader2,
//   Search,
//   Users,
//   Pencil,
//   Trash2,
//   PlusCircle,
//   Bell,
//   Check,
//   LogOut,
// } from "lucide-react";
// import { Button } from "@/components/ui/Button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/Card";
// import { Input } from "@/components/ui/Input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
// import { Badge } from "@/components/ui/Badge";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/Select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/Table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/Dialog";
// import { Textarea } from "@/components/ui/Textarea";
// import { Label } from "@/components/ui/Label";

// const initialApplications = [
//   {
//     id: "PHD123456",
//     name: "John Smith",
//     email: "john.smith@example.com",
//     department: "Computer Science & Engineering",
//     submittedDate: "2024-01-15",
//     status: "pending",
//     allotmentStatus: null,
//   },
//   {
//     id: "PHD123457",
//     name: "Emily Johnson",
//     email: "emily.johnson@example.com",
//     department: "Electrical Engineering",
//     submittedDate: "2024-01-16",
//     status: "reviewing",
//     allotmentStatus: null,
//   },
//   {
//     id: "PHD123458",
//     name: "Michael Brown",
//     email: "michael.brown@example.com",
//     department: "Mechanical Engineering",
//     submittedDate: "2024-01-17",
//     status: "approved",
//     allotmentStatus: "allotted",
//   },
//   {
//     id: "PHD123459",
//     name: "Sarah Davis",
//     email: "sarah.davis@example.com",
//     department: "Computer Science & Engineering",
//     submittedDate: "2024-01-18",
//     status: "rejected",
//     allotmentStatus: null,
//   },
//   {
//     id: "PHD123460",
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     department: "Electrical Engineering",
//     submittedDate: "2024-01-19",
//     status: "pending",
//     allotmentStatus: null,
//   },
//   {
//     id: "PHD123461",
//     name: "Jennifer Lee",
//     email: "jennifer.lee@example.com",
//     department: "Mechanical Engineering",
//     submittedDate: "2024-01-20",
//     status: "reviewing",
//     allotmentStatus: null,
//   },
//   {
//     id: "PHD123462",
//     name: "Robert Taylor",
//     email: "robert.taylor@example.com",
//     department: "Computer Science & Engineering",
//     submittedDate: "2024-01-21",
//     status: "approved",
//     allotmentStatus: "allotted",
//   },
//   // more initial mock data...
// ];

// const initialDepartments = [
//   {
//     id: 1,
//     name: "Computer Science & Engineering",
//     totalSeats: 30,
//     filledSeats: 12,
//     description: "Focuses on computer systems and computational processes",
//   },
//   {
//     id: 2,
//     name: "Electrical Engineering",
//     totalSeats: 30,
//     filledSeats: 8,
//     description:
//       "Deals with the study and application of electricity and electronics",
//   },
//   {
//     id: 3,
//     name: "Mechanical Engineering",
//     totalSeats: 30,
//     filledSeats: 15,
//     description: "Involves design, production, and operation of machinery",
//   },
// ];

// const initialNotices = [
//   {
//     id: 1,
//     title: "Application Deadline Extended",
//     message:
//       "The deadline for BTech applications has been extended to March 31, 2024.",
//     date: "2024-01-25",
//     important: true,
//   },
//   {
//     id: 2,
//     title: "First Round of Allotments Published",
//     message:
//       "The first round of seat allotments has been published. Please check your email for details.",
//     date: "2024-02-10",
//     important: false,
//   },
// ];

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [applications, setApplications] = useState(initialApplications);
//   const [departments, setDepartments] = useState(initialDepartments);
//   const [notices, setNotices] = useState(initialNotices);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [departmentFilter, setDepartmentFilter] = useState("all");
//   const [isLoading, setIsLoading] = useState(false);

//   // Dialog states
//   const [isAppDialogOpen, setAppDialogOpen] = useState(false);
//   const [isDeptDialogOpen, setDeptDialogOpen] = useState(false);
//   const [isNoticeDialogOpen, setNoticeDialogOpen] = useState(false);
//   const [isAllotmentDialogOpen, setAllotmentDialogOpen] = useState(false);

//   // Edit states
//   const [editAppData, setEditAppData] = useState(null);
//   const [editDeptData, setEditDeptData] = useState(null);
//   const [editNoticeData, setEditNoticeData] = useState(null);

//   // Application handlers
//   const handleEditApp = (app) => {
//     setEditAppData(app);
//     setAppDialogOpen(true);
//   };

//   const handleDeleteApp = (id) => {
//     if (confirm("Are you sure you want to delete this application?")) {
//       setApplications(applications.filter((app) => app.id !== id));

//       // Update department filled seats count if the application was allotted
//       const app = applications.find((a) => a.id === id);
//       if (app && app.allotmentStatus === "allotted") {
//         setDepartments(
//           departments.map((dept) =>
//             dept.name === app.department
//               ? { ...dept, filledSeats: Math.max(0, dept.filledSeats - 1) }
//               : dept
//           )
//         );
//       }
//     }
//   };

//   const handleSaveApp = () => {
//     if (!editAppData) return;

//     // Check if this is a status change from non-allotted to allotted
//     const originalApp = applications.find((a) => a.id === editAppData.id);
//     const isNewAllotment =
//       originalApp &&
//       originalApp.allotmentStatus !== "allotted" &&
//       editAppData.allotmentStatus === "allotted";

//     const isRemovingAllotment =
//       originalApp &&
//       originalApp.allotmentStatus === "allotted" &&
//       editAppData.allotmentStatus !== "allotted";

//     // Update the department filled seats if needed
//     if (isNewAllotment || isRemovingAllotment) {
//       setDepartments(
//         departments.map((dept) => {
//           if (dept.name === editAppData.department) {
//             const change = isNewAllotment ? 1 : -1;
//             return { ...dept, filledSeats: dept.filledSeats + change };
//           }
//           return dept;
//         })
//       );
//     }

//     // Update or add the application
//     setApplications((prev) => {
//       const exists = prev.find((app) => app.id === editAppData.id);
//       if (exists) {
//         return prev.map((app) =>
//           app.id === editAppData.id ? editAppData : app
//         );
//       } else {
//         return [...prev, editAppData];
//       }
//     });

//     setAppDialogOpen(false);
//     setEditAppData(null);
//   };

//   // Department handlers
//   const handleEditDept = (dept) => {
//     setEditDeptData(dept);
//     setDeptDialogOpen(true);
//   };

//   const handleDeleteDept = (id) => {
//     if (
//       confirm(
//         "Are you sure you want to delete this department? This will affect all associated applications."
//       )
//     ) {
//       setDepartments(departments.filter((dept) => dept.id !== id));

//       // Update applications that were in this department
//       const deptToDelete = departments.find((d) => d.id === id);
//       if (deptToDelete) {
//         setApplications(
//           applications.map((app) =>
//             app.department === deptToDelete.name
//               ? { ...app, department: "Unassigned", allotmentStatus: null }
//               : app
//           )
//         );
//       }
//     }
//   };

//   const handleSaveDept = () => {
//     if (!editDeptData) return;

//     setDepartments((prev) => {
//       const exists = prev.find((dept) => dept.id === editDeptData.id);
//       if (exists) {
//         return prev.map((dept) =>
//           dept.id === editDeptData.id ? editDeptData : dept
//         );
//       } else {
//         return [...prev, { ...editDeptData, id: Date.now() }];
//       }
//     });

//     setDeptDialogOpen(false);
//     setEditDeptData(null);
//   };

//   // Notice handlers
//   const handleEditNotice = (notice) => {
//     setEditNoticeData(notice);
//     setNoticeDialogOpen(true);
//   };

//   const handleDeleteNotice = (id) => {
//     if (confirm("Are you sure you want to delete this notice?")) {
//       setNotices(notices.filter((notice) => notice.id !== id));
//     }
//   };

//   const handleSaveNotice = () => {
//     if (!editNoticeData) return;

//     setNotices((prev) => {
//       const exists = prev.find((notice) => notice.id === editNoticeData.id);
//       if (exists) {
//         return prev.map((notice) =>
//           notice.id === editNoticeData.id ? editNoticeData : notice
//         );
//       } else {
//         return [
//           ...prev,
//           {
//             ...editNoticeData,
//             id: Date.now(),
//             date: new Date().toISOString().split("T")[0],
//           },
//         ];
//       }
//     });

//     setNoticeDialogOpen(false);
//     setEditNoticeData(null);
//   };

//   // Allotment handler
//   const handlePublishAllotments = () => {
//     const approvedUnallotted = applications.filter(
//       (app) => app.status === "approved" && app.allotmentStatus !== "allotted"
//     );

//     // Check if we have seats available in each department
//     const deptSeatsMap = {};
//     departments.forEach((dept) => {
//       deptSeatsMap[dept.name] = {
//         available: dept.totalSeats - dept.filledSeats,
//         toFill: 0,
//       };
//     });

//     // Count how many seats we need for each department
//     approvedUnallotted.forEach((app) => {
//       if (deptSeatsMap[app.department]) {
//         deptSeatsMap[app.department].toFill++;
//       }
//     });

//     // Check if we have enough seats
//     let canAllot = true;
//     const deptWithoutSeats = [];

//     Object.entries(deptSeatsMap).forEach(([deptName, seats]) => {
//       if (seats.toFill > seats.available) {
//         canAllot = false;
//         deptWithoutSeats.push(
//           `${deptName} (needs ${seats.toFill}, has ${seats.available})`
//         );
//       }
//     });

//     if (!canAllot) {
//       alert(
//         `Cannot allot all approved applications. Not enough seats in: ${deptWithoutSeats.join(
//           ", "
//         )}`
//       );
//       return;
//     }

//     // Do the allotment
//     const updatedApps = applications.map((app) =>
//       app.status === "approved" && app.allotmentStatus !== "allotted"
//         ? { ...app, allotmentStatus: "allotted" }
//         : app
//     );

//     // Update department filled seats
//     const updatedDepts = departments.map((dept) => {
//       const toFill = deptSeatsMap[dept.name]?.toFill || 0;
//       return {
//         ...dept,
//         filledSeats: dept.filledSeats + toFill,
//       };
//     });

//     // Create a notice about the allotment
//     const newNotice = {
//       id: Date.now(),
//       title: "New Seat Allotments Published",
//       message: `${approvedUnallotted.length} new seats have been allotted to approved applicants.`,
//       date: new Date().toISOString().split("T")[0],
//       important: true,
//     };

//     setApplications(updatedApps);
//     setDepartments(updatedDepts);
//     setNotices([newNotice, ...notices]);
//     setAllotmentDialogOpen(false);

//     alert(`Successfully allotted ${approvedUnallotted.length} seats!`);
//   };

//   const handleExport = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       alert("Data exported successfully!");
//     }, 2000);
//   };

//   const getStatusBadge = (status) => {
//     const badgeMap = {
//       pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
//       reviewing: "bg-blue-50 text-blue-700 border-blue-200",
//       approved: "bg-green-50 text-green-700 border-green-200",
//       rejected: "bg-red-50 text-red-700 border-red-200",
//     };
//     return (
//       <Badge variant="outline" className={badgeMap[status] || ""}>
//         {status.charAt(0).toUpperCase() + status.slice(1)}
//       </Badge>
//     );
//   };

//   const getAllotmentBadge = (status) => {
//     if (!status) return null;

//     return (
//       <Badge
//         variant="outline"
//         className="bg-purple-50 text-purple-700 border-purple-200"
//       >
//         Allotted
//       </Badge>
//     );
//   };

//   const filteredApplications = applications.filter((app) => {
//     const matchesSearch =
//       app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       app.id.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = statusFilter === "all" || app.status === statusFilter;
//     const matchesDepartment =
//       departmentFilter === "all" || app.department === departmentFilter;
//     return matchesSearch && matchesStatus && matchesDepartment;
//   });

//   return (
//     <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <p className="text-muted-foreground">
//             Manage BTech applications and departments
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <Button
//             onClick={() => {
//               setEditNoticeData({
//                 id: null,
//                 title: "",
//                 message: "",
//                 date: new Date().toISOString().split("T")[0],
//                 important: false,
//               });
//               setNoticeDialogOpen(true);
//             }}
//           >
//             <Bell className="mr-2 h-4 w-4" /> New Notice
//           </Button>
//           <Button
//             variant="outline"
//             onClick={() => setAllotmentDialogOpen(true)}
//           >
//             <Check className="mr-2 h-4 w-4" /> Publish Allotments
//           </Button>
//         </div>
//       </div>

//       <Tabs defaultValue="applications" className="space-y-4">
//         <TabsList>
//           <TabsTrigger value="applications">Applications</TabsTrigger>
//           <TabsTrigger value="departments">Departments</TabsTrigger>
//           <TabsTrigger value="notices">Notices & Updates</TabsTrigger>
//         </TabsList>

//         <TabsContent value="applications">
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex gap-2 flex-1">
//               <Input
//                 placeholder="Search applications..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="max-w-sm"
//               />
//               <Select value={statusFilter} onValueChange={setStatusFilter}>
//                 <SelectTrigger className="w-[150px]">
//                   <SelectValue placeholder="Filter by status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All</SelectItem>
//                   <SelectItem value="pending">Pending</SelectItem>
//                   <SelectItem value="reviewing">Reviewing</SelectItem>
//                   <SelectItem value="approved">Approved</SelectItem>
//                   <SelectItem value="rejected">Rejected</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Select
//                 value={departmentFilter}
//                 onValueChange={setDepartmentFilter}
//               >
//                 <SelectTrigger className="w-[200px]">
//                   <SelectValue placeholder="Filter by department" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Departments</SelectItem>
//                   {departments.map((dept) => (
//                     <SelectItem key={dept.id} value={dept.name}>
//                       {dept.name}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <Button
//               onClick={() => {
//                 setEditAppData({
//                   id: `PHD${Math.random().toString().slice(2, 8)}`,
//                   name: "",
//                   email: "",
//                   department: departments.length > 0 ? departments[0].name : "",
//                   submittedDate: new Date().toISOString().split("T")[0],
//                   status: "pending",
//                   allotmentStatus: null,
//                 });
//                 setAppDialogOpen(true);
//               }}
//             >
//               <PlusCircle className="mr-2 h-4 w-4" /> New Application
//             </Button>
//           </div>

//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>ID</TableHead>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Department</TableHead>
//                 <TableHead>Submitted</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Allotment</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredApplications.map((app) => (
//                 <TableRow key={app.id}>
//                   <TableCell>{app.id}</TableCell>
//                   <TableCell>{app.name}</TableCell>
//                   <TableCell>{app.email}</TableCell>
//                   <TableCell>{app.department}</TableCell>
//                   <TableCell>{app.submittedDate}</TableCell>
//                   <TableCell>{getStatusBadge(app.status)}</TableCell>
//                   <TableCell>
//                     {getAllotmentBadge(app.allotmentStatus)}
//                   </TableCell>
//                   <TableCell className="text-right space-x-2">
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       onClick={() => handleEditApp(app)}
//                     >
//                       <Pencil className="w-4 h-4" />
//                     </Button>
//                     <Button
//                       size="sm"
//                       variant="destructive"
//                       onClick={() => handleDeleteApp(app.id)}
//                     >
//                       <Trash2 className="w-4 h-4" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           <div className="flex justify-end mt-4">
//             <Button
//               variant="outline"
//               className="gap-1"
//               onClick={handleExport}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <Loader2 className="h-4 w-4 animate-spin" />
//               ) : (
//                 <Download className="h-4 w-4" />
//               )}
//               Export
//             </Button>
//           </div>
//         </TabsContent>

//         <TabsContent value="departments">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Department Management</h2>
//             <Button
//               onClick={() => {
//                 setEditDeptData({
//                   id: null,
//                   name: "",
//                   totalSeats: 30,
//                   filledSeats: 0,
//                   description: "",
//                 });
//                 setDeptDialogOpen(true);
//               }}
//             >
//               <PlusCircle className="mr-2 h-4 w-4" /> New Department
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {departments.map((department) => (
//               <Card key={department.id} className="overflow-hidden">
//                 <CardHeader>
//                   <CardTitle>{department.name}</CardTitle>
//                   <CardDescription>{department.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <p className="text-sm font-medium">Total Seats</p>
//                       <p className="text-2xl font-bold">
//                         {department.totalSeats}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium">Filled Seats</p>
//                       <p className="text-2xl font-bold">
//                         {department.filledSeats}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium">Available</p>
//                       <p className="text-2xl font-bold">
//                         {department.totalSeats - department.filledSeats}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{
//                         width: `${
//                           (department.filledSeats / department.totalSeats) * 100
//                         }%`,
//                       }}
//                     ></div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex justify-end gap-2 border-t p-2">
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     onClick={() => handleEditDept(department)}
//                   >
//                     <Pencil className="w-4 h-4" />
//                   </Button>
//                   <Button
//                     size="sm"
//                     variant="destructive"
//                     onClick={() => handleDeleteDept(department.id)}
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="notices">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Notices & Updates</h2>
//             <Button
//               onClick={() => {
//                 setEditNoticeData({
//                   id: null,
//                   title: "",
//                   message: "",
//                   date: new Date().toISOString().split("T")[0],
//                   important: false,
//                 });
//                 setNoticeDialogOpen(true);
//               }}
//             >
//               <PlusCircle className="mr-2 h-4 w-4" /> New Notice
//             </Button>
//           </div>

//           <div className="space-y-4">
//             {notices.map((notice) => (
//               <Card
//                 key={notice.id}
//                 className={notice.important ? "border-red-300" : ""}
//               >
//                 <CardHeader className="pb-2">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <CardTitle className="flex items-center">
//                         {notice.title}
//                         {notice.important && (
//                           <Badge className="ml-2 bg-red-100 text-red-800 border-red-300">
//                             Important
//                           </Badge>
//                         )}
//                       </CardTitle>
//                       <CardDescription>{notice.date}</CardDescription>
//                     </div>
//                     <div className="flex gap-2">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => handleEditNotice(notice)}
//                       >
//                         <Pencil className="w-4 h-4" />
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="destructive"
//                         onClick={() => handleDeleteNotice(notice.id)}
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p>{notice.message}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>
//       </Tabs>

//       {/* Application Dialog */}
//       {isAppDialogOpen && (
//         <Dialog open={isAppDialogOpen} onOpenChange={setAppDialogOpen}>
//           <DialogContent className="sm:max-w-md">
//             <DialogHeader>
//               <DialogTitle>
//                 {editAppData?.id ? "Edit Application" : "New Application"}
//               </DialogTitle>
//             </DialogHeader>
//             <div className="space-y-3">
//               <div className="space-y-1">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Full name"
//                   value={editAppData.name}
//                   onChange={(e) =>
//                     setEditAppData({ ...editAppData, name: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Email"
//                   value={editAppData.email}
//                   onChange={(e) =>
//                     setEditAppData({ ...editAppData, email: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="department">Department</Label>
//                 <Select
//                   value={editAppData.department}
//                   onValueChange={(val) =>
//                     setEditAppData({ ...editAppData, department: val })
//                   }
//                 >
//                   <SelectTrigger id="department">
//                     <SelectValue placeholder="Select department" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {departments.map((dept) => (
//                       <SelectItem key={dept.id} value={dept.name}>
//                         {dept.name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="status">Status</Label>
//                 <Select
//                   value={editAppData.status}
//                   onValueChange={(val) =>
//                     setEditAppData({ ...editAppData, status: val })
//                   }
//                 >
//                   <SelectTrigger id="status">
//                     <SelectValue placeholder="Select status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="pending">Pending</SelectItem>
//                     <SelectItem value="reviewing">Reviewing</SelectItem>
//                     <SelectItem value="approved">Approved</SelectItem>
//                     <SelectItem value="rejected">Rejected</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="allotment">Allotment Status</Label>
//                 <Select
//                   value={editAppData.allotmentStatus || "none"}
//                   onValueChange={(val) =>
//                     setEditAppData({
//                       ...editAppData,
//                       allotmentStatus: val === "none" ? null : val,
//                     })
//                   }
//                 >
//                   <SelectTrigger id="allotment">
//                     <SelectValue placeholder="Select allotment status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="none">Not Allotted</SelectItem>
//                     <SelectItem value="allotted">Allotted</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <DialogFooter>
//               <Button onClick={() => setAppDialogOpen(false)} variant="outline">
//                 Cancel
//               </Button>
//               <Button onClick={handleSaveApp}>Save Application</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       )}

//       {/* Department Dialog */}
//       {isDeptDialogOpen && (
//         <Dialog open={isDeptDialogOpen} onOpenChange={setDeptDialogOpen}>
//           <DialogContent className="sm:max-w-md">
//             <DialogHeader>
//               <DialogTitle>
//                 {editDeptData?.id ? "Edit Department" : "New Department"}
//               </DialogTitle>
//             </DialogHeader>
//             <div className="space-y-3">
//               <div className="space-y-1">
//                 <Label htmlFor="dept-name">Department Name</Label>
//                 <Input
//                   id="dept-name"
//                   placeholder="Department Name"
//                   value={editDeptData.name}
//                   onChange={(e) =>
//                     setEditDeptData({ ...editDeptData, name: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="total-seats">Total Seats</Label>
//                 <Input
//                   id="total-seats"
//                   type="number"
//                   placeholder="Total Seats"
//                   value={editDeptData.totalSeats}
//                   onChange={(e) =>
//                     setEditDeptData({
//                       ...editDeptData,
//                       totalSeats: parseInt(e.target.value) || 0,
//                     })
//                   }
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="dept-description">Description</Label>
//                 <Textarea
//                   id="dept-description"
//                   placeholder="Department description"
//                   value={editDeptData.description}
//                   onChange={(e) =>
//                     setEditDeptData({
//                       ...editDeptData,
//                       description: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <Button
//                 onClick={() => setDeptDialogOpen(false)}
//                 variant="outline"
//               >
//                 Cancel
//               </Button>
//               <Button onClick={handleSaveDept}>Save Department</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       )}

//       {/* Notice Dialog */}
//       {isNoticeDialogOpen && (
//         <Dialog open={isNoticeDialogOpen} onOpenChange={setNoticeDialogOpen}>
//           <DialogContent className="sm:max-w-md">
//             <DialogHeader>
//               <DialogTitle>
//                 {editNoticeData?.id ? "Edit Notice" : "New Notice"}
//               </DialogTitle>
//             </DialogHeader>
//             <div className="space-y-3">
//               <div className="space-y-1">
//                 <Label htmlFor="notice-title">Title</Label>
//                 <Input
//                   id="notice-title"
//                   placeholder="Notice title"
//                   value={editNoticeData.title}
//                   onChange={(e) =>
//                     setEditNoticeData({
//                       ...editNoticeData,
//                       title: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="notice-message">Message</Label>
//                 <Textarea
//                   id="notice-message"
//                   placeholder="Notice message"
//                   value={editNoticeData.message}
//                   onChange={(e) =>
//                     setEditNoticeData({
//                       ...editNoticeData,
//                       message: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   id="notice-important"
//                   checked={editNoticeData.important}
//                   onChange={(e) =>
//                     setEditNoticeData({
//                       ...editNoticeData,
//                       important: e.target.checked,
//                     })
//                   }
//                 />
//                 <Label htmlFor="notice-important">Mark as important</Label>
//               </div>
//             </div>
//             <DialogFooter>
//               <Button
//                 onClick={() => setNoticeDialogOpen(false)}
//                 variant="outline"
//               >
//                 Cancel
//               </Button>
//               <Button onClick={handleSaveNotice}>Save Notice</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       )}

//       {/* Allotment Dialog */}
//       {isAllotmentDialogOpen && (
//         <Dialog
//           open={isAllotmentDialogOpen}
//           onOpenChange={setAllotmentDialogOpen}
//         >
//           <DialogContent className="sm:max-w-md">
//             <DialogHeader>
//               <DialogTitle>Publish Seat Allotments</DialogTitle>
//             </DialogHeader>
//             <div className="space-y-3">
//               <p>
//                 This will allot seats to all approved applications that haven't
//                 been allotted yet.
//               </p>
//               <div className="bg-gray-50 p-4 rounded-md">
//                 <h4 className="font-medium mb-2">
//                   Summary of pending allotments:
//                 </h4>
//                 <ul className="space-y-1">
//                   {departments.map((dept) => {
//                     const pendingApps = applications.filter(
//                       (app) =>
//                         app.department === dept.name &&
//                         app.status === "approved" &&
//                         app.allotmentStatus !== "allotted"
//                     ).length;
//                     const availableSeats = dept.totalSeats - dept.filledSeats;

//                     return (
//                       <li key={dept.id} className="flex justify-between">
//                         <span>{dept.name}:</span>
//                         <span>
//                           {pendingApps} pending / {availableSeats} available
//                           {pendingApps > availableSeats && (
//                             <span className="text-red-600 ml-2">
//                               (Not enough seats!)
//                             </span>
//                           )}
//                         </span>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//             <DialogFooter>
//               <Button
//                 onClick={() => setAllotmentDialogOpen(false)}
//                 variant="outline"
//               >
//                 Cancel
//               </Button>
//               <Button onClick={handlePublishAllotments}>
//                 Publish Allotments
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// }
