Contracts define decision behavior.

## Example

```

intent: "fraud_detection"

inputs:
  amount: number

behavior:
  rules:
    - condition: "amount > 10000"
      action: "reject"

    - condition: "true"
      action: "approve"