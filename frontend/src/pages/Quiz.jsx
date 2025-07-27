import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button'; // Assuming Button component is in 'src' or 'src/components'

function Quiz({ onQuizEnd, onBackToHome }) { // Added props for navigation
  const [question, setQuestion] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState('q1');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`http://localhost:5000/api/questions/${currentQuestionId}`)
      .then(res => {
        setQuestion(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching question:", err);
        setError("Failed to load question. Please try again later.");
        setLoading(false);
        setQuestion(null); // Clear previous question on error
      });
  }, [currentQuestionId]);

  const handleOptionClick = (nextId) => {
    if (nextId) {
      setCurrentQuestionId(nextId);
    } else {
      // This is the end of a path
      alert("End of the guide. Thank you for participating!");
      if (onQuizEnd) {
        onQuizEnd(); // Notify parent (App.jsx) that quiz has ended
      }
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <p>Loading quiz...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
        <p>{error}</p>
        <Button onClick={onBackToHome}>Back to Home</Button>
      </div>
    );
  }

  return (
    <section id="quiz-section" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '20px 0' }}>
      <h1>StatusSafe Guide</h1> {/* Title for the quiz page */}
      <p style={{ marginBottom: '2rem' }}>
        Answer the questions to navigate to the most relevant information for your situation.
      </p>

      {question ? (
        <div>
          <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>{question.question}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
            {question.options.map((opt, idx) => (
              <Button key={idx} onClick={() => handleOptionClick(opt.nextId)}>
                {opt.label}
              </Button>
            ))}
          </div>
          <div style={{ marginTop: '30px' }}>
            <Button className="secondary" onClick={onBackToHome}>Exit Guide</Button>
          </div>
        </div>
      ) : (
        <p>No question available. Please try again.</p> // Should ideally not happen if loading/error states are handled
      )}
    </section>
  );
}

export default Quiz;