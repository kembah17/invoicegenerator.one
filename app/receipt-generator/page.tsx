import type { Metadata } from "next";
import ReceiptGenerator from "@/components/tools/ReceiptGenerator";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
  title: "Free Receipt Generator — Create & Download PDF Receipts | InvoiceGenerator.one",
  description: "Generate professional payment receipts for free. Multiple templates, payment method tracking, instant PDF download — no signup, no watermarks.",
  alternates: { canonical: "https://invoicegenerator.one/receipt-generator/" },
  openGraph: {
    title: "Free Receipt Generator — Create & Download PDF Receipts",
    description: "Generate professional payment receipts for free with instant PDF download.",
    url: "https://invoicegenerator.one/receipt-generator/",
    siteName: "InvoiceGenerator.one",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Receipt Generator — Create & Download PDF Receipts",
    description: "Generate professional payment receipts for free with instant PDF download.",
  },
};

const faqs = [
  {
    question: "What payment methods can I include on receipts?",
    answer: "Our receipt generator supports four payment methods: Cash, Credit/Debit Card, Bank Transfer, and Mobile Money. When you select Cash, you can also record the amount paid and change given.",
  },
  {
    question: "Can I customize the receipt template?",
    answer: "Yes! We offer two receipt templates: Standard (full-size professional receipt) and Compact (narrow receipt-style format similar to a point-of-sale receipt). Both templates include your business details, items, payment information, and a customizable thank-you message.",
  },
  {
    question: "Is the receipt PDF free to download?",
    answer: "Absolutely free. You can generate and download unlimited receipts as PDF files without any cost, account creation, or watermarks. Our service is supported by advertisements.",
  },
  {
    question: "Can I add my business logo to receipts?",
    answer: "Yes, you can upload your business logo in PNG, JPG, or SVG format. The logo appears in the receipt header, giving your receipts a professional branded appearance.",
  },
];

export default function ReceiptGeneratorPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 20px" }}>
      <FaqSchema items={faqs} />

      <AdSlot slot="leaderboard" />

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, color: "var(--color-text)" }}>
          Free Receipt Generator
        </h1>
        <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          Generate professional payment receipts with multiple templates and payment method tracking.
          Download as PDF for free — no signup required.
        </p>
      </div>

      <ReceiptGenerator />

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
          How to Create a Professional Receipt
        </h2>
        <div style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
          <p style={{ marginBottom: 16 }}>
            Receipts are essential business documents that serve as proof of payment for both the seller and buyer. Whether you run a retail store, provide services, or manage a small business, providing professional receipts builds trust and helps with bookkeeping. Our free receipt generator makes creating polished receipts quick and easy.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 1: Choose Template and Currency</h3>
          <p style={{ marginBottom: 16 }}>
            Select between our Standard template (full-size professional receipt) or Compact template (narrow format ideal for point-of-sale style receipts). Choose your preferred currency from 8 supported options including USD, EUR, GBP, and NGN.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 2: Enter Business Information</h3>
          <p style={{ marginBottom: 16 }}>
            Add your business name, address, phone number, and email. Upload your logo for a branded look. This information appears at the top of the receipt and identifies your business to the customer.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 3: Set Receipt Details</h3>
          <p style={{ marginBottom: 16 }}>
            The receipt number is auto-generated for convenience but can be customized. Set the date and enter the customer’s name. Having a unique receipt number helps with tracking and record-keeping.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 4: Add Items or Services</h3>
          <p style={{ marginBottom: 16 }}>
            List each item or service provided with a description, quantity, and price. Amounts are calculated automatically. Add or remove items as needed to accurately reflect the transaction.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 5: Record Payment Details</h3>
          <p style={{ marginBottom: 16 }}>
            Select the payment method used: Cash, Credit/Debit Card, Bank Transfer, or Mobile Money. For cash payments, you can record the amount paid and change given. This information is important for accurate financial records.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Step 6: Customize and Download</h3>
          <p style={{ marginBottom: 16 }}>
            Add a personalized thank-you message to show appreciation to your customers. Review the live preview to ensure everything looks correct, then click “Free PDF Download” to save your receipt. You can also print it directly using the Print button.
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--color-text)" }}>Best Practices for Receipts</h3>
          <p style={{ marginBottom: 16 }}>
            Always include the date, a unique receipt number, itemized list of products or services, total amount, and payment method. Keep copies of all receipts for tax purposes and accounting. Providing receipts promptly after payment demonstrates professionalism and builds customer confidence in your business.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <FAQ items={faqs} />

      <RelatedTools current="/receipt-generator/" />

      <AdSlot slot="footer" />
    </div>
  );
}
