"use client"
import { useProfile } from "@/hooks/useProfile"
import { useRouter } from "next/navigation"

const Welcome = () => {
    const { profile } = useProfile()
    const router = useRouter()

    if (profile?.role === 'admin') {
        setTimeout(() => {
            router.push('/admin-overview')
        }, 3000);
    } else {
        setTimeout(() => {
            router.push('/employee-overview')
        }, 3000);
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-72 lg:w-96 p-3 rounded-xl shadow-md">
                {
                    profile && <h1 className="text-xl lg:text-3xl font-bold text-center my-3">Welcome {profile?.name}!</h1>
                }
            </div>
        </div>
    )
}

export default Welcome