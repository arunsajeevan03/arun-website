export default function SectionDivider({ accent = false }: { accent?: boolean }) {
  return (
    <div className="container">
      <div
        className={`h-px w-full ${
          accent
            ? "bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            : "bg-gradient-to-r from-transparent via-white/5 to-transparent"
        }`}
      />
    </div>
  );
}
