import React from "react";

function FAQ() {
  // Manage collapsible FAQ items if desired
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website provides an interactive guide and resources to help individuals understand and navigate various immigration scenarios and emergencies.",
    },
    {
      question: "Is the information on this site legal advice?",
      answer:
        "No, the information provided on this website is for informational purposes only and does not constitute legal advice. For legal advice, please consult with a qualified immigration attorney.",
    },
    {
      question: "Is my personal data stored?",
      answer:
        "The interactive guide does not store your personal data on our servers. Any information you input into the guide is processed in your browser. If you use the contact form, that information will be used solely to respond to your inquiry.",
    },
    {
      question: "How accurate is the information?",
      answer:
        "We strive to provide accurate and up-to-date information, but laws and policies can change rapidly. We recommend verifying information with official sources or legal professionals.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}
    >
      <h1>Frequently Asked Questions (FAQ)</h1>
      <div style={{ marginTop: "30px" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #eee",
              paddingBottom: "15px",
            }}
          >
            <h3
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                color: "#007bff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </h3>
            {openIndex === index && (
              <p
                style={{
                  marginTop: "10px",
                  paddingLeft: "20px",
                  lineHeight: "1.8",
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
