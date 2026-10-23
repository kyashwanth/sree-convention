# Sree Convention website

Static site (HTML, CSS, JS – no build step). Preview locally:

```bash
python3 -m http.server 8080
```

## Placeholders to replace

Placeholders are highlighted with a gold background on the page.

| What | Where |
| --- | --- |
| Phone `+91 XXXXX XXXXX` / `tel:+91XXXXXXXXXX` | `index.html` (hero, contact, footer, mobile bar, JSON-LD) |
| WhatsApp `https://wa.me/91XXXXXXXXXX` | `index.html`, and `WHATSAPP_NUMBER` in `script.js` |
| Email `info@example.com` | `index.html`, and `CONTACT_EMAIL` in `script.js` |
| Opening hours, capacity `[XXX]`, parking `[XX]`, about text, extra facilities | `index.html` |
| Domain `https://www.example.com` | `index.html` (canonical, Open Graph, JSON-LD), `robots.txt`, `sitemap.xml` |

Search for `XXXX`, `example.com` and `[` to find them all.

## Images

`images/` holds the optimized copies used by the site. Originals are kept untouched in `img/`.

## After going live

- Claim and verify the Google Business Profile for Sree Convention (biggest boost for "convention centre in Kadapa" searches) and link it to this site.
- Submit `sitemap.xml` in Google Search Console.
