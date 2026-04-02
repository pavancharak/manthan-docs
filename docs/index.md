# Manthan

## Deterministic Decision Operating System for AI

**Build AI systems that are predictable, auditable, and enforceable.**

---

## The Problem

AI systems today are **non-deterministic**:

- Same input → different outputs  
- No traceability  
- No enforcement  
- No system guarantees  

---

## The Solution

Manthan introduces a **deterministic decision layer**.

```mermaid
flowchart LR

A[Input] --> B[Canonicalization] --> C[Decision Engine] --> D[Intelligence Layer] --> E[Enforcement]

classDef main fill:#020617,stroke:#60a5fa,stroke-width:3px,color:#ffffff;
class A,B,C,D,E main;
```

---

## Core Principle

> **Same Input → Same Output → Always**

---

## What Manthan Provides

### Deterministic Execution
- Rule-based decisions  
- Fixed execution order  
- No randomness  

### Decision Governance
- Versioned contracts  
- Immutable logic  
- Full audit trail  

### Enforcement Layer
- GitHub PR blocking  
- API enforcement  
- Workflow control  

---

## How It Works

1. Canonicalize input  
2. Evaluate decision rules  
3. Add intelligence (score, explanation)  
4. Enforce outcome  

---

## Explore

- [Architecture](architecture.md)
- [How It Works](how-it-works.md)
- [API Reference](api.md)
- [Decision Graphs](graphs.md)
- [Contracts](contracts.md)

---

## System Guarantee

> **Every decision is traceable, auditable, and built for trust.**