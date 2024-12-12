"use client";

import { BookOpenCheck, BriefcaseBusiness } from "lucide-react";
import { useLeaveData } from "@/hooks/useLeaveData";

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
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {leaveData.map((item: any) => (
                <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                    <div className="flex w-full justify-between items-center">
                        <h3>{item.title}</h3>
                        {getIcon(item.icon)}
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-3xl text-primary font-bold">{item.value}</h1>
                        <BriefcaseBusiness className="w-20 h-20 text-muted" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeaveOverview;