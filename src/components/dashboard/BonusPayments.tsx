import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import getStipends from "@/hooks/getStipends"

const BonusPayments = async () => {
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
                    {stipends?.map((stipend: any) => {
                        if (stipend.status === "bonus") {
                            return (
                                <TableRow key={stipend._id}>
                                    <TableCell className="font-medium">{stipend.name}</TableCell>
                                    <TableCell>{stipend.designation}</TableCell>
                                    <TableCell>${stipend.stipend}</TableCell>
                                    <TableCell>{stipend.month}</TableCell>
                                    <TableCell>{stipend.status}</TableCell>
                                </TableRow>
                            )
                        }
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default BonusPayments