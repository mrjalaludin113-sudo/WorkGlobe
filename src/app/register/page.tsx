"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [accountType, setAccountType] = useState("job_seeker");

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 20, background: "#f4f7fc", fontFamily: "Arial, sans-serif" }}>
      <section style={{ width: "100%", maxWidth: 460, background: "white", padding: 30, borderRadius: 16, boxShadow: "0 10px 35px #14213d12" }}>
        <Link href="/" style={{ fontSize: 25, fontWeight: 800, color: "#101d35", textDecoration: "none" }}>
          Work<span style={{ color: "#2563eb" }}>Globe</span>
        </Link>

        <h1 style={{ marginTop: 25, color: "#101d35" }}>Create Your Account</h1>
        <p style={{ color: "#68758b", margin: "10px 0 22px" }}>
          Start your global career journey.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <label>Full Name</label>
          <input required placeholder="Enter your full name" style={fieldStyle} />

          <label>Email Address</label>
          <input required type="email" placeholder="Enter your email" style={fieldStyle} />

          <label>Password</label>
          <input required type="password" minLength={8} placeholder="At least 8 characters" style={fieldStyle} />

          <label>Choose Account Type</label>
          <select value={accountType} onChange={(e) => setAccountType(e.target.value)} style={fieldStyle}>
            <option value="job_seeker">Job Seeker</option>
            <option value="employer">Company / Employer</option>
            <option value="recruiter">Job Sharer / Recruiter</option>
          </select>

          <button type="submit" style={{ width: "100%", padding: 14, background: "#2563eb", color: "white", border: 0, borderRadius: 8, fontWeight: 700, marginTop: 10 }}>
            Create Account
          </button>
        </form>

        <p style={{ marginTop: 22, textAlign: "center", color: "#68758b" }}>
          Already registered? <Link href="/login" style={{ color: "#2563eb" }}>Sign In</Link>
        </p>
      </section>
    </main>
  );
}

const fieldStyle = {
  width: "100%",
  padding: 13,
  margin: "8px 0 18px",
  border: "1px solid #dce3ed",
  borderRadius: 8,
  display: "block",
};
