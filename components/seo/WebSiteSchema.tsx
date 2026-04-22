export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InvoiceGenerator.one",
    url: "https://invoicegenerator.one",
    description: "Free online invoice, receipt, and estimate generator. Create professional documents and download as PDF — no signup required.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://invoicegenerator.one/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
