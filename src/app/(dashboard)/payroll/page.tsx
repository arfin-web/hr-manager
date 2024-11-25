import DuePayments from "@/components/dashboard/DuePayments"
import PaidPayments from "@/components/dashboard/PaidPayments"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function Payroll() {
    return (
        <>
            <Tabs defaultValue="paid" className="p-2">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="paid">Paid</TabsTrigger>
                    <TabsTrigger value="due">Due</TabsTrigger>
                </TabsList>
                <TabsContent value="paid">
                    <PaidPayments />
                </TabsContent>
                <TabsContent value="due">
                    <DuePayments />
                </TabsContent>
            </Tabs>
        </>
    )
}