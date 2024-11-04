import { format } from "date-fns"
import { BellElectric } from "lucide-react"
import getNotices from "@/hooks/getNotices"

const Notices = async () => {
    const notices = await getNotices()
    return (
        <div className="flex flex-1 flex-col gap-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {
                    notices?.map((item: any) => (
                        <div key={item._id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                            <div className="flex w-full justify-between items-center">
                                <h2 className="font-semibold text-sm text-primary">{format(item.date, "PPP")}</h2>
                                <BellElectric className="w-12 h-12 text-muted" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                                <h1 className="text-muted-foreground">{item.description}</h1>
                                <p className="text-sm mt-4"><span className="text-primary font-bold">N.B: </span>{item.note}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Notices