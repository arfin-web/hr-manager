"use client";

import { BookOpenCheck, BriefcaseBusiness } from "lucide-react";
import { useLeaveData } from "@/hooks/useLeaveData";
import LeavesChart from "./LeavesChart";

const leavePolicy = [
    {
        id: 1,
        name: "Sick Leave",
        days: 10,
    },
    {
        id: 2,
        name: "Casual Leave",
        days: 8,
    },
    {
        id: 3,
        name: "Annual Leave",
        days: 20,
    }
]

const LeaveOverview = () => {
    const { leaveData } = useLeaveData();

    if (!leaveData) {
        return <div>Loading...</div>;
    }

    const getIcon = (iconType: string) => {
        switch (iconType) {
            case "sick":
                return <BookOpenCheck className="w-5 h-5 text-primary" />;
            case "casual":
                return <BookOpenCheck className="w-5 h-5 text-primary" />;
            case "annual":
                return <BookOpenCheck className="w-5 h-5 text-primary" />;
            default:
                return null;
        }
    };

    return (
        <>
            <h1 className="text-xl font-bold my-3">Company <span className="text-primary">Leave Policy</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="grid grid-cols-1 gap-2 lg:col-span-2">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        {leavePolicy.map((item: any) => (
                            <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                                <div className="flex w-full justify-between items-center">
                                    <h3>{item.name}</h3>
                                    <BookOpenCheck className="text-primary w-4 h-4" />
                                </div>
                                <div className="flex w-full justify-between items-center">
                                    <h1 className="text-3xl text-primary font-bold">{item.days}</h1>
                                    <BriefcaseBusiness className="w-14 h-14 text-muted" />
                                </div>
                            </div>
                        ))}
                        <h1 className="text-xl font-bold col-span-3 my-3">Employees Leave <span className="text-primary">Overview</span></h1>
                        {leaveData.map((item: any) => (
                            <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                                <div className="flex w-full justify-between items-center">
                                    <h3>{item.title}</h3>
                                    {getIcon(item.icon)}
                                </div>
                                <div className="flex w-full justify-between items-center">
                                    <h1 className="text-3xl text-primary font-bold">{item.value}</h1>
                                    <BriefcaseBusiness className="w-14 h-14 text-muted" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <LeavesChart />
            </div>
        </>
    );
};

export default LeaveOverview;