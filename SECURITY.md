# 🔒 Security & Vulnerability Disclosure Policy

Security and data privacy are core architectural foundations of **QuickSnipe**. Because QuickSnipe is engineered as a 100% client-side Chrome extension with zero remote user databases, we prioritize local sandboxing, strict Content Security Policies (CSP), and secure client-to-API communication.

---

## 🛡️ Supported Versions

We actively provide security patches and updates for the following versions:

| Version | Supported | Notes |
|---|:---:|---|
| `1.3.x` | ✅ | Current Stable Release (Manifest V3) |
| `< 1.3.0` | ❌ | Deprecated. Please update to latest Chrome Web Store release. |

---

## 🔐 Architectural Security Highlights

1. **Zero Intermediate Servers**: QuickSnipe does not maintain backend proxies or logging servers. Your search terms, listing copy, and scraped data stay strictly within your local machine.
2. **Encrypted Local Storage**: API keys and swipe files are stored locally in Chrome's sandboxed `chrome.storage.local`.
3. **Strict Content Security Policy**: QuickSnipe adheres to Manifest V3 CSP specifications:
   - Zero execution of remote or dynamic strings (`no eval()`, `no new Function()`).
   - All scripts are packaged locally within the verified extension bundle.
4. **Direct HTTPS Communication**: BYOK API calls connect directly from your client browser to official provider endpoints (`generativelanguage.googleapis.com`, `api.openai.com`, `api.groq.com`, `api.anthropic.com`, `api.deepseek.com`, `openrouter.ai`).

---

## 🚨 Reporting a Security Vulnerability

If you discover a security vulnerability or sensitive data leakage issue within QuickSnipe, please report it responsibly so we can resolve it before public disclosure.

### Reporting Procedure:
1. **Do NOT open a public GitHub issue** for undisclosed security vulnerabilities.
2. Submit a report through **GitHub Private Vulnerability Reporting**:
   👉 [**Report a Vulnerability (Private Advisory)**](https://github.com/RadTome/QuickSnipe-support/security/advisories/new)
   *(Or navigate to the **Security** tab at the top of this repository and click **"Report a vulnerability"**).*
3. Include the following details in the private advisory:
   - Type of vulnerability (e.g., XSS, storage exposure, permission escalation).
   - Step-by-step reproduction steps or Proof of Concept (PoC).
   - Affected extension version and Chrome browser version.

### Response SLA:
- **Initial Acknowledgment**: Within 12 hours.
- **Vulnerability Assessment & Triage**: Within 24–48 hours.
- **Patch Release & Web Store Submission**: Critical security patches are submitted to the Google Chrome Web Store within 48–72 hours of verification.

---

## 🤝 Responsible Disclosure & Recognition

We appreciate the efforts of security researchers who help keep the e-commerce community safe. We are happy to publicly acknowledge researchers who responsibly report verified security findings in our release notes.
