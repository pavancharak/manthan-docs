\# Architecture



Manthan is a deterministic decision infrastructure composed of layered components.



\---



\## High-Level Flow



&#x20;           +------------------+

&#x20;           |      Input       |

&#x20;           +------------------+

&#x20;                     |

&#x20;                     v

&#x20;           +------------------+

&#x20;           | Canonicalization |

&#x20;           +------------------+

&#x20;                     |

&#x20;                     v

&#x20;           +------------------+

&#x20;           | Decision Engine  |

&#x20;           +------------------+

&#x20;                     |

&#x20;                     v

&#x20;           +------------------+

&#x20;           | Intelligence     |

&#x20;           +------------------+

&#x20;                     |

&#x20;                     v

&#x20;           +------------------+

&#x20;           | Enforcement      |

&#x20;           +------------------+



\---



\## Component Breakdown



\---



\### 1. Canonicalization Layer



Purpose:



\- Normalize input into a deterministic format



Rules:



\- Sort keys lexicographically  

\- Normalize strings  

\- Fix numeric precision  

\- Remove null/undefined  



Output:





Canonical Input → Stable Hash





\---



\### 2. Decision Engine



Purpose:



\- Produce the core decision



Properties:



\- Rule-based execution  

\- Fixed rule order  

\- First-match wins  

\- No randomness  



Execution:





FOR each rule:

IF condition matches:

RETURN decision





\---



\### 3. Intelligence Layer



Purpose:



\- Enhance decision with metadata



Outputs:



\- Score  

\- Confidence  

\- Priority  

\- Explanation  



Properties:



\- Deterministic scoring  

\- Static weights  



\---



\### 4. Decision Graph Engine



Purpose:



\- Handle multi-step decision dependencies



Properties:



\- DAG structure ONLY  

\- Topological execution  

\- No cycles allowed  



Flow:





Node A → Node B → Node C





\---



\### 5. Contract System



Purpose:



\- Define decision behavior



Properties:



\- Versioned  

\- Immutable  

\- Auditable  



Structure:





Intent → Inputs → Rules → Outputs





\---



\### 6. Enforcement Layer



Purpose:



\- Apply decisions externally



Examples:



\- GitHub PR blocking  

\- API response enforcement  

\- Workflow control  



\---



\## System Guarantee





Same Input → Same Output → Always





\---



\## Key Design Principles



\- Determinism over intelligence  

\- Explicit over implicit  

\- Versioned over mutable  

\- Auditability over performance  

