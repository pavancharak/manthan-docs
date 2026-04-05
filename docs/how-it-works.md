# How It Works

Manthan executes decisions through a **deterministic pipeline**.

Not probabilistic.  
Not approximate.  
Not best-effort.  

**Deterministic.**

---

## The Flow

```mermaid
flowchart LR
    A[Input] --> B[Canonicalization]
    B --> C[Decision Engine]
    C --> D[Intelligence Layer]
    D --> E[Enforcement]
Step 1 — Canonicalization

Goal: Remove ambiguity from input

Keys are sorted
Values are normalized
Structure is stabilized
Same logical input → Same canonical form
Step 2 — Deterministic Identity

Goal: Assign a stable identity

Same input → same hash
Different input → different hash
Stable across executions
Step 3 — Decision Engine

Goal: Compute outcome using rules

Fixed execution order
First-match wins
No randomness
No hidden state
IF amount > 10000 → reject
ELSE → approve
Step 4 — Intelligence Layer

Goal: Add meaning without changing outcome

Score
Confidence
Priority
Explanation

This layer does not change the decision

Step 5 — Decision Graph
Step 6 — Enforcement

Goal: Apply decision to the real world

Block GitHub PR
Reject API request
Trigger workflow
The Guarantee

Same Input → Same Decision → Same Outcome

Execution Summary
Core Principle

Determinism is not a feature.
It is the foundation.