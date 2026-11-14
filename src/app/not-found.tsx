import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h1 style={{ fontSize: "64px", color: "#2563eb" }}>404</h1>
        <h2>Page Not Found</h2>
        <p style={{ margin: "16px 0", color: "#64748b" }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "white",
            padding: "12px 22px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
