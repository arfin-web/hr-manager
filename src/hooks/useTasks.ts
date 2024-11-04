import { useState, useEffect } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function useTasks() {
    const [tasks, setTasks] = useState<any>(null);
    const [error, setError] = useState("");

    const fetchTasks = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/tasks`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setTasks(result.data);
            } else {
                setError(result.message || "Failed to fetch Tasks data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching Tasks data.");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return { tasks, error };
}