"use client";
import { Button } from "@/components/ui/Button";
import { Check, UploadCloud } from "lucide-react";
import { runAllotmentHandler } from "../utils/runAllotmentHandler";
import uploadRealData from "../utils/uploadRealData";
import { useState } from "react";

export const DashboardHeader = () => {
  const [loadingAllotment, setLoadingAllotment] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleRunAllotment = async () => {
    setLoadingAllotment(true);
    const result = await runAllotmentHandler();
    setLoadingAllotment(false);

    if (result.success) {
      alert("Allotment completed successfully!");
    } else {
      alert("Allotment failed. Check console for errors.");
    }
  };

  const handleUploadRealData = async () => {
    setUploading(true);
    try {
      await uploadRealData();
      alert("Real data uploaded successfully.");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Uploading real data failed. Check console.");
    }
    setUploading(false);
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage BTech applications and departments
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={handleUploadRealData} disabled={uploading}>
          <UploadCloud className="mr-2 h-4 w-4" />
          {uploading ? "Uploading..." : "Upload Real Data"}
        </Button>
        <Button variant="outline" onClick={handleRunAllotment} disabled={loadingAllotment}>
          <Check className="mr-2 h-4 w-4" />
          {loadingAllotment ? "Running..." : "Run Allotment"}
        </Button>
      </div>
    </div>
  );
};
