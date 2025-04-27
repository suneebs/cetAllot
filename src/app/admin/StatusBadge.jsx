import { Badge } from "@/components/ui/Badge";

export const StatusBadge = ({ status }) => {
  const badgeMap = {
    pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
    reviewing: "bg-blue-50 text-blue-700 border-blue-200",
    approved: "bg-green-50 text-green-700 border-green-200",
    rejected: "bg-red-50 text-red-700 border-red-200",
  };

  const displayStatus = status
    ? status.charAt(0).toUpperCase() + status.slice(1)
    : "Unknown"; // fallback if status is missing

  return (
    <Badge variant="outline" className={badgeMap[status] || "bg-gray-50 text-gray-700 border-gray-200"}>
      {displayStatus}
    </Badge>
  );
};

export const AllotmentBadge = () => {
  return (
    <Badge
      variant="outline"
      className="bg-purple-50 text-purple-700 border-purple-200"
    >
      Allotted
    </Badge>
  );
};
