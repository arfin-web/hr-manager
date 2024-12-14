"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useProfile } from "@/hooks/useProfile"
import Image from "next/image"

export default function HeroSection() {
    const { profile } = useProfile()
    return (
        <section className="w-full">
            <div className="container mx-auto px-4 lg:px-36 flex flex-col items-center text-center space-y-6 pt-10 lg:pt-24 pb-10">
                <div className="space-y-3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        <span className="text-primary">Elevate </span>Your <span className="text-primary">Business</span> with Our Innovative <span className="text-primary">HR Platform</span>
                    </h1>
                    <p className="mx-auto text-lg md:text-xl max-w-[700px] text-muted-foreground">
                        Unlock the power of our cutting-edge SaaS solution to streamline your operations, boost productivity, and
                        drive growth.
                    </p>
                    {
                        profile?.email ? <>
                            {
                                profile?.role === "admin" ? <div className="mx-auto w-[150px] pt-4">
                                    <Link href="/admin-overview">
                                        <Button size="lg" className="w-full font-bold">Dashboard</Button>
                                    </Link>
                                </div> : <div className="mx-auto w-[150px] pt-4">
                                    <Link href="/employee-overview">
                                        <Button size="lg" className="w-full font-bold">Dashboard</Button>
                                    </Link>
                                </div>
                            }
                        </> : <div className="mx-auto w-[150px] pt-4">
                            <Link href="/login">
                                <Button size="lg" className="w-full font-bold">Get Started</Button>
                            </Link>
                        </div>
                    }
                </div>
                <div className="pt-10 hidden dark:flex">
                    <Image
                        src="https://ik.imagekit.io/b1ty4nofq/hr-manager/hr-dashboard-dark.png?updatedAt=1734167730234"
                        width={800}
                        height={800}
                        alt="Hero"
                        className="rounded-xl shadow-xl"
                    />
                </div>
                <div className="pt-10 dark:hidden">
                    <Image
                        src="https://ik.imagekit.io/b1ty4nofq/hr-manager/hr-dashboard-light.png?updatedAt=1734167704909"
                        width={800}
                        height={800}
                        alt="Hero"
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}