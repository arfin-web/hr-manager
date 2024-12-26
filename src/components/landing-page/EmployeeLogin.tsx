"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from 'react-toastify';

const employeeLoginCredentials = {
    email: "razib@company.com",
    password: "123456",
}

export function Employeelogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    // Define the onSubmit function to handle form submission
    const onSubmit = async (data: any) => {
        console.log(getBaseUrl());

        try {
            const response = await fetch(`${getBaseUrl()}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem("token", result.token)
                toast.success("Login successful!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                router.push("/welcome")
            } else {
                toast.error(result.message || "Failed to login", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };
    return (
        <div className="container mx-auto px-2 py-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-3">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            defaultValue={employeeLoginCredentials?.email}
                            {...register("email", { required: "Email is required" })}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            defaultValue={employeeLoginCredentials?.password}
                            {...register("password", { required: "Password is required" })}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}