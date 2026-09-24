# Cash-Flow Control Kit

A practical AI-assisted finance operations toolkit for freelancers and small service businesses.

This repository contains:
- an interactive cash-flow forecast calculator
- a product landing page for the digital product concept
- starter templates for invoice follow-up and payment verification
- an AI prompt library for safe financial planning assistance
- documentation for launch and positioning

## Product goal

Help small businesses answer three questions reliably:
1. Do we have enough cash to cover the next 30 days?
2. Which invoices need attention today?
3. Is a payment request suspicious enough to pause and verify?

The system is designed for human-reviewed decisions and operational visibility. It is not a substitute for qualified tax, legal, accounting, or lending advice.

## Quick start

Open `index.html` in a browser, or serve the folder locally:

```bash
cd cash-flow-control-kit
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── README.md
├── .gitignore
├── templates/
│   ├── cashflow-workbook.csv
│   ├── invoice-followup-templates.md
│   └── payment-verification-checklist.md
├── prompts/
│   └── ai-cashflow-prompts.md
├── docs/
│   └── launch-plan.md
└── assets/
    └── hero-illustration.svg
```

## Included templates

- `templates/cashflow-workbook.csv`: starter workbook for cash-flow tracking
- `templates/invoice-followup-templates.md`: ready-to-edit follow-up emails
- `templates/payment-verification-checklist.md`: vendor and payment-change control checklist
- `prompts/ai-cashflow-prompts.md`: safe prompt library for analysis of user-provided data

## Key positioning

This project is intentionally designed around real financial pain points that are consistently reported in 2025-2026 small-business research:
- cash-flow pressure
- late customer payment
- overdue invoice follow-up
- payment fraud and banker/vendor impersonation
- operational visibility without hiring a full-time CFO

## Legal and risk note

This project is for planning and operational support. It is not investment advice, tax advice, legal advice, or lending advice. Important decisions should be reviewed by a qualified professional.

## License

This project is for internal product prototyping and educational use.
