import React from 'react';

/**
 * DiagramRenderer — Renders a visual SVG diagram for a quiz question.
 * Supported diagram types: 'compass', 'seating-circle', 'venn', 'linear-seating'
 *
 * Usage: add a `diagram` property to any question object:
 *   diagram: { type: 'compass', data: { moves: ['N', 'E', 'E', 'S'] } }
 */
const DiagramRenderer = ({ diagram }) => {
    if (!diagram || !diagram.type) return null;

    switch (diagram.type) {

        // --- COMPASS DIRECTION DIAGRAM ---
        case 'compass':
            return (
                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-6 flex flex-col items-center gap-4">
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Direction Diagram</div>
                    <svg width="160" height="160" viewBox="0 0 160 160" className="drop-shadow-sm">
                        {/* Compass circle */}
                        <circle cx="80" cy="80" r="70" fill="white" stroke="#c7d2fe" strokeWidth="1.5" />
                        <circle cx="80" cy="80" r="4" fill="#4f46e5" />

                        {/* Cardinal directions */}
                        <text x="80" y="18" textAnchor="middle" className="font-black" fill="#4f46e5" fontSize="13" fontWeight="700">N</text>
                        <text x="80" y="150" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">S</text>
                        <text x="148" y="85" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">E</text>
                        <text x="12" y="85" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">W</text>

                        {/* Cross hairs */}
                        <line x1="80" y1="24" x2="80" y2="136" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 3" />
                        <line x1="24" y1="80" x2="136" y2="80" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 3" />

                        {/* Arrow pointing North by default */}
                        <polygon points="80,30 74,58 80,52 86,58" fill="#4f46e5" opacity="0.9" />
                    </svg>
                    {diagram.data?.label && (
                        <div className="text-sm text-indigo-600 font-medium text-center">{diagram.data.label}</div>
                    )}
                </div>
            );

        // --- CIRCULAR SEATING DIAGRAM ---
        case 'seating-circle': {
            const seats = diagram.data?.seats || [];
            const count = seats.length || 6;
            const radius = 65;
            const cx = 90;
            const cy = 90;
            const angleStep = (2 * Math.PI) / count;

            return (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-6 flex flex-col items-center gap-4">
                    <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Seating Arrangement</div>
                    <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-sm">
                        <circle cx={cx} cy={cy} r={radius} fill="white" stroke="#a7f3d0" strokeWidth="2" strokeDasharray="6 4" />
                        <circle cx={cx} cy={cy} r="4" fill="#059669" />
                        <text x={cx} y={cy + 4} textAnchor="middle" fill="#6b7280" fontSize="9">Centre</text>

                        {Array.from({ length: count }).map((_, i) => {
                            const angle = angleStep * i - Math.PI / 2;
                            const x = cx + radius * Math.cos(angle);
                            const y = cy + radius * Math.sin(angle);
                            const label = seats[i] || String.fromCharCode(65 + i);
                            const isHighlighted = seats[i] && seats[i].startsWith('*');
                            const displayLabel = isHighlighted ? seats[i].slice(1) : label;
                            return (
                                <g key={i}>
                                    <circle
                                        cx={x} cy={y} r="16"
                                        fill={isHighlighted ? '#d1fae5' : '#f8fafc'}
                                        stroke={isHighlighted ? '#059669' : '#cbd5e1'}
                                        strokeWidth={isHighlighted ? 2 : 1.5}
                                    />
                                    <text x={x} y={y + 4} textAnchor="middle" fill={isHighlighted ? '#065f46' : '#374151'} fontSize="10" fontWeight="600">
                                        {displayLabel}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>
                    {diagram.data?.label && (
                        <div className="text-sm text-emerald-600 font-medium text-center">{diagram.data.label}</div>
                    )}
                </div>
            );
        }

        // --- LINEAR SEATING DIAGRAM ---
        case 'linear-seating': {
            const seats = diagram.data?.seats || [];
            const cellW = 52;
            const cellH = 48;
            const totalW = Math.max(seats.length * cellW + 40, 200);

            return (
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6 mb-6 flex flex-col items-center gap-4 overflow-x-auto">
                    <div className="text-xs font-bold text-sky-500 uppercase tracking-widest">Linear Arrangement</div>
                    <svg width={totalW} height={cellH + 40} viewBox={`0 0 ${totalW} ${cellH + 40}`} className="drop-shadow-sm">
                        {/* Direction arrows */}
                        <text x="8" y={cellH / 2 + 8} fill="#94a3b8" fontSize="10">←</text>
                        <text x={totalW - 20} y={cellH / 2 + 8} fill="#94a3b8" fontSize="10">→</text>
                        {seats.map((seat, i) => {
                            const x = 20 + i * cellW;
                            const isHighlighted = seat && seat.startsWith('*');
                            const label = isHighlighted ? seat.slice(1) : seat;
                            return (
                                <g key={i}>
                                    <rect
                                        x={x} y={4} width={cellW - 4} height={cellH}
                                        rx="8"
                                        fill={isHighlighted ? '#e0f2fe' : 'white'}
                                        stroke={isHighlighted ? '#0284c7' : '#cbd5e1'}
                                        strokeWidth={isHighlighted ? 2 : 1.5}
                                    />
                                    <text x={x + (cellW - 4) / 2} y={28} textAnchor="middle" fill={isHighlighted ? '#0c4a6e' : '#374151'} fontSize="12" fontWeight="600">
                                        {label || '?'}
                                    </text>
                                    <text x={x + (cellW - 4) / 2} y={cellH - 4} textAnchor="middle" fill="#94a3b8" fontSize="9">
                                        {i + 1}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>
                    {diagram.data?.label && (
                        <div className="text-sm text-sky-600 font-medium text-center">{diagram.data.label}</div>
                    )}
                </div>
            );
        }

        // --- VENN DIAGRAM (2-circle) ---
        case 'venn': {
            const { setA = 'A', setB = 'B', intersect = '∩', label } = diagram.data || {};
            return (
                <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 mb-6 flex flex-col items-center gap-4">
                    <div className="text-xs font-bold text-violet-500 uppercase tracking-widest">Venn Diagram</div>
                    <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-sm">
                        <circle cx="75" cy="60" r="50" fill="#ede9fe" fillOpacity="0.7" stroke="#8b5cf6" strokeWidth="2" />
                        <circle cx="125" cy="60" r="50" fill="#ddd6fe" fillOpacity="0.5" stroke="#7c3aed" strokeWidth="2" />
                        {/* Labels */}
                        <text x="48" y="64" textAnchor="middle" fill="#5b21b6" fontSize="12" fontWeight="700">{setA}</text>
                        <text x="152" y="64" textAnchor="middle" fill="#5b21b6" fontSize="12" fontWeight="700">{setB}</text>
                        <text x="100" y="64" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="800">{intersect}</text>
                    </svg>
                    {label && <div className="text-sm text-violet-600 font-medium text-center">{label}</div>}
                </div>
            );
        }

        default:
            return null;
    }
};

export default DiagramRenderer;
