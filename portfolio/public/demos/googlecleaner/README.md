# GoogleCleaner browser-only demonstration

Adapted from /Users/julso/Developer/googleCleaner/extension at d201798 plus its
existing local changes, inspected October 9, 2026. No changes to that project.
Original repository: https://github.com/julsoyola/googleCleaner

- popup.css, lib.js, and icons retain the source implementation.
- popup.html adds sample labels, viewport/CSP, reset, and adapter scripts.
- popup.js routes Drive reads to mock-adapter.js and shadows chrome with
  the mock API. Rolling date filters use a fixed October 9, 2026 reference.
  Job labels explicitly mark simulations. Review deselection restores focus. No native background.js is loaded.
- mock-adapter.js contains fictional files/account, in-memory job snapshots,
  deterministic first-item failure, simulated progress, and retry.
- demo-accessibility.js adds focus containment and reset.
- demo.css adapts popup sizing and overlays for the browser frame.

No OAuth, credential retrieval, real Chrome API calls, Drive requests, or
real file operations. CSP connect-src 'none' blocks network connections.
The iframe sandbox permits scripts only. Job state ends when the frame is
reloaded or closed. This does not emulate Chrome service worker suspension,
persistent checkpoints, actual alarms, or live Drive error/backoff behavior.
