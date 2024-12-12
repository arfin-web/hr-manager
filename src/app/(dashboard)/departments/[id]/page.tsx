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
import { getBaseUrl } from "@/helpers/config/envConfig"
import { Separator } from "@/components/ui/separator"

const DepartmentDetails = async ({ params }: { params: { id: any } }) => {
    const { id } = await params
    const employees = await getEmployees()
    let data = await fetch(`${getBaseUrl()}/departments/${id}`)
    let result = await data.json()
    const departmentData = result.data
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 place-items-center pb-3">
                <h1 className="text-xl lg:text-3xl text-center font-bold mb-2">
                    Welcome To
                    <span className="text-primary"> {departmentData?.title} </span>
                    Department
                </h1>
                <Separator />
            </div>
            <h2 className="text-lg lg:text-xl font-bold">
                List Of
                <span className="text-primary"> Employees</span>
            </h2>
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
                    {employees?.map((employee: any) => {
                        if (departmentData?.title === employee.department) {
                            return (
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
                            )
                        }
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default DepartmentDetails