"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"

type FormData = {
    title: string;
    description: string;
    note: string;
};

export default function AddNew() {
    const [date, setDate] = useState<Date | any>(new Date())
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const noticeData = {
            ...data,
            date: format(date, "yyyy-MM-dd"),
        };

        try {
            const response = await fetch("http://localhost:5001/api/v1/notice", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust if you’re handling auth
                },
                body: JSON.stringify(noticeData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Notice added successfully!");
                reset();
                setDate(new Date());
            } else {
                alert(result.message || "Failed to add notice.");
            }
        } catch (error) {
            console.error("Error adding notice:", error);
            alert("An error occurred while adding the notice.");
        }
    };

    return (
        <Card className="border-none shadow-md">
            <CardHeader>
                <CardTitle className="text-2xl">Add New Notice</CardTitle>
                <CardDescription>Provide accurate information</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <Label htmlFor="date">Date</Label>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md w-72 lg:w-96"
                        />
                        <Input value={date ? format(date, "PPP") : "Please select a date"} readOnly />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            type="text"
                            placeholder="e.g., Happy Eid Ul Fitr"
                            {...register("title", { required: "Title is required" })}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Type your Notice Description here."
                            {...register("description", { required: "Description is required" })}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="note">Note</Label>
                        <Input
                            id="note"
                            type="text"
                            placeholder="e.g., Complete Your Task"
                            {...register("note")}
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        Confirm
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}