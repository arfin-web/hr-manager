import { Network } from "lucide-react"
import Link from "next/link"

const Logo = () => {
    return (
        <Link
            href="/"
            className="flex justify-start items-center gap-2"
        >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-muted">
                <Network className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">HR <span className="text-primary">Manager</span></span>
                <span className="">v 1.0</span>
            </div>
        </Link>
    )
}

export default Logo