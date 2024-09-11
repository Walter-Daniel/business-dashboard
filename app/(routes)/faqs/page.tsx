import { AccordionFaqs } from "./components/accordionFaqs";

  
export default function FAQSPage() {
  return (
    <div className="max-w-4xl mx-auto bg-background shadow-md rounded-lg p-6">
      <h2 className="text-3xl mb-5">FAQS</h2>
      <div className="mb-5">
          {/* Introduction */}
      <p className="mb-5">
        Welcome to our Frequently Asked Questions (FAQs) page! Here you'll find answers to some of the most common questions about our dashboard. Whether you're a new user or a seasoned pro, we hope this page provides the information you need to make the most of our platform. If you can't find the answer you're looking for, feel free to reach out to our support team for further assistance.
      </p>
      </div>
      <AccordionFaqs />
    </div>
  );
}