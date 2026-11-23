// Light/dark theme. The site opens in the warm light theme for everyone; dark is used
// only after the visitor chooses it with the header switch. Loaded in <head> without
// defer, so a saved choice applies before the first paint. The choice is kept in
// localStorage: not a cookie, and never sent to a server.
(() => {
  const root = document.documentElement;
  const KEY = "theme";
  const PAPER = { light: "#F7F0E6", dark: "#1E1815" };

  const read = () => {
    try { return localStorage.getItem(KEY); } catch { return null; }
  };
  const save = (theme) => {
    // If storage is blocked, the choice lasts until the next page load.
    try { localStorage.setItem(KEY, theme); } catch { /* ignore */ }
  };
  const apply = (theme) => {
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = PAPER[theme];
  };
  const current = () => (root.dataset.theme === "dark" ? "dark" : "light");

  if (read() === "dark") apply("dark");

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".theme-toggle");
    if (!button) return;

    const sync = () => {
      const dark = current() === "dark";
      button.setAttribute("aria-pressed", String(dark));
      button.title = dark ? button.dataset.titleLight : button.dataset.titleDark;
    };

    sync();
    button.hidden = false;
    button.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      apply(next);
      save(next);
      sync();
    });
  });
})();
