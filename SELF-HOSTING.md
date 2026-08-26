# Self-hosting Siesta Café (Cloudflare Workers via GitHub)

This guide moves the site off the Lovable-published URL onto free Cloudflare
Workers hosting, with the **client owning the domain and the Cloudflare
account** and the developer owning the GitHub repo.

The app already builds to a Cloudflare Worker (`dist/server` + `dist/client`).
On every push to `main`, the GitHub Action (`.github/workflows/deploy.yml`)
runs `npm run build` then `wrangler deploy`, deploying into the **client's**
Cloudflare account (because the API token is theirs).

---

## Ownership split

| Asset            | Owner             |
| ---------------- | ----------------- |
| GitHub repo      | Developer         |
| Cloudflare account | Client          |
| Domain           | Client (own registrar account) |
| Deploy API token | Client issues, developer stores as a GitHub repo secret |

The client can rotate or revoke the API token at any time without touching the
code, and can take over deploys by forking the repo.

---

## 1. Get the code onto GitHub (developer)

1. In the Lovable editor, open the **Plus (+) menu** (bottom-left) → **GitHub** → **Connect project**.
2. Authorize the Lovable GitHub App.
3. Choose your GitHub account/organisation and click **Create repository**.
4. A new repo is created with the full project code. Clone it locally if you like.

> You can also download the codebase directly from the Code Editor if you prefer
> to push it to an existing repo yourself.

## 2. Add the deploy secrets (developer, using the client's token)

In your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**.

Add two secrets (values come from the client — Step 3):

- `CLOUDFLARE_API_TOKEN` — the client's scoped API token.
- `CLOUDFLARE_ACCOUNT_ID` — the client's Cloudflare Account ID.

## 3. Client: create a Cloudflare account + API token (client)

1. The client signs up for a free Cloudflare account at
   <https://dash.cloudflare.com/sign-up> (their email, their account).
2. In the dashboard, find the **Account ID** (right sidebar on the account
   overview / Workers page) and send it to the developer.
3. Create an API token:
   **My Profile → API Tokens → Create Token → Create Custom Token**.
   Recommended scope (least privilege):
   - **Account → Workers Scripts → Edit**
   - **Account → Account Settings → Read**
   - (Optional) **Account → Workers Routes → Edit** (needed only if adding
     custom-domain routes manually via the API; the dashboard add-domain flow
     does not require it).
4. Continue, copy the token, and send it to the developer **out of band**
   (not in chat). The client keeps a record and can revoke/rotate it anytime
   from the same API Tokens page.

## 4. First deploy (developer or automatic)

Push to `main`, or run the Action manually:
**GitHub repo → Actions → Deploy to Cloudflare → Run workflow**.

The Action builds and deploys. The Worker lands in the **client's** Cloudflare
account under the name `siesta-cafe` (set in `wrangler.jsonc`).

The site is immediately live at the Worker URL shown in the Action output,
e.g. `https://siesta-cafe.<client-worker-subdomain>.workers.dev`.

## 5. Client: connect the custom domain (client)

The client should have already bought the domain in **their own** registrar
account (Namecheap, Cloudflare Registrar, Squarespace, etc.). Do **not**
register the client's domain under the developer's name.

1. In the client's Cloudflare dashboard: **Workers & Pages → siesta-cafe →
   Settings → Domains & Routes → Add → Custom domain**.
2. Enter the domain (e.g. `siestacafe.co.uk`) and any `www` variant.
3. Cloudflare shows the exact DNS records to add. If the domain's DNS is also
   managed at Cloudflare, this is automatic; otherwise the client adds the
   shown records (typically a CNAME/A pointing at the Worker) at their
   registrar's DNS panel.
4. Cloudflare auto-provisions SSL (HTTPS). Allow up to a few hours for DNS
   propagation.

## 6. Cut over and cancel Lovable (developer)

1. Confirm the Cloudflare site loads at both the `*.workers.dev` URL and the
   custom domain.
2. Once live, cancel the Lovable subscription. The GitHub repo is a standalone
   copy of the code — nothing depends on Lovable after that.

---

## Notes

- **Why Workers, not Pages?** The build already targets the `cloudflare-module`
  nitro preset, which outputs a Cloudflare Worker. Cloudflare Workers now
  serves static assets too (the `assets` binding in `wrangler.jsonc`), so this
  is the recommended free Cloudflare host. Pages is being merged into Workers.
- **The Worker name** is `siesta-cafe` (set in `wrangler.jsonc`). Change it there
  before the first deploy if you want a different name; the client can also
  rename it in the dashboard.
- **Rotating the token / taking over deploys:** the client can revoke the API
  token at any time and issue a new one, or fork the repo and run their own
  GitHub Action with their own secrets.
- **No backend dependencies:** this site has no database, auth, or server
  functions — the whole thing runs as one Worker, so it self-hosts cleanly with
  no extra services to pay for.
