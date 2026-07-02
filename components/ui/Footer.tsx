import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-footer-bg)",
        color: "var(--color-footer-text)",
        marginTop: 48,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 16px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            marginBottom: 32,
          }}
        >
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: "var(--color-footer-text)", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="var(--color-primary)" />
                <path d="M8 10h16M8 16h12M8 22h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 18l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              invoicegenerator.one
            </h3>
            <p style={{ fontSize: 14, color: "var(--color-footer-muted)", lineHeight: 1.6 }}>
              Free online invoice, receipt, and estimate generator. Create professional documents and download as PDF — no signup required.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: "var(--color-footer-text)" }}>Tools</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/invoice-generator/", icon: "📄", label: "Invoice Generator" },
                { href: "/receipt-generator/", icon: "🧾", label: "Receipt Generator" },
                { href: "/estimate-generator/", icon: "📋", label: "Estimate Generator" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: 8 }}>
                  <Link
                    href={link.href}
                    style={{ color: "var(--color-footer-muted)", textDecoration: "none", fontSize: 14 }}
                  >
                    {link.icon} {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: "var(--color-footer-text)" }}>Company</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/about/", label: "About" },
                { href: "/privacy/", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: 8 }}>
                  <Link
                    href={link.href}
                    style={{ color: "var(--color-footer-muted)", textDecoration: "none", fontSize: 14 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
                {/* More Free Tools */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '2rem', paddingTop: '1.5rem' }}>
          <h4 style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-footer-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>More Free Tools</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem' }}>
            <a href="https://pdftools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📄 PDF Tools</a>
            <a href="https://pictools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🖼️ Image Tools</a>
            <a href="https://percentcalc.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔢 Percentage Calculator</a>
            <a href="https://developertools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>💻 Developer Tools</a>
            <a href="https://wordcount.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📝 Word Counter</a>
            <a href="https://texttools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔤 Text Tools</a>
            <a href="https://socialmediatools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📱 Social Media Tools</a>
            <a href="https://randomize.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🎲 Random Generator</a>
            <a href="https://qrcodegenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📲 QR Code Generator</a>
            <a href="https://gpacalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🎓 GPA Calculator</a>
            <a href="https://caloriecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔥 Calorie Calculator</a>
            <a href="https://passwordgenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔐 Password Generator</a>
            <a href="https://datecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📅 Date Calculator</a>
          </div>
        </div>

                {/* MyHustle Search Widget */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', borderRadius: '12px', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <a href="https://myhustle.space" target="_blank" rel="noopener" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 700 }}>🏢 MyHustle</a>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', margin: '4px 0 0' }}>Find businesses across Nigeria</p>
            </div>
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); const q = (e.currentTarget.elements.namedItem("mh-q") as HTMLInputElement)?.value?.trim(); if (q) window.open("https://myhustle.space/search?q=" + encodeURIComponent(q), "_blank"); }}
              style={{ display: 'flex', gap: '8px' }}
            >
              <input name="mh-q" type="text" placeholder="Search businesses..." style={{ flex: 1, padding: '10px 14px', border: 'none', borderRadius: '8px', fontSize: '14px', outline: 'none', background: 'white', color: '#1f2937' }} />
              <button type="submit" style={{ background: '#fbbf24', color: '#1f2937', border: 'none', borderRadius: '8px', padding: '10px 16px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Search</button>
            </form>
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <a href="https://myhustle.space/list-your-business" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', textDecoration: 'none' }}>List your business free →</a>
            </div>
          </div>
        </div>

        {/* Nigerian Business Directory */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '1.5rem', paddingTop: '1rem' }}>
          <a href="https://myhustle.space" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Discover Nigerian businesses on <span style={{ color: 'var(--color-footer-link)', fontWeight: 500 }}>MyHustle.space</span> &mdash; Nigeria&apos;s free business directory
          </a>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--color-footer-border)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p suppressHydrationWarning style={{ fontSize: 13, color: "var(--color-footer-muted)" }}>
            &copy; {new Date().getFullYear()} invoicegenerator.one. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "var(--color-footer-muted)" }}>
            100% client-side processing &bull; Your data never leaves your browser
          </p>
        </div>
      </div>
    </footer>
  );
}
