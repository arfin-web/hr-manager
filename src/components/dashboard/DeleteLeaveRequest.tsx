"use client"

import { getBaseUrl } from "@/helpers/config/envConfig";
import { Button } from "../ui/button";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

export default function DeleteLeaveRequest({ requestData }: any) {
    const router = useRouter()
    const handleDelete = async (id: any) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${getBaseUrl()}/leaverequests/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message || "Leave Request deleted successfully", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                router.refresh()
            } else {
                toast.error(result.message || "Failed to delete Leave Request", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error deleting Leave Request:", error);
            toast.error("An error occurred while deleting the Leave Request.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <div className="w-full">
                <h2>Are You Sure you want to Remove <span className="text-primary font-semibold">{requestData?.title}</span>?</h2>
                <div className="grid place-items-end">
                    <Button className="mt-3" variant="destructive" size="sm" onClick={() => handleDelete(requestData?._id)}>Remove</Button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}