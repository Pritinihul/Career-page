import { useState } from "react";
import Navbar from "../Components/Navbar";
import WhatOffer from "../Components/WhatOffer";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Home()
 {
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate(); 
  const styles = {
    pageContainer: {
      backgroundImage: `url('/search.jpg')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    heading: {
      color: "white",
      fontSize: "40px",
      fontWeight: "bold",
      position: "relative",
      top: "60px",
      left: "10px",
      marginBottom: "20px",
      whiteSpace: "pre-line",
    },
    highlightedText: {
      color: "#FFA500",
    },
    searchContainer: {
      display: "flex",
      justifyContent: "center",
      width: "50%",
      maxWidth: "500px",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "white",
      padding: "8px",
      borderRadius: "30px",
      width: "100%",
    },
    input: {
      flex: 1,
      padding: "8px",
      border: "none",
      outline: "none",
      fontSize: "16px",
    },
    searchButton: {
      backgroundColor: "orange",
      color: "white",
      border: "none",
      padding: "8px 15px",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "16px",
      marginLeft: "10px",
    },
    sectionContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "40px",
      padding: "60px 20px",
      backgroundColor: "#f8f8f8",
    },
    section: {
      width: "90%",
      maxWidth: "500px",
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    sectionImage: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    sectionText: {
      fontSize: "18px",
      textAlign: "justify",
      marginBottom: "15px",
      fontFamily: "'Poppins', sans-serif",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "orange",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.pageContainer}>
        <h2 style={styles.heading}>
          {"Elevate Your Career, Empower Your Future\nwith "}
          <span style={styles.highlightedText}>Cluster Computing!</span>
        </h2>
      </div>

      {/* Internship & Job Sections */}
      <div style={styles.sectionContainer}>
        <div style={styles.section}>
          <img src="/intership.jpg" alt="Internship" style={styles.sectionImage} />
          <h3 style={styles.sectionTitle}>Internship Opportunities</h3>
          <p style={styles.sectionText}>
            Gain industry experience and boost your skills with various internships.
            Work on real-world projects, collaborate with industry experts, and expand your professional network.
            Our internship programs provide hands-on experience and learning opportunities in diverse fields,
            preparing you for a successful career.
          </p>
          <button onClick={() => navigate("/internships")} style={styles.button}>Explore Internships</button>
        </div>
        <div style={styles.section}>
          <img src="/job.jpg" alt="Job" style={styles.sectionImage} />
          <h3 style={styles.sectionTitle}>Job Openings</h3>
          <p style={styles.sectionText}>
            Find full-time job opportunities at our company.
            Start your career with positions that match your expertise and interests.
            Our job openings offer competitive salaries, growth opportunities, and a chance to work within our companies.
            Whether you're a fresher or an experienced professional, explore roles that align with your career goals.
          </p>
          <button onClick={() => navigate("/jobs")} style={styles.button}>Explore Jobs</button>
        </div>
      </div>

      {/* WhatOffer, Testimonials, and Footer Sections */}
      <WhatOffer />
      <Testimonials />
      <Footer />
    </div>
  );
}
