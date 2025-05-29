"use client";

import { useState } from "react";
import { NoticeDialog } from "./NoticeDialog";
import { Button } from "@/components/ui/Button";
import { saveNoticeToFirestore } from "@/lib/saveNoticeToFirestore";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState({
    title: "",
    message: "",
    important: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    console.log("📝 Saving notice:", notice);
    setIsLoading(true);
    try {
      await saveNoticeToFirestore(notice);
      alert("✅ Notice saved successfully!");
      setNotice({ title: "", message: "", important: false });
      setOpen(false);
    } catch (error) {
      console.error("❌ Error saving notice:", error);
      alert("Failed to save notice. Check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <Button onClick={() => setOpen(true)}>Create New Notice</Button>

      <NoticeDialog
        open={open}
        onOpenChange={setOpen}
        notice={notice}
        onChange={setNotice}
        onSave={handleSave}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AdminPage;
