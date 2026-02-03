import { useState } from "react";
import { API } from "../api";
import "./Auth.css"; // We'll move all CSS to a separate file
import { useNavigate } from "react-router-dom";


export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (isLogin) {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      const role = res.data.user.role;

      alert(`Login Successful! Welcome ${res.data.user.name}`);

      // Redirect based on role
      if (role === "admin") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/"; // Home page for regular user
      }
    } else {
      // Signup logic remains same
      if (form.password !== form.confirm) {
        alert("Passwords do not match");
        return;
      }
      await API.post("/auth/signup", form);
      alert("Signup Successful! Please login now.");
      setIsLogin(true);
    }
  } catch (err) {
    alert(err.response?.data?.message || "Something went wrong");
  }
};


  return (
    <div className="auth-container">
      {/* Left Branding */}
      <div className="auth-brand">
        <div className="brand-content">
          <div className="brand-logo">RANGEEN</div>
          <p className="brand-tagline"
          >
            Discover Your Heritage
            <br />
            in Every Thread
          </p>
          <div className="brand-features">
            <div className="feature-item"
          onClick={() => navigate("/offers")}
          >
              <span className="feature-icon">✨</span>
              <span className="feature-text">Authentic South Asian Fashion</span>
            </div>
            <div className="feature-item"
          onClick={() => navigate("/offers")}
          >
              <span className="feature-icon">🎁</span>
              <span className="feature-text">Exclusive Member Offers</span>
            </div>
            <div className="feature-item"
          onClick={() => navigate("/offers")}
          >
              <span className="feature-icon">🚚</span>
              <span className="feature-text">Free Shipping & Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Forms */}
      <div className="auth-forms">
        {/* Login Form */}
        <div className={`form-container ${isLogin ? "active" : ""}`}>
          <h2 className="form-title">Welcome Back!</h2>
          <p className="form-subtitle">Login to continue your shopping journey</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="form-checkbox">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me for 30 days</label>
            </div>
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
          <div className="form-divider">
            <div className="divider-line"></div>
            <span className="divider-text">or continue with</span>
            <div className="divider-line"></div>
          </div>
          <div className="social-login">
            <button className="btn-social">
              <span style={{ fontSize: "1.5rem" }}>🌐</span> Google
            </button>
            <button className="btn-social">
              <span style={{ fontSize: "1.5rem" }}>📘</span> Facebook
            </button>
          </div>
          <div className="form-switch">
            Don't have an account?{" "}
            <span style={{ cursor: "pointer" }} onClick={() => setIsLogin(false)}>
              Sign Up
            </span>
          </div>
        </div>

        {/* Signup Form */}
        <div className={`form-container ${!isLogin ? "active" : ""}`}>
          <h2 className="form-title">Join Rangeen!</h2>
          <p className="form-subtitle">Create an account to start shopping</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter your full name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="+91 98765 43210"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Create a strong password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm"
                className="form-input"
                placeholder="Re-enter your password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
            </div>
            <button type="submit" className="btn-submit">
              Create Account
            </button>
          </form>
          <div className="form-divider">
            <div className="divider-line"></div>
            <span className="divider-text">or sign up with</span>
            <div className="divider-line"></div>
          </div>
          <div className="social-login">
            <button className="btn-social">
              <span style={{ fontSize: "1.5rem" }}>🌐</span> Google
            </button>
            <button className="btn-social">
              <span style={{ fontSize: "1.5rem" }}>📘</span> Facebook
            </button>
          </div>
          <div className="form-switch">
            Already have an account?{" "}
            <span style={{ cursor: "pointer" }} onClick={() => setIsLogin(true)}>
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
