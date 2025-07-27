import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

function Summary({ onNavigate, collectedTags }) {
  // Receive collectedTags prop
  const [resources, setResources] = useState([]);
  const [loadingResources, setLoadingResources] = useState(true);
  const [resourceError, setResourceError] = useState(null);

  useEffect(() => {
    // Fetch only if there are tags or if we want to show all if no specific tags
    if (collectedTags && collectedTags.length > 0) {
      setLoadingResources(true);
      setResourceError(null);
      axios
        .post("http://localhost:5000/api/resources/filter", {
          tags: collectedTags,
        })
        .then((res) => {
          setResources(res.data);
          setLoadingResources(false);
        })
        .catch((err) => {
          console.error("Error fetching resources:", err);
          setResourceError("Failed to load relevant resources.");
          setLoadingResources(false);
        });
    } else {
      // Clear resources if no tags
      setResources([]);
      setLoadingResources(false);
      setResourceError(
        "No specific tags collected during the guide to filter resources."
      );
    }
  }, [collectedTags]);

  return (
    <section
      style={{
        textAlign: "center",
        padding: "50px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>Quiz Complete!</h1>
      <p style={{ fontSize: "1.2em", margin: "20px 0" }}>
        Thank you for completing the StatusSafe Guide. Based on your responses,
        here are some resources that might be helpful:
      </p>

      {/* Display Resources */}
      <div
        style={{
          marginTop: "3rem",
          borderTop: "1px solid #eee",
          paddingTop: "2rem",
        }}
      >
        <h2 style={{ color: "#007bff" }}>Recommended Resources:</h2>
        {loadingResources ? (
          <p>Loading recommended resources...</p>
        ) : resourceError ? (
          <p style={{ color: "red" }}>{resourceError}</p>
        ) : resources.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              textAlign: "left",
            }}
          >
            {resources.map((resource) => (
              <div
                key={resource._id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <h3 style={{ color: "#333", marginBottom: "5px" }}>
                  {resource.name}
                </h3>
                <p style={{ fontSize: "0.9em", color: "#555" }}>
                  {resource.organization}
                </p>
                <p style={{ fontSize: "0.85em", color: "#666" }}>
                  {resource.description.substring(0, 150)}...
                </p>{" "}
                {/* Truncate description */}
                {resource.contact?.website && (
                  <a
                    href={resource.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      color: "#007bff",
                      textDecoration: "none",
                    }}
                  >
                    Visit Website
                  </a>
                )}
                {resource.resource_tags &&
                  resource.resource_tags.length > 0 && (
                    <div
                      style={{
                        fontSize: "0.75em",
                        color: "#888",
                        marginTop: "10px",
                      }}
                    >
                      Tags: {resource.resource_tags.join(", ")}
                    </div>
                  )}
              </div>
            ))}
          </div>
        ) : (
          <p>
            No specific resources found based on your responses. Please explore
            our general resources or contact us for more help.
          </p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <Button onClick={() => onNavigate("home")}>Go to Home Page</Button>
        <Button className="secondary" onClick={() => onNavigate("quiz")}>
          Restart Guide
        </Button>
      </div>

      <p style={{ marginTop: "40px", fontSize: "0.9em", color: "#666" }}>
        Remember, this guide provides general information. For specific legal
        advice, please consult a qualified professional.
      </p>
    </section>
  );
}

export default Summary;
