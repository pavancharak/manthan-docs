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

Component Overview

Canonicalization



Purpose: Normalize input into a stable format



Sort keys

Normalize values

Remove ambiguity



Output: Stable hash



Decision Engine



Purpose: Core decision computation



Rule-based

Fixed execution order

First-match wins

No randomness

Intelligence Layer



Purpose: Add structured metadata



Score

Confidence

Priority

Explanation

Decision Graphs



Purpose: Handle multi-step dependencies



DAG only

Topological execution

No cycles

Contracts



Purpose: Define decision behavior



Versioned

Immutable

Auditable

Enforcement



Purpose: Apply decisions externally



GitHub PR blocking

API enforcement

Workflow control

Execution Pipeline

System Guarantee



Same Input → Same Output → Always



Design Principles

Determinism over intelligence

Explicit over implicit

Versioned over mutable

Auditability over performance

