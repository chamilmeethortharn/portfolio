const previewCards = document.querySelectorAll<HTMLElement>("[data-card-video-preview='true']");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const visibilityTimers = new WeakMap<HTMLElement, number>();

const playPreview = async (card: HTMLElement) => {
  if (prefersReducedMotion) return;

  const video = card.querySelector<HTMLVideoElement>("video[data-preview-video='true']");
  if (!video) return;

  card.classList.add("is-previewing");

  try {
    await video.play();
  } catch {
    card.classList.remove("is-previewing");
  }
};

const stopPreview = (card: HTMLElement) => {
  const video = card.querySelector<HTMLVideoElement>("video[data-preview-video='true']");
  if (!video) return;

  video.pause();
  video.currentTime = 0;
  card.classList.remove("is-previewing");
};

previewCards.forEach((card) => {
  if (canHover) {
    card.addEventListener("pointerenter", () => playPreview(card));
    card.addEventListener("pointerleave", () => stopPreview(card));
    card.addEventListener("focusin", () => playPreview(card));
    card.addEventListener("focusout", () => stopPreview(card));
  }
});

if (!canHover && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const card = entry.target as HTMLElement;
        const timer = visibilityTimers.get(card);

        if (timer) {
          window.clearTimeout(timer);
          visibilityTimers.delete(card);
        }

        if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
          const nextTimer = window.setTimeout(() => playPreview(card), 900);
          visibilityTimers.set(card, nextTimer);
        } else {
          stopPreview(card);
        }
      });
    },
    { threshold: [0, 0.65, 1] }
  );

  previewCards.forEach((card) => observer.observe(card));
}

export {};
