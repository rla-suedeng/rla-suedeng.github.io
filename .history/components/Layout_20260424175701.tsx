import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "2rem 1.5rem",
        fontFamily: "sans-serif",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "2rem",
          borderBottom: "0.5px solid #e5e5e5",
          marginBottom: "3rem",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1px",
          }}
        >
          <span
            style={{
              fontSize: "17px",
              fontWeight: 500,
              color: "#111",
              lineHeight: 1.1,
            }}
          >
            DuDu
          </span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1D9E75",
            }}
          >
            cognition log
          </span>
        </Link>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link
            href="/"
            style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}
          >
            posts
          </Link>
          <Link
            href="/projects"
            style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}
          >
            projects
          </Link>
          <Link
            href="/about"
            style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}
          >
            about
          </Link>
        </div>
      </nav>
      {children}
      <footer
        style={{
          borderTop: "0.5px solid #e5e5e5",
          marginTop: "4rem",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "13px", color: "#aaa" }}>© 수현</span>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href="https://github.com/rla-suedeng"
            style={{
              fontSize: "13px",
              color: "#0F6E56",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
          <a
            href="#"
            style={{
              fontSize: "13px",
              color: "#0F6E56",
              textDecoration: "none",
            }}
          >
            CV
          </a>
        </div>
      </footer>
    </div>
  );
}
