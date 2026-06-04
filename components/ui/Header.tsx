"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/invoice-generator/", label: "Invoice" },
  { href: "/receipt-generator/", label: "Receipt" },
  { href: "/estimate-generator/", label: "Estimate" },
  { href: "/about/", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-sm)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            color: "var(--color-text)",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="var(--color-primary)" />
            <path d="M8 10h16M8 16h12M8 22h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 18l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontWeight: 700, fontSize: 18 }}>invoicegenerator</span>
          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: 18 }}>.one</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ alignItems: "center", gap: 4 }} className="hidden md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 12px",
                borderRadius: 6,
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div style={{ alignItems: "center", gap: 8 }} className="flex md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "var(--color-text)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden"
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "8px 16px",
            background: "var(--color-surface)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "10px 12px",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 6,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
