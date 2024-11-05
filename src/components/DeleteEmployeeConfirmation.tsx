"use client"

import { getBaseUrl } from "@/helpers/config/envConfig";
import { Button } from "./ui/button";
import { useProfile } from "@/hooks/useProfile";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

export default function DeleteEmployeeConfirmation({ profileData }: any) {
    const { profile } = useProfile();
    const router = useRouter()

    const handleDelete = async (id: any) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${getBaseUrl()}/employees/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message || "Employee deleted successfully", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                router.refresh()
            } else {
                toast.error(result.message || "Failed to delete Employee", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error deleting Employee:", error);
            toast.error("An error occurred while deleting the Employee.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            {
                profileData?.email === profile?.email ? <>
                    <h2><span className="text-primary font-semibold">{profileData?.name}&#x2C;</span> You can not remove yourself.</h2>
                </> : <div className="w-full">
                    <h2>Are You Sure you want to Remove <span className="text-primary font-semibold">{profileData?.name}</span>?</h2>
                    <div className="grid place-items-end">
                        <Button className="mt-3" variant="destructive" size="sm" onClick={() => handleDelete(profileData?._id)}>Remove</Button>
                    </div>
                </div>
            }
            <ToastContainer />
        </>
    )
}