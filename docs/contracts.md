\# Contracts



Contracts define decision behavior.



\---



\## Example



```yaml

version: "1.0.0"



intent: "fraud\_detection"



inputs:

&#x20; amount: number



behavior:

&#x20; rules:

&#x20;   - condition: "amount > 10000"

&#x20;     action: "reject"



&#x20;   - condition: "true"

&#x20;     action: "approve"

```



\---



\## Properties



\- Versioned  

\- Immutable  

\- Deterministic  



\---



\## Guarantee



> Contract defines the decision

