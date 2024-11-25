import { useState, useEffect } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function useEmployees() {
    const [employees, setEmployees] = useState<any>(null);
    const [error, setError] = useState("");

    const fetchEmployees = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/employees`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setEmployees(result.data);
            } else {
                setError(result.message || "Failed to fetch employees data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching employees data.");
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return { employees, error };
}