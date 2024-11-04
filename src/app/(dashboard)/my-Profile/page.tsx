"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useProfile } from "@/hooks/useProfile";

const dummyImage = "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1730452307~exp=1730455907~hmac=b0088f853ad1c79e415d5ec3f056d118bf53287c5aa6bee94ef2655c6e15f966&w=740"

const MyProfile = () => {
    const { profile } = useProfile()
    return (
        <div className="container mx-auto p-4">
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <Card className="w-full max-w-3xl mx-auto border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">My Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div>
                                <Image
                                    src={profile ? profile?.image : dummyImage}
                                    alt={profile ? profile?.name : "John Doe"}
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{profile?.name}</h2>
                                <p className="text-muted-foreground">{profile?.email}</p>
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
                                <p>{profile?.designation}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Stipend</h3>
                                <p>$ {profile?.stipend}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default MyProfile