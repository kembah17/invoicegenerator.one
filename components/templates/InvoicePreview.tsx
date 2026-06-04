"use client";
import { InvoiceData } from "@/lib/types";
import { formatCurrency } from "@/lib/currency";
import { calculateSubtotal, calculateTax, calculateDiscount, calculateTotal, formatDate } from "@/lib/utils";

interface Props {
  data: InvoiceData;
}

export default function InvoicePreview({ data }: Props) {
  const subtotal = calculateSubtotal(data.items);
  const tax = calculateTax(subtotal, data.taxRate);
  const discount = calculateDiscount(subtotal, data.discountType, data.discountValue);
  const total = calculateTotal(subtotal, tax, discount);
  const fc = (amount: number) => formatCurrency(amount, data.currency);

  if (data.template === "modern") return <ModernTemplate data={data} subtotal={subtotal} tax={tax} discount={discount} total={total} fc={fc} />;
  if (data.template === "minimal") return <MinimalTemplate data={data} subtotal={subtotal} tax={tax} discount={discount} total={total} fc={fc} />;
  return <ProfessionalTemplate data={data} subtotal={subtotal} tax={tax} discount={discount} total={total} fc={fc} />;
}

interface TemplateProps {
  data: InvoiceData;
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  fc: (n: number) => string;
}

