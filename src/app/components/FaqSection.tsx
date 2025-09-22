"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

type FaqSectionProps = {
  uploadedImages: string[]; // Pass your uploaded image URLs
};

const FaqSection: React.FC<FaqSectionProps> = ({ uploadedImages }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Do you store my photos?",
      answer:
        "Nope! This site has no backend — it’s all frontend magic. Your photos stay in your browser and vanish when you refresh.",
    },
    {
      question: "Is this site secure & safe?",
      answer:
        "As secure as it gets. Since nothing gets uploaded, there’s nothing to steal. Your cat memes and selfies are safe here!",
    },
    {
      question: "Who can see my photos?",
      answer:
        "Absolutely no one. Not even me 'The Great Manjunadh'. It’s just the beautiful, dazzling, radiant, brilliant, stunning, mesmerizing you — and your device.",
    },
    {
      question: "Why do I lose images after refresh?",
      answer:
        "Because Manjunadh being a memory-less-patient. Every refresh = a fresh start. No storage, no trace, total freedom.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="items-center">
        <h1 className="space text-white text-5xl text-center mb-7">Ayyoooo Your pics here....</h1>
        <p className="text-white text-center text-2xl mb-9">Don't worry I gotchu... Read the FAQ's</p>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0 text-white">
        <img
          className="max-w-md w-full rounded-xl h-auto object-cover"
          src="/ayyo.webp"
          alt="User upload"
        />
        <div>
          <p className="text-indigo-400 text-sm font-medium">FAQ's</p>
          <h1 className="text-3xl font-semibold">Need clarity?</h1>
          <p className="text-sm text-neutral-300 mt-2 pb-4">
            I know you have questions — here’s the fun stuff you’re wondering about.
          </p>
          {faqs.map((faq, index) => (
            <div
              className="border-b border-neutral-700 py-4 cursor-pointer"
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <p
                className={`text-sm text-neutral-400 transition-all duration-500 ease-in-out max-w-md ${
                  openIndex === index
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqSection;
