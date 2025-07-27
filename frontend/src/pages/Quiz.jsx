import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

function Quiz({ onQuizEnd, onBackToHome, onNavigateToSummary }) {
  const [question, setQuestion] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState("q1");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collectedTags, setCollectedTags] = useState(new Set());

  // Reset collectedTags when quiz starts (q1 is loaded)
  useEffect(() => {
    if (currentQuestionId === "q1" && !loading && !question) {
      // Check for initial load/reset
      setCollectedTags(new Set());
    }
  }, [currentQuestionId, loading, question]);

  // Effect to fetch questions based on currentQuestionId
  useEffect(() => {
    // Fetch only if the quiz isn't already completed
    setLoading(true);
    setError(null);
    // Clear previous question while loading next one
    setQuestion(null);

    axios
      .get(`http://localhost:5000/api/questions/${currentQuestionId}`)
      .then((res) => {
        setQuestion(res.data);
        setLoading(false);
        // Clear any previous errors
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching question:", err);
        setError("Failed to load question. Please try again or go back home.");
        setLoading(false);
        // Ensure question is null on error
        setQuestion(null);

        // Redirect automatically to summary if the error is 'No more questions found'
        if (err.response && err.response.status === 404) {
          console.log("Quiz sequence ended by 404. Redirecting to summary.");
          if (onNavigateToSummary) {
            // Go to summary page
            onNavigateToSummary();
          }
        }
      });
  }, [currentQuestionId, onNavigateToSummary, collectedTags]);

  // Function to handle option clicks and advance the quiz
  const handleOptionClick = (nextId, chosenOptionLabel) => {
    // Collect tags if the chosen option is 'Yes' and the current question has resource_tags
    if (
      chosenOptionLabel === "Yes" &&
      question &&
      question.resource_tags &&
      question.resource_tags.length > 0
    ) {
      setCollectedTags(
        (prevTags) => new Set([...prevTags, ...question.resource_tags])
      );
      // Debug
      console.log("Collected tags so far:", Array.from(collectedTags));
    }

    if (nextId) {
      setCurrentQuestionId(nextId);
    } else {
      console.log(
        "QuizPage: End of local path (nextId is null). Expecting 404 from server."
      );
    }
  };

  // Render conditional logic

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p>Loading quiz...</p>
      </div>
    );
  }

  if (error) {
    return (
      <section
        style={{
          textAlign: "center",
          padding: "50px",
          color: "red",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <p>{error}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <Button className="secondary" onClick={onBackToHome}>
            Back to Home
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quiz-section"
      style={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px 0",
      }}
    >
      <h1>StatusSafe Guide</h1>
      <p style={{ marginBottom: "2rem" }}>
        Answer the questions to navigate to the most relevant information for
        your situation.
      </p>

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
                onClick={() => handleOptionClick(opt.nextId, opt.label)}
              >
                {" "}
                {/* Pass opt.label */}
                {opt.label}
              </Button>
            ))}
          </div>
          <div style={{ marginTop: "30px" }}>
            <Button className="secondary" onClick={onBackToHome}>
              Exit Guide
            </Button>
          </div>
        </div>
      ) : (
        <p>No question data available.</p>
      )}
    </section>
  );
}

export default Quiz;
