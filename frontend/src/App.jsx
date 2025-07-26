import React from "react";
import Navbar from "./components/Navbar"; // Import the new Navbar component
import Footer from "./components/Footer";
import Button from "./components/Button";
import "./App.css"; // Assuming you'll have some basic styling

function App() {
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
        <h1>Immigration Emergency Plan Webpage</h1>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p>
            Find essential information and resources to help you prepare and
            respond to immigration emergencies. Your safety and well-being are
            our priority.
          </p>
          <Button onClick={handleGetStartedClick}>Get Started</Button>
        </div>

        <hr />

        <section id="section-one" className="section-one">
          <h2>Immediate Actions</h2>
          <p>
            This section provides crucial steps to take during an immigration
            emergency. It includes information on what to do if approached by
            immigration officials, how to secure important documents, and who to
            contact for immediate assistance.
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
            long-term planning.
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
