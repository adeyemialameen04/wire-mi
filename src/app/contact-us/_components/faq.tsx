import SectionHeader from "@/_components/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";



export function FAQs() {
  return (
    <section className=" py-20 bg-[#FAFBFB] my-10">
      <div className="container max-w-[768px]">
        <div className="md:text-center flex flex-col items-center">
          <SectionHeader className="text-[#105CE2]">FAQs</SectionHeader>
          <h5 className="font-recoleta-alt-sb font-semibold text-2xl text-[#00091E]">
            Frequently asked questions
          </h5>
          <p className="text-[#57686F]">
            Everything you need to know about Wiremi.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-5">
          {faqs.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-[#00091E] text-left sm:text-center font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#57686F]">
                <p>{item.short_answer}</p>
                {
                  item?.steps && <ul className="flex flex-col gap-2 sm:pl-3 mt-2">
                    {item.steps.map((step, index) => (
                      <li key={step + index}>{`${index + 1}. ${step}`}</li>
                    ))}
                  </ul>
                }
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
