\# PR Gate — Deterministic Decision Enforcement



The PR Gate is the enforcement layer of Manthan.



It evaluates GitHub pull requests against decision contracts and produces a deterministic verdict.



\---



\## What It Does



For every pull request:



\* Loads the relevant contract

\* Evaluates PR data against defined rules

\* Produces a verdict (PASS / FAIL)

\* Enforces the result via PR comment and status



Same input → same decision. Every time.



\---



\## Execution Flow



1\. Pull request event triggers webhook

2\. Manthan ingests PR data

3\. Contract is selected

4\. Decision engine evaluates inputs

5\. Verdict is generated

6\. Result is posted to the PR



\---



\## Example Output



\*\*Decision: FAIL\*\*



Contract: api-schema-v1



Violations:



\* Missing field `userId`

\* Endpoint `/create` not defined



Trace:



\* input.schema.required

\* endpoint.registry.match



evaluation\_id: 8f3a1c

contract\_version: v1



\---



\## Output Structure



Manthan produces both:



\### Human-readable output



\* Clear verdict

\* Violations

\* Trace



\### Machine-readable output (JSON)



```json

{

&#x20; "decision": "FAIL",

&#x20; "contract": "api-schema-v1",

&#x20; "violations": \[

&#x20;   "Missing field userId",

&#x20;   "Endpoint /create not defined"

&#x20; ],

&#x20; "trace": \[

&#x20;   "input.schema.required",

&#x20;   "endpoint.registry.match"

&#x20; ],

&#x20; "evaluation\_id": "8f3a1c",

&#x20; "contract\_version": "v1"

}

```



\---



\## Determinism Guarantee



Given:



\* Same PR

\* Same contract

\* Same repository state



The PR Gate guarantees:



\* Same verdict

\* Same violations

\* Same trace

\* Same evaluation\_id



No drift. No ambiguity.



\---



\## Enforcement Behavior



\* PASS → PR can proceed

\* FAIL → PR is blocked or flagged



The PR Gate does not suggest changes.

It enforces decisions.



\---



\## Design Principles



\* Deterministic execution

\* Contract-driven evaluation

\* Idempotent processing

\* Traceable output



\---



\## Positioning



Traditional PR review:



\* Human → subjective

\* AI → probabilistic



Manthan PR Gate:



\* Deterministic

\* Enforced

\* Reproducible



\---



\## Status



Manthan v0.2 — PR Gate (locked)



\* GitHub App integration

\* Idempotent webhook handling

\* Stable evaluation output



