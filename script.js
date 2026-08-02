const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const revealTargets = document.querySelectorAll(".reveal");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((element) => observer.observe(element));
}
