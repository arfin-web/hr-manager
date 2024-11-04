import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trash, Eye } from "lucide-react"
import Link from "next/link"
import getTasks from "@/hooks/getTasks"
import DeleteTaskConfirmation from "@/components/DeleteTaskConfirmation"
import { format } from "date-fns"

const AllTasks = async () => {
    const tasks = await getTasks()
    return (
        <div className="flex flex-1 flex-col gap-4">
            <div className="w-full flex justify-between items-center px-2">
                <h2 className="text-lg font-bold">All Tasks</h2>
                <Link href="/all-tasks/create-task">
                    <Button className="shadow-md">Add New</Button>
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Deadline Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tasks?.map((task: any) => (
                        <TableRow key={task._id}>
                            <TableCell className="font-medium">{task.email}</TableCell>
                            <TableCell>{format(task.deadlinedate, "PPP")}</TableCell>
                            <TableCell>{task.status}</TableCell>
                            <TableCell className="flex justify-start items-center gap-2">
                                <Link href={`/all-tasks/${task._id}`}>
                                    <Button variant="outline" size="icon">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="destructive" size="icon">
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80 p-3">
                                        <DeleteTaskConfirmation taskData={task} />
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AllTasks