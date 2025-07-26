import React, { useEffect, useState } from "react";
import axios from "axios"; // Added axios
import Navbar from "./components/Navbar"; // Import the new Navbar component
import Footer from "./components/Footer";
import Button from "./components/Button";
import "./App.css"; // Assuming you'll have some basic styling

function App() {
  const [question, setQuestion] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState("q1"); // State to track current question

  useEffect(() => {
    // Fetch question based on currentQuestionId
    axios
      .get(`http://localhost:5000/api/questions/${currentQuestionId}`)
      .then((res) => setQuestion(res.data))
      .catch((err) => {
        console.error("Error fetching question:", err);
        setQuestion(null); // Clear question on error
      });
  }, [currentQuestionId]); // Rerun effect when currentQuestionId changes

  const handleOptionClick = (nextId) => {
    if (nextId) {
      setCurrentQuestionId(nextId); // Update state to fetch the next question
    } else {
      alert("End of path or no next question defined for this option.");
      // You might want to display results or a "restart" button here
      setQuestion(null); // Optionally clear the question if it's an end path
      setCurrentQuestionId("q1"); // Or reset to start for demonstration
    }
  };

  const handleGetStartedClick = () => {
    // You can add logic here for what happens when the button is clicked
    // For example, scroll to a specific section, open a modal, or navigate
    alert("Get Started button clicked! Implement your action here.");
    // Example: Scroll to the 'Immediate Actions' section
    document
      .getElementById("section-one")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App-layout">
      <Navbar />

      <main className="App-content">
        {/* The main title and intro now reflect the dynamic content focus */}
        <h1>Questions</h1>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Navigate your immigration status with our interactive guide.
        </p>

        {/* This is the integrated question display area */}
        <section
          id="question-section"
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          {question ? (
            <div>
              <h2 style={{ color: "#2c3e50", marginBottom: "1.5rem" }}>
                {question.question}
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                {question.options.map((opt, idx) => (
                  <Button
                    key={idx}
                    onClick={() => handleOptionClick(opt.nextId)}
                    // You might add different classes based on option type if needed
                    // className={opt.type === 'primary' ? '' : 'secondary'}
                  >
                    {opt.label}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p>Loading questions...</p>
              {/* Maybe show the Get Started button only if nothing is loaded initially */}
              {!question && (
                <Button onClick={handleGetStartedClick}>Begin Guide</Button>
              )}
            </div>
          )}
        </section>

        <hr />

        <section id="section-one" className="section-one">
          <h2>Immediate Actions</h2>
          <p>
            With the current climate, our goal is to help people create an
            emergency action plan to help people feel safe. Having an action
            plan is very important. Our tool is free and can easily be modified
            depending on your needs. This section provides crucial steps to take
            during an immigration emergency. It includes information on what to
            do if approached by immigration officials, how to secure important
            documents, and who to contact for immediate assistance.
          </p>
          {/* Add more content, components, or information as needed for Section One */}
        </section>

        <hr />

        <section id="section-two" className="section-two">
          <h2>Resources & Support</h2>
          <p>
            Here you'll find a comprehensive list of legal aid organizations,
            community support groups, and mental health services available to
            individuals and families affected by immigration emergencies. We
            also include information on how to prepare for various scenarios and
            long-term planning. In less than 10 minutes we can help you create
            an custom plan. Click the Get Started button above, and we will
            guide you on how to get that accomplished.
          </p>

          <hr />
          {/* Add more content, components, or information as needed for Section Two */}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
