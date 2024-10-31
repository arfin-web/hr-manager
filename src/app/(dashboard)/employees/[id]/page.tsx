import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EditProfileForm from '@/components/EditProfileForm'
import Image from "next/image"

export default async function Profile({ params }: { params: { id: string } }) {
    const { id } = await params
    let data = await fetch(`http://localhost:5001/api/v1/employees/${id}`)
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
                                <h3 className="font-semibold">Stipend</h3>
                                <p>$ {profile.stipend}</p>
                            </div>
                        </div>
                        <Accordion type="single" collapsible className='w-auto lg:w-80 mt-5'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='text-primary font-bold'>
                                    Edit Profile
                                </AccordionTrigger>
                                <AccordionContent>
                                    <EditProfileForm profileData={profile} />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}