# Implementation Plan - Phase 2 to 4

## Phase 2: Shared UI Design System
**Goal**: Transition from independent subject silos to a unified component library.

### 1. Library Initialization
- [ ] Create `packages/ui` with Vite and Tailwind 4.
- [ ] Implement `theme.css` with core color tokens (Slate-950, Amber-400, Emerald-500).

### 2. Component Extraction
- [ ] **HackerCard**: Extract from BST and generalize for all subjects.
- [ ] **DangerZone**: Extract from Entrance-Pro for use in all exam revision modules.
- [ ] **WritingBox**: Port from English for descriptive answer sections in BST and Accounts.

### 3. Subject-Level Integration
- [ ] Update each app's `package.json` to depend on `@suncube/ui`.
- [ ] Replace local component implementations with shared library versions.

---

## Phase 3: "Street-Smart" Logic Integration
**Goal**: Standardize educational shortcuts and shortcuts across the suite.

### 1. Metadata Standardization
- [ ] Define a shared JSON/TS scheme for `HackerHacks`.
- [ ] Categories include: `Mnemonic`, `ShortCut`, `PatternRecognition`, `CommonError`.

### 2. Performance Auditing
- [ ] Run Lighthouse CI on each app.
- [ ] Optimize images and heavy data files (e.g., `src/data/unit1.ts`) for slow network conditions.

---

## Phase 4: Future Readiness & Monetization
**Goal**: Secure, scalable routing and monetization hooks.

### 1. Hub Routing
- [ ] Set up `commerce-hub` as the entry point.
- [ ] Implement route-level guards for subject access.

### 2. Monetization Hooks
- [ ] Prepare decoupled "lockout" components for Unit 3+.
- [ ] Create placeholder interfaces for Razorpay API integration.
- [ ] Ensure user data (progress) is persistent across subject navigation.
