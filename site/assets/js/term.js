// Hero: "Розібрати інший термін" cycles through the terms kept in <template> elements.
(() => {
  const figure = document.querySelector(".term");
  if (!figure) return;

  const body = figure.querySelector(".term__body");
  const controls = figure.querySelector(".term__controls");
  const button = figure.querySelector(".term__next");
  const dots = figure.querySelector(".term__dots");
  const templates = Array.from(figure.querySelectorAll("template"));
  if (!body || !controls || !button || templates.length < 2) return;

  // One dot per term. They are decorative: the new term itself is announced through
  // the aria-live region.
  const marks = templates.map(() => document.createElement("span"));
  dots?.replaceChildren(...marks);

  let index = 0;
  const mark = () => marks.forEach((m, i) => m.classList.toggle("is-current", i === index));
  mark();
  controls.hidden = false;

  button.addEventListener("click", () => {
    index = (index + 1) % templates.length;
    body.replaceChildren(templates[index].content.cloneNode(true));
    mark();
    // Restart the split animation; CSS skips it when reduced motion is requested.
    figure.classList.add("is-switched");
    figure.classList.remove("is-animating");
    void figure.offsetWidth;
    figure.classList.add("is-animating");
  });
})();
