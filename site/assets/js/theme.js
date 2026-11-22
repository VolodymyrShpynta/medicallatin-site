// Light/dark theme. Loaded in <head> without defer, so a saved choice applies before
// the first paint. With no saved choice, CSS follows the device setting.
// The choice is kept in localStorage: not a cookie, and never sent to a server.
(() => {
  const root = document.documentElement;
  const KEY = "theme";
  const PAPER = { light: "#F5F7F7", dark: "#171B25" };
  const deviceDark = window.matchMedia("(prefers-color-scheme: dark)");

  const read = () => {
    try { return localStorage.getItem(KEY); } catch { return null; }
  };
  const save = (theme) => {
    // If storage is blocked, the choice lasts until the next page load.
    try { localStorage.setItem(KEY, theme); } catch { /* ignore */ }
  };
  const apply = (theme) => {
    root.dataset.theme = theme;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = PAPER[theme];
    });
  };
  const current = () => root.dataset.theme || (deviceDark.matches ? "dark" : "light");

  const saved = read();
  if (saved === "light" || saved === "dark") apply(saved);

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
    deviceDark.addEventListener("change", sync);
    button.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      apply(next);
      save(next);
      sync();
    });
  });
})();
