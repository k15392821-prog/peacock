Netlify deployment and custom domain setup
========================================

This repository contains a static site (index.html, script.js, style.css) at the repository root.

Steps to deploy to Netlify and use your GoDaddy domain (peacocktv.pro):

1) Create a Netlify site
   - Go to https://app.netlify.com/
   - Sign in and click **Add new site** → **Import an existing project**
   - Connect your GitHub account and authorize access to this repository
   - Select the `k15392821-prog/peacock` repo
   - For build settings:
     - Build command: leave empty
     - Publish directory: `.`
   - Click **Deploy site**

2) Add your custom domain on Netlify
   - In Netlify, go to **Site settings** → **Domain management** → **Custom domains**
   - Click **Add custom domain** and enter `peacocktv.pro`
   - Netlify will show DNS instructions. Two options:
     - Recommended: Use Netlify DNS — Netlify will provide nameservers to copy into GoDaddy's domain nameserver settings.
     - Or: Configure DNS in GoDaddy by adding records Netlify shows (A records and CNAME for apex/subdomain). Follow Netlify's exact instructions shown in the dashboard.

3) Update GoDaddy DNS (if you choose to keep GoDaddy DNS)
   - Sign in to GoDaddy and open your domain `peacocktv.pro` → **Manage DNS**
   - If Netlify gave A records, add/replace the A records for the apex domain with the IPs Netlify provides.
   - If Netlify requires a CNAME for `www`, add a CNAME record pointing `www` to the host Netlify specifies (usually something like `your-site.netlify.app`).
   - Save changes and wait for DNS propagation (may take minutes to a few hours).

4) Enable HTTPS
   - Once Netlify detects the domain, enable the Let's Encrypt certificate (Netlify normally provisions it automatically).
   - Confirm HTTPS is enabled in the **Domain management** page.

5) Verify
   - Visit: https://peacocktv.pro and https://www.peacocktv.pro (if configured)

Notes and troubleshooting
-------------------------
- If you prefer automation, you can add a Netlify deploy token and use the Netlify CLI to deploy directly from this machine.
- If Netlify asks for a publish directory other than `.`, set it to the folder containing `index.html`.
- If you want me to configure the Netlify site or add a Netlify deploy action, provide a Netlify token or add me as a collaborator in your Netlify account.
