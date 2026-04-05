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

Every decision begins by transforming input into a stable and comparable form.

What happens
Keys are sorted
Values are normalized
Structure is stabilized
Result
Same logical input → Same canonical form
Step 2 — Deterministic Identity

Goal: Assign a stable identity to input

Manthan converts canonical input into a deterministic hash.

Properties
Same input → same hash
Different input → different hash
Stable across executions
Why this matters

This hash becomes the anchor for traceability.

Step 3 — Decision Engine

Goal: Compute outcome using rules

This is where decisions are made — not suggested.

Properties
Fixed execution order
First-match wins
No randomness
No hidden state
Example
IF amount > 10000 → reject
ELSE → approve
Result

A deterministic decision.

Step 4 — Intelligence Layer

Goal: Add meaning without changing outcome

This layer enriches the decision with structured metadata.

Adds
Score
Confidence
Priority
Explanation
Critical constraint

This layer does not change the decision

Step 5 — Decision Graph

Goal: Handle multi-step dependencies

Example
Step 6 — Enforcement

Goal: Apply decision to the real world

Examples
Block GitHub PR
Reject API request
Trigger workflow
Result

Real-world effect

The Guarantee

Manthan guarantees:

Same Input → Same Decision → Same Outcome

Always.

Why This Matters

Without determinism:

Decisions cannot be trusted
Systems cannot be audited
Outcomes cannot be enforced

With Manthan:

Every decision is traceable
Every outcome is predictable
Every action is enforceable
Execution Summary
Core Principle

Determinism is not a feature.
It is the foundation.