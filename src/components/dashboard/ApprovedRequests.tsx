"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useLeaveRequests } from "@/hooks/useLeaveRequests"
import { useProfile } from "@/hooks/useProfile"

const ApprovedRequests = () => {
    const { leaverequests } = useLeaveRequests()
    const { profile } = useProfile()
    const approved = leaverequests?.filter((request: any) => request.status == "approved" && request.email == profile?.email)
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 lg:w-auto">Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Leave Days</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {approved?.map((request: any) => (
                        <TableRow key={request._id}>
                            <TableCell className="font-medium">{request.name}</TableCell>
                            <TableCell>{request.email}</TableCell>
                            <TableCell>{request.leaveType}</TableCell>
                            <TableCell>{request.leaveDays}</TableCell>
                            <TableCell>{request.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ApprovedRequests