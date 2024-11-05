"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from 'react-toastify';

interface TaskFormValues {
    email: string;
    title: string;
    instruction: string;
    deadlinedate: string;
    deadlinetime: string;
    submitTask?: "";
}

const CreateTaskForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TaskFormValues>();
    const [deadlineDate, setDeadlineDate] = useState<Date | any>(null);

    const onSubmit: SubmitHandler<TaskFormValues> = async (data) => {
        try {
            const response = await fetch(`${getBaseUrl()}/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                toast.success("Task created successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                reset()
            } else {
                toast.error(result.message || "Failed to create task.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (err) {
            console.error("Error creating task:", err);
            toast.error("An error occurred while creating the task.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">Create New Task</h2>

                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register("email", { required: "Email is required" })} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" type="text" {...register("title", { required: "Title is required" })} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="instruction">Instruction</Label>
                    <Textarea id="instruction" {...register("instruction", { required: "Instruction is required" })} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="deadlinedate">Deadline Date</Label>
                    <Calendar
                        mode="single"
                        selected={deadlineDate}
                        onSelect={setDeadlineDate}
                        className="rounded-md w-72 lg:w-96"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="deadlinedate">Deadline Date</Label>
                    <Input
                        id="deadlinedate"
                        type="text"
                        value={deadlineDate ? format(deadlineDate, "PPP") : ""}
                        {...register("deadlinedate", { required: "Deadline Date is required" })}
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

                <Button type="submit" className="mt-4">
                    Create Task
                </Button>
            </form>
            <ToastContainer />
        </>
    );
}

export default CreateTaskForm