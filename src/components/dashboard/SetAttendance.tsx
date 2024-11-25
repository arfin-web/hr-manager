"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

const SetAttendance = ({ employeeData }: any) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            employeeId: employeeData?._id,
            name: employeeData?.name,
            email: employeeData?.email,
            designation: employeeData?.designation,
            department: employeeData?.department,
            stipend: employeeData?.stipend,
            date: format(new Date(), "PPP"),
            time: "",
            status: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/attendances`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(`${data.name}'s Attendance added successfully!`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                reset();
                router.refresh();
            } else {
                toast.error(result.message || "Error in giving Attendance", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to add Attendance", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            });
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div className="hidden">
                    <div className="space-y-2">
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            className="border rounded px-3 py-2 w-full"
                            {...register("name", { required: "Name is required" })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            className="border rounded px-3 py-2 w-full"
                            {...register("email", { required: "Email is required" })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block font-medium">Designation</label>
                        <input
                            type="text"
                            className="border rounded px-3 py-2 w-full"
                            {...register("designation", { required: "Designation is required" })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block font-medium">Department</label>
                        <input
                            type="text"
                            className="border rounded px-3 py-2 w-full"
                            {...register("department", { required: "Department is required" })}
                        />
                    </div>

                </div>

                <div className="space-y-2">
                    <label className="block font-medium">Date</label>
                    <input
                        type="text"
                        className="border rounded px-3 py-2 w-full"
                        {...register("date", { required: "date is required" })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="block font-medium">Time</label>
                    <input
                        type="text"
                        className="border rounded px-3 py-2 w-full"
                        {...register("time")}
                    />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="status">Set Status</label>
                    <select
                        {...register("status", { required: "Status is required" })}
                        id="status"
                        className="border border-muted rounded-md p-2"
                    >
                        <option value="">Set status</option>
                        <option value="present">Present</option>
                        <option value="absent">Absent</option>
                    </select>
                </div>

                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SetAttendance;