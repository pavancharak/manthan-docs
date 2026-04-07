<h1 style="text-align:center;">Contracts</h1>

<p style="text-align:center; font-size:18px;">
Source of truth for all decisions in Manthan.
</p>

<br>

<hr>

<h2 style="text-align:center;">Purpose</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Contracts define how decisions are made.
<br><br>
They specify inputs, outputs, rules, and constraints.
<br><br>
<strong>No decision exists outside a contract.</strong>
</p>

<br>

<hr>

<h2 style="text-align:center;">Structure</h2>

<pre>
intent
inputs
outputs
behavior
errorModel
determinism
boundaries
metadata
</pre>

<p style="text-align:center;">
Each field has a defined role. No implicit behavior.
</p>

<br>

<hr>

<h2 style="text-align:center;">What Contracts Define</h2>

<div style="text-align:center; line-height:1.8;">
What inputs are required<br>
What outputs are valid<br>
What rules must be enforced<br>
What behavior is allowed or forbidden
</div>

<br>

<hr>

<h2 style="text-align:center;">Validation</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Every contract is validated before execution.
<br><br>
Invalid contracts are rejected immediately.
</p>

<br>

<hr>

<h2 style="text-align:center;">Rules</h2>

<div style="text-align:center; line-height:1.8;">
No runtime mutation<br>
No partial loading<br>
No implicit defaults<br>
Full contract always flows into trace
</div>

<br>

<hr>

<h2 style="text-align:center;">Determinism</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Contracts explicitly define determinism constraints:
</p>

<ul>
  <li>Allowed behaviors</li>
  <li>Forbidden operations</li>
</ul>

<br>

<p style="text-align:center;">
This ensures decisions remain predictable and stable.
</p>

<br>

<hr>

<h2 style="text-align:center;">Boundaries</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Contracts define system boundaries:
</p>

<ul>
  <li>What data can be accessed</li>
  <li>What operations are restricted</li>
</ul>

<br>

<p style="text-align:center;">
This prevents uncontrolled behavior.
</p>

<br>

<hr>

<h2 style="text-align:center;">Why Contracts Matter</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Without contracts, decisions become:
</p>

<ul>
  <li>Implicit</li>
  <li>Inconsistent</li>
  <li>Unverifiable</li>
</ul>

<br>

<p style="text-align:center; max-width:720px; margin:auto;">
With contracts, decisions become:
</p>

<ul>
  <li>Explicit</li>
  <li>Deterministic</li>
  <li>Auditable</li>
</ul>

<br>

<hr>

<h2 style="text-align:center;">Summary</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Contracts define reality for decision-making in Manthan.
<br><br>
<strong>They are the single source of truth.</strong>
</p>