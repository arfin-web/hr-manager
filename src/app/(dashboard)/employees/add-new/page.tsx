"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBaseUrl } from "@/helpers/config/envConfig";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useDepartments } from "@/hooks/useDepartment";

const AddNew = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const { departments } = useDepartments();

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok) {
                toast.success(`User ${data.name} registered successfully!`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                reset();
            } else {
                toast.error(result.message || "Error registering user", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to register user", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 p-4 max-w-md mx-auto border-none rounded-xl shadow-md">
                <h1 className="text-2xl font-bold">Add New <span className="text-primary">Employee</span></h1>
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        {...register("name", { required: "Name is required" })}
                        id="name"
                        type="text"
                        placeholder="eg. John Doe"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="image">Picture URL</Label>
                    <Input
                        {...register("image", { required: "Image URL is required" })}
                        id="image"
                        type="url"
                        placeholder="eg. https://example.com/profile.png"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email address",
                            },
                        })}
                        id="email"
                        type="email"
                        placeholder="eg. johndoe@example.com"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                        {...register("designation", { required: "Designation is required" })}
                        id="designation"
                        type="text"
                        placeholder="eg. Software Engineer"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="department">Department</Label>
                    <select
                        {...register("department", { required: "Department is required" })}
                        id="department"
                    >
                        <option value="">Select department</option>
                        {
                            departments?.map((department: any) => (
                                <option key={department._id} value={department.title}>{department.title}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="stipend">Stipend</Label>
                    <Input
                        {...register("stipend", { required: "Stipend is required", valueAsNumber: true })}
                        id="stipend"
                        type="number"
                        placeholder="eg. 5000"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        {...register("password", { required: "Password is required", minLength: 6 })}
                        id="password"
                        type="password"
                        placeholder="eg. ******"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="role">Role</Label>
                    <select
                        {...register("role", { required: "Role is required" })}
                        id="role"
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                    </select>
                </div>

                <Button type="submit" className="mt-3">
                    Confirm
                </Button>
            </form>
            <ToastContainer />
        </>
    );
};

export default AddNew;