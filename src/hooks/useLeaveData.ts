import { useState, useEffect } from "react";
import { useLeaveRequests } from "@/hooks/useLeaveRequests";

export const useLeaveData = () => {
    const { leaverequests } = useLeaveRequests();
    const [leaveData, setLeaveData] = useState([]);

    useEffect(() => {
        if (leaverequests) {
            const sickLeaves = leaverequests.filter(
                (request: any) =>
                    request.leaveType === "sick" &&
                    request.status === "approved"
            );
            const casualLeaves = leaverequests.filter(
                (request: any) =>
                    request.leaveType === "casual" &&
                    request.status === "approved"
            );
            const annualLeaves = leaverequests.filter(
                (request: any) =>
                    request.leaveType === "annual" &&
                    request.status === "approved"
            );

            const defaultLeaveData = [
                {
                    id: 1,
                    title: "Total Sick Leave",
                    value: `${sickLeaves.length || 0}`,
                    icon: "sick",
                },
                {
                    id: 2,
                    title: "Total Casual Leave",
                    value: `${casualLeaves.length || 0}`,
                    icon: "casual",
                },
                {
                    id: 3,
                    title: "Total Annual Leave",
                    value: `${annualLeaves.length || 0}`,
                    icon: "annual",
                },
            ]

            setLeaveData(defaultLeaveData as []);
        }
    }, [leaverequests]);

    return { leaveData };
};