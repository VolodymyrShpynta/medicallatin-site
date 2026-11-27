// Express course: the 3-question quiz and the ready-made Direct message.
// Without JavaScript the quiz answers stay in <details>, and the message composer stays hidden.
(() => {
  const en = document.documentElement.lang === "en";
  const t = en
    ? {
        right: "Correct!",
        wrong: "Not quite.",
        score: (n, total) => `Correct answers: ${n} of ${total}.`,
        copied: "Copied. Now open Direct and paste it.",
        manual: "Selected: press Ctrl+C (or Copy) to copy it.",
        message: ({ name, stream, format, nick }) =>
          `${name ? `Hi! My name is ${name}.` : "Hi!"} I’d like to join the express course in medical Latin` +
          `${stream ? `, the group starting ${stream}` : ""}, format: ${format}.` +
          `${nick ? ` My handle: ${nick}.` : ""}`,
      }
    : {
        right: "Правильно!",
        wrong: "Не зовсім.",
        score: (n, total) => `Правильних відповідей: ${n} з ${total}.`,
        copied: "Скопійовано. Тепер відкрийте Direct і вставте повідомлення.",
        manual: "Текст виділено: натисніть Ctrl+C (або «Копіювати»).",
        message: ({ name, stream, format, nick }) =>
          `${name ? `Привіт! Мене звати ${name}.` : "Привіт!"} Хочу записатися на експрес-курс з медичної латини` +
          `${stream ? `, потік ${stream}` : ""}, формат: ${format}.` +
          `${nick ? ` Мій нік: ${nick}.` : ""}`,
      };

  // Quiz: each option becomes a button; choosing one marks the answer and opens the explanation.
  const quiz = document.querySelector(".quiz");
  if (quiz) {
    const questions = Array.from(quiz.querySelectorAll(".quiz__q"));
    const scoreLine = quiz.querySelector(".quiz__score");
    let answered = 0;
    let correct = 0;

    questions.forEach((q) => {
      const answer = q.querySelector(".quiz__answer");
      const verdict = document.createElement("p");
      verdict.className = "quiz__verdict";
      verdict.hidden = true;
      answer.before(verdict);
      answer.hidden = true;

      const buttons = Array.from(q.querySelectorAll(".quiz__opts li")).map((li) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "quiz__opt";
        button.append(...li.childNodes);
        li.append(button);
        return button;
      });

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const isRight = button.parentElement.hasAttribute("data-correct");
          buttons.forEach((b) => {
            b.disabled = true;
            if (b.parentElement.hasAttribute("data-correct")) b.classList.add("is-correct");
          });
          if (!isRight) button.classList.add("is-wrong");

          answered += 1;
          if (isRight) correct += 1;
          verdict.textContent = isRight ? t.right : t.wrong;
          verdict.hidden = false;
          answer.hidden = false;
          answer.open = true;
          if (answered === questions.length) scoreLine.textContent = t.score(correct, questions.length);
        });
      });
    });
  }

  // Direct message: Instagram can't pre-fill a message, so the visitor copies it and pastes it in.
  const dm = document.querySelector(".dm");
  if (dm) {
    const field = (name) => dm.querySelector(`[data-dm="${name}"]`);
    const text = field("text");
    const status = dm.querySelector(".dm__status");
    const update = () => {
      text.value = t.message({
        name: field("name").value.trim(),
        stream: field("stream").value,
        format: field("format").value,
        nick: field("nick").value.trim(),
      });
      status.textContent = "";
    };

    dm.addEventListener("input", update);
    dm.addEventListener("change", update);
    field("copy").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(text.value);
        status.textContent = t.copied;
      } catch {
        text.select();
        status.textContent = t.manual;
      }
    });

    update();
    dm.hidden = false;
  }
})();
