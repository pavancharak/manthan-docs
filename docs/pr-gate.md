<!DOCTYPE html>

<html lang="en">

<head>

&#x20; <meta charset="UTF-8" />

&#x20; <title>PR Gate — Manthan</title>

&#x20; <meta name="viewport" content="width=device-width, initial-scale=1.0" />



&#x20; <style>

&#x20;   :root {

&#x20;     --bg: #0b0f14;

&#x20;     --card: #11161d;

&#x20;     --border: #1f2933;

&#x20;     --text: #e6edf3;

&#x20;     --muted: #8b949e;

&#x20;     --accent: linear-gradient(90deg, #58a6ff, #f97316);

&#x20;     --green: #3fb950;

&#x20;     --red: #f85149;

&#x20;   }



&#x20;   \* {

&#x20;     box-sizing: border-box;

&#x20;   }



&#x20;   body {

&#x20;     margin: 0;

&#x20;     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

&#x20;     background: radial-gradient(circle at top, #0f1620, #0b0f14);

&#x20;     color: var(--text);

&#x20;     line-height: 1.6;

&#x20;   }



&#x20;   .container {

&#x20;     max-width: 960px;

&#x20;     margin: auto;

&#x20;     padding: 80px 20px;

&#x20;   }



&#x20;   h1 {

&#x20;     font-size: 48px;

&#x20;     margin: 0;

&#x20;     font-weight: 700;

&#x20;     letter-spacing: -1px;

&#x20;   }



&#x20;   .subtitle {

&#x20;     font-size: 18px;

&#x20;     margin-top: 10px;

&#x20;     background: var(--accent);

&#x20;     -webkit-background-clip: text;

&#x20;     -webkit-text-fill-color: transparent;

&#x20;     font-weight: 600;

&#x20;   }



&#x20;   p {

&#x20;     color: var(--muted);

&#x20;     font-size: 16px;

&#x20;   }



&#x20;   .hero {

&#x20;     margin-bottom: 60px;

&#x20;   }



&#x20;   .tagline {

&#x20;     margin-top: 20px;

&#x20;     font-size: 20px;

&#x20;     font-weight: 600;

&#x20;   }



&#x20;   .divider {

&#x20;     margin: 60px 0;

&#x20;     border-top: 1px solid var(--border);

&#x20;   }



&#x20;   h2 {

&#x20;     font-size: 14px;

&#x20;     text-transform: uppercase;

&#x20;     letter-spacing: 1.5px;

&#x20;     color: var(--muted);

&#x20;     margin-bottom: 15px;

&#x20;   }



&#x20;   ul, ol {

&#x20;     padding-left: 20px;

&#x20;   }



&#x20;   li {

&#x20;     margin-bottom: 6px;

&#x20;   }



&#x20;   .card {

&#x20;     background: var(--card);

&#x20;     border: 1px solid var(--border);

&#x20;     border-radius: 14px;

&#x20;     padding: 24px;

&#x20;     margin-top: 20px;

&#x20;   }



&#x20;   .verdict {

&#x20;     font-size: 22px;

&#x20;     font-weight: bold;

&#x20;     margin-bottom: 10px;

&#x20;   }



&#x20;   .fail {

&#x20;     color: var(--red);

&#x20;   }



&#x20;   .pass {

&#x20;     color: var(--green);

&#x20;   }



&#x20;   code {

&#x20;     background: #161b22;

&#x20;     padding: 4px 8px;

&#x20;     border-radius: 6px;

&#x20;     font-size: 13px;

&#x20;   }



&#x20;   pre {

&#x20;     background: #161b22;

&#x20;     padding: 20px;

&#x20;     border-radius: 12px;

&#x20;     overflow-x: auto;

&#x20;     border: 1px solid var(--border);

&#x20;     margin-top: 15px;

&#x20;   }



&#x20;   .highlight {

&#x20;     font-weight: 600;

&#x20;     color: var(--text);

&#x20;   }



&#x20;   .footer {

&#x20;     margin-top: 80px;

&#x20;     font-size: 14px;

&#x20;     color: var(--muted);

&#x20;     text-align: center;

&#x20;   }



&#x20;   .glow {

&#x20;     color: #fff;

&#x20;     text-shadow: 0 0 12px rgba(88,166,255,0.4);

&#x20;   }

&#x20; </style>

</head>



<body>

&#x20; <div class="container">



&#x20;   <div class="hero">

&#x20;     <h1 class="glow">PR Gate</h1>

