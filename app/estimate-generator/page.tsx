import type { Metadata } from "next";
import EstimateGenerator from "@/components/tools/EstimateGenerator";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
  title: "Free Estimate & Quote Generator — Create & Download PDF Quotes | InvoiceGenerator.one",
  description: "Create professional project estimates and quotes for free. Multiple templates, auto-calculations, acceptance sections. Download as PDF — no signup, no watermarks.",
  alternates: { canonical: "https://invoicegenerator.one/estimate-generator/" },
  openGraph: {
    title: "Free Estimate & Quote Generator — Create & Download PDF Quotes",
    description: "Create professional project estimates and quotes for free with instant PDF download.",
    url: "https://invoicegenerator.one/estimate-generator/",
    siteName: "InvoiceGenerator.one",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Estimate & Quote Generator — Create & Download PDF Quotes",
    description: "Create professional project estimates and quotes for free with instant PDF download.",
  },
};

const faqs = [
  {
    question: "What is the difference between an estimate and a quote?",
    answer: "An estimate provides an approximate cost for a project or service and may change as work progresses. A quote is typically a fixed price that the provider commits to. Our generator works for both — you can use it to create either estimates or binding quotes depending on your terms and conditions.",
  },
  {
    question: "Does the estimate include an acceptance section?",
    answer: "Yes! Both our Professional and Modern templates include a dedicated acceptance section with signature lines for the client to sign and date, making it easy to get formal approval on your estimates and quotes.",
  },
  {
    question: "Can I set a validity period for my quote?",
    answer: "Absolutely. The “Valid Until” date field lets you specify how long your quote remains valid. This is important for managing pricing commitments and encouraging timely client decisions.",
  },
  {
    question: "Is the PDF download really free?",
    answer: "Yes, 100% free. You can create and download unlimited estimates and quotes as PDF files without any cost, account creation, or watermarks. Our service is supported by advertisements.",
  },
  {
    question: "Can I include terms and conditions?",
    answer: "Yes, there is a dedicated Terms & Conditions section where you can add payment terms, project scope limitations, revision policies, or any other conditions relevant to your estimate or quote.",
  },
];

export default function EstimateGeneratorPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 20px" }}>
      <FaqSchema items={faqs} />

      <AdSlot slot="leaderboard" />

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, color: "var(--color-text)" }}>
          Free Estimate & Quote Generator
        </h1>
        <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          Create professional project estimates and quotes with auto-calculations and acceptance sections.
          Download as PDF for free — no signup required.
        </p>
      </div>

      <EstimateGenerator />

      <AdSlot slot="below-results" />

      {/* How-to Guide */}
      <section style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 12,
        padding: 32,
        marginTop: 40,
        marginBottom: 32,
        boxShadow: "var(--shadow-sm)",
      }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "var(--color-text)" }}>
          How to Create a Professional Estimate or Quote
        </h2>
        <div style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
          <p style={{ marginBottom: 16 }}>
            A well-crafted estimate or quote is often the first step in winning new business. It demonstrates professionalism, sets clear expectations about pricing and scope, and provides a foundation for the business relationship. Our free estimate generator helps you create polished, detailed quotes that impress potential clients.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 1: Select Template and Currency</h3>
          <p style={{ marginBottom: 16 }}>
            Choose between our Professional template (clean corporate design) or Modern template (contemporary gradient design). Select your currency from 8 supported options. The template you choose sets the visual tone for your proposal.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 2: Enter Your Business Details</h3>
          <p style={{ marginBottom: 16 }}>
            Add your company name, address, phone, and email. Upload your logo for a branded appearance. Professional-looking estimates with your branding help build credibility and trust with potential clients.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 3: Add Client Information</h3>
          <p style={{ marginBottom: 16 }}>
            Enter the prospective client’s name, address, and email. Personalizing the estimate with the client’s details shows attention to detail and makes the document feel tailored to their specific needs.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 4: Set Quote Details and Validity</h3>
          <p style={{ marginBottom: 16 }}>
            Set the quote number, date, and importantly, the “Valid Until” date. Setting a validity period creates urgency and protects you from price changes. Common validity periods are 15, 30, or 60 days depending on your industry.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 5: Detail Your Line Items</h3>
          <p style={{ marginBottom: 16 }}>
            Break down your project or services into clear line items. Include detailed descriptions, quantities, and rates. Being specific helps clients understand exactly what they’re paying for and reduces misunderstandings later.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 6: Add Tax, Discounts, and Terms</h3>
          <p style={{ marginBottom: 16 }}>
            Configure applicable tax rates and any discounts you’re offering. Add your terms and conditions covering payment schedules, revision policies, project timelines, and any other relevant conditions. Clear terms protect both you and your client.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 7: Review and Download</h3>
          <p style={{ marginBottom: 16 }}>
            Use the live preview to review your estimate carefully. Check all calculations, verify client details, and ensure your terms are complete. When satisfied, click “Free PDF Download” to generate a professional PDF that you can email to your client.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <FAQ items={faqs} />

      <RelatedTools current="/estimate-generator/" />

      <AdSlot slot="footer" />
    </div>
  );
}
