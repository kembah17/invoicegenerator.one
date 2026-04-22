import Link from "next/link";
import { ALL_TOOLS } from "@/lib/tools-data";
import AdSlot from "@/components/ui/AdSlot";
import WebSiteSchema from "@/components/seo/WebSiteSchema";

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
        color: "#fff",
        padding: "60px 20px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
            Free Invoice Generator Suite
          </h1>
          <p style={{ fontSize: 20, opacity: 0.9, marginBottom: 24, lineHeight: 1.6 }}>
            Create professional invoices, receipts, and estimates in seconds.
            100% free PDF downloads — no signup, no watermarks.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/invoice-generator/"
              style={{
                padding: "14px 28px",
                background: "#fff",
                color: "var(--color-primary-dark)",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Create Invoice →
            </Link>
            <Link
              href="/receipt-generator/"
              style={{
                padding: "14px 28px",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              Create Receipt →
            </Link>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
        <AdSlot slot="leaderboard" />

        {/* Tools Grid */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 32, color: "var(--color-text)" }}>
            Free Document Generators
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {ALL_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                style={{
                  display: "block",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 12,
                  padding: 24,
                  textDecoration: "none",
                  boxShadow: "var(--shadow-sm)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>
                  {tool.icon === "invoice" ? "📄" : tool.icon === "receipt" ? "🧾" : "📋"}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "var(--color-text)" }}>
                  {tool.name}
                </h3>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                  {tool.description}
                </p>
                <span style={{ display: "inline-block", marginTop: 12, fontSize: 14, fontWeight: 600, color: "var(--color-primary)" }}>
                  Use Tool →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AdSlot slot="in-content" />

        {/* SEO Content */}
        <section style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: 12,
          padding: 32,
          marginBottom: 32,
          boxShadow: "var(--shadow-sm)",
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "var(--color-text)" }}>
            Why Use Our Free Invoice Generator?
          </h2>
          <div style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
            <p style={{ marginBottom: 16 }}>
              Creating professional invoices shouldn&apos;t cost money or require signing up for yet another service. Our free invoice generator lets you create, customize, and download professional invoices as PDF files — completely free, with no watermarks, no account required, and no limits on how many invoices you can create.
            </p>
            <p style={{ marginBottom: 16 }}>
              Unlike most invoice generators that lock PDF downloads behind a paywall, we believe every freelancer, small business owner, and contractor deserves access to professional invoicing tools. Whether you&apos;re a graphic designer billing a client, a consultant sending a project estimate, or a shop owner printing receipts, our suite of tools has you covered.
            </p>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Complete Document Suite</h3>
            <p style={{ marginBottom: 16 }}>
              Our platform includes three essential business document generators: an <strong>Invoice Generator</strong> with multiple professional templates, tax and discount calculations, and multi-currency support; a <strong>Receipt Generator</strong> for payment confirmations with various payment method options; and an <strong>Estimate/Quote Generator</strong> for project proposals with acceptance sections.
            </p>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Privacy-First Approach</h3>
            <p style={{ marginBottom: 16 }}>
              All document generation happens entirely in your browser. Your business data, client information, and financial details never leave your device. We don&apos;t store, transmit, or have access to any of the information you enter. This client-side processing approach ensures maximum privacy and security for your sensitive business data.
            </p>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Features That Matter</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
              <li style={{ marginBottom: 6 }}>Multiple professional templates for each document type</li>
              <li style={{ marginBottom: 6 }}>Support for 8 major currencies (USD, EUR, GBP, NGN, CAD, AUD, INR, JPY)</li>
              <li style={{ marginBottom: 6 }}>Automatic calculations for subtotals, taxes, discounts, and totals</li>
              <li style={{ marginBottom: 6 }}>Logo upload for branded documents</li>
              <li style={{ marginBottom: 6 }}>Live preview as you type</li>
              <li style={{ marginBottom: 6 }}>Free PDF download and print functionality</li>
            </ul>
          </div>
        </section>

        <AdSlot slot="footer" />
      </div>
    </>
  );
}
