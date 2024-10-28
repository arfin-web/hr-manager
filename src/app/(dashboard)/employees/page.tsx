import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Edit, Trash } from "lucide-react"
import Link from "next/link"

const employees = [
    {
        name: "Arfin",
        designation: "Software Engineer",
        salary: "$250.00",
    },
    {
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
                    {employees.map((name) => (
                        <TableRow key={name.name}>
                            <TableCell className="font-medium">{name.name}</TableCell>
                            <TableCell>{name.designation}</TableCell>
                            <TableCell>{name.salary}</TableCell>
                            <TableCell className="flex justify-start items-center gap-2">
                                <Button variant="outline" size="icon">
                                    <Edit className="h-4 w-4" />
                                </Button>
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