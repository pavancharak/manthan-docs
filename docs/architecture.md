<h1 style="text-align:center;">Architecture</h1>

<p style="text-align:center; font-size:18px;">
Deterministic system architecture for decision execution.
</p>

<br>

<hr>

<h2 style="text-align:center;">System Layers</h2>

<pre>
contracts/
packages/core/
registry/
api/
enforcement/
</pre>

<p style="text-align:center;">
Each layer has a fixed responsibility. No overlap. No mutation.
</p>

<br>

<hr>

<h2 style="text-align:center;">Layer Responsibilities</h2>

<p style="text-align:center; max-width:720px; margin:auto;">

<strong>Contracts</strong><br>
Defines rules, inputs, outputs, and constraints.<br><br>

<strong>Core Engine</strong><br>
Executes deterministic decision pipeline.<br><br>

<strong>Registry</strong><br>
Loads and validates contracts.<br><br>

<strong>API</strong><br>
Receives events and builds input payloads.<br><br>

<strong>Enforcement</strong><br>
Applies decisions to GitHub (block / approve).
</p>

<br>

<hr>

<h2 style="text-align:center;">Execution Flow</h2>

<pre>
Event → Registry → Engine → Trace → Enforcement
</pre>

<p style="text-align:center;">
Execution is linear, deterministic, and fail-fast.
</p>

<br>

<hr>

<h2 style="text-align:center;">Key Principles</h2>

<div style="text-align:center; line-height:1.8;">
No layer overrides another<br>
Contract is the single source of truth<br>
No runtime mutation<br>
No external influence on decisions
</div>

<br>

<hr>

<h2 style="text-align:center;">Determinism Guarantee</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
The system ensures:
</p>

<ul>
  <li>Same input → same output</li>
  <li>No randomness</li>
  <li>No hidden state</li>
  <li>No external dependencies in decision logic</li>
</ul>

<br>

<hr>

<h2 style="text-align:center;">Why This Architecture Matters</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Traditional systems mix logic, data, and enforcement.<br><br>

Manthan separates them cleanly, making decisions:
<br><br>
<strong>traceable, auditable, and enforceable.</strong>
</p>

<br>

<hr>

<h2 style="text-align:center;">Summary</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Manthan is built as a deterministic system where each layer has a single responsibility,
ensuring consistent and reliable decision execution.
</p>