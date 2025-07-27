import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar"; // Import the new Navbar component
import Footer from "./components/Footer";
import Button from "./components/Button";
import Quiz from "./pages/Quiz";
import ContactUs from "./pages/ContactUs"; // Adjust path if pages are in a subfolder
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import "./App.css"; // Assuming you'll have some basic styling

function App() {
  // State to manage which page is currently displayed
  const [currentPage, setCurrentPage] = useState("home"); // 'home' or 'quiz'

  const handleGetStartedClick = () => {
    setCurrentPage("quiz"); // Navigate to the quiz page
  };

  // Generic navigation function
  const navigateTo = (page) => {
    
    setCurrentPage(page);
    // Optional: Scroll to top of the page when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App-layout">
      <Navbar onNavigate={navigateTo} />

      <main className="App-content">
        {currentPage === "home" && (
          // --- Home Page Content ---
          <>
            <h1>Immigration Emergency Plan Webpage</h1>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p>
                Find essential information and resources to help you prepare and
                respond to immigration emergencies. Your safety and well-being
                are our priority.
              </p>
              <Button onClick={() => navigateTo("quiz")}>Get Started</Button>
            </div>
            <hr />

            <section id="section-one" className="section-one">
              <h2>Immediate Actions</h2>
              <p>
                With the current climate, our goal is to help people create an
                emergency action plan to help people feel safe. Having an action
                plan is very important. Our tool is free and can easily be
                modified depending on your needs. This section provides crucial
                steps to take during an immigration emergency. It includes
                information on what to do if approached by immigration
                officials, how to secure important documents, and who to contact
                for immediate assistance.
              </p>
            </section>

            <hr />

            <section id="section-two" className="section-two">
              <h2>Resources & Support</h2>
              <p>
                Here you'll find a comprehensive list of legal aid
                organizations, community support groups, and mental health
                services available to individuals and families affected by
                immigration emergencies. We also include information on how to
                prepare for various scenarios and long-term planning. In less
                than 10 minutes we can help you create an custom plan. Click the
                Get Started button above, and we will guide you on how to get
                that accomplished.
              </p>
            </section>
          </>
        )}

        {currentPage === "quiz" && (
          // --- Quiz Page Content ---
          <Quiz
            onQuizEnd={() => navigateTo("home")} // Go back to home when quiz ends (no nextId)
            onBackToHome={() => navigateTo("home")} // Allow exiting quiz anytime
          />
        )}

        {currentPage === "contact" && <ContactUs />}
        {currentPage === "about" && <AboutUs />}
        {currentPage === "privacy" && <PrivacyPolicy />}
        {currentPage === "faq" && <FAQ />}
      </main>

      <Footer />
    </div>
  );
}

export default App;

{
  /* <main className="App-content">
        {currentPage === "home" && (
          // --- Home Page Content ---
          <>
            <h1>Let Us Create Your Immigration Emergency Plan</h1>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p>
                Find essential information and resources to help you prepare and
                respond to immigration emergencies. Your safety and well-being
                are our priority.
              </p>
              <Button onClick={handleGetStartedClick}>Get Started</Button>
            </div>

            <hr />

            <section id="section-one" className="section-one">
              <h2>Immediate Actions</h2>
              <p>
                
              </p>
            </section>

            <hr />

            <section id="section-two" className="section-two">
              <h2>Resources & Support</h2>
              <p>

              </p>
            </section>
          </>
        )}

        {currentPage === "quiz" && (
          // --- Quiz Page Content ---
          <Quiz
            onQuizEnd={handleBackToHome} // Go back to home when quiz ends (no nextId)
            onBackToHome={handleBackToHome} // Allow exiting quiz anytime
          />
        )}
      </main> */
}
