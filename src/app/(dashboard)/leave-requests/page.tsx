import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import getLeaveRequests from "@/hooks/getLeaveRequests"
import { Edit, MonitorCog, Trash } from "lucide-react"
import UpdateLeaveStatus from "@/components/dashboard/UpdateLeaveStatus"

const LeaveRequests = async () => {
    const leaveRequests = await getLeaveRequests()
    return (
        <>
            <h2 className="text-lg font-bold">All <span className="text-primary">Leave Requests</span></h2>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3 mt-4">
                {
                    leaveRequests?.map((request: any) => (
                        <div key={request._id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                            <div className="flex w-full justify-between items-center">
                                <h1 className="text-xl font-bold">{request.name}</h1>
                                <MonitorCog className="w-20 h-20 text-muted" />
                            </div>
                            <h3><span className="text-primary">Email:</span> {request.email}</h3>
                            <h2><span className="text-primary">Reason:</span> {request.reason}</h2>
                            <h2><span className="text-primary">Leave Type:</span> {request.leaveType}</h2>
                            <h2><span className="text-primary">Status:</span> {request.status}</h2>
                            <div className="flex w-full h-auto justify-start items-center gap-2 mt-3">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="w-80 lg:w-full rounded-md">
                                        <DialogHeader>
                                            <DialogTitle>Set Status</DialogTitle>
                                            <DialogDescription>
                                                Give Proper Info
                                            </DialogDescription>
                                        </DialogHeader>
                                        <UpdateLeaveStatus requestData={request} />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default LeaveRequests