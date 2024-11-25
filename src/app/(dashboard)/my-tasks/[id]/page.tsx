import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { getBaseUrl } from "@/helpers/config/envConfig"
import TaskInfos from "@/components/dashboard/TaskInfos"
import SubmitTaskForm from "@/components/dashboard/SubmitTaskForm"

const TaskDetails = async ({ params }: { params: { id: any } }) => {
    const { id } = await params
    let data = await fetch(`${getBaseUrl()}/tasks/${id}`)
    let result = await data.json()
    const task = result.data
    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-3xl mx-auto border-none shadow-md">
                <CardHeader>
                    <CardTitle className="text-xl font-bold">Task <span className="text-primary">Details</span></CardTitle>
                </CardHeader>
                <CardContent>
                    <TaskInfos task={task} />
                    <Popover>
                        <PopoverTrigger asChild className="mt-5 w-full flex justify-center lg:justify-start">
                            <Button variant="link" size="lg" className="font-bold text-lg">Sumbit Task</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <h4 className="text-lg font-bold my-2">Sumbit Task</h4>
                            <SubmitTaskForm taskData={task} />
                        </PopoverContent>
                    </Popover>
                </CardContent>
            </Card>
        </div>
    )
}

export default TaskDetails