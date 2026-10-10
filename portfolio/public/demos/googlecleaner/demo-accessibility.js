"use strict";

// Focus containment for the adapted extension overlays, including stacked review/confirm.
(() => {
  const main = document.querySelector("main");
  const header = document.querySelector(".demo-header");
  const review = document.querySelector("#reviewOverlay");
  const confirm = document.querySelector("#confirmOverlay");
  let previous = null;
  function activeOverlay() {
    if (!confirm.classList.contains("hidden")) return confirm;
    if (!review.classList.contains("hidden")) return review;
    return null;
  }
  function sync() {
    const active = activeOverlay();
    main.inert = !!active;
    header.inert = !!active;
    review.inert = active === confirm;
    if (active !== previous) {
      if (active === review) document.querySelector("#reviewCloseBtn").focus();
      if (active === confirm) document.querySelector("#confirmCancelBtn").focus();
      if (!active && previous) document.querySelector("#reviewSelectedBtn").focus();
      previous = active;
    }
  }
  const observer = new MutationObserver(sync);
  for (const overlay of [review, confirm]) observer.observe(overlay, { attributes: true, attributeFilter: ["class"] });
  document.addEventListener("keydown", (event) => {
    const active = activeOverlay();
    if (!active || event.key !== "Tab") return;
    const controls = [...active.querySelectorAll("button:not(:disabled), input:not(:disabled), a[href]")].filter((node) => node.getClientRects().length);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  document.querySelector("#resetDemo").addEventListener("click", () => location.reload());
})();