function ProfessionalTemplate({ data, subtotal, tax, discount, total, fc }: TemplateProps) {
  return (
    <div style={{ padding: 40, fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1a1a1a", background: "#fff", minHeight: 800 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 40, borderBottom: "3px solid #0369A1", paddingBottom: 20 }}>
        <div>
          {data.business.logo && <img src={data.business.logo} alt="Logo" style={{ maxHeight: 60, marginBottom: 8 }} />}
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: "#111" }}>{data.business.companyName || "Your Company"}</h2>
          <p style={{ fontSize: 12, color: "#555", margin: "4px 0", whiteSpace: "pre-line" }}>{data.business.address}</p>
          {data.business.phone && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.business.phone}</p>}
          {data.business.email && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.business.email}</p>}
        </div>
        <div style={{ textAlign: "right" }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#0369A1", margin: 0 }}>INVOICE</h1>
          <p style={{ fontSize: 13, color: "#555", margin: "4px 0" }}>#{data.invoiceNumber}</p>
          <p style={{ fontSize: 13, color: "#555", margin: "2px 0" }}>Date: {formatDate(data.date)}</p>
          <p style={{ fontSize: 13, color: "#555", margin: "2px 0" }}>Due: {formatDate(data.dueDate)}</p>
          {data.paymentTerms && <p style={{ fontSize: 13, color: "#555", margin: "2px 0" }}>Terms: {data.paymentTerms}</p>}
        </div>
      </div>

      {/* Bill To */}
      <div style={{ marginBottom: 30, background: "#f8fafc", padding: 16, borderRadius: 6 }}>
        <h3 style={{ fontSize: 11, fontWeight: 700, color: "#0369A1", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>Bill To</h3>
        <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 4px", color: "#111" }}>{data.client.name || "Client Name"}</p>
        <p style={{ fontSize: 12, color: "#555", margin: "2px 0", whiteSpace: "pre-line" }}>{data.client.address}</p>
        {data.client.email && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.client.email}</p>}
      </div>

      {/* Items Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
        <thead>
          <tr style={{ background: "#0369A1" }}>
            <th style={{ padding: "10px 12px", textAlign: "left", color: "#fff", fontSize: 12, fontWeight: 600 }}>Description</th>
            <th style={{ padding: "10px 12px", textAlign: "center", color: "#fff", fontSize: 12, fontWeight: 600, width: 70 }}>Qty</th>
            <th style={{ padding: "10px 12px", textAlign: "right", color: "#fff", fontSize: 12, fontWeight: 600, width: 100 }}>Unit Price</th>
            <th style={{ padding: "10px 12px", textAlign: "right", color: "#fff", fontSize: 12, fontWeight: 600, width: 100 }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #e5e7eb", background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
              <td style={{ padding: "10px 12px", fontSize: 13, color: "#333" }}>{item.description || "—"}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "center", color: "#333" }}>{item.quantity}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "right", color: "#333" }}>{fc(item.unitPrice)}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "right", color: "#333", fontWeight: 500 }}>{fc(item.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: 260 }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 13, color: "#555" }}>
            <span>Subtotal</span><span>{fc(subtotal)}</span>
          </div>
          {data.taxRate > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 13, color: "#555" }}>
              <span>Tax ({data.taxRate}%)</span><span>{fc(tax)}</span>
            </div>
          )}
          {discount > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 13, color: "#c00" }}>
              <span>Discount {data.discountType === "percentage" ? `(${data.discountValue}%)` : ""}</span><span>-{fc(discount)}</span>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: 16, fontWeight: 700, borderTop: "2px solid #0369A1", marginTop: 8, color: "#111" }}>
            <span>Total</span><span>{fc(total)}</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      {data.notes && (
        <div style={{ marginTop: 30, padding: 16, background: "#f8fafc", borderRadius: 6, borderLeft: "3px solid #0369A1" }}>
          <h3 style={{ fontSize: 12, fontWeight: 700, color: "#0369A1", margin: "0 0 6px" }}>Notes / Terms</h3>
          <p style={{ fontSize: 12, color: "#555", margin: 0, whiteSpace: "pre-line", lineHeight: 1.6 }}>{data.notes}</p>
        </div>
      )}
    </div>
  );
}

function ModernTemplate({ data, subtotal, tax, discount, total, fc }: TemplateProps) {
  return (
    <div style={{ padding: 40, fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1a1a1a", background: "#fff", minHeight: 800 }}>
      {/* Header with gradient */}
      <div style={{ background: "linear-gradient(135deg, #0369A1, #06b6d4)", borderRadius: 12, padding: 30, marginBottom: 30, color: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            {data.business.logo && <img src={data.business.logo} alt="Logo" style={{ maxHeight: 50, marginBottom: 8, borderRadius: 4 }} />}
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{data.business.companyName || "Your Company"}</h2>
            <p style={{ fontSize: 12, opacity: 0.9, margin: "4px 0", whiteSpace: "pre-line" }}>{data.business.address}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0, letterSpacing: 2 }}>INVOICE</h1>
            <p style={{ fontSize: 14, opacity: 0.9, margin: "4px 0" }}>#{data.invoiceNumber}</p>
          </div>
        </div>
      </div>

      {/* Info Row */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 30, gap: 20 }}>
        <div style={{ flex: 1, background: "#f0f9ff", padding: 16, borderRadius: 8 }}>
          <h3 style={{ fontSize: 11, fontWeight: 700, color: "#0369A1", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>Bill To</h3>
          <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 4px", color: "#111" }}>{data.client.name || "Client Name"}</p>
          <p style={{ fontSize: 12, color: "#555", margin: "2px 0", whiteSpace: "pre-line" }}>{data.client.address}</p>
          {data.client.email && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.client.email}</p>}
        </div>
        <div style={{ flex: 1, background: "#f0f9ff", padding: 16, borderRadius: 8 }}>
          <h3 style={{ fontSize: 11, fontWeight: 700, color: "#0369A1", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>Details</h3>
          <p style={{ fontSize: 12, color: "#555", margin: "4px 0" }}><strong>Date:</strong> {formatDate(data.date)}</p>
          <p style={{ fontSize: 12, color: "#555", margin: "4px 0" }}><strong>Due:</strong> {formatDate(data.dueDate)}</p>
          {data.paymentTerms && <p style={{ fontSize: 12, color: "#555", margin: "4px 0" }}><strong>Terms:</strong> {data.paymentTerms}</p>}
        </div>
      </div>

      {/* Items */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
        <thead>
          <tr>
            <th style={{ padding: "12px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#0369A1", borderBottom: "2px solid #0369A1" }}>Description</th>
            <th style={{ padding: "12px", textAlign: "center", fontSize: 12, fontWeight: 700, color: "#0369A1", borderBottom: "2px solid #0369A1", width: 70 }}>Qty</th>
            <th style={{ padding: "12px", textAlign: "right", fontSize: 12, fontWeight: 700, color: "#0369A1", borderBottom: "2px solid #0369A1", width: 100 }}>Rate</th>
            <th style={{ padding: "12px", textAlign: "right", fontSize: 12, fontWeight: 700, color: "#0369A1", borderBottom: "2px solid #0369A1", width: 100 }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td style={{ padding: "10px 12px", fontSize: 13, color: "#333" }}>{item.description || "—"}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "center", color: "#333" }}>{item.quantity}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "right", color: "#333" }}>{fc(item.unitPrice)}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "right", fontWeight: 600, color: "#333" }}>{fc(item.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: 260, background: "#f0f9ff", padding: 16, borderRadius: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 13, color: "#555" }}>
            <span>Subtotal</span><span>{fc(subtotal)}</span>
          </div>
          {data.taxRate > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 13, color: "#555" }}>
              <span>Tax ({data.taxRate}%)</span><span>{fc(tax)}</span>
            </div>
          )}
          {discount > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 13, color: "#c00" }}>
              <span>Discount</span><span>-{fc(discount)}</span>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", fontSize: 18, fontWeight: 700, borderTop: "2px solid #0369A1", marginTop: 8, color: "#0369A1" }}>
            <span>Total</span><span>{fc(total)}</span>
          </div>
        </div>
      </div>

      {data.notes && (
        <div style={{ marginTop: 30, padding: 16, background: "#f8fafc", borderRadius: 8, borderLeft: "4px solid #06b6d4" }}>
          <h3 style={{ fontSize: 12, fontWeight: 700, color: "#0369A1", margin: "0 0 6px" }}>Notes / Terms</h3>
          <p style={{ fontSize: 12, color: "#555", margin: 0, whiteSpace: "pre-line", lineHeight: 1.6 }}>{data.notes}</p>
        </div>
      )}
    </div>
  );
}

