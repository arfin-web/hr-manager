"use client"

import { useProfile } from "@/hooks/useProfile";
import Image from "next/image";

const MyPayroll = () => {
    const { profile } = useProfile();
    return (
        <div className="container w-full flex justify-center items-center">
            <div className="w-72 lg:w-5/12 p-2">
                {
                    profile?.stipendStatus === "paid" ? <>
                        <h3 className="text-xl lg:text-3xl font-bold text-center">
                            Your Stipend is <span className="text-primary">Paid</span>
                        </h3>
                        <Image
                            src="/verified.svg"
                            width={400}
                            height={400}
                            alt="verified"
                        />
                    </> :
                        <>
                            <h3 className="text-xl lg:text-3xl font-bold text-center">
                                Your Stipend is  <span className="text-primary">Due</span>
                            </h3>
                            <Image
                                src="/unverified.svg"
                                width={400}
                                height={400}
                                alt="unverified"
                            />
                        </>
                }
            </div>
        </div>
    )
}

export default MyPayroll