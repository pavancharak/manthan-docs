\# Architecture



Manthan is a \*\*deterministic decision infrastructure\*\* built as layered components.



\---



\## System Flow



```mermaid

flowchart TD

&#x20;   A\[Input] --> B\[Canonicalization]

&#x20;   B --> C\[Decision Engine]

&#x20;   C --> D\[Intelligence Layer]

&#x20;   D --> E\[Enforcement]

```



\---



\## Execution Pipeline



```mermaid

flowchart TD

&#x20;   I\[Raw Input] --> C1\[Canonicalization]

&#x20;   C1 --> H\[Hash Generation]

&#x20;   H --> D1\[Decision Engine]

&#x20;   D1 --> I1\[Intelligence Layer]

&#x20;   I1 --> O\[Final Output]

&#x20;   O --> E1\[Enforcement]

```



\---



\## Decision Graph Example



```mermaid

flowchart LR

&#x20;   A\[Node A] --> B\[Node B]

&#x20;   A --> C\[Node C]

&#x20;   B --> D\[Final Decision]

&#x20;   C --> D

```



\---



\## Component Overview



\### Canonicalization

\*\*Purpose:\*\* Normalize input into a stable format



\- Sort keys  

\- Normalize values  

\- Remove ambiguity  



\*\*Output:\*\* Stable hash



\---



\### Decision Engine

\*\*Purpose:\*\* Core decision computation



\- Rule-based  

\- Fixed execution order  

\- First-match wins  

\- No randomness  



\---



\### Intelligence Layer

\*\*Purpose:\*\* Add structured metadata



\- Score  

\- Confidence  

\- Priority  

\- Explanation  



\---



\### Decision Graphs

\*\*Purpose:\*\* Handle multi-step dependencies



\- DAG only  

\- Topological execution  

\- No cycles  



\---



\### Contracts

\*\*Purpose:\*\* Define decision behavior



\- Versioned  

\- Immutable  

\- Auditable  



\---



\### Enforcement

\*\*Purpose:\*\* Apply decisions externally



\- GitHub PR blocking  

\- API enforcement  

\- Workflow control  



\---



\## System Guarantee



> \*\*Same Input → Same Output → Always\*\*



\---



\## Design Principles



\- Determinism over intelligence  

\- Explicit over implicit  

\- Versioned over mutable  

\- Auditability over performance  

