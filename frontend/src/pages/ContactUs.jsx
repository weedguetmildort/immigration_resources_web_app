import React from "react";

function ContactUs() {
  return (
    <section
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1>Contact Us</h1>
      <p>
        We're here to help! Please reach out to us with any questions, concerns,
        or feedback.
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:info@statussafe.org">info@statussafe.org</a>
      </p>
      <p>
        <strong>Phone:</strong> (123) 456-7890
      </p>
      <p>
        <strong>Address:</strong>
        <br />
        123 Immigration Way
        <br />
        Suite 100
        <br />
      </p>
      <p>
        Alternatively, you can fill out the form below (form not yet
        implemented).
      </p>
      {/* Placeholder for a contact form if you want to add one later */}
      <div
        style={{
          border: "1px dashed #ccc",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <p>
          <em>[Contact Form Placeholder]</em>
        </p>
        <p>
          Name: <input type="text" />
        </p>
        <p>
          Email: <input type="email" />
        </p>
        <p>
          Message: <textarea rows="5"></textarea>
        </p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}

export default ContactUs;
