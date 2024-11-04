"use client"

import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Eye } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { useEffect, useState } from "react"
import { useProfile } from "@/hooks/useProfile"
import { getBaseUrl } from "@/helpers/config/envConfig"

const MyTasks = () => {
    const [myTasks, setMyTasks] = useState<any>(null);
    const [error, setError] = useState("");
    const { profile } = useProfile();

    const fetchMyTasks = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/tasks`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setMyTasks(result.data);
            } else {
                setError(result.message || "Failed to fetch myTasks data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching myTasks data.");
        }
    };

    useEffect(() => {
        fetchMyTasks();
    }, []);
    return (
        <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-lg font-bold">My Tasks</h2>
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
                    {myTasks?.map((task: any) => {
                        if (task?.email === profile?.email) {
                            return (
                                <TableRow key={task._id}>
                                    <TableCell className="font-medium">{task.email}</TableCell>
                                    <TableCell>{format(task.deadlinedate, "PPP")}</TableCell>
                                    <TableCell>{task.status}</TableCell>
                                    <TableCell className="flex justify-start items-center gap-2">
                                        <Link href={`/my-tasks/${task._id}`}>
                                            <Button variant="outline" size="icon">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default MyTasks