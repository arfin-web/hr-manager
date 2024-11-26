"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

export default function UpdateLeaveStatus({ requestData }: any) {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: requestData?.email || "",
            name: requestData?.name || "",
            designation: requestData?.designation || "",
            department: requestData?.department || "",
            date: requestData?.date || "",
            reason: requestData?.reason || "",
            status: requestData?.status || "pending",
            leaveType: requestData?.leaveType || "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/leaverequests/${requestData?._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Leave Request updated successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                router.refresh();
            } else {
                toast.error(result.message || "Failed to update Leave Request.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
            }
        } catch (error) {
            console.error("Error updating Leave Request:", error);
            toast.error("An error occurred while updating the Leave Request.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            });
        }
    };

    return (
        <>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Email Field */}
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="e.g., user@example.com"
                        {...register("email", { required: "Email is required" })}
                        className={errors.email ? "border-red-500" : ""}
                    />
                </div>

                <div className="hidden">

                    {/* Name Field */}
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="e.g., John Doe"
                            {...register("name", { required: "Name is required" })}
                            className={errors.name ? "border-red-500" : ""}
                        />
                    </div>

                    {/* Designation Field */}
                    <div className="grid gap-2">
                        <Label htmlFor="designation">Designation</Label>
                        <Input
                            id="designation"
                            type="text"
                            placeholder="e.g., Software Engineer"
                            {...register("designation", { required: "Designation is required" })}
                            className={errors.designation ? "border-red-500" : ""}
                        />
                    </div>

                    {/* Department Field */}
                    <div className="grid gap-2">
                        <Label htmlFor="department">Department</Label>
                        <Input
                            id="department"
                            type="text"
                            placeholder="e.g., IT"
                            {...register("department", { required: "Department is required" })}
                            className={errors.department ? "border-red-500" : ""}
                        />
                    </div>

                    {/* Date Field */}
                    <div className="grid gap-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                            id="date"
                            type="text"
                            placeholder="e.g., 2024-11-25"
                            {...register("date", { required: "Date is required" })}
                            className={errors.date ? "border-red-500" : ""}
                        />
                    </div>

                    {/* Leave Type Field */}
                    <div className="grid gap-2">
                        <Label htmlFor="leaveType">Leave Type</Label>
                        <select
                            id="leaveType"
                            {...register("leaveType", { required: "Leave Type is required" })}
                            className="border rounded-md p-2"
                        >
                            <option value="">Select Leave Type</option>
                            <option value="sick">Sick</option>
                            <option value="casual">Casual</option>
                        </select>
                    </div>

                </div>

                {/* Reason Field */}
                <div className="grid gap-2">
                    <Label htmlFor="reason">Reason</Label>
                    <Textarea
                        id="reason"
                        placeholder="Reason for leave"
                        {...register("reason", { required: "Reason is required" })}
                        className={errors.reason ? "border-red-500" : ""}
                    />
                </div>

                {/* Status Field */}
                <div className="grid gap-2">
                    <Label htmlFor="status">Status</Label>
                    <select
                        id="status"
                        {...register("status", { required: "Status is required" })}
                        className="border rounded-md p-2"
                    >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                    Confirm
                </Button>
            </form>
            <ToastContainer />
        </>
    );
}