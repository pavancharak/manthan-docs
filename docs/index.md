/* ---------------- GLOBAL ---------------- */

body {
  letter-spacing: 0.2px;
  scroll-behavior: smooth;
}

/* ---------------- HEADINGS ---------------- */

h1 {
  font-weight: 700;
  letter-spacing: -0.5px;
}

h2 {
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 20px;
}

h3 {
  font-weight: 500;
}

/* ---------------- PARAGRAPH ---------------- */

p {
  line-height: 1.7;
  font-size: 16px;
}

/* ---------------- SECTION DIVIDER ---------------- */

hr {
  margin: 60px auto;
  width: 60%;
  opacity: 0.15;
}

/* ---------------- SAFE CENTERING ---------------- */

.md-typeset h1,
.md-typeset h2,
.md-typeset h3,
.md-typeset p {
  text-align: center;
}

/* ---------------- LIST FIX ---------------- */

.md-typeset ul,
.md-typeset ol {
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
}

.md-typeset ul {
  list-style: disc;
  padding-left: 20px;
}

.md-typeset ul li {
  margin-bottom: 6px;
}

/* ---------------- CODE BLOCK ---------------- */

pre {
  background: linear-gradient(135deg, #0b1220, #020617);
  color: #f9fafb !important;
  padding: 20px;
  border-radius: 14px;
  font-size: 15px;
  line-height: 1.7;
  overflow-x: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

pre, pre * {
  color: #f9fafb !important;
  opacity: 1 !important;
}

/* Default alignment */
.md-typeset pre {
  text-align: left;
}

/* ---------------- FLOW BLOCK (FINAL FIX) ---------------- */

.flow-block {
  text-align: center !important;
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 500;

  white-space: normal !important;   /* ✅ wrap text */
  word-break: break-word;
  overflow-x: hidden;               /* ✅ prevent horizontal scroll */
}

/* ---------------- NAVBAR ---------------- */

.md-header {
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.9);
}

/* ---------------- IMAGE ---------------- */

img {
  border-radius: 12px;
  transition: transform 0.3s ease;
  max-width: 100%;
  height: auto;
}

img:hover {
  transform: scale(1.02);
}

/* ---------------- SPACING ---------------- */

.md-typeset > * {
  margin-top: 20px;
}

/* ---------------- LINKS ---------------- */

a {
  transition: all 0.2s ease;
}

a:hover {
  opacity: 0.85;
}

/* ===================================================== */
/* ================= HERO SECTION ======================= */
/* ===================================================== */

.hero {
  text-align: center;
  padding: 80px 20px 60px;
  margin-bottom: 40px;
  background: radial-gradient(circle at top, #111827, #020617);
  border-radius: 16px;
  animation: fadeIn 0.6s ease-in-out;
}

.hero,
.hero * {
  color: #f9fafb !important;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 10px;
  letter-spacing: -1px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.4);
}

.hero-subtitle {
  font-size: 22px;
  font-weight: 600;
}

.hero-description {
  font-size: 18px;
  margin-top: 12px;
  line-height: 1.6;
}

/* CTA container */
.hero-actions {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* PRIMARY CTA */
.btn-primary {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #ffffff !important;
  padding: 14px 26px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  transition: all 0.25s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.6);
}

/* SECONDARY CTA */
.btn-secondary {
  border: 1px solid rgba(255,255,255,0.4);
  color: #e5e7eb !important;
  padding: 14px 26px;
  border-radius: 10px;
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  color: #ffffff !important;
  transform: translateY(-2px);
}

/* ---------------- ANIMATION ---------------- */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===================================================== */
/* ================= RESPONSIVE ========================= */
/* ===================================================== */

@media (max-width: 768px) {

  /* HERO */
  .hero {
    padding: 60px 16px 40px;
  }

  .hero h1 {
    font-size: 34px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-description {
    font-size: 16px;
  }

  /* BUTTONS STACK */
  .hero-actions {
    flex-direction: column;
    gap: 12px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    text-align: center;
  }

  /* FLOW BLOCK FIX */
  .flow-block {
    font-size: 14px;
    padding: 16px;
    white-space: normal !important;
  }

  /* HEADINGS */
  .md-typeset h2 {
    margin-top: 40px;
  }
}