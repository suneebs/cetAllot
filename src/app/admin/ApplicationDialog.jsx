import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

export const ApplicationDialog = ({
  open,
  onOpenChange,
  application,
  departments,
  onSave,
  onChange,
  isLoading,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {application?.id ? "Edit Application" : "New Application"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Full name"
              value={application?.name || ""}
              onChange={(e) =>
                onChange({ ...application, name: e.target.value })
              }
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Email"
              value={application?.email || ""}
              onChange={(e) =>
                onChange({ ...application, email: e.target.value })
              }
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="department">Department</Label>
            <Select
              value={application?.department || ""}
              onValueChange={(val) =>
                onChange({ ...application, department: val })
              }
            >
              <SelectTrigger id="department">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.name}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="status">Status</Label>
            <Select
              value={application?.status || "pending"}
              onValueChange={(val) => onChange({ ...application, status: val })}
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewing">Reviewing</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="allotment">Allotment Status</Label>
            <Select
              value={application?.allotmentStatus || "none"}
              onValueChange={(val) =>
                onChange({
                  ...application,
                  allotmentStatus: val === "none" ? null : val,
                })
              }
            >
              <SelectTrigger id="allotment">
                <SelectValue placeholder="Select allotment status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Not Allotted</SelectItem>
                <SelectItem value="allotted">Allotted</SelectItem>
              </SelectContent>
            </Select>
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
          <Button onClick={onSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Application"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
