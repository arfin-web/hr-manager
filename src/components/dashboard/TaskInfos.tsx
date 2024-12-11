"use client"
import { format } from "date-fns"

const TaskInfos = ({ task }: any) => {
    return (
        <div className="space-y-4">
            <div>
                <h3 className="font-semibold">Title</h3>
                <p>{task?.title}</p>
            </div>
            <div>
                <h3 className="font-semibold">Assigned To</h3>
                <p>{task?.email}</p>
            </div>
            <div>
                <h3 className="font-semibold">Instruction</h3>
                <p>{task?.instruction}</p>
            </div>
            <div>
                <h3 className="font-semibold">Deadline Date</h3>
                <p>{task?.deadlinedate}</p>
            </div>
            <div>
                <h3 className="font-semibold">Deadline Time</h3>
                <p>{task?.deadlinetime}</p>
            </div>
            {
                task?.submitTask !== "" && <div>
                    <h3 className="font-semibold">Submit Task</h3>
                    <p>{task?.submitTask}</p>
                </div>
            }
            <div>
                <h3 className="font-semibold">Status</h3>
                <p>{task?.status}</p>
            </div>
        </div>
    )
}

export default TaskInfos