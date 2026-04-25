import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-footer-bg)",
        color: "var(--color-footer-text)",
        marginTop: 48,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 16px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            marginBottom: 32,
          }}
        >
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: "var(--color-footer-text)" }}>
              InvoiceGenerator.one
            </h3>
            <p style={{ fontSize: 14, color: "var(--color-footer-muted)", lineHeight: 1.6 }}>
              Free online invoice, receipt, and estimate generator. Create professional documents and download as PDF — no signup required.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: "var(--color-footer-text)" }}>Tools</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/invoice-generator/", icon: "📄", label: "Invoice Generator" },
                { href: "/receipt-generator/", icon: "🧾", label: "Receipt Generator" },
                { href: "/estimate-generator/", icon: "📋", label: "Estimate Generator" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: 8 }}>
                  <Link
                    href={link.href}
                    style={{ color: "var(--color-footer-muted)", textDecoration: "none", fontSize: 14 }}
                  >
                    {link.icon} {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: "var(--color-footer-text)" }}>Company</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/about/", label: "About" },
                { href: "/privacy/", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: 8 }}>
                  <Link
                    href={link.href}
                    style={{ color: "var(--color-footer-muted)", textDecoration: "none", fontSize: 14 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--color-footer-border)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "var(--color-footer-muted)" }}>
            &copy; {new Date().getFullYear()} InvoiceGenerator.one. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "var(--color-footer-muted)" }}>
            100% client-side processing &bull; Your data never leaves your browser
          </p>
        </div>
      </div>
    </footer>
  );
}
