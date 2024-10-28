import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Bell } from "lucide-react"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="overflow-x-hidden">
                <header className="flex w-full h-10 justify-between items-center px-2 lg:px-4 pt-2">
                    <div className="flex justify-start items-center">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="ml-2 h-4" />
                    </div>
                    <div>
                        <Bell className="h-5 w-5 cursor-pointer" />
                    </div>
                </header>
                <div className="container mx-auto p-2 lg:p-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
