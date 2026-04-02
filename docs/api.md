\# API Reference



Manthan exposes a deterministic decision endpoint.



\---



\## Endpoint





POST /decide





\---



\## Request



\### Headers



``` id="3s3md7"

Content-Type: application/json

Body

{

&#x20; "risk": 8,

&#x20; "amount": 12000,

&#x20; "type": "loan"

}

Processing Pipeline

Input → Canonicalization → Decision Engine → Intelligence → Output

``` id="3i9f2k"



\---



\## Response



```json

{

&#x20; "decision": "REJECT",

&#x20; "score": 85,

&#x20; "confidence": 0.85,

&#x20; "priority": "HIGH"

}

Deterministic Guarantees

Same input → same output

No randomness

No time dependency

Rule order is fixed

Error Handling

Invalid Input

{

&#x20; "error": "INVALID\_SCHEMA"

}

Unsupported Fields

{

&#x20; "error": "UNSUPPORTED\_FIELD"

}

Example Request

curl -X POST http://localhost:3000/decide \\

&#x20; -H "Content-Type: application/json" \\

&#x20; -d '{

&#x20;   "risk": 8,

&#x20;   "amount": 12000,

&#x20;   "type": "loan"

&#x20; }'

Example Response

{

&#x20; "decision": "REJECT",

&#x20; "score": 85,

&#x20; "confidence": 0.85,

&#x20; "priority": "HIGH"

}

Contract Versioning



Every decision is tied to a version:



{

&#x20; "version": "v1"

}

Notes

Stateless execution

Idempotent requests

Fully auditable outputs

