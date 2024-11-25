"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBaseUrl } from "@/helpers/config/envConfig";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const AddDepartmentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/departments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok) {
                toast.success(`Department Added successfully!`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                reset();
                router.refresh()
            } else {
                toast.error(result.message || "Error adding Department", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to add Department", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        {...register("title", { required: "Title is required" })}
                        id="title"
                        type="text"
                        placeholder="eg. John Doe"
                    />
                </div>

                <Button type="submit" className="mt-3">
                    Confirm
                </Button>
            </form>
            <ToastContainer />
        </>
    );
};

export default AddDepartmentForm;