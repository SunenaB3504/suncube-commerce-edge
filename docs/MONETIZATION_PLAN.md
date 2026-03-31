# Monetization Strategy: Suncube Commerce Edge (Manual Payment MVP)

Currently, Suncube Commerce Edge is a purely static frontend application hosted on GitHub Pages. User progress (Cognitive XP, Streaks) and data are stored locally in the browser (`localStorage`), and all subject content (MCQs, study guides) is bundled directly into the frontend code.

Because you are planning to collect payments **manually** (e.g., via UPI QR codes or bank transfers outside the app), the architecture becomes much simpler. You do not need complex payment webhooks, but you *still* need a way to identify users and manually flip a switch to unlock their access after they pay.

## Proposed Strategy & Activities

The monetization transition for a manual payment model should be executed in these 4 distinct phases:

---

### Phase 1: Authentication & Cloud Database (The Foundation)

Before you can charge for a subject, you need a system to identify users and remember what they bought. 

- **Activity 1:** Integrate a Backend-as-a-Service (BaaS) provider. **Firebase** or **Supabase** are the best choices for React/Vite apps.
- **Activity 2:** Build a Login/Registration system into the main `commerce-hub` (Command Center).
- **Activity 3:** Create an `entitlements` table/collection in the database that records which subjects (e.g., `access_accounts=false`, `access_entrance_pro=false`) a specific user has.
- *(Optional)* **Activity 4:** Migrate the current `localStorage` (Cognitive XP, streaks, chapter progress) into the cloud Database so student progress syncs across devices.

---

### Phase 2: Manual Payment Workflow & Admin Controls

Since payment collection is manual, the app acts as a secure storefront and the "Admin" (You) acts as the payment gateway.

- **Activity 1:** Build a "Store" or "Pricing Pipeline" inside the `commerce-hub` where students can view subjects and pricing.
- **Activity 2:** When a student clicks "Purchase", instead of a payment gateway, display a modal with a **UPI QR Code** (or bank details) and clear instructions: *"1. Pay ₹500 via UPI. 2. Send the screenshot along with your registered email to our WhatsApp support number."*
- **Activity 3:** **Admin Workflow:** When you receive a valid payment screenshot on WhatsApp, you simply log in to your Firebase/Supabase database console, find the user's email, and change their variable from `access_entrance_pro = false` to `true`.

---

### Phase 3: Paywalls & Route Protection (The Locks)

Once the database knows who paid for what, the frontend apps must enforce that logic.

- **Activity 1:** In `@suncube/shared-logic`, create custom hooks like `useAuth()` and `useEntitlements()` that read the user's status from your database.
- **Activity 2:** In each subject app (like `entrance-pro/src/App.jsx`), wrap the main application routes inside a `<ProtectedRoute expectedSubject="entrance_pro">`.
- **Activity 3:** If a user without `true` access tries to load the `entrance-pro` URL, the `<ProtectedRoute>` logic will instantly redirect them back to the `commerce-hub` Store page with a message saying *"You must purchase this module to access it."*

---

### Phase 4: Content Security

> [!WARNING]
> Because you are hosting on GitHub Pages, all your valuable MCQ questions and study data are currently stored in pure Javascript files (`src/data/...`) bundled entirely into the frontend. Even with a frontend paywall, a tech-savvy student who knows web development could open Chrome Developer Tools and extract your entire syllabus for free.

- **MVP Choice:** Rely on frontend route guards only. This is the fastest and cheapest way to launch. It assumes that standard Commerce entrance students won't know how to reverse-engineer a React application bundle to steal the questions.
- **Production Choice (Future):** Move your raw `.js` data arrays entirely into your secure cloud database. Instead of importing the data locally, the app will `fetch()` the questions from the database. The database security rules will strictly deny access unless the user has the required entry in the `entitlements` table.

## Open Questions

1. **Authentication Provider:** Do you prefer Google Firebase (traditional, NoSQL) or Supabase (modern, PostgreSQL)? Both have generous free tiers that easily handle a manual payment MVP.
2. **Content Security:** For this initial launch with manual payments, are you comfortable starting with just the "MVP Choice" (frontend route guards), or do you want to secure the data arrays in the backend immediately to prevent any chance of tech-savvy piracy?
