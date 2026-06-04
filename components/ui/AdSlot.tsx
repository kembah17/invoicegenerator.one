export default function AdSlot({ slot }: { slot: string }) {
  return (
    <div className="ad-slot ad-slot-container" data-ad-slot={slot}>
      <div
        style={{
          background: "var(--color-surface-alt)",
          border: "1px dashed var(--color-border)",
          borderRadius: 8,
          padding: 16,
          textAlign: "center",
          fontSize: 14,
          color: "var(--color-text-muted)",
        }}
      >
        Advertisement
      </div>
    </div>
  );
}
