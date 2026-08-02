const portfolioConfig = {
  githubProfileUrl: "https://github.com/ramhachi",
  projects: [
    {
      title: "CFD_opt_sdf",
      category: "CFD",
      description:
        "固定格子Brinkman探索、SDF形状処理、OpenFOAM検証をつなぐ空力最適化パイプラインです。",
      stack: "OpenFOAM / SDF / topology optimization",
      href: "https://github.com/ramhachi/CFD_opt_sdf",
      theme: "light",
    },
    {
      title: "intake_ex_engine_opt",
      category: "Engineering Tool",
      description:
        "FSAEエンジンの吸排気候補を探索し、shared-plenum再評価と結果エクスポートまで行う実用ツールです。",
      stack: "FastAPI / Docker / reduced-order optimization",
      href: "https://github.com/ramhachi/intake_ex_engine_opt",
      theme: "dark",
    },
    {
      title: "sim_overall",
      category: "Vehicle Dynamics",
      description:
        "14自由度車両モデル、タイヤモデル、C++・MATLAB・Pythonを統合した車両シミュレーション基盤です。",
      stack: "C++ / MATLAB / Python / vehicle dynamics",
      href: "https://github.com/ramhachi/sim_overall",
      theme: "dark",
    },
  ],
};

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  portfolioConfig.projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = `project-card ${project.theme}`;
    article.innerHTML = `
      <div class="project-top">
        <p class="eyebrow ${project.theme === "dark" ? "eyebrow-dark" : ""}">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span class="project-meta">${project.stack}</span>
      </div>
      <div class="project-actions">
        <a class="text-link" href="${project.href}" target="_blank" rel="noreferrer">View repository</a>
      </div>
    `;
    grid.appendChild(article);
  });
}

function wireProfileLink() {
  const profileLink = document.querySelector("#github-profile-link");
  if (!profileLink) {
    return;
  }

  profileLink.href = portfolioConfig.githubProfileUrl;
}

renderProjects();
wireProfileLink();
