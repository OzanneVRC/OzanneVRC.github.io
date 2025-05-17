document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");
  const links = document.querySelectorAll("nav a");

  let currentPanel = document.getElementById("home");

  // Make sure only the current panel is shown initially
  panels.forEach(panel => {
    if (panel !== currentPanel) {
      gsap.set(panel, { x: "100%", opacity: 0, pointerEvents: "none" });
    } else {
      gsap.set(panel, { x: "0%", opacity: 1, pointerEvents: "auto" });
      panel.classList.add("active");
    }
  });

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("data-page");
      const nextPanel = document.getElementById(targetId);

      if (!nextPanel || nextPanel === currentPanel) return;

      // Slide out current panel
      gsap.to(currentPanel, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          currentPanel.classList.remove("active");
          gsap.set(currentPanel, { pointerEvents: "none" });
        }
      });

      // Prepare next panel
      gsap.set(nextPanel, { x: "100%", opacity: 0, pointerEvents: "none" });
      nextPanel.classList.add("active");

      // Slide in next panel
      gsap.to(nextPanel, {
        x: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onStart: () => {
          gsap.set(nextPanel, { pointerEvents: "auto" });
        }
      });

      currentPanel = nextPanel;
    });
  });
});
