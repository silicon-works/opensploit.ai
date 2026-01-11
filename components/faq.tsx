"use client";

import { useState } from "react";
import { IconPlus, IconMinus } from "./icons";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-component="faq-item">
      <button
        data-slot="trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? <IconMinus /> : <IconPlus />}
      </button>
      {isOpen && <div data-slot="content">{answer}</div>}
    </div>
  );
}
