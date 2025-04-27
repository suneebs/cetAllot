import { Button } from "@/components/ui/Button";
import { Bell, Check, LogOut } from "lucide-react";

export const DashboardHeader = ({
  onNewNotice,
  onPublishAllotments,
  onLogout,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage BTech applications and departments
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={onPublishAllotments}>
          <Check className="mr-2 h-4 w-4" /> Publish Allotments
        </Button>
      </div>
    </div>
  );
};
