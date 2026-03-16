import React from 'react';

interface HackerCardProps {
  label: string;
  description: string;
  icon?: React.ReactNode;
}

export function HackerCard({ label, description, icon }: HackerCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-brand-amber/20 shadow-sm transition-all hover:shadow-md hover:border-brand-amber/40">
      <div className="flex items-center gap-2 mb-2">
        {icon && <div className="text-brand-amber">{icon}</div>}
        <p className="text-brand-slate font-black text-sm uppercase tracking-tight">{label}</p>
      </div>
      <p className="text-slate-600 text-sm font-medium leading-relaxed">{description}</p>
    </div>
  );
}
