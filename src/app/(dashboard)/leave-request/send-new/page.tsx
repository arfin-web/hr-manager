"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { useProfile } from "@/hooks/useProfile";

const SendNewLeaveRequest = () => {
    const router = useRouter();
    const { profile } = useProfile();
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        setFormattedDate(format(new Date(), "PPP"));
    }, []);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/leaverequests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Leave Request sent successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                });
                reset();
                router.refresh();
            } else {
                toast.error(result.message || "Error in sending request", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to send request", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h2 className="text-2xl text-center font-bold">
                    Leave <span className="text-primary">Request Form</span>
                </h2>

                {/* Hidden Fields */}
                <div className="hidden">
                    <input
                        type="email"
                        value={profile?.email || ""}
                        {...register("email", { required: "Email is required" })}
                    />
                    <input
                        type="text"
                        value={profile?.name || ""}
                        {...register("name", { required: "Name is required" })}
                    />
                    <input
                        type="text"
                        value={profile?.designation || ""}
                        {...register("designation", { required: "Designation is required" })}
                    />
                    <input
                        type="text"
                        value={profile?.department || ""}
                        {...register("department", { required: "Department is required" })}
                    />
                    <Textarea
                        value="pending"
                        {...register("status", { required: "Status is required" })}
                    />
                </div>

                {/* Date */}
                <div className="space-y-2">
                    <label className="block font-medium">Date</label>
                    <input
                        type="text"
                        value={formattedDate || ""}
                        className="border rounded px-3 py-2 w-full"
                        {...register("date", { required: "Date is required" })}
                    />
                </div>

                {/* Reason */}
                <div className="space-y-2">
                    <label className="block font-medium">Reason</label>
                    <Textarea
                        className="border rounded px-3 py-2 w-full"
                        {...register("reason", { required: "Reason is required" })}
                    />
                </div>

                {/* Leave Type */}
                <div className="space-y-2">
                    <label className="block font-medium">Leave Type</label>
                    <select
                        {...register("leaveType", { required: "Leave Type is required" })}
                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="">Select Leave Type</option>
                        <option value="sick">Sick</option>
                        <option value="casual">Casual</option>
                        <option value="annual">Annual</option>
                    </select>
                </div>

                <Button type="submit" className="w-full">Submit</Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SendNewLeaveRequest;