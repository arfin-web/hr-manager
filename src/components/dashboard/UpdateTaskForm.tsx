"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { CalendarIcon } from "lucide-react"
import { getBaseUrl } from "@/helpers/config/envConfig"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation"

export default function UpdateTaskForm({ taskData }: any) {
    const router = useRouter()
    const [date, setDate] = useState<Date | any>(new Date())
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            deadlinedate: date,
            title: taskData.title,
            instruction: taskData.instruction,
            deadlinetime: taskData.deadlinetime,
            status: taskData.status
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/tasks/${taskData?._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Task updated successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                router.refresh()
            } else {
                toast.error(result.message || "Failed to update Task.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error updating Task:", error);
            toast.error("An error occurred while updating the Task.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <Label htmlFor="deadlineDate">Deadline Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[240px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="hidden">
                    <Input
                        id="date"
                        type="text"
                        placeholder="e.g., Updated date"
                        {...register("deadlinedate", { required: "date is required" })}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        type="text"
                        placeholder="e.g., Updated Title"
                        {...register("title", { required: "Title is required" })}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="instruction">Instruction</Label>
                    <Textarea
                        id="instruction"
                        placeholder="Update the task instruction here."
                        {...register("instruction", { required: "instruction is required" })}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="deadlinetime">Deadline Time</Label>
                    <Input
                        id="deadlinetime"
                        type="text"
                        {...register("deadlinetime", { required: "Deadline time is required" })}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="status">Status</Label>
                    <select id="status" {...register("status", { required: "status is required" })}>
                        <option value={taskData?.status}>{taskData?.status}</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <Button type="submit" className="w-full">
                    Update Task
                </Button>
            </form>
            <ToastContainer />
        </>
    );
}