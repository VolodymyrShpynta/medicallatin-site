// Hero: "Розібрати інший термін" cycles through the terms kept in <template> elements.
(() => {
  const figure = document.querySelector(".term");
  if (!figure) return;

  const body = figure.querySelector(".term__body");
  const button = figure.querySelector(".term__next");
  const templates = Array.from(figure.querySelectorAll("template"));
  if (!body || !button || templates.length < 2) return;

  let index = 0;
  button.hidden = false;

  button.addEventListener("click", () => {
    index = (index + 1) % templates.length;
    body.replaceChildren(templates[index].content.cloneNode(true));
    // Restart the split animation; CSS skips it when reduced motion is requested.
    figure.classList.remove("is-animating");
    void figure.offsetWidth;
    figure.classList.add("is-animating");
  });
})();
