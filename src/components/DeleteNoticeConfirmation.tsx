"use client"

import { getBaseUrl } from "@/helpers/config/envConfig";
import { Button } from "./ui/button";

export default function DeleteNoticeConfirmation({ noticeData }: any) {
    const handleDelete = async (id: any) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${getBaseUrl()}/notice/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message || "Notice deleted successfully");
                location.reload()
            } else {
                alert(result.message || "Failed to delete notice");
            }
        } catch (error) {
            console.error("Error deleting notice:", error);
            alert("An error occurred while deleting the notice.");
        }
    };

    return (
        <>
            <h2>Are You Sure?</h2>
            <Button className="mt-3" variant="destructive" size="sm" onClick={() => handleDelete(noticeData._id)}>Delete</Button>
        </>
    )
}