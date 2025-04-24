import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

export const NoticeCards = ({ notices, onEdit, onDelete, onNewNotice }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Notices & Updates</h2>
        <Button onClick={onNewNotice}>
          <PlusCircle className="mr-2 h-4 w-4" /> New Notice
        </Button>
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <Card
            key={notice.id}
            className={notice.important ? "border-red-300" : ""}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center">
                    {notice.title}
                    {notice.important && (
                      <Badge className="ml-2 bg-red-100 text-red-800 border-red-300">
                        Important
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription>{notice.date}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit(notice)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(notice.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{notice.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
