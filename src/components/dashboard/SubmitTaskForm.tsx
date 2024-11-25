"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { getBaseUrl } from "@/helpers/config/envConfig"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation"

export default function SubmitTaskForm({ taskData }: any) {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            deadlinedate: taskData.deadlinedate,
            title: taskData.title,
            instruction: taskData.instruction,
            deadlinetime: taskData.deadlinetime,
            submitTask: taskData.submitTask,
            status: "submited"
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
                toast.success("Task Submitted successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                router.refresh()
            } else {
                toast.error(result.message || "Failed to submit Task.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error submitting Task:", error);
            toast.error("An error occurred while submitting the Task.", {
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
                    <Label htmlFor="submitTask">Your Task</Label>
                    <Textarea
                        id="submitTask"
                        placeholder="Submit your task here."
                        {...register("submitTask", { required: "submitTask is required" })}
                    />
                </div>

                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
            <ToastContainer />
        </>
    );
}