'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ALL_TOOLS } from '@/lib/tools-data';

export default function HomeToolGrid() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
      {ALL_TOOLS.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          style={{
            display: 'block',
            backgroundColor: 'var(--color-bg-card, var(--color-surface))',
            border: hoveredSlug === tool.href ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
            borderRadius: 12,
            padding: 24,
            textDecoration: 'none',
            boxShadow: hoveredSlug === tool.href ? 'var(--shadow-lg, 0 10px 25px rgba(0,0,0,0.15))' : 'var(--shadow-card, var(--shadow-sm))',
            transform: hoveredSlug === tool.href ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={() => setHoveredSlug(tool.href)}
          onMouseLeave={() => setHoveredSlug(null)}
        >
          <div style={{ fontSize: 36, marginBottom: 12 }}>
            {tool.icon}
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--color-text)' }}>
            {tool.name}
          </h3>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            {tool.description}
          </p>
          <span style={{ display: 'inline-block', marginTop: 12, fontSize: 14, fontWeight: 600, color: 'var(--color-primary)' }}>
            Use Tool →
          </span>
        </Link>
      ))}
    </div>
  );
}
