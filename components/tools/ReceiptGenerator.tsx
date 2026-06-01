"use client";
import { useState, useCallback, useEffect } from "react";
import { ReceiptData, ReceiptTemplate, Currency, PaymentMethod, LineItem } from "@/lib/types";
import { CURRENCIES } from "@/lib/currency";
import { generateId, generateReceiptNumber, getTodayDate, createEmptyLineItem, calculateSubtotal } from "@/lib/utils";
import { formatCurrency } from "@/lib/currency";
import { generatePDF, printElement } from "@/lib/pdf";
import ReceiptPreview from "@/components/templates/ReceiptPreview";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  border: "1px solid var(--color-border)",
  borderRadius: 6,
  fontSize: 14,
  background: "var(--color-surface)",
  color: "var(--color-text)",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "var(--color-text-secondary)",
  marginBottom: 4,
};

const sectionStyle: React.CSSProperties = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: 8,
  padding: 20,
  marginBottom: 16,
  boxShadow: "var(--shadow-sm)",
};

const btnPrimary: React.CSSProperties = {
  padding: "10px 20px",
  background: "var(--color-primary)",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};

const btnSecondary: React.CSSProperties = {
  padding: "10px 20px",
  background: "var(--color-surface)",
  color: "var(--color-text)",
  border: "1px solid var(--color-border)",
  borderRadius: 6,
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};

