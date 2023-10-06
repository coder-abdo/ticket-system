type DepartmentType = "HR" | "IT" | "Business";
type StatusType = "Open" | "Closed" | "InProgress";
interface Ticket {
  subject: string;
  from: DepartmentType;
  to: DepartmentType;
  status: StatusType;
  description: string;
  id: number;
}
interface Department {
  id: number;
  name: DepartmentType;
}
interface Status {
  id: number;
  name: StatusType;
}
