import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import faqs from "@/data/faqs"

export default function FaqSection() {
    return (
        <section className="w-full py-8">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked <span className="text-primary">Questions</span></h2>
                        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                            Get answers to the most common questions about our SaaS product.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {
                            faqs.map((faq, index) => (
                                <AccordionItem key={faq.id} value={`item-${index + 1}`}>
                                    <AccordionTrigger className="flex items-center justify-between rounded-lg bg-muted px-6 py-4 text-lg font-medium transition-colors hover:bg-muted/50 data-[state=open]:bg-muted/50">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pt-4 pb-6 text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}