import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Quiz from "./pages/Quiz";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import GiveBack from "./pages/GiveBack";
import Summary from "./pages/Summary";
import "./App.css";
import pic1family from "./assets/pic1family.jpg";

function App() {
  // State to manage which page is currently displayed
  const [currentPage, setCurrentPage] = useState("home"); // 'home' or 'quiz'
  const [finalCollectedTags, setFinalCollectedTags] = useState([]);

  // Navigation function
  const navigateTo = (page, tagsParam = []) => {
    let actualTags = tagsParam;
    if (typeof tagsParam === "function") {
      // Execute the function to get the latest tags
      actualTags = tagsParam();
      console.log(
        "App.jsx DEBUG: navigateTo received a function for tags. Executed, got:",
        actualTags
      );
    } else {
      console.log(
        "App.jsx DEBUG: navigateTo received direct tags array:",
        actualTags
      );
    }

    setFinalCollectedTags(actualTags);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App-layout">
      <Navbar onNavigate={navigateTo} />

      <main className="App-content">
        {console.log("App.jsx: Rendering page:", currentPage)}

        {currentPage === "home" && (
          <>
            <h1>Immigration Emergency Plan Webpage</h1>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p>
                Find essential information and resources to help you prepare and
                respond to immigration emergencies. Your safety and well-being
                are our priority.
              </p>
              <Button onClick={() => navigateTo("quiz", [])}>
                {" "}
                {/* Reset tags when starting quiz */}
                Get Started
              </Button>
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

            <div className="image-container">
              <img src={pic1family} alt="family" className="family-icon" />
            </div>

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
          <Quiz
            onBackToHome={() => navigateTo("home")}
            // Pass current tags on standard summary nav
            onNavigateToSummary={() =>
              navigateTo("summary", finalCollectedTags)
            }
            onQuizCompleteWithTags={(getTagsFn) =>
              navigateTo("summary", getTagsFn)
            }
          />
        )}

        {currentPage === "summary" && (
          // Pass the collected tags to the SummaryPage
          <Summary onNavigate={navigateTo} collectedTags={finalCollectedTags} />
        )}

        {currentPage === "contact" && <ContactUs />}
        {currentPage === "about" && <AboutUs />}
        {currentPage === "privacy" && <PrivacyPolicy />}
        {currentPage === "faq" && <FAQ />}
        {currentPage === "giveback" && <GiveBack onNavigate={navigateTo} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
