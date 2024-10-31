import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import EmployeePayrollUpdate from "@/components/EmployeePayrollUpdate"
import getEmployees from "@/hooks/getEmployees"

export default async function Payroll() {
    const employees = await getEmployees()
    return (
        <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-lg font-bold">Payroll</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12">Name</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Stipend</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {employees?.map((employee: any) => (
                        <TableRow key={employee._id}>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.designation}</TableCell>
                            <TableCell>${employee.stipend}</TableCell>
                            <TableCell className="flex justify-start items-center gap-2">
                                <EmployeePayrollUpdate profileData={employee} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}