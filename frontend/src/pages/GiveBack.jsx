import React from "react";
import Button from "../components/Button";
import volunteer from "../assets/volunteer.jpg"

function GiveBack({ onNavigate }) {
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

      <h2 style={{ marginTop: "2.5rem" }}>Other Ways to Give Back:</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "flex-start",
          marginTop: "30px",
        }}
      >
        {/* Volunteer Image Icon on the left*/}
        <img 
          src={volunteer}
          alt="VolunteerIcon"
          style={{ width: "300px", height: "auto", borderRadius: "5px" }}
        />

        {/* Text content on the right*/}
        <p style={{ marginTop: "20px", fontSize: "0.9em" }}>
          Links to nationwide volunteer opportunities to help support your community: <br /> <br />
          <a href="https://www.ymca.org/get-involved/volunteer">Volunteer at Your Local YMCA</a> <br />
          <a href="https://www.volunteer.gov/s/global-search/FILTERNPS">
            Public Service Opportunities
          </a>{" "}
          <br />
          <a href="https://www.nature.org/en-us/get-involved/how-to-help/volunteer/">
            Volunteer in Nature
          </a>
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
