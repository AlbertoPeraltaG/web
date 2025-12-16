document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const overlay = document.querySelector("#site-nav");
  const closeBtn = document.querySelector(".nav-close");
  const links = document.querySelectorAll(".nav-link");

  console.log("Menu elements found:", { btn, overlay, closeBtn, links });

  if (!btn || !overlay || !closeBtn) {
    console.error("Missing menu elements");
    return;
  }

  const openMenu = () => {
    console.log("Opening menu");
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  };

  const closeMenu = () => {
    console.log("Closing menu");
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  };

  btn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", (e) => {
    console.log("Close button clicked");
    e.preventDefault();
    closeMenu();
  });

  // Cerrar al hacer click fuera (en el fondo del overlay)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeMenu();
  });

  // Cerrar al click en un link
  links.forEach((a) => a.addEventListener("click", closeMenu));

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
