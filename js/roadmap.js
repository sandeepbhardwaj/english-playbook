(function () {
  const app = window.GrammarAtlasApp;
  const enhancements = window.GrammarAtlasEnhancements || {};
  app.renderStats("roadmap-stats");

  const guide = enhancements.roadmapGuide;
  document.getElementById("roadmap-guide-panel").innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Roadmap Method</p>
      <h2>${guide.title}</h2>
    </div>
    <ul class="bullet-list">
      ${guide.points.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

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
