import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MailboxIcon, MapPinnedIcon, PhoneCallIcon } from "lucide-react"

export default function ContactUs() {
    return (
        <div className="py-8">
            <Card className="mx-4 lg:mx-24 border-dashed">
                <CardHeader>
                    <CardTitle className="text-2xl">Get in <span className="text-primary">Touch</span></CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-lg font-bold">Contact Info:</h2>
                            <p className="text-muted-foreground">Get in touch with our team for more information.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <PhoneCallIcon className="w-5 h-5 text-muted-foreground" />
                                <span className="text-muted-foreground">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MailboxIcon className="w-5 h-5 text-muted-foreground" />
                                <span className="text-muted-foreground">info@example.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPinnedIcon className="w-5 h-5 text-muted-foreground" />
                                <span className="text-muted-foreground">123 Main St, Anytown USA 12345</span>
                            </div>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                        </div>
                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}