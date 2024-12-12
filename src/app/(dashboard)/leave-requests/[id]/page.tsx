import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarCheck, ClipboardPlus, Edit, FerrisWheel, TreePalm } from "lucide-react";
import UpdateLeaveStatus from "@/components/dashboard/UpdateLeaveStatus";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import getLeaveRequests from "@/hooks/getLeaveRequests"
import { getBaseUrl } from "@/helpers/config/envConfig"
import { Separator } from "@/components/ui/separator";

const RequestsByPerson = async ({ params }: { params: { id: any } }) => {
    const { id } = await params
    const leaverequests = await getLeaveRequests()
    const pendingRequests = leaverequests?.filter((request: any) => request?.status == "pending")

    let data = await fetch(`${getBaseUrl()}/leaverequests/${id}`)
    let result = await data.json()
    const leaveRequests = result.data

    const totalSickLeaves = leaverequests?.filter((request: any) => leaveRequests?.email == request.email && request.status == "approved" && request.leaveType == "sick")
    const totalCasualLeaves = leaverequests?.filter((request: any) => leaveRequests?.email == request.email && request.status == "approved" && request.leaveType == "casual")
    const totalAnnualLeaves = leaverequests?.filter((request: any) => leaveRequests?.email == request.email && request.status == "approved" && request.leaveType == "annual")

    const leaveOverview = [
        {
            id: 1,
            title: "Total Sick Leave",
            value: `${totalSickLeaves?.length || 0}`,
            icon: <ClipboardPlus className="w-5 h-5 text-primary" />
        },
        {
            id: 2,
            title: "Total Casual Leaves",
            value: `${totalCasualLeaves?.length || 0}`,
            icon: <FerrisWheel className="w-5 h-5 text-primary" />
        },
        {
            id: 3,
            title: "Total Submitted",
            value: `${totalAnnualLeaves?.length || 0}`,
            icon: <CalendarCheck className="w-5 h-5 text-primary" />
        }
    ]
    return (
        <>
            <div className="flex flex-1 flex-col gap-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {
                        leaveOverview.map((item) => (
                            <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                                <div className="flex w-full justify-between items-center">
                                    <h3>{item.title}</h3>
                                    {item.icon}
                                </div>
                                <div className="flex w-full justify-between items-center">
                                    <h1 className="text-2xl text-primary font-bold">{item.value}</h1>
                                    <TreePalm className="w-20 h-20 text-muted" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-lg lg:text-xl font-bold mb-2">
                    Total Requests of
                    <span className="text-primary"> {leaveRequests?.name}</span>
                </h2>
                <Separator className="mb-5" />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12 lg:w-auto">Name</TableHead>
                            <TableHead>Designation</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pendingRequests?.map((employee: any) => {
                            if (leaveRequests?.email === employee.email) {
                                return (
                                    <TableRow key={employee._id}>
                                        <TableCell className="font-medium">{employee.name}</TableCell>
                                        <TableCell>{employee.designation}</TableCell>
                                        <TableCell>{employee.leaveType}</TableCell>
                                        <TableCell>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" size="sm">
                                                        <Edit className="h-4 w-4 mr-1" />
                                                        Edit Status
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="w-80 lg:w-full rounded-md">
                                                    <DialogHeader>
                                                        <DialogTitle>Update Status</DialogTitle>
                                                        <DialogDescription>
                                                            Provide updated status information for this leave request.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <UpdateLeaveStatus requestData={leaveRequests} />
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default RequestsByPerson