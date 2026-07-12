const header = document.querySelector<HTMLElement>("[data-site-header]");
const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
const panel = document.querySelector<HTMLElement>("[data-nav-panel]");
const closeButton = document.querySelector<HTMLButtonElement>("[data-nav-close]");
const backdrop = document.querySelector<HTMLElement>("[data-nav-backdrop]");

if (header) {
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true }
  );
}

if (toggle && panel) {
  const setNavOpen = (isOpen: boolean) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    panel.classList.toggle("is-open", isOpen);
    backdrop?.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setNavOpen(!isOpen);
  });

  closeButton?.addEventListener("click", () => setNavOpen(false));
  backdrop?.addEventListener("click", () => setNavOpen(false));

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setNavOpen(false);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavOpen(false);
    }
  });
}
