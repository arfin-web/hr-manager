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

export default function AddNew() {
    const [date, setDate] = useState<Date | any>(new Date())
    return (
        <Card className="border-none shadow-md">
            <CardHeader>
                <CardTitle className="text-2xl">Add New Notice</CardTitle>
                <CardDescription>
                    Give Right Information
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
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
                        <Label htmlFor="Titie">Titie</Label>
                        <Input
                            id="Titie"
                            type="text"
                            placeholder="eg. Happy Eid Ul Fitr"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea placeholder="Type your Notice Description here." required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="note">Note</Label>
                        <Input
                            id="note"
                            type="text"
                            placeholder="eg. Complete Your Task"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Confirm
                    </Button>
                </div>
            </CardContent>
        </Card>)
}