# Security Policy

## Introduction

The security of our project and its users' data is a top priority for us. We are committed to creating and maintaining a secure environment. We value the contributions of the security research community and believe that responsible disclosure of security vulnerabilities helps us ensure the safety and security of our users. This policy outlines the process for reporting vulnerabilities, what you can expect from us, and what we expect from you.

## Scope

This policy applies to security vulnerabilities found within the following assets:

### In Scope

*   The main codebase of this repository (`https://github.com/zoxilsi/MCA-STUDY-MATERIALS`).
*   Any official documentation or websites directly associated with this project.

### Out of Scope

The following are considered out of scope for our vulnerability disclosure program. Any submissions related to these will not be processed:

*   Vulnerabilities in third-party dependencies or services that we use. Please report these directly to the respective service or project.
*   Social engineering (e.g., phishing, vishing) or physical attacks.
*   Denial of Service (DoS or DDoS) vulnerabilities. While we are interested in these, please do not perform any testing that could disrupt our services. If you believe you have found a DoS vulnerability, please report it without providing a proof-of-concept that could cause damage.
*   Reports from automated scanners without manual verification or a clear proof-of-concept.
*   Missing security best practices that do not lead to a direct, exploitable vulnerability (e.g., missing security headers, weak SSL/TLS ciphers).

## Reporting a Vulnerability

We appreciate your efforts to disclose your findings responsibly. Please **do not** make any vulnerability information public before we have had a chance to review and address it.

### How to Report

To ensure your report is handled securely and confidentially, please use one of the following private channels:

1.  **GitHub Private Vulnerability Reporting (Preferred):** Use the "Report a vulnerability" feature on GitHub. This is the most secure and efficient way to report issues.
2.  **Email:** If you are unable to use GitHub's private reporting, you can send an email to our security team at `[24mp2275@rit.ac.in]`. Please use a descriptive subject line, such as "Security Vulnerability Report".

### What to Include in Your Report

To help us triage and validate your finding as quickly as possible, please include the following details in your report:

*   **A clear and descriptive title.**
*   **A detailed description of the vulnerability:** Explain the bug and its potential impact.
*   **Steps to reproduce:** Provide a clear, step-by-step guide to reproduce the vulnerability. Include any necessary code, scripts, or configurations.
*   **Proof-of-Concept (PoC):** A working PoC is highly encouraged. This could be code, a video, or screenshots.
*   **Affected components:** List the versions, files, or URLs that are affected.
*   **Your contact information:** How we can reach you for follow-up questions.
*   **Your name/handle for attribution:** Let us know if you would like to be credited for your discovery.

## Our Process

When you submit a vulnerability report, here is what you can expect from us:

1.  **Acknowledgment:** We will make a best effort to acknowledge the receipt of your report within 2 business days.
2.  **Triage:** Our team will review your report to validate the vulnerability. We may contact you for additional information if needed. We aim to complete this initial validation within 5 business days.
3.  **Investigation & Remediation:** Once validated, we will work on a fix. The timeline for a fix can vary depending on the complexity and severity of the issue. We will keep you updated on our progress.
4.  **Coordinated Disclosure:** We will coordinate with you on the public disclosure of the vulnerability. We prefer to disclose details once a fix is available and has been deployed. We will credit you in the disclosure unless you request to remain anonymous.

## Recognition

We believe in recognizing the valuable contributions of security researchers who help us keep our project secure. For all valid and responsibly disclosed vulnerabilities, we are happy to offer public acknowledgment in our release notes, security advisories, and a future "Hall of Fame" section.

## Safe Harbor

We consider security research and responsible disclosure conducted under this policy to be authorized and beneficial. We will not pursue or support any legal action against you for security research activities that are conducted in good faith and adhere to this policy. This includes exempting you from any restrictions in our terms of service that would be inconsistent with this policy.

If at any point you have concerns or are uncertain whether your security research is consistent with this policy, please submit a report through one of our official channels before going any further.
