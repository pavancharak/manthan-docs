# Contracts

Contracts define decision behavior.

---

## Example

```yaml
intent: "fraud_detection"

inputs:
  amount: number

behavior:
  rules:
    - condition: "amount > 10000"
      action: "reject"

    - condition: "true"
      action: "approve"
```

---

## Rules

- Deterministic  
- Order matters (top → bottom evaluation)  
- First matching rule applies  
- No ambiguity  

---

## Guarantees

- Same input → same output  
- No randomness  
- No side effects  

---

## Core Statement

Contracts are the single source of truth for decisions.