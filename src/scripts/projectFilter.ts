const filterButtons = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
const projectItems = document.querySelectorAll<HTMLElement>("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter ?? "All";

    filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));

    projectItems.forEach((item) => {
      const isVisible = filter === "All" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !isVisible);
    });
  });
});
