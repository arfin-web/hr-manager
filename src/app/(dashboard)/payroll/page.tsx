import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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

export default function Payroll() {
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
                    {employees.map((employee) => (
                        <TableRow key={employee.name}>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.designation}</TableCell>
                            <TableCell>{employee.salary}</TableCell>
                            <TableCell className="flex justify-start items-center gap-2">
                                <form className="flex justify-start items-center gap-2">
                                    <input type="hidden" value={employee.name} />
                                    <input type="hidden" value={employee.designation} />
                                    <input type="hidden" value={employee.salary} />
                                    <Select required>
                                        <SelectTrigger className="w-36">
                                            <SelectValue placeholder="Stipend Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">Due</SelectItem>
                                            <SelectItem value="dark">Paid</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button>Set</Button>
                                </form>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}