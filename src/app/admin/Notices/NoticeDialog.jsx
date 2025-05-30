import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription 
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export const NoticeDialog = ({
  open,
  onOpenChange,
  notice,
  onSave,
  onChange,
  isLoading,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{notice?.id ? "Edit Notice" : "New Notice"}</DialogTitle>
          <DialogDescription>
    {notice?.id
      ? "Update the notice details below."
      : "Fill in the notice information to add a new notice."}
  </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="notice-title">Title</Label>
            <Input
              id="notice-title"
              placeholder="Notice title"
              value={notice?.title || ""}
              onChange={(e) =>
                onChange({
                  ...notice,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="notice-message">Message</Label>
            <Textarea
              id="notice-message"
              placeholder="Notice message"
              value={notice?.message || ""}
              onChange={(e) =>
                onChange({
                  ...notice,
                  message: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="notice-important"
              checked={notice?.important || false}
              onChange={(e) =>
                onChange({
                  ...notice,
                  important: e.target.checked,
                })
              }
            />
            <Label htmlFor="notice-important">Mark as important</Label>
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
            {isLoading ? "Saving..." : "Save Notice"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
