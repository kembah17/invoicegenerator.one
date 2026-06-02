import type { Metadata } from "next";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "Privacy Policy — InvoiceGenerator.one",
  description: "Privacy policy for InvoiceGenerator.one. Learn how we protect your data with client-side processing and our commitment to privacy.",
  alternates: { canonical: "https://www.invoicegenerator.one/privacy/" },
  openGraph: {
    title: "Privacy Policy — InvoiceGenerator.one",
    description: "Our commitment to your privacy and data protection.",
    url: "https://www.invoicegenerator.one/privacy/",
    siteName: "InvoiceGenerator.one",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <AdSlot slot="leaderboard" />

      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8, color: "var(--color-text)" }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 32 }}>
        Last updated: April 2026
      </p>

      <div style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 12,
        padding: 32,
        marginBottom: 32,
        boxShadow: "var(--shadow-sm)",
      }}>
        <div style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "var(--color-text)" }}>
            1. Overview
          </h2>
          <p style={{ marginBottom: 16 }}>
            InvoiceGenerator.one ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website and tools.
          </p>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            2. Client-Side Processing
          </h2>
          <p style={{ marginBottom: 16 }}>
            <strong style={{ color: "var(--color-text)" }}>All document generation happens entirely in your browser.</strong> When you create invoices, receipts, or estimates using our tools, your data (business details, client information, financial figures, uploaded logos) is processed locally on your device. We do not transmit, store, or have access to any of this information.
          </p>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            3. Information We Do Not Collect
          </h2>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li style={{ marginBottom: 6 }}>Business names, addresses, or contact details you enter</li>
            <li style={{ marginBottom: 6 }}>Client or customer information</li>
            <li style={{ marginBottom: 6 }}>Invoice amounts, line items, or financial data</li>
            <li style={{ marginBottom: 6 }}>Uploaded logos or images</li>
            <li style={{ marginBottom: 6 }}>Generated PDF documents</li>
          </ul>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            4. Information We May Collect
          </h2>
          <p style={{ marginBottom: 16 }}>
            We may collect limited, non-personal information through:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li style={{ marginBottom: 6 }}><strong style={{ color: "var(--color-text)" }}>Analytics:</strong> We may use privacy-respecting analytics to understand how our site is used (page views, popular tools, general geographic region). This data is aggregated and cannot identify individual users.</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: "var(--color-text)" }}>Cookies:</strong> We use essential cookies for site functionality (such as theme preference). Third-party advertising partners may use cookies for ad personalization.</li>
          </ul>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            5. Third-Party Advertising
          </h2>
          <p style={{ marginBottom: 16 }}>
            We display advertisements to support our free service. Our advertising partners may use cookies and similar technologies to serve relevant ads. You can manage your ad preferences through your browser settings or through the ad network&apos;s opt-out mechanisms.
          </p>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            6. Data Security
          </h2>
          <p style={{ marginBottom: 16 }}>
            Since all document processing occurs in your browser, your sensitive business and financial data is inherently protected — it never travels over the internet to our servers. We use HTTPS encryption for all website traffic to protect against interception.
          </p>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            7. Children&apos;s Privacy
          </h2>
          <p style={{ marginBottom: 16 }}>
            Our service is not directed to children under 13. We do not knowingly collect personal information from children.
          </p>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            8. Changes to This Policy
          </h2>
          <p style={{ marginBottom: 16 }}>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, marginTop: 24, color: "var(--color-text)" }}>
            9. Contact Us
          </h2>
          <p style={{ marginBottom: 16 }}>
            If you have questions about this Privacy Policy, please contact us at <strong style={{ color: "var(--color-primary)" }}>hello@invoicegenerator.one</strong>.
          </p>
        </div>
      </div>

      <AdSlot slot="footer" />
    </div>
  );
}
