import AddDepartmentForm from "@/components/dashboard/AddDepartmentForm"
import DeleteDepartment from "@/components/dashboard/DeleteDepartment"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import UpdateDepartment from "@/components/dashboard/UpdateDepartment"
import getDepartments from "@/hooks/getDepartments"
import { Edit, Eye, MonitorCog, Trash } from "lucide-react"
import Link from "next/link"

const Departments = async () => {
    const departments = await getDepartments()
    return (
        <>
            <div className="w-full flex justify-between items-center px-2 mb-4">
                <h2 className="text-lg font-bold">All <span className="text-primary">Departments</span></h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Add New</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add New <span className="text-primary">Department</span></DialogTitle>
                            <DialogDescription>
                                Give Proper Information
                            </DialogDescription>
                        </DialogHeader>
                        <AddDepartmentForm />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {
                    departments?.map((department: any) => (
                        <div key={department._id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                            <div className="flex w-full justify-between items-center">
                                <h1 className="text-xl font-bold">{department.title}</h1>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link href={`/departments/${department._id}`}>
                                                <Button size="icon" variant="outline" className="rounded-full">
                                                    <Eye className="w-5 h-5" />
                                                </Button>
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View Details</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="flex w-full h-auto justify-between items-center gap-2 mt-3">
                                <div className="flex justify-start items-center gap-2">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" size="icon">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="w-80 lg:w-full rounded-md">
                                            <DialogHeader>
                                                <DialogTitle>Edit Departments</DialogTitle>
                                                <DialogDescription>
                                                    Edit This Departments
                                                </DialogDescription>
                                            </DialogHeader>
                                            <UpdateDepartment departmentData={department} />
                                        </DialogContent>
                                    </Dialog>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="destructive" size="icon">
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-80 p-3">
                                            <DeleteDepartment departmentData={department} />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <MonitorCog className="w-20 h-20 text-muted" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Departments