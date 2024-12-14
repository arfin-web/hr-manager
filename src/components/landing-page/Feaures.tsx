import allFeatures from "@/data/allFeatures"

export default function Features() {
    return (
        <section className="w-full py-8">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-2 text-sm">Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful <span className="text-primary">Features</span> For Your <span className="text-primary">Business</span></h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our SaaS product offers a wide range of features to help your business succeed. Explore what we have to
                            offer.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {
                        allFeatures.map((feature) => (
                            <div key={feature.id} className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-muted">
                                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}