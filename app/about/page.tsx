import type { Metadata } from "next";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "About — InvoiceGenerator.one | Free Invoice, Receipt & Estimate Generator",
  description: "Learn about InvoiceGenerator.one — a free, privacy-first suite of document generators for invoices, receipts, and estimates. No signup, no watermarks.",
  alternates: { canonical: "https://invoicegenerator.one/about/" },
  openGraph: {
    title: "About — InvoiceGenerator.one",
    description: "Learn about our free, privacy-first invoice generator suite.",
    url: "https://invoicegenerator.one/about/",
    siteName: "InvoiceGenerator.one",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <AdSlot slot="leaderboard" />

      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16, color: "var(--color-text)" }}>
        About InvoiceGenerator.one
      </h1>

      <div style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 12,
        padding: 32,
        marginBottom: 32,
        boxShadow: "var(--shadow-sm)",
      }}>
        <div style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
          <p style={{ marginBottom: 16 }}>
            <strong style={{ color: "var(--color-text)" }}>InvoiceGenerator.one</strong> is a free, privacy-first suite of business document generators. We provide professional tools for creating invoices, receipts, and estimates — all completely free, with no signup required and no watermarks on your documents.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            Our Mission
          </h2>
          <p style={{ marginBottom: 16 }}>
            We believe every freelancer, small business owner, and contractor deserves access to professional invoicing tools without paying subscription fees or dealing with complex software. Most invoice generators lock essential features like PDF downloads behind paywalls — we don&apos;t.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            Privacy First
          </h2>
          <p style={{ marginBottom: 16 }}>
            All document generation happens entirely in your browser. Your business data, client information, and financial details <strong style={{ color: "var(--color-text)" }}>never leave your device</strong>. We don&apos;t store, transmit, or have access to any of the information you enter. This client-side processing approach ensures maximum privacy and security.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            Our Tools
          </h2>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: "var(--color-text)" }}>Invoice Generator</strong> — Create professional invoices with 3 templates, multi-currency support, tax and discount calculations, and logo upload.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: "var(--color-text)" }}>Receipt Generator</strong> — Generate payment receipts with 2 templates, multiple payment method options, and customizable thank-you messages.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: "var(--color-text)" }}>Estimate/Quote Generator</strong> — Create project estimates with 2 templates, validity dates, terms and conditions, and acceptance sections.
            </li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            Key Features
          </h2>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li style={{ marginBottom: 6 }}>100% free PDF downloads — no watermarks, no limits</li>
            <li style={{ marginBottom: 6 }}>No account or signup required</li>
            <li style={{ marginBottom: 6 }}>Client-side processing — your data stays on your device</li>
            <li style={{ marginBottom: 6 }}>Multiple professional templates for each document type</li>
            <li style={{ marginBottom: 6 }}>Support for 8 major currencies</li>
            <li style={{ marginBottom: 6 }}>Automatic calculations for totals, taxes, and discounts</li>
            <li style={{ marginBottom: 6 }}>Logo upload for branded documents</li>
            <li style={{ marginBottom: 6 }}>Live preview as you type</li>
            <li style={{ marginBottom: 6 }}>Print functionality</li>
            <li style={{ marginBottom: 6 }}>Dark and light mode support</li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            How We Stay Free
          </h2>
          <p style={{ marginBottom: 16 }}>
            InvoiceGenerator.one is supported by non-intrusive advertisements. This allows us to provide all features completely free while keeping the service sustainable. We will never charge for PDF downloads or basic features.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            Contact
          </h2>
          <p style={{ marginBottom: 16 }}>
            Have questions, feedback, or suggestions? We&apos;d love to hear from you. Reach out to us at <strong style={{ color: "var(--color-primary)" }}>hello@invoicegenerator.one</strong>.
          </p>
        </div>
      </div>

      <AdSlot slot="footer" />
    </div>
  );
}
