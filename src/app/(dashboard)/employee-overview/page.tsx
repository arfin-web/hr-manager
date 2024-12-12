"use client"

import MyLeavesChart from "@/components/dashboard/MyLeavesChart";
import { useProfile } from "@/hooks/useProfile";
import { useTasks } from "@/hooks/useTasks";
import { BookCheck, ChartNoAxesColumnIncreasing, ClipboardList, LayoutList, PackageCheck } from "lucide-react"

const EmployeeOverviewPage = () => {
    const { profile } = useProfile();
    const { tasks } = useTasks();

    const myTasks = tasks?.filter((task: any) => task.email === profile?.email);
    const totalPending = tasks?.filter((task: any) => task.status === "pending" && task.email === profile?.email);
    const totalSubmitted = tasks?.filter((task: any) => task.status === "submited" && task.email === profile?.email);
    const totalCompleted = tasks?.filter((task: any) => task.status === "done" && task.email === profile?.email);

    const employeeData = [
        {
            id: 1,
            title: "Total Task",
            value: `${myTasks?.length || 0}`,
            icon: <ClipboardList className="w-5 h-5 text-primary" />
        },
        {
            id: 2,
            title: "Total Pending",
            value: `${totalPending?.length || 0}`,
            icon: <LayoutList className="w-5 h-5 text-primary" />
        },
        {
            id: 3,
            title: "Total Submitted",
            value: `${totalSubmitted?.length || 0}`,
            icon: <BookCheck className="w-5 h-5 text-primary" />
        },
        {
            id: 4,
            title: "Total Completed",
            value: `${totalCompleted?.length || 0}`,
            icon: <PackageCheck className="w-5 h-5 text-primary" />
        }
    ]

    return (
        <div className="flex flex-1 flex-col gap-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                {
                    employeeData.map((item) => (
                        <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                            <div className="flex w-full justify-between items-center">
                                <h3>{item.title}</h3>
                                {item.icon}
                            </div>
                            <div className="flex w-full justify-between items-center">
                                <h1 className="text-2xl text-primary font-bold">{item.value}</h1>
                                <ChartNoAxesColumnIncreasing className="w-20 h-20 text-muted" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <MyLeavesChart />
            </div>
        </div>
    )
}

export default EmployeeOverviewPage