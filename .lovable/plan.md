# Fix: custom domain stuck on an old version of the site

## What's wrong (confirmed)

Your live domain `siestacafewindsor.co.uk` is serving a **stale build from before the image fixes**:

- Its HTML still points photos at the old Lovable-only `/__l5e/...` paths (broken off-Lovable).
- It still loads `/favicon.ico` (the old icon), not the new `favicon.png`.
- `/images/siesta-interior.jpg` returns **404** on the domain, while the same file works on the Lovable preview.

So the new code exists here, but it has never reached your Cloudflare deployment. That pipeline is: **Lovable → GitHub repo → GitHub Action → Cloudflare**. Something in that chain is broken — most likely one of:

1. **The GitHub repo isn't receiving Lovable's changes** (project not connected, or connected but sync stopped).
2. **The GitHub Action is failing** — e.g. missing/invalid `CLOUDFLARE_API_TOKEN` or `CLOUDFLARE_ACCOUNT_ID` secrets, so deploys error out.
3. **The repo on GitHub is a one-time manual upload** (downloaded ZIP pushed once), which never receives Lovable updates at all.

## Plan

1. **Check the GitHub connection.** In the Lovable editor: Plus (+) menu → GitHub. If it doesn't show a connected repository, connect it and let it create/push the repo — that alone fixes cause 1/3.
2. **Check the Action runs.** On GitHub: repo → **Actions** tab. Look at the latest "Deploy to Cloudflare" runs:
   - No runs at all → the push never arrived (back to step 1).
   - Red/failed runs → open one, read the error. If it mentions authentication or secrets, the `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` repo secrets are missing or wrong (repo → Settings → Secrets and variables → Actions).
3. **Trigger a fresh deploy.** Once secrets/sync are fixed, push a small change from Lovable (or use "Run workflow" in the Actions tab) and watch it go green.
4. **Verify the result.** I'll re-check the live domain afterwards and confirm:
   - `/images/siesta-interior.jpg` returns 200 (not 404)
   - the HTML references `/images/...` paths, not `/__l5e/...`
   - the new `favicon.png` is served

## Notes

- Nothing is wrong with the site code itself — the Lovable preview already serves all 7 images and the new favicon correctly.
- No code changes are expected; this is a pipeline/connection fix. Steps 1–3 happen in your GitHub account, which I can't see from here — I'll need you to tell me what the Actions tab shows (a screenshot of a failed run is ideal).
- Typical fix time once the cause is found: under 10 minutes (a GitHub Action build+deploy takes ~2–3 minutes).
