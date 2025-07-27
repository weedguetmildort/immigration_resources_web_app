import React from "react";
import Button from "../components/Button"; // Assuming your Button component is accessible

function GiveBack({ onNavigate }) {
  // Added onNavigate if you want an internal button to go home
  return (
    <section
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1>Support Our Mission: Give Back</h1>
      <p>
        The StatusSafe Guide and the resources provided are made possible
        through the generosity of individuals and organizations who believe in
        our mission to empower those navigating immigration emergencies. Your
        contribution, no matter the size, makes a significant difference.
      </p>

      <h2 style={{ marginTop: "2.5rem" }}>How Your Donation Helps:</h2>
      <ul
        style={{
          textAlign: "left",
          maxWidth: "600px",
          margin: "20px auto",
          listStyleType: "none",
          paddingLeft: "0",
        }}
      >
        <li style={{ marginBottom: "10px" }}>
          &bull; **Expand Resources:** Help us research and add more vital
          information and support services.
        </li>
        <li style={{ marginBottom: "10px" }}>
          &bull; **Maintain Technology:** Cover server costs and development
          efforts to keep the guide running smoothly.
        </li>
        <li style={{ marginBottom: "10px" }}>
          &bull; **Outreach:** Enable us to reach more individuals and families
          in need of this critical information.
        </li>
        <li style={{ marginBottom: "10px" }}>
          &bull; **Future Development:** Support the creation of new tools and
          features to further assist our community.
        </li>
      </ul>

      <h2 style={{ marginTop: "2.5rem" }}>Ways to Give Back:</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        {/* Placeholder for a direct donation button - you'd link this to PayPal, Stripe, etc. */}

        <p style={{ marginTop: "20px", fontSize: "0.9em" }}>
          Here are some links: <br />
          <a href="https://www.ymca.org/get-involved/volunteer">YMCA</a> <br />
          <a href="https://www.volunteer.gov/s/global-search/FILTERNPS">Volunteer</a> <br />
          <a href="https://www.nature.org/en-us/get-involved/how-to-help/volunteer/">Nature</a> 
        </p>
      </div>

      <p style={{ marginTop: "3rem", fontSize: "0.85em", color: "#666" }}>
        *StatusSafe Guide is a [Your Organization Type, e.g., 501(c)(3)
        nonprofit or project]. Your donations may be tax-deductible. Please
        consult with a tax professional.*
      </p>
    </section>
  );
}

export default GiveBack;


