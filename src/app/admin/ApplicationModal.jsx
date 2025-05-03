import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { ApplicationForm } from "./ApplicationForm";

const ApplicationModal = ({ open, onClose, onSubmit, departments }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger />
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>New Application</DialogTitle>
        </DialogHeader>
        <ApplicationForm onSuccess={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
