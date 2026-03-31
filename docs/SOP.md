# Standard Operating Procedure (SOP): Suncube Commerce Edge

This document outlines the standard procedures for managing, building, and deploying the Suncube Commerce Edge monorepo. Since this workspace consists of multiple independent Vite/React applications (`apps/*`) and shared packages (`packages/*`), following these specific steps prevents 404 routing errors and build crashes.

---

## 1. Installing & Managing Dependencies

Due to the `pnpm` workspace architecture, installing packages correctly is critical.

- **Global/Workspace Installations:** 
  Always use `npx pnpm install` at the root of the project to ensure the `pnpm-lock.yaml` is correctly synced and all `workspace:*` symlinks are created.
- **Adding Packages to Specific Apps:** 
  If you need a new tool (e.g., `canvas-confetti`) only for Entrance Pro:
  ```powershell
  npx pnpm --filter @suncube/entrance-pro add canvas-confetti
  ```

### 1.1 Managing Shared UI Dependencies
If you add a new icon from `lucide-react` or a new hook inside `packages/ui` or `packages/shared-logic`:
1. It MUST be added to the `peerDependencies` and `devDependencies` of that specific package's `package.json`.
2. It MUST be added to the `rollupOptions.external` array in that package's `vite.config.ts`.
*(If omitted, doing a recursive build will crash because Vite cannot resolve the import).*

---

## 2. Building the Project Locally

Before deploying, you must ensure that every single app in the monorepo compiles correctly without throwing TypeScript or Rollup errors.

1. Open your terminal at the **root** of the workspace (`.../suncube-commerce-edge`).
2. Run the recursive build command:
   ```powershell
   npx pnpm -r build
   ```
3. Look for the `Done in [X]s` message. If any package (like `@suncube/ui`) or app fails, fix the errors listed in the command output before proceeding to deploy.

---

## 3. Deploying to GitHub Pages

**CRITICAL WARNING:** Never manually run `gh-pages -d dist` from inside an individual app folder (like `apps/entrance-pro`). Doing so will erase the entire `gh-pages` server history and overwrite your root domain, causing 404 errors for every other subject!

Instead, follow the **Consolidated Deployment Pathway**:

1. **Verify your build:** Make sure you have just successfully run `npx pnpm -r build` from the root so all `dist/` folders are freshly compiled.
2. **Consolidate the Apps:**
   Run the deployment script from the root. This script copies the `commerce-hub` directly to the base of a new folder (`deployment_root`) and strictly partitions all subject apps into their correct nested subfolders (e.g., `deployment_root/entrance-pro/`).
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\scripts\consolidate-deploy.ps1
   ```
3. **Execute Deployment:**
   Now, use the `gh-pages` package to publish the *entire* consolidated structure to GitHub all at once:
   ```powershell
   npx gh-pages -d deployment_root
   ```
4. **Verification:**
   - Wait for the terminal to print `Published`.
   - Go to your repository's **GitHub Actions** tab. Wait for the newest `pages build and deployment` action (yellow spinning circle 🔄) to turn into a green checkmark ✅.
   - Hard refresh your live website (Ctrl+Shift+R) to see the global updates.
