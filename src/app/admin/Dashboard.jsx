import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { DashboardHeader } from "./DashboardHeader";
import { ApplicationTable } from "./ApplicationTable";
import { NoticeCards } from "./Notices/NoticeCards";
import { NoticeDialog } from "./Notices/NoticeDialog";
import { AllotmentResults } from "./Allotment/AllotmentResults";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { saveNoticeToFirestore,deleteNoticeFromFirestore } from "../utils/saveNotice";

export default function Dashboard() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [notices, setNotices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [isNoticeDialogOpen, setNoticeDialogOpen] = useState(false);
  const [editNoticeData, setEditNoticeData] = useState(null);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const applicationsSnapshot = await getDocs(collection(db, "applications"));
        const noticesSnapshot = await getDocs(collection(db, "notices"));
        const allotmentSnapshot = await getDocs(collection(db, "allotment"));

        const applicationsData = applicationsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const noticesData = noticesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const allotmentData = allotmentSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setApplications(applicationsData);
        setNotices(noticesData);
        setDepartments(allotmentData);  // Assuming the data includes department details
      } catch (error) {
        console.error("Error fetching dashboard data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Handling Save Notices
  const handleSaveNotice = async () => {
  if (!editNoticeData) return;
  setIsLoading(true);
  try {
    await saveNoticeToFirestore(editNoticeData);
    setNoticeDialogOpen(false);
    setEditNoticeData(null);

    // Re-fetch notices after saving
    const noticesSnapshot = await getDocs(collection(db, "notices"));
    const noticesData = noticesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNotices(noticesData);
  } catch (error) {
    console.error("Error saving notice:", error);
    // Optionally show user feedback (e.g., toast)
  } finally {
    setIsLoading(false);
  }
};
const handleDeleteNotice = async (noticeId) => {
  const confirm = window.confirm("Are you sure you want to delete this notice?");
  if (!confirm) return;

  setIsLoading(true);
  try {
    await deleteNoticeFromFirestore(noticeId);

    // Update the local state without refetching everything
    setNotices((prev) => prev.filter((n) => n.id !== noticeId));
  } catch (error) {
    console.error("Error deleting notice:", error);
    // Optionally show a toast or alert here
  } finally {
    setIsLoading(false);
  }
};



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
          <TabsTrigger value="allotment">Allotment</TabsTrigger>
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
            onEdit={() => {}} // Placeholder
            onNewApplication={() => {}} // Placeholder
          />
        </TabsContent>

        <TabsContent value="allotment">
          <AllotmentResults />
        </TabsContent>

        <TabsContent value="notices">
          <NoticeCards
            notices={notices}
            onEdit={(notice) => {
            setEditNoticeData(notice);
            setNoticeDialogOpen(true);
            }}
            onDelete={handleDeleteNotice}
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

      <NoticeDialog
        open={isNoticeDialogOpen}
        onOpenChange={setNoticeDialogOpen}
        notice={editNoticeData}
        onSave={handleSaveNotice}
        onChange={setEditNoticeData}
        isLoading={isLoading}
      />
    </div>
  );
}
