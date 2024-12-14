import { Bolt, BookOpenCheck, CalendarCheck, CircleDollarSign, LayoutDashboard, Users } from "lucide-react"

const allFeatures = [
    {
        id: 1,
        title: "Dynamic Dashboards",
        description: "Separate dashboards for bith employees and admins with the features you need",
        icon: <LayoutDashboard className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 2,
        title: "Employee Management",
        description: "Manage your employees with ease, including user roles and permissions",
        icon: <Users className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 3,
        title: "Payroll Management",
        description: "Automate your payroll process with ease, including salary calculations and tax deductions",
        icon: <CircleDollarSign className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 4,
        title: "Notice Management",
        description: "Manage employee notices, including leave, attendance, and other important events",
        icon: <Bolt className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 5,
        title: "Task Management",
        description: "Assign tasks to employees and track their progress with ease",
        icon: <CalendarCheck className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 6,
        title: "Attendance and Leave Management",
        description: "Manage employee attendance and leave with ease, including automatic calculations and notifications",
        icon: <BookOpenCheck className="w-6 h-6 text-primary-foreground" />
    },
]

export default allFeatures