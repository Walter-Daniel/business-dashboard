import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqsData } from './faqs.data'

export const AccordionFaqs = () => {
    return (
        <Accordion type="single" collapsible>
            {
                faqsData.map(({ answer, question }, index) => (
                    <AccordionItem value={question} key={index}>
                        <AccordionTrigger>{question}</AccordionTrigger>
                        <AccordionContent>
                            {answer}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}
