import { useState, useEffect } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function useStipends() {
    const [stipends, setStipends] = useState<any>(null);
    const [error, setError] = useState("");

    const fetchStipends = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/stipends`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setStipends(result.data);
            } else {
                setError(result.message || "Failed to fetch stipends data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching stipends data.");
        }
    };

    useEffect(() => {
        fetchStipends();
    }, []);

    return { stipends, error };
}