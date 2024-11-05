"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const EmployeePayrollUpdate = ({ profileData }: any) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: profileData.name,
            image: profileData.image,
            email: profileData.email,
            designation: profileData.designation,
            stipend: profileData.stipend,
            stipendStatus: profileData.stipendStatus,
            role: profileData.role,
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/employees/${profileData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok) {
                toast.success(`${profileData?.name}&apos;s stipend is paid`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                router.refresh()
            } else {
                toast.error(result.message || "Failed to update stipend status", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("An error occurred while updating the profile.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-start items-center gap-2">

                <div className="hidden">
                    <div className="grid gap-2 mt-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" {...register("name", { required: "Name is required" })} />
                    </div>

                    <div className="grid gap-2 mt-2">
                        <Label htmlFor="image">Picture URL</Label>
                        <Input id="image" type="url" {...register("image", { required: "Image URL is required" })} />
                    </div>

                    <div className="grid gap-2 mt-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" {...register("email", { required: "Email is required" })} />
                    </div>

                    <div className="grid gap-2 mt-2">
                        <Label htmlFor="designation">Designation</Label>
                        <Input id="designation" type="text" {...register("designation", { required: "Designation is required" })} />
                    </div>

                    <div className="grid gap-2 mt-2">
                        <Label htmlFor="stipend">Stipend</Label>
                        <Input id="stipend" type="number" {...register("stipend", { required: "Stipend is required" })} />
                    </div>

                    <div className="grid gap-2 mt-2">
                        <Label htmlFor="role">Role</Label>
                        <select id="role" {...register("role", { required: "Role is required" })}>
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>
                </div>

                <select id="stipendStatus" className="p-2 rounded-md" {...register("stipendStatus", { required: "stipendStatus is required" })}>
                    <option value="">Stipend Status</option>
                    <option value="due">Due</option>
                    <option value="paid">Paid</option>
                </select>

                <Button type="submit">
                    Set
                </Button>
            </form>
            <ToastContainer />
        </>
    );
};

export default EmployeePayrollUpdate;