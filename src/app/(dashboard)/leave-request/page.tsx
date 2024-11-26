import ApprovedRequests from "@/components/dashboard/ApprovedRequests"
import PendingRequests from "@/components/dashboard/PendingRequests"
import RejectedRequests from "@/components/dashboard/RejectedRequests"
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

export default function LeaveRequest() {
    return (
        <>
            <div className="w-full flex justify-between items-center px-2">
                <h2 className="text-lg font-bold">Your <span className="text-primary">Requests</span></h2>
                <Link href="/leave-request/send-new">
                    <Button className="shadow-md">Send New</Button>
                </Link>
            </div>
            <Tabs defaultValue="approved" className="p-2 mt-4">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="approved">Approved</TabsTrigger>
                    <TabsTrigger value="rejected">Rejected</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                </TabsList>
                <TabsContent value="approved">
                    <ApprovedRequests />
                </TabsContent>
                <TabsContent value="rejected">
                    <RejectedRequests />
                </TabsContent>
                <TabsContent value="pending">
                    <PendingRequests />
                </TabsContent>
            </Tabs>
        </>
    )
}