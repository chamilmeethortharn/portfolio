const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));

  const parallax = document.querySelector<HTMLElement>("[data-parallax]");
  if (parallax) {
    window.addEventListener(
      "scroll",
      () => {
        const offset = Math.min(window.scrollY * 0.04, 24);
        parallax.style.transform = `translate3d(0, ${offset}px, 0)`;
      },
      { passive: true }
    );
  }
} else {
  document.querySelectorAll<HTMLElement>(".reveal").forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll<HTMLVideoElement>(".video-mockup video").forEach((video) => {
  video.play().catch(() => undefined);
});
