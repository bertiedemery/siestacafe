# Plan: Self-host Siesta Café on Cloudflare (free) — client-owned domain + Cloudflare

## Goal
Move off the Lovable-published URL. Code lives in a GitHub repo (yours), auto-deploys to Cloudflare's free hosting on every push, and the **client owns the domain and the Cloudflare account** so they have full control and can revoke your access at any time.

## Ownership & handoff model (split)
| Asset | Owner | Notes |
| ----- | ----- | ----- |
| GitHub repo | **You (developer)** | Created via Lovable Git sync. You keep it; client never needs access to host. |
| Cloudflare account | **Client** | The Worker (the site) and the custom domain live in the client's Cloudflare. Client creates the account and the API token. |
| Domain | **Client** | Registered in the client's own registrar account (their email, their card). You never register it for them — that's the #1 agency mistake. |
| Deploy secret | Client issues, you store | Client creates a scoped Cloudflare API token and gives it to you; you add it as a **GitHub repo secret** so the Action can deploy. Client can rotate/revoke it anytime. |

This means: the client fully controls the domain and hosting. You control the code + the deploy pipeline. The client can fire you and keep the live site by re-pointing the token or taking over deploys — nothing is held hostage.

## Two misconceptions cleared up first
- **You can't buy a domain on GitHub.** GitHub doesn't sell domains. The client buys one from a registrar (Namecheap, Cloudflare Registrar, Squarespace, etc.) in their own account, then points it at their Cloudflare.
- **This site is not static-only.** It's TanStack Start SSR targeting Cloudflare Workers. Your build already outputs a Cloudflare Worker, so we deploy to **Cloudflare Workers** (the modern, recommended free Cloudflare host — Pages is being merged into Workers). No code conversion needed.

## Steps — who does what

| # | Who | What |
|---|-----|------|
| 1 | You (Lovable UI) | Connect Git sync: Plus menu → GitHub → Connect project → create repo. Code now lives in a GitHub repo you own. |
| 2 | Me (code) | Add `wrangler.jsonc` + a GitHub Actions deploy workflow to the repo, plus `SELF-HOSTING.md`. No app-source changes. |
| 3 | Client (Cloudflare) | Client creates a free Cloudflare account, then an **API token** scoped to deploy a Worker (Account: Workers Scripts — Edit; Account: Account Settings — Read) and copies their **Account ID**. |
| 4 | Client → You | Client sends you the API token + Account ID (out of band, not in chat). You add them as GitHub **repo secrets** `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. |
| 5 | Trigger | Push to `main` (or run the Action manually) → builds + `wrangler deploy` → site goes live at the Worker URL, in the client's Cloudflare. |
| 6 | Client (Cloudflare) | In the client's Cloudflare dashboard, add the custom domain to the Worker; Cloudflare shows the exact DNS records. |
| 7 | Client (registrar) | Client sets those DNS records at their domain registrar. SSL is auto-provisioned by Cloudflare. |
| 8 | You | Cancel the Lovable subscription once the Cloudflare site is live. The GitHub repo is a standalone copy of the code. |

## What I'll add to the repo (Step 2 — the only code change)
No change to `vite.config.ts` or app source — the build already targets Cloudflare.

1. **`wrangler.jsonc`** — explicit Worker config:
   - `name`: `siesta-cafe`
   - `main`: `dist/server/index.mjs` (exact path confirmed against a real build; adjusted if nitro names it `index.js`)
   - `assets.directory`: `./dist/client`
   - `compatibility_date`: a current date (≥ `2024-09-19` for Workers Static Assets)
2. **`.github/workflows/deploy.yml`** — on push to `main` (and a manual trigger): `npm ci`, `npm run build`, `npx wrangler deploy` using the repo secrets. Deploys into the **client's** Cloudflare because the token is theirs.
3. **`SELF-HOSTING.md`** — written-down steps for the handoff: Git sync, client Cloudflare account + token creation (with the exact scope), GitHub repo secrets, custom-domain + DNS, and how the client rotates the token / takes over deploys later.

I'll verify the exact Worker entry filename against a real build before finalizing `wrangler.jsonc` (the `cloudflare-module` preset can name it `index.mjs` or `index.js`).

## Why the client keeps control
- The domain is in the client's registrar account — they own renewal, transfer, and DNS.
- The Worker + custom domain live in the client's Cloudflare — they can add/remove domains, rotate the API token, or revoke your deploy access without touching the code.
- The deploy token is scoped (Workers Scripts only) — even if it leaked, it can't touch billing or other Cloudflare services.
- You keep the GitHub repo; if the relationship ends, the client can fork it and run their own deploys with a new token.

## After approval
I'll add the three files above, run a build to confirm the Worker entry path, and write `SELF-HOSTING.md` with the exact Cloudflare token scope, repo-secret steps, and DNS guidance. Git-sync, the client's Cloudflare/domain steps, and subscription cancellation are yours (and the client's) to do; I'll give you the precise click-path for each.
