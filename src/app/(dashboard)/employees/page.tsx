import { Button } from "@/components/ui/button"
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

const employees = [
    {
        id: 1,
        name: "Arfin",
        designation: "Software Engineer",
        salary: "$250.00",
    },
    {
        id: 2,
        name: "Imtiaz",
        designation: "Software Engineer",
        salary: "$150.00",
    },
]

export default function Employees() {
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
                        <TableHead className="w-12">Name</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Stipend</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow key={employee.id}>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.designation}</TableCell>
                            <TableCell>{employee.salary}</TableCell>
                            <TableCell className="flex justify-start items-center gap-2">
                                <Link href={`/employees/${employee.id}`}>
                                    <Button variant="outline" size="icon">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Button variant="destructive" size="icon">
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}