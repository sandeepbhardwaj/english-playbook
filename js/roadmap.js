(function () {
  const app = window.GrammarAtlasApp;
  app.renderStats("roadmap-stats");

  document.getElementById("roadmap-grid").innerHTML = app.roadmap
    .map(
      (week) => `
        <article class="roadmap-card">
          <div class="module-topline">
            <h3>${week.week}</h3>
            <span class="chip">${week.theme}</span>
          </div>
          <p class="roadmap-copy">${week.summary}</p>
          <ul>
            ${week.tasks.map((task) => `<li>${task}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
})();
