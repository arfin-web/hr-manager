import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AddNew() {
    return (
        <Card className="border-none shadow-md">
            <CardHeader>
                <CardTitle className="text-2xl">Add New Employee</CardTitle>
                <CardDescription>
                    Give Right Information
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="eg. John Doe"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="eg. m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="designation">Designation</Label>
                        <Input
                            id="designation"
                            type="text"
                            placeholder="eg. Manager"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="stipend">Stipend</Label>
                        <Input
                            id="stipend"
                            type="number"
                            placeholder="eg. $500"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Confirm
                    </Button>
                </div>
            </CardContent>
        </Card>)
}