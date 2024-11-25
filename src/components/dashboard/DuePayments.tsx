import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import EmployeePayrollUpdate from "./EmployeePayrollUpdate";
import getEmployees from "@/hooks/getEmployees";
import getStipends from "@/hooks/getStipends";
import { Button } from "@/components/ui/button";

const DuePayments = async () => {
    const employees = await getEmployees();
    const stipends = await getStipends();

    // Extract emails of employees who have already been paid
    const paidEmployeeEmails = stipends?.map((stipend: any) => stipend.email) || [];

    // Filter employees to exclude those who have already been paid
    const dueEmployees = employees?.filter(
        (employee: any) => !paidEmployeeEmails.includes(employee.email)
    );

    return (
        <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-lg font-bold">Payroll</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 lg:w-auto">Name</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Stipend</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dueEmployees?.map((employee: any) => (
                        <TableRow key={employee._id}>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.designation}</TableCell>
                            <TableCell>${employee.stipend}</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell className="flex justify-start items-center gap-2">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button size="sm" variant="outline">
                                            Set
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-56">
                                        <EmployeePayrollUpdate profileData={employee} />
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default DuePayments;