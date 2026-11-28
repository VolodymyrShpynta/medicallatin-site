// Courses page: the express programme as tabs, a Basis/Medium/Maxi switch for the main
// course, the page index following the course being read, and the price calculator.
// Without JavaScript the programme is three stacked blocks, the levels are shown as
// they are, and the calculator section points to the prices on the page.
(() => {
  const en = document.documentElement.lang === "en";
  const t = en
    ? {
        tablist: "Programme by lesson",
        levels: "Levels",
        show: "Show a level:",
        course: "Course",
        from: "from",
        arrange: "By arrangement",
        per: (x) => `≈ ${x} per lesson`,
        missing: "Not available in this combination.",
        money: (n) => `$${n}`,
      }
    : {
        tablist: "Програма за заняттями",
        levels: "Рівні",
        show: "Показати рівень:",
        course: "Курс",
        from: "від",
        arrange: "Індивідуально",
        per: (x) => `≈ ${x} за заняття`,
        missing: "Такого поєднання немає.",
        money: (n) => `${n}\u00A0грн`,
      };

  // Express programme: three tabs (Lessons 1–2 / 3–4 / 5–6), keyboard as in the ARIA
  // tabs pattern: arrows, Home and End move between tabs.
  document.querySelectorAll(".days").forEach((days, d) => {
    const blocks = Array.from(days.querySelectorAll(".days__block"));
    if (blocks.length < 2) return;
    const list = document.createElement("div");
    list.className = "tabs";
    list.setAttribute("role", "tablist");
    list.setAttribute("aria-label", t.tablist);
    const tabs = blocks.map((block, i) => {
      const h = block.querySelector("h4");
      const [label, ...rest] = h.textContent.split(". ");
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "tab";
      tab.id = `days-${d}-tab-${i}`;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", (block.id = `days-${d}-panel-${i}`));
      tab.innerHTML = '<span class="tab__label"></span><span class="tab__title"></span>';
      tab.querySelector(".tab__label").textContent = label;
      tab.querySelector(".tab__title").textContent = rest.join(". ") || label;
      block.setAttribute("role", "tabpanel");
      block.setAttribute("aria-labelledby", tab.id);
      block.tabIndex = 0;
      h.classList.add("visually-hidden");
      return tab;
    });
    const select = (i, focus) => {
      tabs.forEach((tab, j) => {
        const on = i === j;
        tab.setAttribute("aria-selected", String(on));
        tab.tabIndex = on ? 0 : -1;
        blocks[j].hidden = !on;
      });
      if (focus) tabs[i].focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(i));
      tab.addEventListener("keydown", (e) => {
        const n = tabs.length;
        const to = { ArrowRight: (i + 1) % n, ArrowLeft: (i + n - 1) % n, Home: 0, End: n - 1 }[e.key];
        if (to === undefined) return;
        e.preventDefault();
        select(to, true);
      });
    });
    list.append(...tabs);
    days.before(list);
    days.classList.add("is-tabbed");
    select(0);
  });

  // Main course: pick a level to light up its lessons and its price row, with a summary
  // of that level's prices. Pressing the chosen level again shows all levels.
  document.querySelectorAll(".ladder").forEach((ladder) => {
    const section = ladder.closest("section");
    const table = section?.querySelector(".price-table");
    const names = Array.from(ladder.querySelectorAll(".ladder__head span")).slice(1);
    const blocks = Array.from(ladder.querySelectorAll(".ladder__block"));
    const rows = table ? Array.from(table.tBodies[0].rows) : [];
    if (names.length !== 3 || blocks.length !== 3) return;

    const group = document.createElement("div");
    group.className = "levels";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", t.levels);
    const label = document.createElement("span");
    label.className = "levels__label";
    label.textContent = t.show;
    const sum = document.createElement("p");
    sum.className = "levels__sum";
    sum.setAttribute("role", "status");

    const text = (cell) => {
      const copy = cell.cloneNode(true);
      copy.querySelectorAll("[aria-hidden]").forEach((n) => n.remove());
      return Array.from(copy.childNodes).map((n) => n.textContent.trim()).filter(Boolean).join(", ");
    };
    const buttons = names.map((name, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.lang = "la";
      b.textContent = name.textContent;
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", () => show(b.getAttribute("aria-pressed") === "true" ? 0 : i + 1));
      return b;
    });
    const show = (level) => {
      buttons.forEach((b, i) => b.setAttribute("aria-pressed", String(level === i + 1)));
      blocks.forEach((block, i) => block.classList.toggle("is-in", level > 0 && i < level));
      rows.forEach((row, i) => row.classList.toggle("is-in", level === i + 1));
      if (level) ladder.dataset.level = String(level);
      else delete ladder.dataset.level;
      const row = rows[level - 1];
      sum.textContent = row
        ? `${text(row.cells[0])} — ${Array.from(row.cells).slice(1).map((c) => `${c.dataset.label}: ${text(c)}`).join("; ")}.`
        : "";
    };
    group.append(label, ...buttons);
    ladder.before(group, sum);
  });

  // Page index: mark the section being read.
  const links = Array.from(document.querySelectorAll('.toc a[href^="#"]'));
  const targets = links.map((a) => document.getElementById(a.getAttribute("href").slice(1)));
  if (links.length && targets.every(Boolean)) {
    let current = -1;
    const spy = () => {
      const line = window.innerHeight * 0.35;
      let i = 0;
      targets.forEach((el, j) => { if (el.getBoundingClientRect().top <= line) i = j; });
      if (i === current) return;
      current = i;
      links.forEach((a, j) => (j === i ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
    };
    let queued = false;
    window.addEventListener("scroll", () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; spy(); });
    }, { passive: true });
    spy();
  }

  // Price calculator: the prices are in the page's JSON block (.calc__data), the same
  // prices as the tables above. Fields appear only when they apply ("when").
  const calc = document.querySelector(".calc");
  const raw = calc?.querySelector(".calc__data");
  const app = calc?.querySelector(".calc__app");
  if (calc && raw && app) {
    const data = JSON.parse(raw.textContent);
    const values = { course: data.courses[0].id };
    const course = () => data.courses.find((c) => c.id === values.course);
    const visible = (f) => !f.when || Object.entries(f.when).every(([k, ok]) => ok.includes(values[k]));

    const form = document.createElement("div");
    form.className = "dm calc__form";
    const fields = document.createElement("div");
    fields.className = "dm__fields";
    form.append(fields);
    const out = document.createElement("div");
    out.className = "calc__out";
    out.setAttribute("role", "status");
    out.innerHTML = '<p class="calc__what"></p><p class="calc__price"></p><p class="calc__per"></p><p class="calc__note"></p>';

    const field = (id, label, options) => {
      const wrap = document.createElement("label");
      wrap.className = "dm__field";
      const span = document.createElement("span");
      span.textContent = label;
      const box = document.createElement("span");
      box.className = "dm__select";
      const sel = document.createElement("select");
      sel.dataset.field = id;
      options.forEach(([value, text]) => sel.add(new Option(text, value, false, values[id] === value)));
      box.append(sel);
      wrap.append(span, box);
      return wrap;
    };

    const render = () => {
      const focused = document.activeElement?.dataset?.field;
      const c = course();
      const shown = [];
      // walk the fields in order, so later fields can depend on earlier choices
      for (const f of c.fields) {
        if (!visible(f)) { delete values[f.id]; continue; }
        if (!f.options.some(([v]) => v === values[f.id])) values[f.id] = f.options[0][0];
        shown.push(f);
      }
      fields.replaceChildren(
        field("course", t.course, data.courses.map((x) => [x.id, x.name])),
        ...shown.map((f) => field(f.id, f.label, f.options)),
      );
      if (focused) fields.querySelector(`[data-field="${focused}"]`)?.focus();

      const key = shown.map((f) => values[f.id]).join(".");
      const entry = c.prices[key];
      const [what, price, per, note] = out.children;
      what.textContent = [c.name, ...shown.map((f) => f.options.find(([v]) => v === values[f.id])[1])].join(" · ");
      if (!entry) {
        price.textContent = "—";
        per.textContent = "";
        note.textContent = c.missing || t.missing;
        return;
      }
      price.textContent = entry.p == null ? t.arrange : `${entry.from ? `${t.from} ` : ""}${t.money(entry.p)}`;
      per.textContent = entry.p != null && entry.n > 1 && !entry.from ? t.per(t.money(Math.round(entry.p / entry.n))) : "";
      note.textContent = entry.note || c.note || "";
    };

    form.addEventListener("change", (e) => {
      const id = e.target.dataset.field;
      if (!id) return;
      values[id] = e.target.value;
      render();
    });
    app.append(form, out);
    render();
    calc.querySelector(".calc__fallback")?.remove();
    app.hidden = false;
  }
})();
