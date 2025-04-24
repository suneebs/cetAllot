import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";

export const AllotmentDialog = ({
  open,
  onOpenChange,
  departments,
  applications,
  onPublish,
  isLoading,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Publish Seat Allotments</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <p>
            This will allot seats to all approved applications that haven't been
            allotted yet.
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Summary of pending allotments:</h4>
            <ul className="space-y-1">
              {departments.map((dept) => {
                const pendingApps = applications.filter(
                  (app) =>
                    app.department === dept.name &&
                    app.status === "approved" &&
                    app.allotmentStatus !== "allotted"
                ).length;
                const availableSeats = dept.totalSeats - dept.filledSeats;

                return (
                  <li key={dept.id} className="flex justify-between">
                    <span>{dept.name}:</span>
                    <span>
                      {pendingApps} pending / {availableSeats} available
                      {pendingApps > availableSeats && (
                        <span className="text-red-600 ml-2">
                          (Not enough seats!)
                        </span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => onOpenChange(false)}
            variant="outline"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button onClick={onPublish} disabled={isLoading}>
            {isLoading ? "Processing..." : "Publish Allotments"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
