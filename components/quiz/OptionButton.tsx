"use client";

interface OptionButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function OptionButton({ label, onClick, disabled }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full text-left px-5 py-4 rounded-xl
        bg-brand-card border border-brand-border
        text-brand-white font-bold leading-snug
        flex items-center
        transition-all duration-200
        hover:border-brand-red hover:bg-[#2a1818]
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-bg
        animate-slide-up
      "
    >
      <span className="text-xs sm:text-sm uppercase tracking-wide">{label}</span>
    </button>
  );
}
