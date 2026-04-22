import type { Metadata } from "next";
import InvoiceGenerator from "@/components/tools/InvoiceGenerator";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
  title: "Free Invoice Generator — Create & Download PDF Invoices | InvoiceGenerator.one",
  description: "Create professional invoices for free. Multiple templates, auto-calculations, multi-currency support. Download as PDF instantly — no signup, no watermarks.",
  alternates: { canonical: "https://invoicegenerator.one/invoice-generator/" },
  openGraph: {
    title: "Free Invoice Generator — Create & Download PDF Invoices",
    description: "Create professional invoices for free with multiple templates and instant PDF download.",
    url: "https://invoicegenerator.one/invoice-generator/",
    siteName: "InvoiceGenerator.one",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator — Create & Download PDF Invoices",
    description: "Create professional invoices for free with multiple templates and instant PDF download.",
  },
};

const faqs = [
  {
    question: "Is this invoice generator really free?",
    answer: "Yes, completely free! You can create unlimited invoices and download them as PDF files without any cost, signup, or watermarks. We monetize through non-intrusive advertisements instead of charging users.",
  },
  {
    question: "Is my data safe when creating invoices?",
    answer: "Absolutely. All invoice generation happens entirely in your browser. Your business details, client information, and financial data never leave your device. We don\u2019t store, transmit, or have access to any information you enter.",
  },
  {
    question: "What currencies are supported?",
    answer: "We support 8 major currencies: US Dollar (USD), Euro (EUR), British Pound (GBP), Nigerian Naira (NGN), Canadian Dollar (CAD), Australian Dollar (AUD), Indian Rupee (INR), and Japanese Yen (JPY). Each currency displays with its proper symbol and formatting.",
  },
  {
    question: "Can I add my company logo to invoices?",
    answer: "Yes! You can upload your company logo in any common image format (PNG, JPG, SVG). The logo will appear on your invoice in the header area. Since processing is client-side, your logo file never leaves your device.",
  },
  {
    question: "What invoice templates are available?",
    answer: "We offer three professionally designed templates: Professional (clean corporate look with blue accents), Modern (colorful gradient header design), and Minimal (elegant serif typography). All templates include your business details, client info, line items, and totals.",
  },
];

export default function InvoiceGeneratorPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 20px" }}>
      <FaqSchema items={faqs} />

      <AdSlot slot="leaderboard" />

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, color: "var(--color-text)" }}>
          Free Invoice Generator
        </h1>
        <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          Create professional invoices with multiple templates, auto-calculations, and multi-currency support.
          Download as PDF for free — no signup required.
        </p>
      </div>

      <InvoiceGenerator />

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
          How to Create a Professional Invoice
        </h2>
        <div style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
          <p style={{ marginBottom: 16 }}>
            Creating a professional invoice is essential for any business, freelancer, or contractor. A well-designed invoice not only ensures you get paid on time but also reinforces your professional image. Our free invoice generator makes this process simple and fast, allowing you to create polished invoices in minutes.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 1: Choose Your Template and Currency</h3>
          <p style={{ marginBottom: 16 }}>
            Start by selecting one of our three professional templates: Professional for a clean corporate look, Modern for a colorful contemporary design, or Minimal for an elegant understated style. Then choose your currency from our supported options including USD, EUR, GBP, NGN, CAD, AUD, INR, and JPY.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 2: Enter Your Business Details</h3>
          <p style={{ marginBottom: 16 }}>
            Fill in your company name, address, phone number, and email. You can also upload your company logo to give your invoice a branded, professional appearance. These details appear in the header of your invoice and help clients identify who the invoice is from.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 3: Add Client Information</h3>
          <p style={{ marginBottom: 16 }}>
            Enter your client’s name, address, and email in the “Bill To” section. This information appears prominently on the invoice so your client knows the invoice is addressed to them. Accurate client details also help with record-keeping and accounting.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 4: Set Invoice Details</h3>
          <p style={{ marginBottom: 16 }}>
            The invoice number is auto-generated but can be customized to match your numbering system. Set the invoice date, due date, and payment terms (Net 30, Net 15, Net 60, or Due on Receipt). Clear payment terms help set expectations and encourage timely payment.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 5: Add Line Items</h3>
          <p style={{ marginBottom: 16 }}>
            Add each product or service as a line item with a description, quantity, and unit price. The amount for each line is calculated automatically. You can add as many line items as needed and remove any that aren’t required. Be descriptive in your item descriptions to avoid confusion.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 6: Configure Tax and Discounts</h3>
          <p style={{ marginBottom: 16 }}>
            Set your tax rate as a percentage, and optionally add a discount (either as a percentage or fixed amount). The subtotal, tax amount, discount, and final total are all calculated automatically in real-time as you make changes.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 7: Download Your Invoice</h3>
          <p style={{ marginBottom: 16 }}>
            Once you’re satisfied with the live preview, click the “Free PDF Download” button to generate and download your invoice as a high-quality PDF file. You can also use the Print button to print directly. The PDF is generated entirely in your browser — your data never leaves your device.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <FAQ items={faqs} />

      <RelatedTools current="/invoice-generator/" />

      <AdSlot slot="footer" />
    </div>
  );
}
