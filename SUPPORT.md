# 🆘 QuickSnipe Support & Help Center

Thank you for using **QuickSnipe**! This document explains our support channels, response timelines, self-service troubleshooting steps, and how to get rapid assistance.

---

## 🎯 Support Overview & Channels

| Channel | Best For | Expected Response Time | Link |
|---|---|:---:|---|
| **🐛 GitHub Issues** | Bug reports, broken marketplace scrapers, API client errors, autofill issues | 24–48 hours | [Open an Issue](https://github.com/RadTome/QuickSnipe-support/issues) |
| **💡 Feature Requests** | New e-commerce platforms, new AI models, generator suggestions | Weekly triage | [Request Feature](https://github.com/RadTome/QuickSnipe-support/issues/new?template=2_feature_request.yml) |
| **💬 GitHub Discussions** | Seller strategy, prompt sharing, general Q&A, workflow tips | Community / 2–3 days | [Discussions Forum](https://github.com/RadTome/QuickSnipe-support/discussions) |
| **💳 Billing & Licensing** | ExtensionPay / Stripe receipt lookups, subscription cancellation, refund requests | < 24 hours | [Billing Issue Form](https://github.com/RadTome/QuickSnipe-support/issues/new?template=5_billing_license_support.yml) |
| **🔒 Security Reporting** | Responsible vulnerability disclosures | < 12 hours | [SECURITY.md](SECURITY.md) |

---

## ⚡ Self-Service Diagnostic Checklist (Try This First!)

Over 80% of reported issues are resolved with these 4 steps:

### 1. Hard Refresh the Marketplace Tab
If QuickSnipe says `No listing detected` or `Reading...`:
- Click into the active marketplace tab.
- Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac) to reload the page.
- In the QuickSnipe Sidepanel header, click the **🔄 (Refresh)** button.

### 2. Verify Your BYOK API Key & Quota
If generation fails or produces an API error:
- **Google Gemini**: Ensure your API key is active in [Google AI Studio](https://aistudio.google.com/app/apikey). Check if you exceeded 15 requests/minute.
- **Groq**: Verify rate limits in [Groq Console](https://console.groq.com/keys).
- **OpenAI / Anthropic / DeepSeek / OpenRouter**: Verify your developer balance has prepaid credits (free trial credits often expire).
- **Ollama**: Verify the daemon is running locally with `ollama run llama3.3` and accessible at `http://localhost:11434`.

### 3. Check for Extension Updates
Chrome automatically updates extensions, but you can force an instant update:
1. Go to `chrome://extensions`.
2. Enable **Developer mode** in the top right toggle.
3. Click the **Update** button in the top toolbar.

### 4. Inspect Console for Red Error Logs
1. Right-click inside the QuickSnipe Sidepanel and select **Inspect**.
2. Click the **Console** tab.
3. Look for any red error logs (e.g. `401 Unauthorized`, `429 Rate Limit`, or `DOM selector not found`).
4. Copy the error text or take a screenshot to attach to your issue.

---

## 🛠️ Scope of Support

### What We Actively Support:
- ✅ Extension installation, sidepanel loading, and user interface rendering.
- ✅ In-page DOM scrapers for supported marketplaces (**Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari, Walmart, Grailed**).
- ✅ 1-Click Form Autofill engine compatibility with active marketplace listing editors.
- ✅ Zero-key on-device Chrome Built-in AI (Gemini Nano) and BYOK API integrations (Gemini, Groq, OpenAI, Anthropic, DeepSeek, OpenRouter, Ollama).
- ✅ Multi-platform fee calculator presets, Amazon 249B validator, and export tools.
- ✅ ExtensionPay / Stripe Pro license sync and trial management.

### What is Out of Scope:
- ❌ Outages, downtime, or billing issues on third-party AI provider platforms (e.g., OpenAI API outages or Anthropic rate limits).
- ❌ Unsupported marketplaces or non-standard custom storefronts not listed in the documentation.
- ❌ Marketplace account suspensions, policy warnings, or rank fluctuations on Etsy, Amazon, or eBay.
- ❌ Custom code modifications or modified unpacked extension builds.

---

## 📝 Guidelines for Opening a Ticket

To help us fix your issue as quickly as possible:

1. **Use the appropriate template**: Select [Bug Report](https://github.com/RadTome/QuickSnipe-support/issues/new?template=1_bug_report.yml), [Marketplace Scraper Issue](https://github.com/RadTome/QuickSnipe-support/issues/new?template=3_marketplace_scraper_issue.yml), or [BYOK API Issue](https://github.com/RadTome/QuickSnipe-support/issues/new?template=4_byok_api_issue.yml).
2. **Include the Marketplace & Listing URL**: Example: `https://www.etsy.com/listing/123456789/...` (Feel free to redact private identifying seller names if necessary).
3. **Specify the AI Provider & Model**: Example: `Google Gemini / gemini-3.6-flash`.
4. **Include Browser & OS Information**: Example: `Google Chrome v128.0 (Windows 11)`.
5. **Attach Console Errors**: Red error messages from the DevTools console help pinpoint the exact line of failure immediately.

---

## 💳 Billing, Trials & Cancellation FAQs

- **How do I manage or cancel my Pro subscription?**  
  Click the **⚙ (Settings)** button in the QuickSnipe sidepanel, then click **Manage Subscription** to open the Stripe self-service portal. You can cancel with 1 click anytime.
- **What happens after my 7-day free trial?**  
  If you choose not to upgrade, your account automatically reverts to the **Free Plan** (which includes daily generation quotas and unlimited BYOK use).
- **Need a refund?**  
  If you were billed mistakenly or experienced technical issues, open a [Billing Issue Ticket](https://github.com/RadTome/QuickSnipe-support/issues/new?template=5_billing_license_support.yml) within 14 days of purchase for a prompt refund.
