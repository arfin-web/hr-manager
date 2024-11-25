import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import EditProfileForm from '@/components/dashboard/EditProfileForm'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getBaseUrl } from "@/helpers/config/envConfig"

const Profile = async ({ params }: { params: { id: any } }) => {
    const { id } = await params
    let data = await fetch(`${getBaseUrl()}/employees/${id}`)
    let result = await data.json()
    const profile = result.data
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
                                <Image
                                    src={profile?.image}
                                    alt={profile?.name}
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
                                <p>{profile.designation}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Department</h3>
                                <p>{profile.department}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Stipend</h3>
                                <p>$ {profile.stipend}</p>
                            </div>
                        </div>
                        <Popover>
                            <PopoverTrigger asChild className="mt-5 lg:mt-60 w-full flex justify-center lg:justify-start">
                                <Button variant="link" size="lg" className="font-bold text-lg">Edit Profile</Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <EditProfileForm profileData={profile} />
                            </PopoverContent>
                        </Popover>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Profile