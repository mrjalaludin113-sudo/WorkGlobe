"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 20, background: "#f4f7fc", fontFamily: "Arial, sans-serif" }}>
      <section style={{ width: "100%", maxWidth: 420, background: "white", padding: 32, borderRadius: 16, boxShadow: "0 10px 35px #14213d12" }}>
        <Link href="/" style={{ fontSize: 25, fontWeight: 800, color: "#101d35", textDecoration: "none" }}>
          Work<span style={{ color: "#2563eb" }}>Globe</span>
        </Link>

        <h1 style={{ marginTop: 30, color: "#101d35" }}>Welcome Back</h1>
        <p style={{ color: "#68758b", margin: "10px 0 25px" }}>Sign in to your WorkGlobe account.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <label>Email Address</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 13, margin: "8px 0 18px", border: "1px solid #dce3ed", borderRadius: 8 }}
          />

          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 13, margin: "8px 0 22px", border: "1px solid #dce3ed", borderRadius: 8 }}
          />

          <button type="submit" style={{ width: "100%", padding: 14, background: "#2563eb", color: "white", border: 0, borderRadius: 8, fontWeight: 700 }}>
            Sign In
          </button>
        </form>

        <p style={{ marginTop: 22, textAlign: "center", color: "#68758b" }}>
          Don't have an account? <Link href="/register" style={{ color: "#2563eb" }}>Create Account</Link>
        </p>
      </section>
    </main>
  );
}
