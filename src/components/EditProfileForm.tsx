"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditProfile = ({ profileData }: any) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: profileData.name,
            image: profileData.image,
            email: profileData.email,
            designation: profileData.designation,
            stipend: profileData.stipend,
            stipendStatus: profileData.stipendStatus,
            role: profileData.role,
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/employees/${profileData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok) {
                alert("Profile updated successfully");
                location.reload()
            } else {
                alert(result.message || "Failed to update profile");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("An error occurred while updating the profile.");
        }
    };

    return (
        <form className="border-none" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold mt-2">Edit <span className="text-primary">Profile</span></h1>

            <div className="grid gap-2 mt-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" {...register("name", { required: "Name is required" })} />
            </div>

            <div className="grid gap-2 mt-2">
                <Label htmlFor="image">Picture URL</Label>
                <Input id="image" type="url" {...register("image", { required: "Image URL is required" })} />
            </div>

            <div className="grid gap-2 mt-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email", { required: "Email is required" })} />
            </div>

            <div className="grid gap-2 mt-2">
                <Label htmlFor="designation">Designation</Label>
                <Input id="designation" type="text" {...register("designation", { required: "Designation is required" })} />
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2 mt-2">
                    <Label htmlFor="stipend">Stipend</Label>
                    <Input id="stipend" type="number" {...register("stipend", { required: "Stipend is required" })} />
                </div>

                <div className="grid gap-2 mt-2">
                    <Label htmlFor="role">Role</Label>
                    <select id="role" {...register("role", { required: "Role is required" })}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                    </select>
                </div>
            </div>

            <Button type="submit" className="mt-3">
                Confirm
            </Button>
        </form>
    );
};

export default EditProfile;