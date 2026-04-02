\# Example Walkthrough



This example shows how a decision flows through Manthan.



\---



\## Step 1: Input



```json

{

&#x20; "risk": 8,

&#x20; "amount": 12000,

&#x20; "type": "loan"

}

Step 2: Canonicalization



Transform input into deterministic format:



{

&#x20; "amount": 12000,

&#x20; "risk": 8,

&#x20; "type": "loan"

}

Keys sorted

Values normalized

Step 3: Decision Engine



Rules evaluated in fixed order:



Rule 1: risk > 7 → REJECT

Rule 2: amount > 10000 → REVIEW

Rule 3: default → APPROVE



Evaluation:



risk = 8 → matches Rule 1

Step 4: Decision Output

{

&#x20; "decision": "REJECT"

}

Step 5: Intelligence Layer



Enhance decision:



{

&#x20; "score": 85,

&#x20; "confidence": 0.85,

&#x20; "priority": "HIGH"

}

Step 6: Final Output

{

&#x20; "decision": "REJECT",

&#x20; "score": 85,

&#x20; "confidence": 0.85,

&#x20; "priority": "HIGH"

}

Step 7: Enforcement



Example:



GitHub PR is blocked

Workflow is stopped

Full Flow

Guarantee



Same input → Same output → Always

