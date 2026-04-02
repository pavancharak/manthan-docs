# Architecture

Manthan is a **deterministic decision infrastructure** built as layered components with strict execution guarantees.

---

## System Flow

```mermaid
flowchart LR

A[Input] --> B[Canonicalization] --> C[Decision Engine] --> D[Intelligence Layer] --> E[Enforcement]

A -.-> N1[Normalize]
B -.-> N2[Evaluate Rules]
C -.-> N3[Score]
D -.-> N4[Execute]

classDef main fill:#020617,stroke:#60a5fa,stroke-width:3px,color:#ffffff;
classDef note fill:#020617,stroke:#64748b,stroke-width:1px,color:#9ca3af;

class A,B,C,D,E main;
class N1,N2,N3,N4 note;
```

---

## Execution Pipeline

```mermaid
flowchart LR

I[Input] --> C[Canonicalization] --> H[Deterministic Hash] --> D[Decision Engine] --> L[Intelligence Layer] --> O[Output] --> E[Enforcement]

I -.-> N1[Normalize]
C -.-> N2[Hash]
H -.-> N3[Match Rules]
D -.-> N4[Score]
L -.-> N5[Final Decision]
O -.-> N6[Execute]

classDef main fill:#020617,stroke:#60a5fa,stroke-width:3px,color:#ffffff;
classDef note fill:#020617,stroke:#64748b,stroke-width:1px,color:#9ca3af;

class I,C,H,D,L,O,E main;
class N1,N2,N3,N4,N5,N6 note;
```

---

## Decision Graph (Dependency Execution)

```mermaid
flowchart LR

A[Input Check] --> B[Risk Evaluation]
A --> C[Fraud Detection]

B --> D[Decision]
C --> D

D --> E[Final Action]

classDef node fill:#020617,stroke:#a78bfa,stroke-width:3px,color:#ffffff;
class A,B,C,D,E node;
```

---

## System Architecture (Layered View)

```mermaid
flowchart LR

subgraph InputLayer["Input Layer"]
I1[Raw Input]
C1[Canonicalization]
end

subgraph Core["Decision Core"]
D1[Decision Engine]
L1[Intelligence Layer]
G1[Decision Graph Engine]
end

subgraph Governance["Governance"]
K1[Contracts]
A1[Audit Log]
end

subgraph Execution["Execution"]
E1[Enforcement]
end

I1 --> C1 --> D1 --> L1 --> E1

D1 --> G1
G1 --> D1

D1 --> K1
K1 --> D1

D1 --> A1

classDef input fill:#020617,stroke:#22c55e,stroke-width:3px,color:#ffffff;
classDef core fill:#020617,stroke:#60a5fa,stroke-width:3px,color:#ffffff;
classDef gov fill:#020617,stroke:#f59e0b,stroke-width:3px,color:#ffffff;
classDef exec fill:#020617,stroke:#a78bfa,stroke-width:3px,color:#ffffff;

class I1,C1 input;
class D1,L1,G1 core;
class K1,A1 gov;
class E1 exec;
```

---

## Component Overview

### Canonicalization
**Purpose:** Normalize input into a stable format

- Sort keys  
- Normalize values  
- Remove ambiguity  

**Output:** Stable hash

---

### Decision Engine
**Purpose:** Core decision computation

- Rule-based  
- Fixed execution order  
- First-match wins  
- No randomness  

---

### Intelligence Layer
**Purpose:** Add structured metadata

- Score  
- Confidence  
- Priority  
- Explanation  

---

### Decision Graphs
**Purpose:** Handle multi-step dependencies

- DAG only  
- Topological execution  
- No cycles  

---

### Contracts
**Purpose:** Define decision behavior

- Versioned  
- Immutable  
- Auditable  

---

### Enforcement
**Purpose:** Apply decisions externally

- GitHub PR blocking  
- API enforcement  
- Workflow control  

---

## System Properties

- Deterministic execution (no randomness)  
- Immutable contract-based logic  
- Full auditability via append-only logs  
- Graph-based dependency resolution  

---

## System Guarantee

> **Same Input → Same Output → Always**

---

## Design Principles

- Determinism over intelligence  
- Explicit over implicit  
- Versioned over mutable  
- Auditability over performance  