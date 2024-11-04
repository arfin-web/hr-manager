"use client"

import { getBaseUrl } from "@/helpers/config/envConfig";
import { Button } from "./ui/button";

export default function DeleteTaskConfirmation({ taskData }: any) {
    const handleDelete = async (id: any) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${getBaseUrl()}/tasks/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message || "Task deleted successfully");
                location.reload()
            } else {
                alert(result.message || "Failed to delete task");
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("An error occurred while deleting the task.");
        }
    };

    return (
        <>
            <div className="w-full">
                <h2>Are You Sure you want to Remove <span className="text-primary font-semibold">{taskData?.title}</span>?</h2>
                <div className="grid place-items-end">
                    <Button className="mt-3" variant="destructive" size="sm" onClick={() => handleDelete(taskData._id)}>Remove</Button>
                </div>
            </div>
        </>
    )
}