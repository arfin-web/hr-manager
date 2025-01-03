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
import { AdminLogin } from "./AdminLogin";
import { Employeelogin } from "./EmployeeLogin";

const adminLoginCredentials = {
  email: "admin@admin.com",
  password: "123456",
}

const employeeLoginCredentials = {
  email: "razib@company.com",
  password: "123456",
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
  return (
    <div className="container mx-auto px-2 py-2 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 place-items-center">
        <div className="p-2 lg:p-5 order-2 lg:order-1" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-2xl font-bold text-primary">Login</h3>
          <h4>
            Enter your email below to login to your account
          </h4>
          <form className="space-y-3 mt-5">
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

          <Tabs defaultValue="admin" className="mt-5">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="admin">Admin Login</TabsTrigger>
              <TabsTrigger value="employee">Employee Login</TabsTrigger>
            </TabsList>
            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle className="hidden">Admin</CardTitle>
                  <CardDescription className="hidden">
                    Click Login Button for Login
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <AdminLogin />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="employee">
              <Card>
                <CardHeader>
                  <CardTitle className="hidden">Employee</CardTitle>
                  <CardDescription className="hidden">
                    Click Login Button for Login
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Employeelogin />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
        <div className="order-1 lg:order-2">
          <Image
            src="https://ik.imagekit.io/b1ty4nofq/hr-manager/login.png?updatedAt=1730791050186"
            alt="Login Image"
            width={500}
            height={500}
            className="w-full rounded-r-md dark:hidden"
          />
          <Image
            src="https://ik.imagekit.io/b1ty4nofq/hr-manager/loginDark.png?updatedAt=1732550227462"
            alt="Login Image"
            width={500}
            height={500}
            className="w-full rounded-r-md hidden dark:block"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}