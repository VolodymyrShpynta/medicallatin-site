# Deploying medicallatin.com

This guide publishes the site at <https://medicallatin.com> with
**Cloudflare Pages**, connected to this GitHub repository. Once it is set up, every
push to `main` publishes the site automatically. There is nothing to build: Cloudflare
serves the [`site/`](../site/) folder as it is.

Cost: **$0**. The Pages Free plan includes unlimited static traffic and 500 deploys a
month. The only cost is the yearly `medicallatin.com` domain renewal.

All commands are for **Git Bash**.

## Who does what

| Step | Who | Where |
|---|---|---|
| [0. Pre-launch checklist](#0-pre-launch-checklist) | Volodymyr (content from Halyna) | This repo |
| [1. Use the Cloudflare account that holds the domain](#1-use-the-cloudflare-account-that-holds-the-domain) | Volodymyr | Cloudflare |
| [2. Push the repository to GitHub](#2-push-the-repository-to-github) | Volodymyr | Git Bash |
| [3. Create the Pages project](#3-create-the-pages-project) | Volodymyr | Cloudflare + GitHub |
| [4. Connect medicallatin.com](#4-connect-medicallatincom) | Volodymyr | Cloudflare |
| [5. Redirect www to the main address](#5-redirect-www-to-the-main-address) | Volodymyr | Cloudflare |
| [6. Make sure HTTP goes to HTTPS](#6-make-sure-http-goes-to-https) | Volodymyr | Cloudflare |
| [7. Check the live site](#7-check-the-live-site) | Volodymyr, then Halyna on her phone | Git Bash, browser |
| [8. After launch](#8-after-launch) | Halyna / Volodymyr | Instagram, Google |

Steps 1–6 take about half an hour of clicking the first time, plus a few minutes of
waiting for the certificate. Later updates are just `git push` (see
[Updating the site](#updating-the-site)).

## Why the project must live in the domain's Cloudflare account

`medicallatin.com` is a domain (a "zone") in Volodymyr's Cloudflare account.
Cloudflare can attach a bare domain like `medicallatin.com` to a Pages project only
when the project is in **the same account** as the domain. So the project goes into
that account too.

## 0. Pre-launch checklist

- [ ] **No placeholders left.** This must print nothing:

  ```bash
  cd /c/dev/tools/GitRepo/medicallatin-site
  grep -rn "data-placeholder" site
  ```

  What each placeholder needs is listed in the [README](../README.md#placeholders).
  Anything left over shows on the live site with a dashed red outline.
- [ ] **Google Forms created** in Halyna's Google account, one per language, from
  [google-form.md](google-form.md), and their links pasted in.
- [ ] **Halyna has checked** the stress marks and part meanings of the three hero
  terms (*endocarditis*, *tachycardia*, *chlorodontia*) on both home pages.
- [ ] **Trial lesson price** on the Ukrainian pages (9–11 $) is confirmed.
- [ ] **Everything is committed**: `git status` shows no changes.
- [ ] **Checked locally as Cloudflare will serve it** (optional but recommended):

  ```bash
  npx wrangler pages dev site
  ```

  Open <http://127.0.0.1:8788>. This is Cloudflare's own local server: unlike
  `npx serve site`, it applies `site/_headers` (the security policy) and the custom
  404 page exactly as production does. The first run downloads Wrangler and asks
  `Ok to proceed? (y)`. A warning about a missing `compatibility_date` is harmless
  for a static site. Stop it with `Ctrl+C`.

Remember that the GitHub repository is **public**: everything in it, including the
student photos and messages under `site/assets/img/`, can be read by anyone, just as
on the live site. If you'd rather keep the source private, switch the repository to
private in GitHub **Settings → General → Danger Zone** before step 3; Cloudflare
Pages works with private repositories too.

## 1. Use the Cloudflare account that holds the domain

Sign in to <https://dash.cloudflare.com>. The account name is shown at the top left;
switch accounts there (⇅) if you have more than one. Check that **medicallatin.com**
is listed under **Domains** (or **Websites**) in this account. Create the Pages
project in step 3 in this same account.

**Optional: give Halyna access.** Only the account's Super Administrator (the owner)
can invite members.

1. Open the **Members** page (<https://dash.cloudflare.com/?to=/:account/members>).
2. Select **Invite members** and enter Halyna's email address.
3. Under **Add permission policies**, choose a scope (the entire account, or only the
   `medicallatin.com` domain) and a role: **Administrator Read Only** to let her look
   around, or **Administrator** to let her change things. Select **Create policy**.
4. Select **Invite members**. She accepts from the email with her own free Cloudflare
   login. You can remove the access at any time on the same page.

## 2. Push the repository to GitHub

Cloudflare can only offer a branch for deployment once it is on GitHub, and it
deploys what's on GitHub, not what's on your computer. Check the local state first:

```bash
cd /c/dev/tools/GitRepo/medicallatin-site
git status -sb
```

The first line shows how `main` compares with GitHub:

- `## main...origin/main [ahead 2]`: there are local commits GitHub doesn't have yet
  (the number varies).
- `## main...origin/main [gone]`: the branch has never been pushed.
- `## main...origin/main` with nothing after it: GitHub is already up to date.

No changed files should be listed below that line. Then push:

```bash
git push -u origin main
```

Run `git status -sb` again: the first line should now be `## main...origin/main` with
nothing after it. On <https://github.com/VolodymyrShpynta/medicallatin-site> you
should see `site/`, `docs/` and `README.md`.

## 3. Create the Pages project

In the Cloudflare account that holds `medicallatin.com`:

1. Go to **Workers & Pages** → **Create application**. The first screen,
   "Make something new", sets up a **Worker**, not a Pages project: don't use its
   **Continue with GitHub** button. Instead select the link at the bottom,
   **Need to use the legacy Pages workflow? Continue to Pages**, then the Git option
   (**Import an existing Git repository** / **Connect to Git**), not Direct Upload.
   You're on the right form when it asks for a **Build output directory** and ends
   with **Save and Deploy**; the Worker form asks for a **Deploy command** instead.
   (Older dashboards show this as a **Pages** tab → **Connect to Git**.)
2. Choose **GitHub**. If asked, sign in to GitHub and authorize
   **Cloudflare Workers & Pages**.
3. When GitHub asks where to install the app, choose the **VolodymyrShpynta** account,
   then **Only select repositories** → `medicallatin-site` → **Install & Authorize**.
4. Back in Cloudflare, select `medicallatin-site` → **Begin setup**.
5. Fill in **Set up builds and deployments** exactly like this:

   | Field | Value |
   |---|---|
   | Project name | `medicallatin-site` (this becomes `medicallatin-site.pages.dev`; if it's taken, any name works) |
   | Production branch | `main` |
   | Framework preset | **None** |
   | Build command | *(leave empty)* |
   | Build output directory | `site` |
   | Root directory (advanced) | *(leave empty)* |
   | Environment variables | *(none)* |

6. Select **Save and Deploy**. The deploy log should finish within a minute or two.
7. Open the address it shows, `https://medicallatin-site.pages.dev`, and click
   through both languages.

If Cloudflare offers to turn on **Web Analytics** for the project or the domain,
leave it off. The site promises no analytics or trackers, and its security policy
would block the analytics script anyway.

## 4. Connect medicallatin.com

**First, check for old DNS records.** In Cloudflare, open the domain
**medicallatin.com** → **DNS** → **Records**:

- Records of type **A**, **AAAA** or **CNAME** named `medicallatin.com` (shown as
  `@` or the domain name) or `www` point the domain somewhere else, such as a
  parking page or an old host. They block the new site. Note their values somewhere,
  then delete them just before the next step.
- Leave **MX** and **TXT** records alone: they handle email and ownership
  verification.
- If there are **CAA** records, they must allow Cloudflare's certificate authorities
  (see Troubleshooting below). Most domains have none.

**Then add the domain to the project:**

1. **Workers & Pages** → `medicallatin-site` → **Custom domains** →
   **Set up a custom domain**.
2. Enter `medicallatin.com` → **Continue**, and confirm the DNS record Cloudflare
   proposes. Because the domain is in this account, Cloudflare creates the record
   itself; don't add it by hand.
3. Wait until the domain shows **Active** and **SSL enabled**. It shows **Verifying**
   for a few minutes while the certificate is issued. The "Add the following CNAME
   record" form that may stay under the domain is generic help: ignore it.
4. Open <https://medicallatin.com>.

In **DNS** → **Records** you'll now see the record Cloudflare created. Leave it as it is:

| Type | Name | Content | Proxy status |
|---|---|---|---|
| `CNAME` | `medicallatin.com` | `medicallatin-site.pages.dev` | Proxied |

## 5. Redirect www to the main address

The site's canonical address is `https://medicallatin.com`. These steps make
`www.medicallatin.com` forward to it, keeping the path
(`www.medicallatin.com/courses/` → `medicallatin.com/courses/`).

1. Open the domain **medicallatin.com** → **DNS** → **Records** → **Add record**:

   | Type | Name | IPv4 address | Proxy status |
   |---|---|---|---|
   | `A` | `www` | `192.0.2.1` | **Proxied** (orange cloud) |

   `192.0.2.1` is a reserved dummy address. Cloudflare answers the redirect itself,
   so no visitor ever reaches it, but the record must exist and be **Proxied**.
   Without it, `www.medicallatin.com` doesn't exist at all.
2. Still in the domain, open **Rules** → **Overview** → **Create rule** →
   **Redirect Rule**. If templates are offered, choose
   **Redirect from WWW to root**; otherwise fill it in by hand:

   | Field | Value |
   |---|---|
   | Rule name | `www to apex` |
   | When incoming requests match | **Wildcard pattern** |
   | Request URL | `https://www.*` |
   | Then: Target URL | `https://${1}` |
   | Status code | `301` |
   | Preserve query string | On |

3. Select **Deploy**.

The rule matches only `https://www…`. Plain `http://www.medicallatin.com` is first
sent to HTTPS by **Always Use HTTPS** (step 6) and then by this rule to the main
address.

**Optional: also redirect `medicallatin-site.pages.dev`.** Search engines already
treat `medicallatin.com` as the real address, because every page declares it as
canonical, so this is cosmetic. `pages.dev` isn't part of your domain, so a domain
Redirect Rule can't catch it; it needs an account-level **Bulk Redirect**:

1. Open **Bulk redirects** (<https://dash.cloudflare.com/?to=/:account/bulk-redirects>)
   → **Create Bulk Redirect List**, name it `medicallatin_redirects` → **Next** →
   **Or, manually add URL redirects**.
2. Add source `medicallatin-site.pages.dev`, target `https://medicallatin.com`,
   status `301`. Under **Edit parameters**, tick **Preserve query string**,
   **Subpath matching** and **Preserve path suffix**, but **not Include subdomains**:
   that would also redirect branch previews (`<hash>.medicallatin-site.pages.dev`).
3. **Next** → **Next** → **Continue to Redirect Rules**, name the rule, select the
   list and **Save and Deploy**.

## 6. Make sure HTTP goes to HTTPS

Open the domain → **SSL/TLS** → **Edge Certificates**, and check that
**Always Use HTTPS** is **On**. You'll verify it in the next step.

## 7. Check the live site

**From Git Bash:**

```bash
curl -sI https://medicallatin.com/ | grep -iE "^(http|content-security-policy)"
```
Expect `HTTP/2 200` and a `content-security-policy: default-src 'self'; …` line.

```bash
curl -sI http://medicallatin.com/ | grep -iE "^(http|location)"
```
Expect a `301` or `308` redirect with `location: https://medicallatin.com/`.

```bash
curl -sI https://www.medicallatin.com/courses/ | grep -iE "^(http|location)"
```
Expect `301` with `location: https://medicallatin.com/courses/`.

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://medicallatin.com/no-such-page/
```
Expect `404`. In a browser, that address shows the bilingual "page not found" page.

**In a browser, on a computer and on a phone:**

- [ ] `/` and `/en/` load, and **EN / УКР** switches between the matching pages.
- [ ] The moon/sun button switches the theme, and the choice holds on other pages.
- [ ] «Написати в Direct» / "Message me in Direct" opens Instagram Direct to
  `lingualatina_halyna`. The form buttons open the right Google Form for each
  language.
- [ ] Telegram, WhatsApp and email links open the right app.
- [ ] Open the link **inside Instagram** (for example, send it to yourself in a
  Direct message): that in-app browser is where most students will see the site.
- [ ] **Link preview:** paste `https://medicallatin.com` into a Telegram or Instagram
  chat. It should show the LinguaLatina card. Telegram caches previews; if it shows
  an old one, send the link to `@WebpageBot` in Telegram to refresh it.

## 8. After launch

- **Instagram bio:** Halyna sets her profile's link to `https://medicallatin.com`.
- **Google Search Console** (optional, free; <https://search.google.com/search-console>):
  1. Add a **Domain** property for `medicallatin.com`.
  2. Verify it with the **TXT** record Google gives you: in Cloudflare, go to
     **DNS** → **Records** → **Add record** (type `TXT`, name `@`). Google may also
     offer to add it for you through Cloudflare.
  3. Under **Sitemaps**, submit `https://medicallatin.com/sitemap.xml`.
- **Email for the domain** (the DNS page recommends this). Decide first whether
  Halyna wants an address like `halyna@medicallatin.com`:
  - **Yes:** turn on **Email** → **Email Routing** for the domain (free). It forwards
    mail for that address to her existing mailbox and adds the MX and SPF records
    itself. Then use the address for the site's `EMAIL` placeholder.
  - **No:** add two TXT records that tell mail servers this domain never sends email,
    so nobody can send convincing fake mail "from" it:

    | Type | Name | Content |
    |---|---|---|
    | `TXT` | `@` | `v=spf1 -all` |
    | `TXT` | `_dmarc` | `v=DMARC1; p=reject;` |

    Remove them if you ever start sending mail from the domain.
## Updating the site

Edit files under `site/`, check them locally, then commit and push:

```bash
cd /c/dev/tools/GitRepo/medicallatin-site
npx serve site                      # check at http://localhost:3000, then Ctrl+C
git add -A
git commit -m "Update express course dates"
git push
```

Cloudflare publishes `main` within a minute or two. Watch progress under
**Workers & Pages** → `medicallatin-site` → **Deployments**. Visitors get the new
version on their next page load: pages, CSS, scripts and images are rechecked on
every visit. Only the fonts are cached for a year, so give a new font file a new
name.

- **Try a change before publishing it.** Push it to another branch
  (`git push -u origin my-change`). Cloudflare builds a preview at a public address
  like `https://<hash>.medicallatin-site.pages.dev` (listed under Deployments).
  The live site is unaffected until the branch is merged into `main`.
- **Undo a bad update.** **Deployments** → **All deployments** → the menu (⋯) of the
  last good production deployment → **Rollback to this deployment**. This takes
  effect immediately; then fix the problem in Git and push again.
- **Skip publishing for a docs-only commit.** Start the commit message with
  `[CF-Pages-Skip]`.

## Troubleshooting

| Problem | Fix |
|---|---|
| The **Production branch** list is empty in step 3. | `main` hasn't been pushed yet: do step 2. |
| `medicallatin-site` isn't in Cloudflare's repository list. | On GitHub, open **Settings → Applications → Installed GitHub Apps → Cloudflare Workers & Pages → Configure**, add the repository and save. Then reload the Cloudflare page. |
| The custom domain stays **Pending** or **Verifying**. | An old A, AAAA or CNAME record for `medicallatin.com` is still there: delete it. Or a CAA record blocks Cloudflare's certificate authorities: add CAA records allowing `letsencrypt.org`, `pki.goog` and `ssl.com` (see [Cloudflare's note on CAA](https://developers.cloudflare.com/pages/configuration/custom-domains/#caa-records)). |
| **Error 522** on `medicallatin.com`. | The DNS record was added by hand instead of through **Custom domains**. Delete it and redo step 4. |
| `www` doesn't redirect. | The `www` A record must exist and be **Proxied** (orange cloud), and the `www to apex` Redirect Rule must be deployed. |
| The site shows old content after a push. | Check that the deployment finished, then reload with `Ctrl+F5`. Don't add **Cache Rules** or **Page Rules** that cache the site: Cloudflare advises against them for Pages, and they can serve stale pages after a deploy. |
| Something stops working after adding an external resource (embedded video, Google Fonts, a widget). | `site/_headers` only allows files from the site itself. Self-host the resource, or add its address to the `Content-Security-Policy` line. The browser console names what was blocked. |

## Settings at a glance

| Setting | Value |
|---|---|
| Cloudflare account | Volodymyr's (it holds `medicallatin.com`) |
| Pages project | `medicallatin-site`, connected to `VolodymyrShpynta/medicallatin-site` |
| Production branch | `main` |
| Framework preset / build command | None / *(empty)* |
| Build output directory | `site` |
| Custom domain | `medicallatin.com` (DNS record created by Cloudflare) |
| DNS | `CNAME medicallatin.com → medicallatin-site.pages.dev` (created by Pages), proxied `A www 192.0.2.1` |
| `www.medicallatin.com` | 301 to `https://medicallatin.com` (Redirect Rule `www to apex`) |
| HTTPS | Automatic certificate; **Always Use HTTPS** on |
| Headers and caching | `site/_headers` (security policy; one-year cache for fonts only) |
| Not found | `site/404.html` |
