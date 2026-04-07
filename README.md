<p align="center">

&#x20; <img src="docs/assets/banner.png" width="100%" style="border-radius:12px;">

</p>



<h1 align="center">Manthan</h1>



<p align="center">

<strong>Decision Infrastructure</strong><br>

Deterministic, traceable, and enforceable decisions for modern systems.

</p>



<p align="center">

&#x20; <a href="https://pavancharak.github.io/manthan-docs/"><img src="https://img.shields.io/badge/docs-live-blue" /></a>

&#x20; <a href="https://manthanos.fly.dev/health"><img src="https://img.shields.io/badge/system-live-green" /></a>

&#x20; <a href="https://github.com/apps/manthan-pr-gate"><img src="https://img.shields.io/badge/github-app-install-black" /></a>

</p>



\---



\## The Problem



Modern systems — especially AI — operate in probabilistic generation.



\- Same input → different outputs  

\- No consistent reasoning  

\- No enforcement layer  



This makes them unreliable for critical systems.



\---



\## The Shift



| Generation Systems | Decision Systems |

|------------------|----------------|

| Possibilities     | Outcomes        |

| Suggestions       | Enforcement     |

| Probabilistic     | Deterministic   |

| Non-enforceable   | Auditable       |



\---



\## What Manthan Does



Manthan evaluates decisions using \*\*contracts\*\* and produces:



\- Deterministic decision  

\- Full execution trace  

\- Human-readable explanation  

\- Enforced outcome  



\---



\## How It Works





Input → Contract → Engine → Trace → Enforcement



contract\_validation

→ determinism\_check

→ boundary\_check

→ intent\_alignment

→ base\_rules





\---



\## Use Case: PR Gate



Manthan integrates with GitHub as a \*\*PR Gate\*\*:



\- Validates pull requests against contracts  

\- Blocks unsafe or incomplete changes  

\- Explains decisions clearly  



\### Example





Decision: FAIL

Step: base\_rules

Reason: missing PR description





\---



\## Architecture





contracts/

packages/core/

registry/

api/

enforcement/





\---



\## Live System



https://manthanos.fly.dev/health



\---



\## Documentation



https://manthan.systems/

\---



\## Install



https://github.com/apps/manthan-pr-gate



