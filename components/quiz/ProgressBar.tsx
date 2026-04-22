"use client";

interface ProgressBarProps {
  step: number;
  total?: number;
}

export default function ProgressBar({ step, total = 5 }: ProgressBarProps) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-brand-muted uppercase tracking-widest font-semibold">
          Etapa {step} de {total}
        </span>
        <span className="text-xs text-brand-muted font-semibold">{pct}%</span>
      </div>
      <div className="h-1 w-full bg-brand-border rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-red rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
