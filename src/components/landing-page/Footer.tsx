import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-muted py-12 mt-8">
            <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pl-10">
                <div className="flex flex-col gap-4">
                    <Logo />
                    <p className="text-muted-foreground">
                        Our SaaS product offers a comprehensive solution to streamline your business operations and drive
                        growth.
                    </p>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-lg font-semibold">Quick Links</h4>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Pricing
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Features
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Contact
                    </Link>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-lg font-semibold">Resources</h4>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Documentation
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Blog
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Support
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Community
                    </Link>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-lg font-semibold">Legal</h4>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        Cookie Policy
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                        License
                    </Link>
                </div>
            </div>
            <div className="container mx-auto max-w-7xl mt-12 border-t pt-6 text-sm text-muted-foreground pl-10">
                <p>&copy; 2024 Acme Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}