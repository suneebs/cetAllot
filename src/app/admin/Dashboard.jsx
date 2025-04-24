import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { DashboardHeader } from "./DashboardHeader";
import { ApplicationTable } from "./ApplicationTable";
import { DepartmentCards } from "./DepartmentCards";
import { NoticeCards } from "./NoticeCards";
import { ApplicationDialog } from "./ApplicationDialog";
import { DepartmentDialog } from "./DepartmentDialog";
import { NoticeDialog } from "./NoticeDialog";
import { AllotmentDialog } from "./AllotmentDialog";

export default function Dashboard() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [notices, setNotices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // Dialog states
  const [isAppDialogOpen, setAppDialogOpen] = useState(false);
  const [isDeptDialogOpen, setDeptDialogOpen] = useState(false);
  const [isNoticeDialogOpen, setNoticeDialogOpen] = useState(false);
  const [isAllotmentDialogOpen, setAllotmentDialogOpen] = useState(false);

  // Edit states
  const [editAppData, setEditAppData] = useState(null);
  const [editDeptData, setEditDeptData] = useState(null);
  const [editNoticeData, setEditNoticeData] = useState(null);

  // Use effect without Firebase subscriptions
  useEffect(() => {
    // Mock data or other logic can go here for applications, departments, and notices.
    // Example:
    setApplications([
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        status: "pending",
        department: "Computer Science",
      },
      // Add more mock applications here
    ]);
    setDepartments([
      { id: 1, name: "Computer Science", totalSeats: 50 },
      // Add more mock departments here
    ]);
    setNotices([
      {
        id: 1,
        title: "Important Notice",
        message: "This is an important notice.",
      },
      // Add more mock notices here
    ]);
  }, []);

  // Application handlers
  const handleSaveApp = async () => {
    if (!editAppData) return;

    try {
      setIsLoading(true);
      // Mock save logic for applications (add or update)
      if (editAppData.id) {
        // Update application logic
      } else {
        // Add new application logic
      }

      setAppDialogOpen(false);
      setEditAppData(null);
    } catch (error) {
      console.error("Error saving application: ", error);
      alert("Failed to save application");
    } finally {
      setIsLoading(false);
    }
  };

  // Mock logout handler
  const handleLogout = () => {
    // Logic for logging out (e.g., clearing user session)
    navigate("/login"); // Redirect to login
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    const matchesDepartment =
      departmentFilter === "all" || app.department === departmentFilter;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <DashboardHeader
        onNewNotice={() => {
          setEditNoticeData({
            title: "",
            message: "",
            date: new Date().toISOString().split("T")[0],
            important: false,
          });
          setNoticeDialogOpen(true);
        }}
        onPublishAllotments={() => setAllotmentDialogOpen(true)}
        onLogout={handleLogout}
      />

      <Tabs defaultValue="applications" className="space-y-4">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="notices">Notices & Updates</TabsTrigger>
        </TabsList>

        <TabsContent value="applications">
          <ApplicationTable
            applications={filteredApplications}
            departments={departments}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            departmentFilter={departmentFilter}
            setDepartmentFilter={setDepartmentFilter}
            isLoading={isLoading}
            onEdit={handleSaveApp} // Replace with appropriate handler
            onDelete={() => {}} // Placeholder
            onNewApplication={() => {
              setEditAppData({
                name: "",
                email: "",
                department: departments.length > 0 ? departments[0].name : "",
                submittedDate: new Date().toISOString().split("T")[0],
                status: "pending",
                allotmentStatus: null,
              });
              setAppDialogOpen(true);
            }}
            onExport={() => {}} // Placeholder
          />
        </TabsContent>

        <TabsContent value="departments">
          <DepartmentCards
            departments={departments}
            onEdit={() => {}} // Placeholder
            onDelete={() => {}} // Placeholder
            onNewDepartment={() => {
              setEditDeptData({
                name: "",
                totalSeats: 30,
                filledSeats: 0,
                description: "",
              });
              setDeptDialogOpen(true);
            }}
          />
        </TabsContent>

        <TabsContent value="notices">
          <NoticeCards
            notices={notices}
            onEdit={() => {}} // Placeholder
            onDelete={() => {}} // Placeholder
            onNewNotice={() => {
              setEditNoticeData({
                title: "",
                message: "",
                date: new Date().toISOString().split("T")[0],
                important: false,
              });
              setNoticeDialogOpen(true);
            }}
          />
        </TabsContent>
      </Tabs>

      {/* Dialogs */}
      <ApplicationDialog
        open={isAppDialogOpen}
        onOpenChange={setAppDialogOpen}
        application={editAppData}
        departments={departments}
        onSave={handleSaveApp}
        onChange={setEditAppData}
        isLoading={isLoading}
      />

      <DepartmentDialog
        open={isDeptDialogOpen}
        onOpenChange={setDeptDialogOpen}
        department={editDeptData}
        onSave={() => {}} // Placeholder
        onChange={setEditDeptData}
        isLoading={isLoading}
      />

      <NoticeDialog
        open={isNoticeDialogOpen}
        onOpenChange={setNoticeDialogOpen}
        notice={editNoticeData}
        onSave={() => {}} // Placeholder
        onChange={setEditNoticeData}
        isLoading={isLoading}
      />

      <AllotmentDialog
        open={isAllotmentDialogOpen}
        onOpenChange={setAllotmentDialogOpen}
        departments={departments}
        applications={applications}
        onPublish={() => {}} // Placeholder
        isLoading={isLoading}
      />
    </div>
  );
}
