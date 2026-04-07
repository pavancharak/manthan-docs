<h1 style="text-align:center;">Manthan — Investor Memo</h1>

<p style="text-align:center; font-size:18px; max-width:720px; margin:auto;">
A first-principles view on decisions, systems, and why this needed to exist.
</p>

<br><hr><br>

<!-- STORY START -->
<h2 style="text-align:center;">Why I Built This</h2>

<p style="max-width:720px; margin:auto; line-height:1.8;">
I did not start by trying to build an AI system.

<br><br>

I started with a simpler observation:

<br><br>

<strong>
Software systems fail not because they cannot compute,
but because they cannot make correct decisions.
</strong>

<br><br>

Over time, I saw this pattern repeatedly.

Systems were scaling.  
Infrastructure was improving.  
AI was getting more capable.

<br><br>

But decision-making remained:

</p>

<ul style="max-width:720px; margin:auto; line-height:1.8;">
  <li>Inconsistent</li>
  <li>Non-traceable</li>
  <li>Non-enforceable</li>
</ul>

<br>

<p style="max-width:720px; margin:auto; line-height:1.8;">
This gap becomes critical as systems become more autonomous.

<br><br>

At that point, I stopped thinking in terms of AI.

And started thinking in terms of decisions.
</p>

<br><hr><br>

<h2 style="text-align:center;">Why It Is Built This Way</h2>

<p style="max-width:720px; margin:auto; line-height:1.8;">
If decisions are to be trusted, they must follow strict properties:

</p>

<ul style="max-width:720px; margin:auto; line-height:1.8;">
  <li>They must be deterministic</li>
  <li>They must be explainable</li>
  <li>They must be enforceable</li>
</ul>

<br>

<p style="max-width:720px; margin:auto; line-height:1.8;">
This led to a key design constraint:

<br><br>

<strong>No decision should depend on hidden reasoning or runtime variation.</strong>

<br><br>

Everything must be explicit.

<br><br>

That is why Manthan is built around:

</p>

<ul style="max-width:720px; margin:auto; line-height:1.8;">
  <li>Contracts (decision definition)</li>
  <li>Deterministic engine (evaluation)</li>
  <li>Trace (explanation)</li>
  <li>Enforcement (action)</li>
</ul>

<br>

<p style="max-width:720px; margin:auto; line-height:1.8;">
This is not an implementation choice.

It is a requirement for trust.
</p>

<br><hr><br>

<h2 style="text-align:center;">Who This Is For</h2>

<p style="max-width:720px; margin:auto; line-height:1.8;">
Manthan is designed for systems where decisions must be correct.

<br><br>

This includes:
</p>

<ul style="max-width:720px; margin:auto; line-height:1.8;">
  <li>Engineering systems (code enforcement)</li>
  <li>Compliance systems</li>
  <li>Risk and policy systems</li>
  <li>Autonomous systems</li>
</ul>

<br>

<p style="max-width:720px; margin:auto; line-height:1.8;">
In these systems, incorrect decisions are not acceptable.
</p>

<br><hr><br>

<h2 style="text-align:center;">The Shift</h2>

<p style="max-width:720px; margin:auto; line-height:1.8;">
Most systems today operate in probabilistic generation.

<br><br>

Manthan operates in deterministic decisioning.
</p>

<br>

<div style="
  text-align:center;
  margin:20px auto;
  padding:14px 20px;
  border-radius:12px;
  background:#020617;
  color:#ffffff;
  font-family:monospace;
  max-width:500px;
">
Generation → Decision
</div>

<br>

<p style="max-width:720px; margin:auto; line-height:1.8;">
This is not a model improvement.

It is a system-level shift.
</p>

<br><hr><br>

<h2 style="text-align:center;">The System</h2>

<p style="max-width:720px; margin:auto; line-height:1.8;">
Every decision in Manthan follows a fixed pipeline:
</p>

<div style="
  text-align:center;
  margin:20px auto;
  padding:14px 20px;
  border-radius:12px;
  background:#020617;
  color:#ffffff;
  font-family:monospace;
  max-width:420px;
">
Contract → Engine → Trace → Enforcement
</div>

<br>

<p style="max-width:720px; margin:auto; line-height:1.8;">
This ensures:
</p>

<ul style="max-width:720px; margin:auto; line-height:1.8;">
  <li>Determinism (same input → same output)</li>
  <li>Traceability (every step recorded)</li>
  <li>Enforceability (decisions applied)</li>
</ul>

<br><hr><br>

<h2 style="text-align:center;">Product (Today)</h2>

<p style="max-width:720px; margin:auto; line-height:1.8;">
The system is currently deployed as a deterministic PR Gate.

<br><br>

It evaluates pull requests against contracts and enforces outcomes.

<br><br>

It can:
</p>

<ul style="max-width:720px; margin:auto; line-height:1.8;">
  <li>Block non-compliant changes</li>
  <li>Provide full decision trace</li>
  <li>Explain decisions deterministically</li>
</ul>

<br><hr><br>

<!-- ELITE DIFFERENTIATION -->
<h2 style="text-align:center;">Differentiation</h2>

<p style="text-align:center; font-size:14px; opacity:0.6;">
Generation Systems vs Decision Systems
</p>

<br>

<div style="
  max-width:820px;
  margin:40px auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
">

  <div style="padding:22px; border-radius:16px; border:1px solid #e5e7eb;">
    <h3>Generation Systems</h3>
    <ul style="line-height:1.9;">
      <li>Probabilistic outputs</li>
      <li>Variable behavior</li>
      <li>Opaque reasoning</li>
      <li>No enforcement</li>
    </ul>
  </div>

  <div style="padding:22px; border-radius:16px; background:#020617; color:white;">
    <h3>Decision Systems (Manthan)</h3>
    <ul style="line-height:1.9;">
      <li>Deterministic decisions</li>
      <li>Fixed behavior</li>
      <li>Full traceability</li>
      <li>Enforced outcomes</li>
    </ul>
  </div>

</div>

<br><hr><br>

<h2 style="text-align:center;">Vision</h2>

<p style="max-width:720px; margin:auto; line-height:1.8;">
I see Manthan becoming the default decision layer in software systems.

<br><br>

Where every decision is:
</p>

<ul style="max-width:720px; margin:auto; line-height:1.8;">
  <li>Defined by contract</li>
  <li>Evaluated deterministically</li>
  <li>Fully traceable</li>
  <li>Enforced by design</li>
</ul>

<br><hr><br>

<h2 style="text-align:center;">Closing</h2>

<p style="max-width:720px; margin:auto; line-height:1.8;">
Manthan is not an incremental improvement.

<br><br>

It is a shift.

<br><br>

From systems that generate outputs  
to systems that make <strong>correct decisions</strong>.
</p>