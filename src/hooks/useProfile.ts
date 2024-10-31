import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function useProfile() {
    const [profile, setProfile] = useState<any>(null);
    const [error, setError] = useState("");
    const router = useRouter();

    const fetchProfile = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5001/api/v1/auth/profile", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setProfile(result.data);
            } else {
                setError(result.message || "Failed to fetch profile data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching profile data.");
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setProfile(null);
        router.push("/");
    }

    return { profile, error, handleLogout };
}