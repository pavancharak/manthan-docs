Contracts define decision behavior.

## Example

```yaml
version: "1.0.0"

intent: "fraud_detection"

inputs:
  amount: number

behavior:
  rules:
    - condition: "amount > 10000"
      action: "reject"

    - condition: "true"
      action: "approve"