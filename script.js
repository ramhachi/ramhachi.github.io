const portfolioConfig = {
  githubProfileUrl: "https://github.com/ramhachi",
  projects: [
    {
      title: "CFD_simple",
      category: "CFD",
      description:
        "流体解析の基礎検討用リポジトリ。空力解析とその周辺パイプラインに関心があることを最初の導線として置いています。",
      stack: "CFD / simulation workflow",
      href: "https://github.com/ramhachi/CFD_simple",
      theme: "light",
    },
    {
      title: "airodevice_optimize2",
      category: "Optimization",
      description:
        "空力デバイスの最適化を主題にした公開リポジトリ。設計変数と性能評価をつなぐ、最適化指向の開発スタイルを示します。",
      stack: "aerodynamic optimization / design iteration",
      href: "https://github.com/ramhachi/airodevice_optimize2",
      theme: "dark",
    },
    {
      title: "PDF_md",
      category: "Utility",
      description:
        "Markdown から PDF へ落とし込むための公開ツール。技術文書や情報整理への関心を見せる、軽量なユーティリティ枠です。",
      stack: "documentation / markdown / pdf",
      href: "https://github.com/ramhachi/PDF_md",
      theme: "dark",
    },
    {
      title: "syspro_network",
      category: "Systems",
      description:
        "ネットワーク系のシステムプログラミング実験用リポジトリ。低レイヤまで扱えることを示すために入れています。",
      stack: "systems programming / networking",
      href: "https://github.com/ramhachi/syspro_network",
      theme: "light",
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
