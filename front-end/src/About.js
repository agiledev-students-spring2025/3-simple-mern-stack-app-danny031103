import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [data, setData] = useState(null);
  const backendURL = "http://localhost:7002/about"; 

  useEffect(() => {
    axios
      .get(backendURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching about data:", error);
      });
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>About Me</h1>
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
      <img 
        src={data.image} 
        alt="About Me" 
        style={{ maxWidth: "200px", borderRadius: "8px" }}
      />
    </div>
  );
}

export default About;
