import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

export const DepartmentCards = ({
  departments,
  onEdit,
  onDelete,
  onNewDepartment,
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Department Management</h2>
        <Button onClick={onNewDepartment}>
          <PlusCircle className="mr-2 h-4 w-4" /> New Department
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {departments.map((department) => (
          <Card key={department.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{department.name}</CardTitle>
              <CardDescription>{department.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Total Seats</p>
                  <p className="text-2xl font-bold">{department.totalSeats}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Filled Seats</p>
                  <p className="text-2xl font-bold">{department.filledSeats}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Available</p>
                  <p className="text-2xl font-bold">
                    {department.totalSeats - department.filledSeats}
                  </p>
                </div>
              </div>

              <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{
                    width: `${
                      (department.filledSeats / department.totalSeats) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t p-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onEdit(department)}
              >
                <Pencil className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onDelete(department.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};
