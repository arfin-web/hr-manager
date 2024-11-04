"use client"

import { getBaseUrl } from "@/helpers/config/envConfig";
import { Button } from "./ui/button";
import { useProfile } from "@/hooks/useProfile";

export default function DeleteEmployeeConfirmation({ profileData }: any) {
    const { profile } = useProfile();
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
                alert(result.message || "Employee deleted successfully");
                location.reload()
            } else {
                alert(result.message || "Failed to delete Employee");
            }
        } catch (error) {
            console.error("Error deleting Employee:", error);
            alert("An error occurred while deleting the Employee.");
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
                        <Button className="mt-3" variant="destructive" size="sm" onClick={() => handleDelete(profileData._id)}>Remove</Button>
                    </div>
                </div>
            }
        </>
    )
}