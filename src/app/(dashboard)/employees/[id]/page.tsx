'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Profile() {
    const [isOpen, setIsOpen] = useState(false)
    const [profile, setProfile] = useState({
        name: "Arfin",
        email: "arfin@example.com",
        designation: "Manager",
        stipend: 250,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProfile(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsOpen(false)
        // Here you would typically send the updated profile to your backend
    }

    return (
        <div className="container mx-auto p-4">
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <Card className="w-full max-w-3xl mx-auto border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Employee Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div>
                                <div className="aspect-square rounded-xl bg-muted/50" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{profile.name}</h2>
                                <p className="text-muted-foreground">{profile.email}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full max-w-3xl mx-auto lg:col-span-2 border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Other Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Designation</h3>
                                <p>{profile.designation}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Stipend</h3>
                                <p>$ {profile.stipend}</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="mt-4 text-center">
                            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                <DialogTrigger asChild>
                                    <Button className='shadow-lg'>Edit Profile</Button>
                                </DialogTrigger>
                                <DialogContent className="w-80 lg:w-full rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle>Edit Profile</DialogTitle>
                                    </DialogHeader>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" name="name" value={profile.name} onChange={handleInputChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" name="email" type="email" value={profile.email} onChange={handleInputChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="designation">Designation</Label>
                                            <Input id="designation" name="designation" value={profile.designation} onChange={handleInputChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="stipend">Stipend</Label>
                                            <Input id="stipend" name="stipend" value={profile.stipend} onChange={handleInputChange} />
                                        </div>
                                        <Button type="submit" className="w-full">Save Changes</Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}