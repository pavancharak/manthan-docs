<h1 style="text-align:center;">Decision Engine</h1>

<p style="text-align:center; font-size:18px;">
Deterministic execution core of Manthan.
</p>

<br>

<hr>

<h2 style="text-align:center;">Purpose</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
The decision engine evaluates inputs against contracts and produces:
<br><br>
<strong>a deterministic outcome with a full execution trace.</strong>
</p>

<br>

<hr>

<h2 style="text-align:center;">Execution Pipeline</h2>

<pre>
contract_validation
→ determinism_check
→ boundary_check
→ intent_alignment
→ base_rules
</pre>

<p style="text-align:center;">
Each step is executed in a fixed order.  
Failure at any step stops execution immediately.
</p>

<br>

<hr>

<h2 style="text-align:center;">Step Breakdown</h2>

<p style="text-align:center; max-width:720px; margin:auto;">

<strong>contract_validation</strong><br>
Ensures contract structure and rules are valid.<br><br>

<strong>determinism_check</strong><br>
Prevents forbidden patterns and non-deterministic behavior.<br><br>

<strong>boundary_check</strong><br>
Ensures execution stays within defined system boundaries.<br><br>

<strong>intent_alignment</strong><br>
Validates that changes match declared intent.<br><br>

<strong>base_rules</strong><br>
Applies core rule evaluation defined by the contract.
</p>

<br>

<hr>

<h2 style="text-align:center;">Execution Properties</h2>

<div style="text-align:center; line-height:1.8;">
Fixed step order<br>
Fail-fast execution<br>
No randomness<br>
No external calls<br>
No hidden state
</div>

<br>

<hr>

<h2 style="text-align:center;">Output Structure</h2>

<pre>
{
  decision: {
    status: "pass | fail",
    failedStep: "..."
  },
  trace: {
    evaluationSteps: [...]
  }
}
</pre>

<br>

<hr>

<h2 style="text-align:center;">Determinism Guarantee</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
For the same:
<br>
Input + Contract
<br><br>
The engine will always produce:
<br><br>
<strong>the exact same output.</strong>
</p>

<br>

<hr>

<h2 style="text-align:center;">What This Is NOT</h2>

<div style="text-align:center; line-height:1.8;">
Not AI generation<br>
Not probabilistic reasoning<br>
Not heuristic scoring<br>
Not rule guessing
</div>

<br>

<hr>

<h2 style="text-align:center;">What This IS</h2>

<div style="text-align:center; line-height:1.8;">
Deterministic evaluation<br>
Contract-driven execution<br>
Fully traceable reasoning<br>
Enforced decision outcomes
</div>

<br>

<hr>

<h2 style="text-align:center;">Summary</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
The decision engine ensures that every decision in Manthan is:
<br><br>
<strong>deterministic, explainable, and auditable by design.</strong>
</p>