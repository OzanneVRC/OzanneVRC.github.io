// script.js
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");
  const links = document.querySelectorAll("nav a");

  let currentPanel = document.querySelector(".panel.active");
  if (!currentPanel) {
    currentPanel = panels[0];
    currentPanel.classList.add("active");
    gsap.set(currentPanel, { x: "0%", opacity: 1 });
  }

  // Set all panels offscreen right except active one
  panels.forEach(panel => {
    if (panel !== currentPanel) {
      gsap.set(panel, { x: "100%", opacity: 0 });
    } else {
      gsap.set(panel, { x: "0%", opacity: 1 });
    }
  });

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("data-page");
      const nextPanel = document.getElementById(targetId);
      if (!nextPanel || nextPanel === currentPanel) return;

      // Move new panel onscreen
      gsap.set(nextPanel, { x: "100%", opacity: 1 });
      nextPanel.classList.add("active");

      // Animate current out
      gsap.to(currentPanel, {
        duration: 0.6,
        x: "-100%",
        ease: "power2.inOut",
        onComplete: () => {
          currentPanel.classList.remove("active");
          gsap.set(currentPanel, { x: "100%", opacity: 0 });
        }
      });

      // Animate next in
      gsap.to(nextPanel, {
        duration: 0.6,
        x: "0%",
        ease: "power2.inOut"
      });

      currentPanel = nextPanel;
    });
  });
});
