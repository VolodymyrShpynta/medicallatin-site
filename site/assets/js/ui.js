// Small enhancements on every page: the phone menu, the hero figures counting up and
// the dots under the swipeable reviews. Without JavaScript the menu stays open as a
// plain row of links, the figures show their final values and the reviews are a list.
(() => {
  const en = document.documentElement.lang === "en";
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Phone menu: a ☰ button that opens the navigation as a drawer.
  const header = document.querySelector(".site-header");
  const nav = header?.querySelector(".nav");
  if (header && nav) {
    nav.id = nav.id || "site-nav";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "menu-toggle";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", nav.id);
    button.innerHTML =
      '<svg class="menu-toggle__open" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
      '<svg class="menu-toggle__close" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>' +
      `<span class="visually-hidden">${en ? "Menu" : "Меню"}</span>`;
    const anchor = header.querySelector(".theme-toggle") || header.querySelector(".lang-switch");
    anchor.after(button);
    header.classList.add("has-menu");

    const set = (open) => {
      header.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    };
    button.addEventListener("click", () => set(!header.classList.contains("is-open")));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && header.classList.contains("is-open")) {
        set(false);
        button.focus();
      }
    });
    document.addEventListener("click", (e) => { if (!header.contains(e.target)) set(false); });
  }

  // Hero figures count up the first time they come into view (17 років, 80 %).
  // Screen readers get the final text; the moving number is hidden from them.
  const figures = Array.from(document.querySelectorAll(".metrics dd")).filter((dd) => {
    const m = dd.textContent.match(/\d+/);
    return m && Number(m[0]) < 1000 && !dd.textContent.includes("/");
  });
  if (figures.length && !calm && "IntersectionObserver" in window) {
    const runs = figures.map((dd) => {
      const text = dd.textContent;
      const target = Number(text.match(/\d+/)[0]);
      const shown = document.createElement("span");
      shown.setAttribute("aria-hidden", "true");
      const spoken = document.createElement("span");
      spoken.className = "visually-hidden";
      spoken.textContent = text;
      dd.replaceChildren(shown, spoken);
      const paint = (n) => { shown.textContent = text.replace(/\d+/, String(n)); };
      paint(0);
      return () => {
        const start = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - start) / 1200);
          paint(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
    });
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        runs.forEach((run) => run());
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(figures[0].closest(".metrics"));
  }

  // Reviews: dots that follow the swipeable row on phones; tapping one scrolls to it.
  document.querySelectorAll(".quotes").forEach((row) => {
    const items = Array.from(row.children);
    if (items.length < 2) return;
    const dots = document.createElement("div");
    dots.className = "swipe-dots";
    dots.setAttribute("aria-hidden", "true");
    const marks = items.map((item) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => {
        row.scrollTo({ left: item.offsetLeft - parseFloat(getComputedStyle(row).paddingLeft), behavior: calm ? "auto" : "smooth" });
      });
      return dot;
    });
    dots.append(...marks);
    row.after(dots);

    const mark = () => {
      const left = row.scrollLeft;
      let current = 0;
      items.forEach((item, i) => {
        if (item.offsetLeft - left < item.offsetWidth / 2) current = i;
      });
      if (left + row.clientWidth >= row.scrollWidth - 2) current = items.length - 1;
      marks.forEach((m, i) => m.classList.toggle("is-current", i === current));
    };
    row.addEventListener("scroll", () => requestAnimationFrame(mark), { passive: true });
    mark();
  });
})();
