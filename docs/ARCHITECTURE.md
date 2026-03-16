# Suncube Commerce Edge - Monorepo Architecture

## 1. Overview
The Suncube Commerce Edge project is a multi-app monorepo designed for high-performance educational tools. It utilizes a workspace-based architecture to share configurations and components while maintaining independent deployment capabilities for each subject.

## 2. Technical Stack
- **Monorepo Manager**: `pnpm` workspaces.
- **Frontend Framework**: React 19.x (utilizing concurrent rendering and native metadata).
- **Build Tool**: Vite 6.x (optimized for fast HMR and lightweight builds).
- **Language**: TypeScript 5.8 (Strict mode).
- **Styling**: Tailwind CSS 4.x (CSS-first engine).
- **Typography**: Plus Jakarta Sans.

## 3. Directory Structure
```text
/
├── apps/
│   ├── accounts/        # @suncube/accounts
│   ├── economics/       # @suncube/economics
│   ├── bst/             # @suncube/bst
│   ├── english/         # @suncube/english
│   ├── phys-ed/         # @suncube/phys-ed
│   ├── entrance-pro/    # @suncube/entrance-pro
│   └── commerce-hub/    # @suncube/commerce-hub (Central Router)
├── packages/
│   ├── ui/              # @suncube/ui (Shared Design System)
│   ├── config/          # Shared TS/Vite/ESLint configs
│   └── shared-logic/    # Common utilities and "Hacker Hack" schemas
├── docs/                # Architectural & implementation documentation
└── pnpm-workspace.yaml  # Workspace definitions
```

## 4. Design System (@suncube/ui)
The design system follows a unified visual DNA:
- **Primary Palette**: 
    - Slate-950 (Backgrounds/Text)
    - Amber-400 (Accents/Highlights)
    - Emerald-500 (Success/Progress)
- **Extracted Components**:
    - `HackerCard`: Standardized short-cut/mnemonic display.
    - `DangerZone`: Contextual alert for high-risk exam mistakes.
    - `WritingBox`: Specialized text inputs for descriptive answers.

## 5. Performance Targets
- **Lighthouse Score**: 90+ across all metrics.
- **Target Profile**: Budget Android devices (Navi Mumbai commute profile).
- **Optimizations**: Minimal JS footprint, aggressive code-splitting via Vite, and CSS-only interactions where possible.
