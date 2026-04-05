window.addEventListener("load", function () {
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose"
    });

    mermaid.run({
      querySelector: ".mermaid"
    });
  }
});