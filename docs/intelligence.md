# Intelligence Layer

Adds metadata without affecting decisions.

---

## Flow

```mermaid
flowchart LR
    D[Decision] --> I[Intelligence] --> O[Output]

    classDef main fill:#020617,stroke:#60a5fa,stroke-width:2px,color:#ffffff;
    class D,I,O main;
Example
{
  "decision": "reject",
  "score": 0.92,
  "confidence": "high"
}
Behavior
Enriches decision output with metadata
Does not modify or override the decision
Operates deterministically
Rules
MUST NOT change decision
Stateless
Deterministic
Boundaries
No decision authority
No side effects
No persistence
Core Statement

Explains decisions, never makes them.