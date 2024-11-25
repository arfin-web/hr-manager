import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import MyProfileButton from "@/components/dashboard/MyProfileButton"
import { ThemeToggle } from "@/components/ThemeToggle";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="overflow-x-hidden">
                <header className="flex w-full h-14 justify-between items-center px-2 lg:px-4 pt-2">
                    <div className="flex justify-start items-center">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="ml-2 h-4" />
                    </div>
                    <div className="flex justify-end items-center gap-2">
                        <ThemeToggle />
                        <MyProfileButton />
                    </div>
                </header>
                <Separator />
                <div className="container mx-auto p-2 lg:p-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
