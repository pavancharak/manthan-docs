<h1 style="text-align:center;">PR Gate</h1>

<p style="text-align:center; font-size:18px;">
Enforced decision layer for GitHub pull requests.
</p>

<br>

<hr>

<h2 style="text-align:center;">What It Does</h2>

<div style="text-align:center; line-height:1.8;">
Validates PRs against contracts<br>
Blocks unsafe or incomplete changes<br>
Explains decisions clearly<br>
Enforces outcomes automatically
</div>

<br>

<hr>

<h2 style="text-align:center;">How It Works</h2>

<pre>
Pull Request → Contract → Decision Engine → Enforcement
</pre>

<p style="text-align:center;">
Every PR is evaluated deterministically before merge.
</p>

<br>

<hr>

<h2 style="text-align:center;">Example</h2>

<p style="text-align:center;">
A pull request without description:
</p>

<pre>
Decision: FAIL
Step: base_rules
Reason: missing PR description
</pre>

<br>

<hr>

<h2 style="text-align:center;">Enforcement</h2>

<div style="text-align:center; line-height:1.8;">
GitHub Check Runs<br>
Commit Status<br>
Pull Request Comments
</div>

<br>

<hr>

<h2 style="text-align:center;">Result</h2>

<div style="text-align:center; line-height:1.8;">
No silent failures<br>
No ambiguity in reviews<br>
No bypassing rules<br>
Consistent decision enforcement
</div>

<br>

<hr>

<h2 style="text-align:center;">Why It Matters</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Code review today is subjective and inconsistent.<br><br>

Manthan converts it into:
</p>

<ul>
  <li>Deterministic validation</li>
  <li>Traceable reasoning</li>
  <li>Enforced outcomes</li>
</ul>

<br>

<hr>

<h2 style="text-align:center;">Install</h2>

<p style="text-align:center;">
<a href="https://github.com/apps/manthan-pr-gate" target="_blank">
Install Manthan PR Gate →
</a>
</p>

<br>

<hr>

<h2 style="text-align:center;">Summary</h2>

<p style="text-align:center; max-width:720px; margin:auto;">
Manthan PR Gate ensures every pull request decision is:
<br><br>
<strong>deterministic, explainable, and enforced.</strong>
</p>