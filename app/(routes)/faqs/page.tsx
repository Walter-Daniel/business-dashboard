import { AccordionFaqs } from "./components/accordionFaqs";

export default function FAQSPage() {
  return (
    <div className="max-w-4xl mx-auto bg-background shadow-md rounded-lg p-6">
      <h2 className="text-3xl mb-5">FAQS</h2>
      <div className="mb-5">
        <p className="mb-5">
          Welcome to the Purple.dev Frequently Asked Questions. In this section, we have compiled the answers to the most common questions from our users. Our goal is for you to get the most out of all the features of our tool. If you have any further questions, our support team is at your service.
        </p>
      </div>
      <AccordionFaqs />
    </div>
  );
}