export default function ReceiptGenerator() {
  const [data, setData] = useState<ReceiptData>({
    business: { companyName: "", address: "", phone: "", email: "", logo: null },
    receiptNumber: "",
    date: "",
    customerName: "",
    items: [{ id: "initial-1", description: "", quantity: 1, unitPrice: 0, amount: 0 }],
    paymentMethod: "cash",
    amountPaid: 0,
    changeGiven: 0,
    thankYouMessage: "Thank you for your business!",
    currency: "USD",
    template: "standard",
  });
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setData(prev => ({
      ...prev,
      receiptNumber: prev.receiptNumber || generateReceiptNumber(),
      date: prev.date || getTodayDate(),
      items: prev.items.map(item => ({
        ...item,
        id: item.id.startsWith("initial-") ? generateId() : item.id,
      })),
    }));
  }, []);

  const updateBusiness = useCallback((field: string, value: string) => {
    setData(prev => ({ ...prev, business: { ...prev.business, [field]: value } }));
  }, []);

  const updateField = useCallback((field: string, value: string | number) => {
    setData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleLogoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setData(prev => ({ ...prev, business: { ...prev.business, logo: ev.target?.result as string } }));
    };
    reader.readAsDataURL(file);
  }, []);

  const updateItem = useCallback((id: string, field: keyof LineItem, value: string | number) => {
    setData(prev => ({
      ...prev,
      items: prev.items.map(item => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: value };
        if (field === "quantity" || field === "unitPrice") {
          updated.amount = Number(updated.quantity) * Number(updated.unitPrice);
        }
        return updated;
      }),
    }));
  }, []);

  const addItem = useCallback(() => {
    setData(prev => ({ ...prev, items: [...prev.items, createEmptyLineItem()] }));
  }, []);

  const removeItem = useCallback((id: string) => {
    setData(prev => ({
      ...prev,
      items: prev.items.length > 1 ? prev.items.filter(item => item.id !== id) : prev.items,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setData({
      business: { companyName: "", address: "", phone: "", email: "", logo: null },
      receiptNumber: generateReceiptNumber(),
      date: getTodayDate(),
      customerName: "",
      items: [createEmptyLineItem()],
      paymentMethod: "cash",
      amountPaid: 0,
      changeGiven: 0,
      thankYouMessage: "Thank you for your business!",
      currency: "USD",
      template: "standard",
    });
  }, []);

  const handleDownload = useCallback(async () => {
    setDownloading(true);
    try {
      await generatePDF("receipt-preview", `receipt-${data.receiptNumber}`);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setDownloading(false);
    }
  }, [data.receiptNumber]);

  const handlePrint = useCallback(() => {
    printElement("receipt-preview");
  }, []);

  const total = calculateSubtotal(data.items);
  const fc = (n: number) => formatCurrency(n, data.currency);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }} className="lg:!grid-cols-[1fr_1fr]">
      {/* Form Panel */}
      <div className="no-print">
        {/* Settings */}
        <div style={sectionStyle}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "var(--color-text)" }}>Settings</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={labelStyle}>Template</label>
              <select value={data.template} onChange={e => updateField("template", e.target.value as ReceiptTemplate)} style={inputStyle} aria-label="Receipt template">
                <option value="standard">Standard</option>
                <option value="compact">Compact</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Currency</label>
              <select value={data.currency} onChange={e => updateField("currency", e.target.value as Currency)} style={inputStyle} aria-label="Currency">
                {CURRENCIES.map(c => (<option key={c.value} value={c.value}>{c.label}</option>))}
              </select>
            </div>
          </div>
        </div>

        {/* Business Details */}
        <div style={sectionStyle}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "var(--color-text)" }}>Business Details</h3>
          <div style={{ display: "grid", gap: 10 }}>
            <div>
              <label style={labelStyle}>Business Name</label>
              <input style={inputStyle} value={data.business.companyName} onChange={e => updateBusiness("companyName", e.target.value)} placeholder="Business Name" />
            </div>
            <div>
              <label style={labelStyle}>Address</label>
              <textarea style={{ ...inputStyle, minHeight: 60, resize: "vertical" }} value={data.business.address} onChange={e => updateBusiness("address", e.target.value)} placeholder="Business Address" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div>
                <label style={labelStyle}>Phone</label>
                <input style={inputStyle} value={data.business.phone} onChange={e => updateBusiness("phone", e.target.value)} placeholder="Phone" />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input style={inputStyle} type="email" value={data.business.email} onChange={e => updateBusiness("email", e.target.value)} placeholder="Email" />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Logo</label>
              <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ fontSize: 13, color: "var(--color-text-secondary)" }} />
              {data.business.logo && (
                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                  <img src={data.business.logo} alt="Logo" style={{ maxHeight: 40, borderRadius: 4 }} />
                  <button onClick={() => updateBusiness("logo", "")} style={{ fontSize: 12, color: "var(--color-error)", background: "none", border: "none", cursor: "pointer" }}>Remove</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Receipt Details */}
        <div style={sectionStyle}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "var(--color-text)" }}>Receipt Details</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div>
              <label style={labelStyle}>Receipt #</label>
              <input style={inputStyle} value={data.receiptNumber} onChange={e => updateField("receiptNumber", e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Date</label>
              <input style={inputStyle} type="date" value={data.date} onChange={e => updateField("date", e.target.value)} />
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <label style={labelStyle}>Customer Name</label>
            <input style={inputStyle} value={data.customerName} onChange={e => updateField("customerName", e.target.value)} placeholder="Customer Name" />
          </div>
        </div>

        {/* Items */}
        <div style={sectionStyle}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "var(--color-text)" }}>Items / Services</h3>
          {data.items.map((item, idx) => (
            <div key={item.id} style={{ display: "grid", gridTemplateColumns: "1fr 70px 90px 90px 32px", gap: 8, marginBottom: 8, alignItems: "end" }}>
              <div>
                {idx === 0 && <label style={labelStyle}>Description</label>}
                <input style={inputStyle} value={item.description} onChange={e => updateItem(item.id, "description", e.target.value)} placeholder="Item" />
              </div>
              <div>
                {idx === 0 && <label style={labelStyle}>Qty</label>}
                <input style={{ ...inputStyle, textAlign: "center" }} type="number" min="0" step="1" value={item.quantity} onChange={e => updateItem(item.id, "quantity", Number(e.target.value))} />
              </div>
              <div>
                {idx === 0 && <label style={labelStyle}>Price</label>}
                <input style={{ ...inputStyle, textAlign: "right" }} type="number" min="0" step="0.01" value={item.unitPrice} onChange={e => updateItem(item.id, "unitPrice", Number(e.target.value))} />
              </div>
              <div>
                {idx === 0 && <label style={labelStyle}>Amount</label>}
                <div style={{ ...inputStyle, background: "var(--color-surface-alt)", textAlign: "right", fontWeight: 600 }}>{fc(item.amount)}</div>
              </div>
              <button onClick={() => removeItem(item.id)} style={{ padding: 8, background: "none", border: "1px solid var(--color-border)", borderRadius: 6, cursor: "pointer", color: "var(--color-error)", fontSize: 16, lineHeight: 1 }} aria-label="Remove item">&times;</button>
            </div>
          ))}
          <button onClick={addItem} style={{ ...btnSecondary, marginTop: 8, fontSize: 13 }}>+ Add Item</button>
        </div>

        {/* Payment */}
        <div style={sectionStyle}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "var(--color-text)" }}>Payment Details</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div>
              <label style={labelStyle}>Payment Method</label>
              <select value={data.paymentMethod} onChange={e => updateField("paymentMethod", e.target.value as PaymentMethod)} style={inputStyle} aria-label="Payment method">
                <option value="cash">Cash</option>
                <option value="card">Credit/Debit Card</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="mobile_money">Mobile Money</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Amount Paid</label>
              <input style={inputStyle} type="number" min="0" step="0.01" value={data.amountPaid} onChange={e => updateField("amountPaid", Number(e.target.value))} />
            </div>
          </div>
          {data.paymentMethod === "cash" && (
            <div style={{ marginTop: 10 }}>
              <label style={labelStyle}>Change Given</label>
              <input style={inputStyle} type="number" min="0" step="0.01" value={data.changeGiven} onChange={e => updateField("changeGiven", Number(e.target.value))} />
            </div>
          )}
          <div style={{ marginTop: 16, padding: 12, background: "var(--color-surface-alt)", borderRadius: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, fontWeight: 700, color: "var(--color-text)" }}>
              <span>Total</span><span>{fc(total)}</span>
            </div>
          </div>
        </div>

        {/* Thank You */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Thank You Message</label>
          <input style={inputStyle} value={data.thankYouMessage} onChange={e => updateField("thankYouMessage", e.target.value)} placeholder="Thank you for your business!" />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <button onClick={handleDownload} disabled={downloading} style={{ ...btnPrimary, opacity: downloading ? 0.7 : 1 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {downloading ? "Generating..." : "Free PDF Download"}
          </button>
          <button onClick={handlePrint} style={btnSecondary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Print
          </button>
          <button onClick={handleReset} style={btnSecondary}>Clear / Reset</button>
        </div>
      </div>

      {/* Preview Panel */}
      <div>
        <div style={{ position: "sticky", top: 80 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "var(--color-text)" }} className="no-print">Live Preview</h3>
          <div style={{ border: "1px solid var(--color-border)", borderRadius: 8, overflow: "hidden", boxShadow: "var(--shadow-lg)", background: "#fff", maxHeight: "80vh", overflowY: "auto" }}>
            <div id="receipt-preview">
              <ReceiptPreview data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
