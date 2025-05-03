import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { DashboardHeader } from "./DashboardHeader";
import { ApplicationTable } from "./ApplicationTable";
import { DepartmentCards } from "./DepartmentCards";
import { NoticeCards } from "./NoticeCards";
import { DepartmentDialog } from "./DepartmentDialog";
import { NoticeDialog } from "./NoticeDialog";
import { AllotmentDialog } from "./AllotmentDialog";
import { db } from "@/firebase"; // your firebase.js
import { collection, getDocs } from "firebase/firestore";

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

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const applicationsSnapshot = await getDocs(collection(db, "applications"));
        const departmentsSnapshot = await getDocs(collection(db, "departments"));
        const noticesSnapshot = await getDocs(collection(db, "notices"));

        const applicationsData = applicationsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const departmentsData = departmentsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const noticesData = noticesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setApplications(applicationsData);
        setDepartments(departmentsData);
        setNotices(noticesData);
      } catch (error) {
        console.error("Error fetching dashboard data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Application handlers
  const handleSaveApp = async () => {
    if (!editAppData) return;
    try {
      setIsLoading(true);
      // Here, saving logic would be written (like addDoc or updateDoc).
      setAppDialogOpen(false);
      setEditAppData(null);
    } catch (error) {
      console.error("Error saving application: ", error);
      alert("Failed to save application");
    } finally {
      setIsLoading(false);
    }
  };

  // Logout handler
  const handleLogout = () => {
    navigate("/login");
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    const matchesDepartment = departmentFilter === "all" || app.department === departmentFilter;
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
            onEdit={handleSaveApp} // Replace with appropriate edit handler
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
