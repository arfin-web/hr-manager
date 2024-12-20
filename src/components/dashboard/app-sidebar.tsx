"use client"

import * as React from "react"

import { BellElectric, CircleDollarSign, ClipboardList, GitPullRequest, LayoutDashboard, Megaphone, User, Users, Waypoints } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Separator } from "../ui/separator"
import { useProfile } from "@/hooks/useProfile";
import { usePathname } from "next/navigation"
import Logo from "../landing-page/Logo"

// This is sample data.
const navMain = [
  {
    title: "Overview",
    url: "/admin-overview",
    icon: <LayoutDashboard className="w-4 h-4" />,
    role: "admin"
  },
  {
    title: "Overview",
    url: "/employee-overview",
    icon: <LayoutDashboard className="w-4 h-4" />,
    role: "employee"
  },
  {
    title: "Employees",
    url: "/employees",
    icon: <Users className="w-4 h-4" />,
    role: "admin"
  },
  {
    title: "Departments",
    url: "/departments",
    icon: <Waypoints className="w-4 h-4" />,
    role: "admin"
  },
  {
    title: "Attendance",
    url: "/attendance",
    icon: <Megaphone className="w-4 h-4" />,
    role: "admin"
  },
  {
    title: "My Profile",
    url: "/my-Profile",
    icon: <User className="w-4 h-4" />,
    role: "employee"
  },
  {
    title: "Leave Request",
    url: "/leave-request",
    icon: <GitPullRequest className="w-4 h-4" />,
    role: "employee"
  },
  {
    title: "Leave Requests",
    url: "/leave-requests",
    icon: <GitPullRequest className="w-4 h-4" />,
    role: "admin"
  },
  {
    title: "Payroll",
    url: "/payroll",
    icon: <CircleDollarSign className="w-4 h-4" />,
    role: "admin"
  },
  {
    title: "My Payroll",
    url: "/my-payroll",
    icon: <CircleDollarSign className="w-4 h-4" />,
    role: "employee"
  },
  {
    title: "All Tasks",
    url: "/all-tasks",
    icon: <ClipboardList className="w-4 h-4" />,
    role: "admin"
  },
  {
    title: "My Tasks",
    url: "/my-tasks",
    icon: <ClipboardList className="w-4 h-4" />,
    role: "employee"
  },
  {
    title: "Notice",
    url: "/notice",
    icon: <BellElectric className="w-4 h-4" />,
    role: "admin"
  },
  {
    title: "Notices",
    url: "/notices",
    icon: <BellElectric className="w-4 h-4" />,
    role: "employee"
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname()
  const { profile } = useProfile();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard Menus</SidebarGroupLabel>
          <Separator className="mb-3" />
          <SidebarGroupContent>
            <SidebarMenu>
              {navMain.map((item, index) => {
                const isActive = pathName === item.url
                if (profile?.role === item.role) {
                  return (
                    <Link href={item.url} key={index}>
                      <SidebarMenuItem>
                        <SidebarMenuButton className={`flex justify-start items-center gap-2 text-muted-foreground ${isActive ? 'bg-secondary text-primary' : 'bg-transparent'}`}>
                          {item.icon}
                          <h3 className="text-base">{item.title}</h3>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </Link>
                  )
                }
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
