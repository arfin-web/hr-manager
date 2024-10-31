"use client"
import { Briefcase, ChartNoAxesColumnIncreasing, UserCheck, Users } from "lucide-react"
import { useEffect, useState } from "react";

const adminData = [
  {
    id: 1,
    title: "Total Employess",
    value: 100,
    icon: <Users className="w-5 h-5 text-primary" />
  },
  {
    id: 2,
    title: "Todays Attandence",
    value: 80,
    icon: <UserCheck className="w-5 h-5 text-primary" />
  },
  {
    id: 3,
    title: "Job Openings",
    value: 20,
    icon: <Briefcase className="w-5 h-5 text-primary" />
  }
]

const employeeData = [
  {
    id: 1,
    title: "Total Task",
    value: 10,
    icon: <Users className="w-5 h-5 text-primary" />
  },
  {
    id: 2,
    title: "Total Pending",
    value: 3,
    icon: <UserCheck className="w-5 h-5 text-primary" />
  },
  {
    id: 3,
    title: "Total Completed",
    value: 20,
    icon: <Briefcase className="w-5 h-5 text-primary" />
  }
]

export default function Overview() {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState("");

  const getProfile = async () => {
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
    getProfile();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="flex flex-1 flex-col gap-4">
      {
        profile?.role == "admin" ? <>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {
              adminData.map((item) => (
                <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                  <div className="flex w-full justify-between items-center">
                    <h3>{item.title}</h3>
                    {item.icon}
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <h1 className="text-3xl text-primary font-bold">{item.value}</h1>
                    <ChartNoAxesColumnIncreasing className="w-20 h-20 text-muted" />
                  </div>
                </div>
              ))
            }
          </div>
        </> : <>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {
              employeeData.map((item) => (
                <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                  <div className="flex w-full justify-between items-center">
                    <h3>{item.title}</h3>
                    {item.icon}
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <h1 className="text-3xl text-primary font-bold">{item.value}</h1>
                    <ChartNoAxesColumnIncreasing className="w-20 h-20 text-muted" />
                  </div>
                </div>
              ))
            }
          </div>
        </>
      }
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  )
}