"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("job_seeker");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            account_type: accountType,
          },
        },
      });

      if (error) {
        setError(error.message);
        return;
      }

      setMessage(
        "Registration successful! Check your email to confirm your account before signing in."
      );
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleRegister}>
        <h1>Create Your Account</h1>
        <p>Join WorkGlobe and explore opportunities worldwide.</p>

        <label>Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Account Type</label>
        <select
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value="job_seeker">Job Seeker</option>
          <option value="employer">Company / Employer</option>
          <option value="job_sharer">Job Sharer / Recruiter</option>
        </select>

        {error && <p role="alert">{error}</p>}
        {message && <p role="status">{message}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p>
          Already registered? <a href="/login">Sign In</a>
        </p>
      </form>
    </main>
  );
}
