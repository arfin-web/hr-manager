import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import getAttendance from "@/hooks/getAttendance"

const PresentEmployees = async () => {
    const attendances = await getAttendance()
    const presentEmployeesList = attendances?.filter((attendance: any) => attendance.status === "present")
    return (
        <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-lg font-bold">Present <span className="text-primary">Employees</span></h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 lg:w-auto">Name</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {presentEmployeesList?.map((employee: any) => (
                        <TableRow key={employee._id}>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.designation}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell>{employee.date}</TableCell>
                            <TableCell>{employee.time}</TableCell>
                            <TableCell>{employee.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default PresentEmployees