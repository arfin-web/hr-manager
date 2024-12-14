"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

const EmployeePayrollUpdate = ({ profileData }: any) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            employeeId: profileData?._id,
            name: profileData?.name,
            email: profileData?.email,
            designation: profileData?.designation,
            department: profileData?.department,
            stipend: profileData?.stipend,
            date: format(new Date(), "PPP"),
            month: format(new Date(), "MMMM"),
            year: new Date().getFullYear(),
            status: profileData?.status,
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/stipends`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(`${data.name}'s stipend paid successfully!`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                reset();
                router.refresh();
            } else {
                toast.error(result.message || "Error in sending stipend", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to send stipend", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            });
        }
    };

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    return (
        <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h2 className="text-lg font-bold">Are You <span className="text-primary">Sure?</span></h2>

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

                    <div className="space-y-2">
                        <label className="block font-medium">Stipend</label>
                        <input
                            type="number"
                            className="border rounded px-3 py-2 w-full"
                            {...register("stipend", { required: "Stipend is required", min: 0 })}
                        />
                    </div>

                </div>

                <div className="grid gap-2">
                    <label htmlFor="month">Month</label>
                    <select
                        {...register("month", { required: "Month is required" })}
                        id="month"
                    >
                        <option value="">Select Month</option>
                        {
                            months.map((month, index) => (
                                <option key={index} value={month}>{month}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="grid gap-2">
                    <label htmlFor="status">Status</label>
                    <select
                        {...register("status", { required: "Status is required" })}
                        id="status"
                    >
                        <option value="">Select status</option>
                        <option value="paid">Reguler</option>
                        <option value="advance">Advance</option>
                        <option value="bonus">Bonus</option>
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

export default EmployeePayrollUpdate;