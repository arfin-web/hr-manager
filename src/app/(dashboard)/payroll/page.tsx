import AdvancePayments from "@/components/dashboard/AdvancePayments"
import BonusPayments from "@/components/dashboard/BonusPayments"
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
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="paid">Paid</TabsTrigger>
                    <TabsTrigger value="due">Due</TabsTrigger>
                    <TabsTrigger value="advance">Advance</TabsTrigger>
                    <TabsTrigger value="bonus">Bonus</TabsTrigger>
                </TabsList>
                <TabsContent value="paid">
                    <PaidPayments />
                </TabsContent>
                <TabsContent value="due">
                    <DuePayments />
                </TabsContent>
                <TabsContent value="advance">
                    <AdvancePayments />
                </TabsContent>
                <TabsContent value="bonus">
                    <BonusPayments />
                </TabsContent>
            </Tabs>
        </>
    )
}