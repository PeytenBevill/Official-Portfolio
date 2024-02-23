import React from "react";
import { useNavigate } from "react-router";
import { ArrowRight } from "@phosphor-icons/react";
import "./home.css";

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handlePortfolio = () => {
    navigate('/portfolio')
  }
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "10%" }}>
      <main>
        <section className="text">
          <h1 style={{ color: "white", fontSize: "30px" }}>
            Hello, my name is <span style={{ color: "#a0cea7" }}>Peyten</span>{" "}
            and I'm a <span style={{ color: "#a0cea7" }}>Web Developer</span>
          </h1>
          <p style={{ color: "white", fontSize: "20px" }}>
            Welcome to my website and thank you for your interest. Be sure to
            check out my recent work below!
          </p>
          <button className="portfolio" onClick={handlePortfolio}>
            View Portfolio <ArrowRight size={22} />
          </button>
        </section>
        <section className="images">
          <img
            className="me"
            src="/me-with-blob.png"
            alt="Me in front of a blue background blob"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
