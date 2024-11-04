import DeleteNoticeConfirmation from "@/components/DeleteNoticeConfirmation"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import UpdatedNoticeForm from "@/components/UpdateNoticeForm"
import { format } from "date-fns"
import { BellElectric, Edit, Trash } from "lucide-react"
import Link from "next/link"
import getNotices from "@/hooks/getNotices"

const Notice = async () => {
    const { notices } = await getNotices()
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
                    notices?.map((item: any) => (
                        <div key={item._id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                            <div className="flex w-full justify-between items-center">
                                <h2 className="font-semibold text-sm text-primary">{format(item.date, "PPP")}</h2>
                                <BellElectric className="w-12 h-12 text-muted" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                                <h1>{item.description}</h1>
                                <p className="text-sm mt-2"><span className="text-primary font-bold">N.B: </span>{item.note}</p>
                            </div>
                            <div className="flex w-full h-auto justify-start items-center gap-2 mt-3">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="w-80 lg:w-full rounded-md">
                                        <DialogHeader>
                                            <DialogTitle>Edit Notice</DialogTitle>
                                            <DialogDescription>
                                                Edit This Notice
                                            </DialogDescription>
                                        </DialogHeader>
                                        <UpdatedNoticeForm noticeData={item} />
                                    </DialogContent>
                                </Dialog>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="destructive" size="icon">
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80 p-3">
                                        <DeleteNoticeConfirmation noticeData={item} />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Notice