function MinimalTemplate({ data, subtotal, tax, discount, total, fc }: TemplateProps) {
  return (
    <div style={{ padding: 40, fontFamily: "'Georgia', serif", color: "#1a1a1a", background: "#fff", minHeight: 800 }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        {data.business.logo && <img src={data.business.logo} alt="Logo" style={{ maxHeight: 50, marginBottom: 8 }} />}
        <h1 style={{ fontSize: 28, fontWeight: 400, margin: "0 0 4px", letterSpacing: 4, textTransform: "uppercase", color: "#333" }}>Invoice</h1>
        <p style={{ fontSize: 12, color: "#64748B" }}>#{data.invoiceNumber}</p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 40, fontSize: 13 }}>
        <div>
          <p style={{ fontWeight: 600, margin: "0 0 4px", color: "#111" }}>{data.business.companyName}</p>
          <p style={{ color: "#666", margin: "2px 0", whiteSpace: "pre-line" }}>{data.business.address}</p>
          {data.business.phone && <p style={{ color: "#666", margin: "2px 0" }}>{data.business.phone}</p>}
          {data.business.email && <p style={{ color: "#666", margin: "2px 0" }}>{data.business.email}</p>}
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontWeight: 600, margin: "0 0 4px", color: "#111" }}>{data.client.name || "Client"}</p>
          <p style={{ color: "#666", margin: "2px 0", whiteSpace: "pre-line" }}>{data.client.address}</p>
          {data.client.email && <p style={{ color: "#666", margin: "2px 0" }}>{data.client.email}</p>}
        </div>
      </div>

      <div style={{ display: "flex", gap: 30, marginBottom: 30, fontSize: 12, color: "#666" }}>
        <span>Date: {formatDate(data.date)}</span>
        <span>Due: {formatDate(data.dueDate)}</span>
        {data.paymentTerms && <span>Terms: {data.paymentTerms}</span>}
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 30 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #333" }}>
            <th style={{ padding: "8px 0", textAlign: "left", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "#333" }}>Description</th>
            <th style={{ padding: "8px 0", textAlign: "center", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "#333", width: 60 }}>Qty</th>
            <th style={{ padding: "8px 0", textAlign: "right", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "#333", width: 90 }}>Price</th>
            <th style={{ padding: "8px 0", textAlign: "right", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "#333", width: 90 }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px 0", fontSize: 13, color: "#333" }}>{item.description || "—"}</td>
              <td style={{ padding: "10px 0", fontSize: 13, textAlign: "center", color: "#333" }}>{item.quantity}</td>
              <td style={{ padding: "10px 0", fontSize: 13, textAlign: "right", color: "#333" }}>{fc(item.unitPrice)}</td>
              <td style={{ padding: "10px 0", fontSize: 13, textAlign: "right", color: "#333" }}>{fc(item.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: 240 }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13, color: "#666" }}>
            <span>Subtotal</span><span>{fc(subtotal)}</span>
          </div>
          {data.taxRate > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13, color: "#666" }}>
              <span>Tax ({data.taxRate}%)</span><span>{fc(tax)}</span>
            </div>
          )}
          {discount > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13, color: "#999" }}>
              <span>Discount</span><span>-{fc(discount)}</span>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 16, fontWeight: 600, borderTop: "1px solid #333", marginTop: 8, color: "#111" }}>
            <span>Total</span><span>{fc(total)}</span>
          </div>
        </div>
      </div>

      {data.notes && (
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid #eee" }}>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "#64748B", margin: "0 0 6px" }}>Notes</p>
          <p style={{ fontSize: 12, color: "#666", margin: 0, whiteSpace: "pre-line", lineHeight: 1.6 }}>{data.notes}</p>
        </div>
      )}
    </div>
  );
}
