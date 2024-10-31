"use client"

import * as React from "react"

import { BellElectric, CircleDollarSign, LayoutDashboard, Network, Users } from "lucide-react"
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
import { Separator } from "./ui/separator"
import { usePathname } from "next/navigation"

// This is sample data.
const navMain = [
  {
    title: "Overview",
    url: "/overview",
    icon: <LayoutDashboard className="w-4 h-4" />
  },
  {
    title: "Employees",
    url: "/employees",
    icon: <Users className="w-4 h-4" />
  },
  {
    title: "Payroll",
    url: "/payroll",
    icon: <CircleDollarSign className="w-4 h-4" />
  },
  {
    title: "Notice",
    url: "/notice",
    icon: <BellElectric className="w-4 h-4" />
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname()
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div
          className="flex justify-start items-center gap-2"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-muted">
            <Network className="size-4" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">Dashboard</span>
            <span className="">v 1.0</span>
          </div>
        </div>
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
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
