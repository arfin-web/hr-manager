import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import getStipends from "@/hooks/getStipends"

const PaidPayments = async () => {
    const stipends = await getStipends()
    return (
        <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-lg font-bold">Payroll</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 lg:w-auto">Name</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Stipend</TableHead>
                        <TableHead>Month</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {stipends?.map((employee: any) => (
                        <TableRow key={employee._id}>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.designation}</TableCell>
                            <TableCell>${employee.stipend}</TableCell>
                            <TableCell>{employee.month}</TableCell>
                            <TableCell>{employee.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default PaidPayments