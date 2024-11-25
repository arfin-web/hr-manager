import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import getEmployees from "@/hooks/getEmployees";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SetAttendance from "@/components/dashboard/SetAttendance";

const SetNew = async () => {
    const employees = await getEmployees();

    return (
        <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-lg font-bold">Set New</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 lg:w-auto">Name</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {employees?.map((employee: any) => (
                        <TableRow key={employee._id}>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.designation}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline">Set</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Set <span className="text-primary">New</span></DialogTitle>
                                            <DialogDescription>
                                                Give Proper Information
                                            </DialogDescription>
                                        </DialogHeader>
                                        <SetAttendance employeeData={employee} />
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default SetNew;