import { useState, useEffect } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function useDepartments() {
    const [departments, setDepartments] = useState<any>(null);
    const [error, setError] = useState("");

    const fetchDepartments = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/departments`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setDepartments(result.data);
            } else {
                setError(result.message || "Failed to fetch departments data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching departments data.");
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return { departments, error };
}