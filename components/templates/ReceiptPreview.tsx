"use client";
import { ReceiptData } from "@/lib/types";
import { formatCurrency } from "@/lib/currency";
import { calculateSubtotal, formatDate, getPaymentMethodLabel } from "@/lib/utils";

interface Props {
  data: ReceiptData;
}

export default function ReceiptPreview({ data }: Props) {
  const total = calculateSubtotal(data.items);
  const fc = (amount: number) => formatCurrency(amount, data.currency);

  if (data.template === "compact") return <CompactTemplate data={data} total={total} fc={fc} />;
  return <StandardTemplate data={data} total={total} fc={fc} />;
}

interface TemplateProps {
  data: ReceiptData;
  total: number;
  fc: (n: number) => string;
}

function StandardTemplate({ data, total, fc }: TemplateProps) {
  return (
    <div style={{ padding: 40, fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1a1a1a", background: "#fff", minHeight: 600 }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 30, borderBottom: "2px solid #0284C7", paddingBottom: 20 }}>
        {data.business.logo && <img src={data.business.logo} alt="Logo" style={{ maxHeight: 60, marginBottom: 8 }} />}
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px", color: "#111" }}>{data.business.companyName || "Business Name"}</h2>
        <p style={{ fontSize: 12, color: "#555", margin: "2px 0", whiteSpace: "pre-line" }}>{data.business.address}</p>
        {data.business.phone && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.business.phone}</p>}
        {data.business.email && <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>{data.business.email}</p>}
      </div>

      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0284C7", margin: "0 0 8px" }}>RECEIPT</h1>
        <p style={{ fontSize: 13, color: "#555" }}>#{data.receiptNumber}</p>
        <p style={{ fontSize: 13, color: "#555" }}>Date: {formatDate(data.date)}</p>
      </div>

      {/* Customer */}
      {data.customerName && (
        <div style={{ marginBottom: 20, padding: 12, background: "#f8fafc", borderRadius: 6 }}>
          <p style={{ fontSize: 12, color: "#888", margin: "0 0 4px" }}>Received from:</p>
          <p style={{ fontSize: 14, fontWeight: 600, margin: 0, color: "#111" }}>{data.customerName}</p>
        </div>
      )}

      {/* Items */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20 }}>
        <thead>
          <tr style={{ background: "#0284C7" }}>
            <th style={{ padding: "10px 12px", textAlign: "left", color: "#fff", fontSize: 12, fontWeight: 600 }}>Item / Service</th>
            <th style={{ padding: "10px 12px", textAlign: "center", color: "#fff", fontSize: 12, fontWeight: 600, width: 60 }}>Qty</th>
            <th style={{ padding: "10px 12px", textAlign: "right", color: "#fff", fontSize: 12, fontWeight: 600, width: 100 }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #e5e7eb", background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
              <td style={{ padding: "10px 12px", fontSize: 13, color: "#333" }}>{item.description || "—"}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "center", color: "#333" }}>{item.quantity}</td>
              <td style={{ padding: "10px 12px", fontSize: 13, textAlign: "right", fontWeight: 500, color: "#333" }}>{fc(item.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total & Payment */}
      <div style={{ borderTop: "2px solid #0284C7", paddingTop: 16, marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 18, fontWeight: 700, color: "#111" }}>
          <span>Total</span><span>{fc(total)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13, color: "#555" }}>
          <span>Payment Method</span><span>{getPaymentMethodLabel(data.paymentMethod)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13, color: "#555" }}>
          <span>Amount Paid</span><span>{fc(data.amountPaid || total)}</span>
        </div>
        {data.paymentMethod === "cash" && data.changeGiven > 0 && (
          <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13, color: "#555" }}>
            <span>Change</span><span>{fc(data.changeGiven)}</span>
          </div>
        )}
      </div>

      {/* Thank you */}
      <div style={{ textAlign: "center", padding: 20, background: "#f0f9ff", borderRadius: 8, marginTop: 20 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0284C7", margin: 0 }}>
          {data.thankYouMessage || "Thank you for your business!"}
        </p>
      </div>
    </div>
  );
}

function CompactTemplate({ data, total, fc }: TemplateProps) {
  return (
    <div style={{ padding: 24, fontFamily: "'Courier New', monospace", color: "#1a1a1a", background: "#fff", minHeight: 400, maxWidth: 320, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 16, borderBottom: "1px dashed #999", paddingBottom: 12 }}>
        {data.business.logo && <img src={data.business.logo} alt="Logo" style={{ maxHeight: 40, marginBottom: 6 }} />}
        <h2 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 2px", color: "#111" }}>{data.business.companyName || "Business"}</h2>
        <p style={{ fontSize: 10, color: "#666", margin: "2px 0", whiteSpace: "pre-line" }}>{data.business.address}</p>
        {data.business.phone && <p style={{ fontSize: 10, color: "#666", margin: "1px 0" }}>{data.business.phone}</p>}
      </div>

      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <p style={{ fontSize: 14, fontWeight: 700, margin: "0 0 4px", color: "#111" }}>RECEIPT</p>
        <p style={{ fontSize: 10, color: "#666" }}>#{data.receiptNumber} | {formatDate(data.date)}</p>
      </div>

      {data.customerName && (
        <p style={{ fontSize: 11, color: "#555", marginBottom: 8 }}>Customer: {data.customerName}</p>
      )}

      <div style={{ borderTop: "1px dashed #999", borderBottom: "1px dashed #999", padding: "8px 0", marginBottom: 8 }}>
        {data.items.map((item) => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0", fontSize: 11, color: "#333" }}>
            <span>{item.description || "Item"} x{item.quantity}</span>
            <span>{fc(item.amount)}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14, fontWeight: 700, color: "#111" }}>
        <span>TOTAL</span><span>{fc(total)}</span>
      </div>
      <div style={{ fontSize: 10, color: "#666", marginBottom: 4 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Paid ({getPaymentMethodLabel(data.paymentMethod)})</span><span>{fc(data.amountPaid || total)}</span>
        </div>
        {data.paymentMethod === "cash" && data.changeGiven > 0 && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Change</span><span>{fc(data.changeGiven)}</span>
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: 16, borderTop: "1px dashed #999", paddingTop: 12 }}>
        <p style={{ fontSize: 11, color: "#555", margin: 0 }}>
          {data.thankYouMessage || "Thank you!"}
        </p>
      </div>
    </div>
  );
}
