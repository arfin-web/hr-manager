"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function LoginForm() {
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
        alert("Login successful!");
        localStorage.setItem("token", result.token)
        router.push("/welcome")
      } else {
        alert(result.message || "Failed to login");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-2 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div>
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
            alt="login"
            className="w-full object-cover"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: "Password is required" })}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}