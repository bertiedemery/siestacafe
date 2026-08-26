# Plan: Self-host Siesta Café on Cloudflare (free) via GitHub

## Goal
Stop relying on the Lovable-published URL. Get the code onto GitHub, auto-deploy it to Cloudflare's free hosting on every push, and connect a custom domain you buy separately.

## Two misconceptions cleared up first
- **You can't buy a domain on GitHub.** GitHub doesn't sell domains. You buy one from a registrar (e.g. Namecheap, Cloudflare Registrar, Squarespace) and point it at your host. Hosting on Cloudflare is free; the domain is a one-off/yearly cost from the registrar.
- **This site is not static-only.** It's built with TanStack Start SSR targeting Cloudflare Workers. Your content is all static (no logins/database), but the build itself is a Cloudflare Worker. The cleanest free host is therefore **Cloudflare Workers** (what your build already targets — no code conversion needed). Cloudflare Pages is being merged into Workers; we deploy to Workers so the existing build works as-is.

## What's involved — who does what

| Step | Who | What |
| ---- | --- | ---- |
| 1. Connect Git sync | You (Lovable UI) | Plus menu → GitHub → Connect project → create repo. This pushes your code to a GitHub repo you own. |
| 2. Add deploy config | Me (code) | Add `wrangler.jsonc` + a GitHub Actions workflow so every push to `main` builds and deploys to Cloudflare automatically. |
| 3. Connect Cloudflare | You (Cloudflare dashboard) | Create a free Cloudflare account, generate an API token + note your Account ID, add them as GitHub repo secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`). |
| 4. Buy + connect domain | You (registrar + Cloudflare) | Buy a domain, add it as a custom domain on the Worker in the Cloudflare dashboard, set DNS (Cloudflare shows the exact records). |
| 5. Turn off Lovable billing | You | Cancel the Lovable subscription once the Cloudflare site is live. The GitHub repo is a full standalone copy of the code. |

## What I'll add to the repo (Step 2 — the only code change)

No change to `vite.config.ts` or the app source — the build already outputs a Cloudflare Worker (`dist/server` + `dist/client`).

1. **`wrangler.jsonc`** — explicit Cloudflare Worker config:
   - `name`: `siesta-cafe`
   - `main`: `dist/server/index.mjs` (exact path confirmed against the build output; adjusted if nitro names it differently)
   - `assets.directory`: `./dist/client`
   - `compatibility_date`: a current date (≥ `2024-09-19` for Workers Static Assets)
2. **`.github/workflows/deploy.yml`** — on push to `main`: install deps (`npm ci`), `npm run build`, then `npx wrangler deploy` using the GitHub secrets. One manual trigger button too.
3. **A short `SELF-HOSTING.md`** at the repo root with the step-by-step (Git sync, Cloudflare secrets, domain/DNS) so you have it written down.

I'll verify the exact worker entry filename against a real build output before finalizing `wrangler.jsonc`, since the `cloudflare-module` preset can name it `index.mjs` or `index.js`.

## What you keep after leaving Lovable
- Full source code in your GitHub repo (your property).
- The app builds and runs independently — no Lovable runtime dependency (no database, no auth, no server functions to maintain).
- Free hosting on Cloudflare Workers + a free custom domain connection.

## After approval
I'll add the three files above, run a build to confirm the Worker entry path, and write `SELF-HOSTING.md` with the exact Cloudflare dashboard steps and DNS guidance. The Git-sync, Cloudflare-account, domain-purchase, and subscription-cancellation steps are yours to do in the respective UIs; I'll give you the precise click-path for each.
