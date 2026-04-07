<h1 style="text-align:center;">API</h1>

<p style="text-align:center; font-size:18px;">
External interface for interacting with Manthan.
</p>

<br>

<hr>

<h2 style="text-align:center;">Purpose</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
The API receives events, executes the decision engine, and returns results.
<br><br>
It acts as the entry point into the system.
</p>

<br>

<hr>

<h2 style="text-align:center;">Endpoints</h2>

<pre>
GET /health
POST /internal/event
</pre>

<br>

<hr>

<h2 style="text-align:center;">Health Check</h2>

<pre>
GET /health
</pre>

<p style="text-align:center;">
Returns system status.
</p>

<pre>
{
  "status": "ok"
}
</pre>

<br>

<hr>

<h2 style="text-align:center;">Event Processing</h2>

<pre>
POST /internal/event
</pre>

<p style="text-align:center;">
Processes incoming events (e.g. GitHub PR).
</p>

<br>

<hr>

<h2 style="text-align:center;">Input</h2>

<p style="text-align:center;">
Structured event payload.
</p>

<pre>
{
  eventPayload: { ... },
  contractId: "..."
}
</pre>

<br>

<hr>

<h2 style="text-align:center;">Output</h2>

<pre>
{
  decision: {
    status: "pass | fail",
    failedStep: "..."
  },
  trace: { ... },
  explanation: { ... }
}
</pre>

<br>

<hr>

<h2 style="text-align:center;">Behavior</h2>

<div style="text-align:center; line-height:1.8;">
Receives event<br>
Loads contract<br>
Runs decision engine<br>
Generates explanation<br>
Returns result
</div>

<br>

<hr>

<h2 style="text-align:center;">Determinism</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
The API does not introduce any non-determinism.
<br><br>
It strictly passes inputs to the engine and returns outputs.
</p>

<br>

<hr>

<h2 style="text-align:center;">Constraints</h2>

<div style="text-align:center; line-height:1.8;">
No mutation of contract<br>
No external logic injection<br>
No randomness<br>
No hidden processing
</div>

<br>

<hr>

<h2 style="text-align:center;">Summary</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
The API provides a deterministic interface to the Manthan system,
ensuring that every decision request produces a consistent and traceable result.
</p>