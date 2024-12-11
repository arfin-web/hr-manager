"use client";

import { useEffect, useState } from "react";
import { BookOpenCheck, BriefcaseBusiness } from "lucide-react";
import { useLeaveRequests } from "@/hooks/useLeaveRequests";
import { useProfile } from "@/hooks/useProfile";

const MyLeaveOverview = () => {
    const { leaverequests } = useLeaveRequests();
    const { profile } = useProfile();
    const [leaveData, setLeaveData] = useState([]);

    useEffect(() => {
        if (leaverequests && profile) {
            const sickLeaves = leaverequests.filter(
                (request: any) =>
                    request.email === profile.email &&
                    request.leaveType === "sick" &&
                    request.status === "approved"
            );
            const casualLeaves = leaverequests.filter(
                (request: any) =>
                    request.email === profile.email &&
                    request.leaveType === "casual" &&
                    request.status === "approved"
            );
            const annualLeaves = leaverequests.filter(
                (request: any) =>
                    request.email === profile.email &&
                    request.leaveType === "annual" &&
                    request.status === "approved"
            );

            setLeaveData([
                {
                    id: 1,
                    title: "Total Sick Leave",
                    value: `${sickLeaves.length || 0}`,
                    icon: <BookOpenCheck className="w-5 h-5 text-primary" />,
                },
                {
                    id: 2,
                    title: "Total Casual Leave",
                    value: `${casualLeaves.length || 0}`,
                    icon: <BookOpenCheck className="w-5 h-5 text-primary" />,
                },
                {
                    id: 3,
                    title: "Total Annual Leave",
                    value: `${annualLeaves.length || 0}`,
                    icon: <BookOpenCheck className="w-5 h-5 text-primary" />,
                },
            ])
        }
    }, [leaverequests, profile]); // Dependencies to re-calculate when data changes

    if (!profile || !leaverequests) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid auto-rows-min gap-4 md:grid-cols-3 my-4">
            {leaveData.map((item: any) => (
                <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                    <div className="flex w-full justify-between items-center">
                        <h3>{item.title}</h3>
                        {item.icon}
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

export default MyLeaveOverview;