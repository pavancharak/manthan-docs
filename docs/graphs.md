\# Decision Graphs



Defines dependency-based execution.



\---



\## Graph



```mermaid

flowchart LR



A\[Input] --> B\[Risk]

A --> C\[Fraud]

B --> D\[Decision]

C --> D



classDef main fill:#020617,stroke:#a78bfa,stroke-width:3px,color:#ffffff;

class A,B,C,D main;

```



\---



\## Rules



\- DAG only  

\- No cycles  

\- Fixed order  



\---



\## Guarantee



> Deterministic dependency execution

