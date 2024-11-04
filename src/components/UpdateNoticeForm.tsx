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

export default function UpdatedNoticeForm({ noticeData }: any) {
    const [date, setDate] = useState<Date | any>(new Date())
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            date: date,
            title: noticeData.title,
            description: noticeData.description,
            note: noticeData.note || "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/notice/${noticeData?._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Notice updated successfully!");
                location.reload()
            } else {
                alert(result.message || "Failed to update notice.");
            }
        } catch (error) {
            console.error("Error updating notice:", error);
            alert("An error occurred while updating the notice.");
        }
    };

    return (
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
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
                    {...register("date", { required: "date is required" })}
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
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    placeholder="Update the notice description here."
                    {...register("description", { required: "Description is required" })}
                />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="note">Note</Label>
                <Input
                    id="note"
                    type="text"
                    placeholder="e.g., Updated note"
                    {...register("note")}
                />
            </div>

            <Button type="submit" className="w-full">
                Update Notice
            </Button>
        </form>
    );
}