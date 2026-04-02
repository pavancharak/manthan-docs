# API Reference

Manthan exposes a **deterministic decision API**.

---

## Endpoint

```http
POST /v1/decision
```

---

## Request

### Headers

```http
Content-Type: application/json
```

---

### Body Schema

```json
{
  "contract_id": "string",
  "contract_version": "string",
  "input": {}
}
```

---

### Field Definitions

| Field | Type | Description |
|------|------|-------------|
| contract_id | string | Unique identifier of contract |
| contract_version | string | Immutable version |
| input | object | Raw decision input |

---

## Example Request

```json
{
  "contract_id": "risk-evaluation",
  "contract_version": "v1.0",
  "input": {
    "amount": 15000,
    "country": "high_risk"
  }
}
```

---

## Execution Flow

```mermaid
flowchart LR

I[Input] --> C[Canonicalization] --> H[Hash] --> D[Decision Engine] --> L[Intelligence] --> O[Output]

classDef main fill:#020617,stroke:#60a5fa,stroke-width:3px,color:#ffffff;
class I,C,H,D,L,O main;
```

---

## Response

### Success Response

```json
{
  "decision": "reject",
  "reason": "amount threshold exceeded",
  "confidence": 0.98,
  "contract_version": "v1.0",
  "hash": "abc123xyz"
}
```

---

### Field Definitions

| Field | Type | Description |
|------|------|-------------|
| decision | string | Final decision |
| reason | string | Explanation |
| confidence | number | Computed score |
| contract_version | string | Version used |
| hash | string | Deterministic input hash |

---

## Deterministic Guarantee

For every request:

```text
Same contract + Same input → Same response
```

---

## Error Responses

### Invalid Contract

```json
{
  "error": "contract_not_found"
}
```

---

### Invalid Input

```json
{
  "error": "invalid_input"
}
```

---

### Version Mismatch

```json
{
  "error": "contract_version_not_found"
}
```

---

## Constraints

- Contracts MUST be immutable  
- Execution order MUST be fixed  
- No randomness allowed  
- No external state dependency  

---

## Idempotency

Requests are **idempotent**:

```text
Same request → Same response → Always
```

---

## Example cURL

```bash
curl -X POST http://localhost:3000/v1/decision \
  -H "Content-Type: application/json" \
  -d '{
    "contract_id": "risk-evaluation",
    "contract_version": "v1.0",
    "input": {
      "amount": 15000,
      "country": "high_risk"
    }
  }'
```

---

## System Behavior

- No hidden state  
- No time dependency  
- Fully deterministic execution  

---

## Summary

Manthan API provides:

- Deterministic decisions  
- Versioned contracts  
- Auditable outputs  
- Enforceable actions  

---

## Core Principle

> The API does not "predict".  
> It **decides deterministically**.# API Reference

Manthan exposes a **deterministic decision API**.

---

## Endpoint

```http
POST /v1/decision
```

---

## Request

### Headers

```http
Content-Type: application/json
```

---

### Body Schema

```json
{
  "contract_id": "string",
  "contract_version": "string",
  "input": {}
}
```

---

### Field Definitions

| Field | Type | Description |
|------|------|-------------|
| contract_id | string | Unique identifier of contract |
| contract_version | string | Immutable version |
| input | object | Raw decision input |

---

## Example Request

```json
{
  "contract_id": "risk-evaluation",
  "contract_version": "v1.0",
  "input": {
    "amount": 15000,
    "country": "high_risk"
  }
}
```

---

## Execution Flow

```mermaid
flowchart LR

I[Input] --> C[Canonicalization] --> H[Hash] --> D[Decision Engine] --> L[Intelligence] --> O[Output]

classDef main fill:#020617,stroke:#60a5fa,stroke-width:3px,color:#ffffff;
class I,C,H,D,L,O main;
```

---

## Response

### Success Response

```json
{
  "decision": "reject",
  "reason": "amount threshold exceeded",
  "confidence": 0.98,
  "contract_version": "v1.0",
  "hash": "abc123xyz"
}
```

---

### Field Definitions

| Field | Type | Description |
|------|------|-------------|
| decision | string | Final decision |
| reason | string | Explanation |
| confidence | number | Computed score |
| contract_version | string | Version used |
| hash | string | Deterministic input hash |

---

## Deterministic Guarantee

For every request:

```text
Same contract + Same input → Same response
```

---

## Error Responses

### Invalid Contract

```json
{
  "error": "contract_not_found"
}
```

---

### Invalid Input

```json
{
  "error": "invalid_input"
}
```

---

### Version Mismatch

```json
{
  "error": "contract_version_not_found"
}
```

---

## Constraints

- Contracts MUST be immutable  
- Execution order MUST be fixed  
- No randomness allowed  
- No external state dependency  

---

## Idempotency

Requests are **idempotent**:

```text
Same request → Same response → Always
```

---

## Example cURL

```bash
curl -X POST http://localhost:3000/v1/decision \
  -H "Content-Type: application/json" \
  -d '{
    "contract_id": "risk-evaluation",
    "contract_version": "v1.0",
    "input": {
      "amount": 15000,
      "country": "high_risk"
    }
  }'
```

---

## System Behavior

- No hidden state  
- No time dependency  
- Fully deterministic execution  

---

## Summary

Manthan API provides:

- Deterministic decisions  
- Versioned contracts  
- Auditable outputs  
- Enforceable actions  

---

## Core Principle

> The API does not "predict".  
> It **decides deterministically**.