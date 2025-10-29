import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does voice cloning work?",
    answer:
      "Our AI analyzes voice samples to learn unique characteristics like tone, pitch, and cadence. It then generates new speech that matches the original voice while speaking any text you provide.",
  },
  {
    question: "How much voice data do I need to provide?",
    answer:
      "You only need 30 seconds to 2 minutes of clear audio to create a high-quality voice clone. The more data you provide, the better the results.",
  },
  {
    question: "Is the generated voice copyright-free?",
    answer:
      "Yes, all voices generated with BionicVO are royalty-free for your use. However, you must have permission to clone any voice you submit to our platform.",
  },
  {
    question: "What languages are supported?",
    answer:
      "We support over 50 languages including English, Spanish, French, German, Japanese, Chinese, and many more. New languages are added regularly.",
  },
  {
    question: "Can I use the cloned voices commercially?",
    answer:
      "Yes, all our plans include commercial usage rights. You can use the generated audio for podcasts, videos, audiobooks, and any other commercial projects.",
  },
  {
    question: "How do I ensure audio quality?",
    answer:
      "Use a quiet environment, speak clearly, and provide high-quality audio samples (at least 44.1kHz, 16-bit). Our platform automatically optimizes the output for professional quality.",
  },
];

const FAQ = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-14 bg-card/30">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about voice cloning
          </p>
        </div>

        <Accordion type="single" collapsible className= "space-y-4">
            {faqs.map((faq, index)=>(
                <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-background rounded-lg border border-border px-6 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: inView ? `${index * 0.1}s` : "0s" }}
                >

                 <AccordionTrigger className="text-left hover:text-primary transition-colors">
                     {faq.question}
                 </AccordionTrigger>
                     <AccordionContent className="text-muted-foreground">
                         {faq.answer}
                     </AccordionContent>
                </AccordionItem>
                    ))}
        </Accordion>
      </div>
    </section>
            );
  };

export default FAQ;