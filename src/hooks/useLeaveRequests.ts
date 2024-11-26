import { useState, useEffect } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function useLeaveRequests() {
    const [leaverequests, setLeaveRequests] = useState<any>(null);
    const [error, setError] = useState("");

    const fetchLeaveRequests = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/leaverequests`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setLeaveRequests(result.data);
            } else {
                setError(result.message || "Failed to fetch leaverequests data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching leaverequests data.");
        }
    };

    useEffect(() => {
        fetchLeaveRequests();
    }, []);

    return { leaverequests, error };
}