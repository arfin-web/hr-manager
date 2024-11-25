import AbsentEmployees from "@/components/dashboard/AbsentEmployees"
import PresentEmployees from "@/components/dashboard/PresentEmployees"
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

export default function Attendance() {
    return (
        <>
            <div className="w-full flex justify-between items-center px-2">
                <h2 className="text-lg font-bold">All <span className="text-primary">Employees</span></h2>
                <Link href="/attendance/set-new">
                    <Button className="shadow-md">Set New</Button>
                </Link>
            </div>
            <Tabs defaultValue="present" className="p-2 mt-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="present">Present</TabsTrigger>
                    <TabsTrigger value="absent">Absent</TabsTrigger>
                </TabsList>
                <TabsContent value="present">
                    <PresentEmployees />
                </TabsContent>
                <TabsContent value="absent">
                    <AbsentEmployees />
                </TabsContent>
            </Tabs>
        </>
    )
}