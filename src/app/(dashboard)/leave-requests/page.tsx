import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import getLeaveRequests from "@/hooks/getLeaveRequests";
import { Edit } from "lucide-react";
import UpdateLeaveStatus from "@/components/dashboard/UpdateLeaveStatus";
import LeavesOverview from "@/components/dashboard/LeavesOverview";
import Link from "next/link";

const LeaveRequests = async () => {
    const leaveRequests = await getLeaveRequests();

    // Filter unique requests by email
    const uniqueByMail = Array.from(
        new Map(leaveRequests.map((request: any) => [request.email, request])).values()
    );

    return (
        <>
            <LeavesOverview />
            <h2 className="text-lg font-bold mt-4">
                All <span className="text-primary">Requests</span>
            </h2>
            <div className="grid auto-rows-min gap-4 md:grid-cols-5 my-4">
                {uniqueByMail.map((request: any) => (
                    <Link
                        href={`/leave-requests/${request._id}`}
                        key={request._id}
                        className="rounded-xl bg-muted/50 p-5 shadow-lg flex flex-col items-center"
                    >
                        <div className="rounded-full bg-muted w-24 h-24 flex items-center justify-center overflow-hidden shadow-lg">
                            <span className="text-2xl font-bol">
                                {request.name}
                            </span>
                        </div>
                        <h1 className="text-xl font-bold mt-3">{request.name}</h1>
                        <h3 className="text-sm mt-1">{request.email}</h3>
                        {/* <div className="flex w-full h-auto justify-center gap-2 mt-4">
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
                                    <UpdateLeaveStatus requestData={request} />
                                </DialogContent>
                            </Dialog>
                        </div> */}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default LeaveRequests;