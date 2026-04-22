"use client";
import { EstimateData } from "@/lib/types";
import { formatCurrency } from "@/lib/currency";
import { calculateSubtotal, calculateTax, calculateDiscount, calculateTotal, formatDate } from "@/lib/utils";

interface Props {
  data: EstimateData;
}

export default function EstimatePreview({ data }: Props) {
  const subtotal = calculateSubtotal(data.items);
  const tax = calculateTax(subtotal, data.taxRate);
  const discount = calculateDiscount(subtotal, data.discountType, data.discountValue);
  const total = calculateTotal(subtotal, tax, discount);
  const fc = (amount: number) => formatCurrency(amount, data.currency);

  if (data.template === "modern") return <ModernTemplate data={data} subtotal={subtotal} tax={tax} discount={discount} total={total} fc={fc} />;
  return <ProfessionalTemplate data={data} subtotal={subtotal} tax={tax} discount={discount} total={total} fc={fc} />;
}

interface TemplateProps {
  data: EstimateData;
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
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 40, borderBottom: "3px solid #0284C7", paddingBottom: 20 }}>
        <div>
          {data.business.logo && <img src={data.business.logo} alt="Logo" style={{ maxHeight: 60, marginBottom: 8 }} />}
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: "#111" }}>{data.business.companyName || "Your Company"}</h2>
          <p style={{ fontSize: 12, color: "#555", margin: "4px 0", whiteSpace: "pre-line" }}>{data.business.address}</p>
          {data.business.phone && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.business.phone}</p>}
          {data.business.email && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.business.email}</p>}
        </div>
        <div style={{ textAlign: "right" }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#0284C7", margin: 0 }}>ESTIMATE</h1>
          <p style={{ fontSize: 13, color: "#555", margin: "4px 0" }}>#{data.quoteNumber}</p>
          <p style={{ fontSize: 13, color: "#555", margin: "2px 0" }}>Date: {formatDate(data.date)}</p>
          <p style={{ fontSize: 13, color: "#555", margin: "2px 0" }}>Valid Until: {formatDate(data.validUntil)}</p>
        </div>
      </div>

      {/* Prepared For */}
      <div style={{ marginBottom: 30, background: "#f8fafc", padding: 16, borderRadius: 6 }}>
        <h3 style={{ fontSize: 11, fontWeight: 700, color: "#0284C7", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>Prepared For</h3>
        <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 4px", color: "#111" }}>{data.client.name || "Client Name"}</p>
        <p style={{ fontSize: 12, color: "#555", margin: "2px 0", whiteSpace: "pre-line" }}>{data.client.address}</p>
        {data.client.email && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.client.email}</p>}
      </div>

      {/* Items Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
        <thead>
          <tr style={{ background: "#0284C7" }}>
            <th style={{ padding: "10px 12px", textAlign: "left", color: "#fff", fontSize: 12, fontWeight: 600 }}>Description</th>
            <th style={{ padding: "10px 12px", textAlign: "center", color: "#fff", fontSize: 12, fontWeight: 600, width: 70 }}>Qty</th>
            <th style={{ padding: "10px 12px", textAlign: "right", color: "#fff", fontSize: 12, fontWeight: 600, width: 100 }}>Rate</th>
            <th style={{ padding: "10px 12px", textAlign: "right", color: "#fff", fontSize: 12, fontWeight: 600, width: 100 }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #e5e7eb", background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
              <td style={{ padding: "10px 12px", fontSize: 13, color: "#333" }}>{item.description || "—"}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "center", color: "#333" }}>{item.quantity}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "right", color: "#333" }}>{fc(item.unitPrice)}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "right", fontWeight: 500, color: "#333" }}>{fc(item.amount)}</td>
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
              <span>Discount</span><span>-{fc(discount)}</span>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: 16, fontWeight: 700, borderTop: "2px solid #0284C7", marginTop: 8, color: "#111" }}>
            <span>Estimated Total</span><span>{fc(total)}</span>
          </div>
        </div>
      </div>

      {/* Terms */}
      {data.terms && (
        <div style={{ marginTop: 30, padding: 16, background: "#f8fafc", borderRadius: 6, borderLeft: "3px solid #0284C7" }}>
          <h3 style={{ fontSize: 12, fontWeight: 700, color: "#0284C7", margin: "0 0 6px" }}>Terms & Conditions</h3>
          <p style={{ fontSize: 12, color: "#555", margin: 0, whiteSpace: "pre-line", lineHeight: 1.6 }}>{data.terms}</p>
        </div>
      )}

      {/* Accept/Decline */}
      <div style={{ marginTop: 40, borderTop: "1px solid #e5e7eb", paddingTop: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 16 }}>Acceptance</h3>
        <div style={{ display: "flex", gap: 40 }}>
          <div style={{ flex: 1 }}>
            <div style={{ borderBottom: "1px solid #333", marginBottom: 4, height: 30 }} />
            <p style={{ fontSize: 11, color: "#888", margin: 0 }}>Client Signature</p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ borderBottom: "1px solid #333", marginBottom: 4, height: 30 }} />
            <p style={{ fontSize: 11, color: "#888", margin: 0 }}>Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModernTemplate({ data, subtotal, tax, discount, total, fc }: TemplateProps) {
  return (
    <div style={{ padding: 40, fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1a1a1a", background: "#fff", minHeight: 800 }}>
      {/* Header with gradient */}
      <div style={{ background: "linear-gradient(135deg, #0284C7, #06b6d4)", borderRadius: 12, padding: 30, marginBottom: 30, color: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            {data.business.logo && <img src={data.business.logo} alt="Logo" style={{ maxHeight: 50, marginBottom: 8, borderRadius: 4 }} />}
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{data.business.companyName || "Your Company"}</h2>
            <p style={{ fontSize: 12, opacity: 0.9, margin: "4px 0", whiteSpace: "pre-line" }}>{data.business.address}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0, letterSpacing: 2 }}>ESTIMATE</h1>
            <p style={{ fontSize: 14, opacity: 0.9, margin: "4px 0" }}>#{data.quoteNumber}</p>
          </div>
        </div>
      </div>

      {/* Info Row */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 30, gap: 20 }}>
        <div style={{ flex: 1, background: "#f0f9ff", padding: 16, borderRadius: 8 }}>
          <h3 style={{ fontSize: 11, fontWeight: 700, color: "#0284C7", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>Prepared For</h3>
          <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 4px", color: "#111" }}>{data.client.name || "Client Name"}</p>
          <p style={{ fontSize: 12, color: "#555", margin: "2px 0", whiteSpace: "pre-line" }}>{data.client.address}</p>
          {data.client.email && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.client.email}</p>}
        </div>
        <div style={{ flex: 1, background: "#f0f9ff", padding: 16, borderRadius: 8 }}>
          <h3 style={{ fontSize: 11, fontWeight: 700, color: "#0284C7", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>Details</h3>
          <p style={{ fontSize: 12, color: "#555", margin: "4px 0" }}><strong>Date:</strong> {formatDate(data.date)}</p>
          <p style={{ fontSize: 12, color: "#555", margin: "4px 0" }}><strong>Valid Until:</strong> {formatDate(data.validUntil)}</p>
        </div>
      </div>

      {/* Items */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
        <thead>
          <tr>
            <th style={{ padding: "12px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#0284C7", borderBottom: "2px solid #0284C7" }}>Description</th>
            <th style={{ padding: "12px", textAlign: "center", fontSize: 12, fontWeight: 700, color: "#0284C7", borderBottom: "2px solid #0284C7", width: 70 }}>Qty</th>
            <th style={{ padding: "12px", textAlign: "right", fontSize: 12, fontWeight: 700, color: "#0284C7", borderBottom: "2px solid #0284C7", width: 100 }}>Rate</th>
            <th style={{ padding: "12px", textAlign: "right", fontSize: 12, fontWeight: 700, color: "#0284C7", borderBottom: "2px solid #0284C7", width: 100 }}>Amount</th>
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
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", fontSize: 18, fontWeight: 700, borderTop: "2px solid #0284C7", marginTop: 8, color: "#0284C7" }}>
            <span>Total</span><span>{fc(total)}</span>
          </div>
        </div>
      </div>

      {data.terms && (
        <div style={{ marginTop: 30, padding: 16, background: "#f8fafc", borderRadius: 8, borderLeft: "4px solid #06b6d4" }}>
          <h3 style={{ fontSize: 12, fontWeight: 700, color: "#0284C7", margin: "0 0 6px" }}>Terms & Conditions</h3>
          <p style={{ fontSize: 12, color: "#555", margin: 0, whiteSpace: "pre-line", lineHeight: 1.6 }}>{data.terms}</p>
        </div>
      )}

      {/* Accept/Decline */}
      <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
        <div style={{ flex: 1, padding: 16, border: "2px solid #059669", borderRadius: 8, textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#059669", margin: "0 0 12px" }}>ACCEPT</p>
          <div style={{ borderBottom: "1px solid #ccc", marginBottom: 4, height: 24 }} />
          <p style={{ fontSize: 10, color: "#888", margin: 0 }}>Signature & Date</p>
        </div>
        <div style={{ flex: 1, padding: 16, border: "2px solid #dc2626", borderRadius: 8, textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#dc2626", margin: "0 0 12px" }}>DECLINE</p>
          <div style={{ borderBottom: "1px solid #ccc", marginBottom: 4, height: 24 }} />
          <p style={{ fontSize: 10, color: "#888", margin: 0 }}>Signature & Date</p>
        </div>
      </div>
    </div>
  );
}