&#x20;     <div class="subtitle">Deterministic Decision Enforcement</div>



&#x20;     <p class="tagline">

&#x20;       This is not review. This is execution.

&#x20;     </p>



&#x20;     <p>

&#x20;       The PR Gate evaluates GitHub pull requests against decision contracts

&#x20;       and produces a <span class="highlight">deterministic, enforceable verdict</span>.

&#x20;     </p>

&#x20;   </div>



&#x20;   <div class="divider"></div>



&#x20;   <h2>Core Function</h2>

&#x20;   <ul>

&#x20;     <li>Resolve contract</li>

&#x20;     <li>Evaluate PR against rules</li>

&#x20;     <li>Produce verdict (PASS / FAIL)</li>

&#x20;     <li>Enforce directly in PR</li>

&#x20;   </ul>



&#x20;   <p class="highlight">Same input → same decision.</p>



&#x20;   <div class="divider"></div>



&#x20;   <h2>Execution Model</h2>

&#x20;   <ol>

&#x20;     <li>Webhook triggered</li>

&#x20;     <li>PR state ingested</li>

&#x20;     <li>Contract resolved</li>

&#x20;     <li>Evaluation executed</li>

&#x20;     <li>Verdict computed</li>

&#x20;     <li>Result enforced</li>

&#x20;   </ol>



&#x20;   <div class="divider"></div>



&#x20;   <h2>Example Verdict</h2>



&#x20;   <div class="card">

&#x20;     <div class="verdict fail">Decision: FAIL</div>



&#x20;     <p>Contract: <code>api-schema-v1</code></p>



&#x20;     <p><strong>Violations</strong></p>

&#x20;     <ul>

&#x20;       <li>Missing field <code>userId</code></li>

&#x20;       <li>Endpoint <code>/create</code> not defined</li>

&#x20;     </ul>



&#x20;     <p><strong>Trace</strong></p>

&#x20;     <ul>

&#x20;       <li>input.schema.required</li>

&#x20;       <li>endpoint.registry.match</li>

&#x20;     </ul>



&#x20;     <p>

&#x20;       evaluation\_id: <code>8f3a1c</code><br>

&#x20;       contract\_version: <code>v1</code>

&#x20;     </p>

&#x20;   </div>



&#x20;   <div class="divider"></div>



&#x20;   <h2>Output Model</h2>



&#x20;   <p class="highlight">Human Layer</p>

&#x20;   <ul>

&#x20;     <li>Verdict</li>

&#x20;     <li>Violations</li>

&#x20;     <li>Trace</li>

&#x20;   </ul>



&#x20;   <p class="highlight">Machine Layer (Canonical JSON)</p>



&#x20;   <pre>{

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

}</pre>



&#x20;   <div class="divider"></div>



&#x20;   <h2>Determinism Guarantee</h2>



&#x20;   <ul>

&#x20;     <li>Same PR</li>

&#x20;     <li>Same contract</li>

&#x20;     <li>Same repository state</li>

&#x20;   </ul>



&#x20;   <p class="highlight">Any deviation is a system fault.</p>



&#x20;   <div class="divider"></div>



&#x20;   <h2>Enforcement</h2>



&#x20;   <ul>

&#x20;     <li><span class="pass">PASS</span> → proceeds</li>

&#x20;     <li><span class="fail">FAIL</span> → blocked</li>

&#x20;   </ul>



&#x20;   <p>

&#x20;     No suggestions.<br>

&#x20;     No approximations.<br>

&#x20;     <span class="highlight">Only enforced decisions.</span>

&#x20;   </p>



&#x20;   <div class="divider"></div>



&#x20;   <h2>Positioning</h2>



&#x20;   <ul>

&#x20;     <li>Human → subjective</li>

&#x20;     <li>AI → probabilistic</li>

&#x20;     <li>CI → test-based</li>

&#x20;   </ul>



&#x20;   <p class="subtitle">

&#x20;     Manthan → Deterministic decision enforcement

&#x20;   </p>



&#x20;   <div class="divider"></div>



&#x20;   <h2>Status</h2>



&#x20;   <p>Manthan v0.2 — PR Gate (locked)</p>



&#x20;   <ul>

&#x20;     <li>GitHub App integration</li>

&#x20;     <li>Idempotent processing</li>

&#x20;     <li>Reproducible outputs</li>

&#x20;   </ul>



&#x20;   <div class="footer">

&#x20;     No runtime mutation. Versioned evolution only.

&#x20;   </div>



&#x20; </div>

</body>

</html>

