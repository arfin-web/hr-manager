import { Card } from "@/components/ui/card"
import choosingReasons from "@/data/choosingReasons"

export default function WhyChooseUs() {
    return (
        <section className="w-full py-8">
            <div className="container px-4 lg:px-28">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 lg:place-items-center">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Why Choose Our <span className="text-primary">SaaS Product ?</span>
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our SaaS product offers a comprehensive solution to streamline your business operations and drive
                                growth. Here are three key reasons why you should choose us.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 md:gap-6 place-items-center">
                        <div className="grid gap-4 grid-cols-1 md:gap-6 place-items-center">
                            {
                                choosingReasons.map((reason, index) => {
                                    const firstCard = index === 0
                                    const lastCard = index === 2
                                    return (
                                        <Card className={`p-6 grid gap-4 ${firstCard ? 'border border-primary' : 'border-none'} ${lastCard && 'hidden'}`} key={reason.id}>
                                            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                                                {reason.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold">{reason.title}</h3>
                                            <p className="text-muted-foreground">
                                                {reason.description}
                                            </p>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                        <div className="grid gap-4 grid-cols-1 md:gap-6 place-items-center">
                            {
                                choosingReasons.map((reason, index) => {
                                    const lastCard = index === 2
                                    return (
                                        <Card className={`p-6 grid gap-4 border-none ${!lastCard && 'hidden'}`} key={reason.id}>
                                            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                                                {reason.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold">{reason.title}</h3>
                                            <p className="text-muted-foreground">
                                                {reason.description}
                                            </p>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}