import Link from "next/link";
import { ALL_TOOLS } from "@/lib/tools-data";

export default function RelatedTools({ current }: { current: string }) {
  const filtered = ALL_TOOLS.filter((t) => t.href !== current);
  if (filtered.length === 0) return null;

  return (
    <div style={{ marginTop: 32 }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "var(--color-text)" }}>
        Related Tools
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 16,
        }}
      >
        {filtered.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            style={{
              display: "block",
              padding: 20,
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              textDecoration: "none",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-primary)", marginBottom: 4 }}>
              {tool.name}
            </h3>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
