# AI prompt library for safe cash-flow analysis

## 1. Cash-flow summary

```text
You are helping a small business review cash-flow risk using only the data provided below.

Use only the user-provided information and clearly label assumptions.
Identify:
1. expected cash inflows in the next 7 days
2. expected cash outflows in the next 7 days
3. overdue invoices and likely cash-pressure points
4. categories with missing or uncertain information
5. three human-reviewed actions to consider

Do not provide tax, legal, lending, investment, or accounting advice.
This is operational planning support only.

Data:
[PASTE DATA HERE]
```

## 2. Invoice follow-up prioritization

```text
Review this invoice list and prioritize follow-up actions based on:
- days overdue
- amount outstanding
- customer payment history if provided
- effect on near-term cash flow
- confidence that payment will arrive

Do not invent missing payment history.
Return a simple table with invoice, amount, days overdue, rationale, and recommended human action.

Data:
[PASTE DATA HERE]
```

## 3. Suspicious payment request review

```text
Review the following payment instruction for risk indicators.
Look for:
- bank-account changes
- urgency or secrecy
- mismatched names or invoice information
- new beneficiaries
- lookalike domains or unusual message patterns
- requests to bypass standard approval checks

Do not conclude fraud has occurred.
Return:
1. observed risk indicators
2. missing information
3. verification steps
4. risk level: low, medium, or high
5. recommendation to pause and verify with a trusted contact

Payment request:
[PASTE REQUEST HERE]
```

## 4. Scenario planning

```text
Using only the information below, compare three cash-flow scenarios:
A. customer pays on the expected date
B. customer pays 14 days late
C. customer pays 30 days late

Show the projected cash balance in each case and identify whether the balance falls below the minimum reserve.
Label all outputs as planning estimates, not guaranteed outcomes.

Data:
[PASTE DATA HERE]
```
