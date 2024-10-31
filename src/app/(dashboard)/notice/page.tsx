import { Button } from "@/components/ui/button"
import { BellElectric, Edit, Trash } from "lucide-react"
import Link from "next/link"

const data = [
    {
        id: 1,
        title: "Eid Ul Fitr Off Days",
        description: "Eid Ul Fitr Off Days from 12th march to 20th March, 2024",
        date: "20th March, 2024",
        note: "Complete your Task"
    },
    {
        id: 2,
        title: "Eid Ul Fitr Off Days",
        description: "Eid Ul Fitr Off Days from 12th march to 20th March, 2024",
        date: "20th March, 2024",
        note: "Complete your Task"
    },
    {
        id: 3,
        title: "Eid Ul Fitr Off Days",
        description: "Eid Ul Fitr Off Days from 12th march to 20th March, 2024",
        date: "20th March, 2024",
        note: "Complete your Task"
    }
]

export default function Notice() {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <div className="w-full flex justify-between items-center px-2">
                <h2 className="text-lg font-bold">All Notices</h2>
                <Link href="/notice/add-new">
                    <Button className="shadow-md">Add New</Button>
                </Link>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {
                    data.map((item) => (
                        <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                            <div className="flex w-full justify-between items-center">
                                <h2 className="font-semibold text-sm text-primary">{item.date}</h2>
                                <BellElectric className="w-12 h-12 text-muted" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                                <h1>{item.description}</h1>
                                <p className="text-sm mt-2"><span className="text-primary font-bold">N.B: </span>{item.note}</p>
                            </div>
                            <div className="flex w-full justify-start items-center gap-2 mt-3">
                                <Button variant="outline" size="icon">
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="icon">
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}