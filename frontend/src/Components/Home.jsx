import React, { useEffect } from "react";
import { isLoggedIn, logout } from "../utils/auth";

export default function Home() {
  useEffect(() => {
    if (!isLoggedIn()) {
      window.location.href = "/auth"; // redirect to login if not logged in
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(255,182,39,0.1) 50%, rgba(131,56,236,0.1) 100%)",
        fontFamily: "'Crimson Text', serif",
      }}
    >
      <button
        onClick={logout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "0.5rem 1rem",
          background: "#FF006E",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      <h1
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontSize: "3rem",
          fontWeight: 900,
          color: "#6B0F1A",
        }}
      >
        Welcome to Rangeen!
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#333",
          marginTop: "1rem",
        }}
      >
        Discover authentic South Asian fashion crafted just for you.
      </p>

      {/* Features section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "3rem",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            textAlign: "center",
            minWidth: "200px",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", color: "#FF006E" }}>Authentic Fashion</h2>
          <p>Explore our curated collection of traditional and modern South Asian wear.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            textAlign: "center",
            minWidth: "200px",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", color: "#FF6B35" }}>Exclusive Offers</h2>
          <p>Sign up to enjoy member-only discounts and promotions.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            textAlign: "center",
            minWidth: "200px",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", color: "#FFB627" }}>Fast Delivery</h2>
          <p>Get your orders delivered quickly and hassle-free across the region.</p>
        </div>
      </div>
    </div>
  );
}
