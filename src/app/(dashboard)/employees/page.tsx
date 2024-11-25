import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trash, Eye } from "lucide-react"
import Link from "next/link"
import getEmployees from "@/hooks/getEmployees"
import DeleteEmployeeConfirmation from "@/components/dashboard/DeleteEmployeeConfirmation"

const Employees = async () => {
    const employees = await getEmployees()
    return (
        <div className="flex flex-1 flex-col gap-4">
            <div className="w-full flex justify-between items-center px-2">
                <h2 className="text-lg font-bold">All Employees</h2>
                <Link href="/employees/add-new">
                    <Button className="shadow-md">Add New</Button>
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 lg:w-auto">Name</TableHead>
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
                                <Link href={`/employees/${employee._id}`}>
                                    <Button variant="outline" size="icon">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="destructive" size="icon">
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80 p-3">
                                        <DeleteEmployeeConfirmation profileData={employee} />
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Employees