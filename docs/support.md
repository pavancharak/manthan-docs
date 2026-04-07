<!DOCTYPE html>

<html lang="en">

<head>

&#x20; <meta charset="UTF-8" />

&#x20; <title>Support — Manthan</title>

&#x20; <meta name="viewport" content="width=device-width, initial-scale=1.0" />



&#x20; <style>

&#x20;   :root {

&#x20;     --bg: #0b0f14;

&#x20;     --card: #11161d;

&#x20;     --border: #1f2933;

&#x20;     --text: #e6edf3;

&#x20;     --muted: #8b949e;

&#x20;     --accent: linear-gradient(90deg, #58a6ff, #f97316);

&#x20;   }



&#x20;   body {

&#x20;     margin: 0;

&#x20;     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

&#x20;     background: radial-gradient(circle at top, #0f1620, #0b0f14);

&#x20;     color: var(--text);

&#x20;     display: flex;

&#x20;     align-items: center;

&#x20;     justify-content: center;

&#x20;     min-height: 100vh;

&#x20;     text-align: center;

&#x20;   }



&#x20;   .container {

&#x20;     max-width: 800px;

&#x20;     padding: 40px 20px;

&#x20;   }



&#x20;   h1 {

&#x20;     font-size: 42px;

&#x20;     margin-bottom: 10px;

&#x20;   }



&#x20;   .subtitle {

&#x20;     background: var(--accent);

&#x20;     -webkit-background-clip: text;

&#x20;     -webkit-text-fill-color: transparent;

&#x20;     font-weight: 600;

&#x20;     margin-bottom: 20px;

&#x20;   }



&#x20;   p {

&#x20;     color: var(--muted);

&#x20;     margin-bottom: 30px;

&#x20;     font-size: 16px;

&#x20;   }



&#x20;   .card {

&#x20;     background: var(--card);

&#x20;     border: 1px solid var(--border);

&#x20;     border-radius: 14px;

&#x20;     padding: 30px;

&#x20;     margin-top: 20px;

&#x20;   }



&#x20;   .buttons {

&#x20;     display: flex;

&#x20;     gap: 12px;

&#x20;     flex-wrap: wrap;

&#x20;     justify-content: center;

&#x20;     margin-top: 20px;

&#x20;   }



&#x20;   .button {

&#x20;     padding: 12px 18px;

&#x20;     border-radius: 8px;

&#x20;     text-decoration: none;

&#x20;     font-weight: 600;

&#x20;     font-size: 14px;

&#x20;     border: 1px solid var(--border);

&#x20;     transition: all 0.2s ease;

&#x20;   }



&#x20;   .primary {

&#x20;     background: var(--accent);

&#x20;     color: white;

&#x20;     border: none;

&#x20;   }



&#x20;   .secondary {

&#x20;     background: #161b22;

&#x20;     color: var(--text);

&#x20;   }



&#x20;   .button:hover {

&#x20;     transform: translateY(-2px);

&#x20;     opacity: 0.95;

&#x20;   }



&#x20;   .note {

&#x20;     margin-top: 25px;

&#x20;     font-size: 14px;

&#x20;     color: var(--muted);

&#x20;     line-height: 1.6;

&#x20;   }



&#x20;   .highlight {

&#x20;     color: #e6edf3;

&#x20;     font-weight: 600;

&#x20;   }



&#x20;   .footer {

&#x20;     margin-top: 60px;

&#x20;     font-size: 13px;

&#x20;     color: #6e7681;

&#x20;   }

&#x20; </style>

</head>



<body>

&#x20; <div class="container">



&#x20;   <h1>Support</h1>

&#x20;   <div class="subtitle">Deterministic Systems Require Deterministic Reports</div>



&#x20;   <p>

&#x20;     Manthan enforces decisions as system truth.

&#x20;     If something behaves unexpectedly, it must be reproducible.

&#x20;   </p>



&#x20;   <div class="card">



&#x20;     <div class="buttons">



&#x20;       <a class="button primary"

&#x20;          href="https://github.com/dip-protocol/manthanos/issues/new?template=bug\_report.md"

&#x20;          target="\_blank">

&#x20;         🐞 Report Bug

&#x20;       </a>



&#x20;       <a class="button secondary"

&#x20;          href="https://github.com/dip-protocol/manthanos/issues/new?template=contract\_issue.md"

&#x20;          target="\_blank">

&#x20;         ⚙️ Contract Issue

&#x20;       </a>



&#x20;       <a class="button secondary"

&#x20;          href="https://github.com/dip-protocol/manthanos/issues/new?template=feature\_request.md"

&#x20;          target="\_blank">

&#x20;         💡 Feature Request

&#x20;       </a>



&#x20;     </div>



&#x20;     <div class="note">

&#x20;       <span class="highlight">Include:</span><br>

&#x20;       • Pull request link<br>

&#x20;       • Contract reference<br>

&#x20;       • Decision output<br>

&#x20;       • Trace<br><br>



&#x20;       Same input should produce the same result.<br>

&#x20;       If it does not, this is a system fault.

&#x20;     </div>



&#x20;   </div>



&#x20;   <div class="footer">

&#x20;     Manthan — Decision Infrastructure

&#x20;   </div>



&#x20; </div>

</body>

</html>

