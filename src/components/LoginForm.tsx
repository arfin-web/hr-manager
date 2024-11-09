"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useRouter } from "next/navigation";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from 'react-toastify';
import Image from "next/image";

const adminLoginCredentials = {
  email: "arfinpriom12@gmail.com",
  password: "1234567",
}

const employeeLoginCredentials = {
  email: "razib@gmail.com",
  password: "1234567",
}

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
  // b1ty4nofq
  return (
    <div className="container mx-auto px-2 py-2 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <form className="mt-3 lg:mt-20 p-2 lg:p-5 order-2 lg:order-1" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-2xl font-bold text-primary">Login</h3>
          <h4>
            Enter your email below to login to your account
          </h4>
          <div className="space-y-3 mt-5">
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
          </div>

          <Tabs defaultValue="admin" className="mt-5">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="admin">Admin Credentials</TabsTrigger>
              <TabsTrigger value="employee">Employee Credentials</TabsTrigger>
            </TabsList>
            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Admin</CardTitle>
                  <CardDescription>
                    Copy Values for Login
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue={adminLoginCredentials.email} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" defaultValue={adminLoginCredentials.password} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="employee">
              <Card>
                <CardHeader>
                  <CardTitle>Employee</CardTitle>
                  <CardDescription>
                    Copy Values for Login
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue={employeeLoginCredentials.email} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" defaultValue={employeeLoginCredentials.password} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </form>
        <div className="order-1 lg:order-2">
          <Image
            src="https://ik.imagekit.io/b1ty4nofq/hr-manager/login.png?updatedAt=1730791050186"
            alt="Login Image"
            width={500}
            height={500}
            className="w-full rounded-r-md"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}