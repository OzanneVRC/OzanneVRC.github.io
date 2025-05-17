const panels = document.querySelectorAll(".panel");
let currentPanel = document.querySelector(".panel.active");

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("data-page");
    const nextPanel = document.getElementById(targetId);

    if (nextPanel !== currentPanel) {
      // Move next panel offscreen to the right
      gsap.set(nextPanel, { x: "100%", opacity: 1 });
      nextPanel.classList.add("active");

      // Animate current panel out to the left
      gsap.to(currentPanel, {
        duration: 0.5,
        x: "-100%",
        ease: "power2.inOut",
        onComplete: () => {
          currentPanel.classList.remove("active");
          gsap.set(currentPanel, { x: "0%", opacity: 1 });
        }
      });

      // Animate new panel in from the right
      gsap.to(nextPanel, {
        duration: 0.5,
        x: "0%",
        ease: "power2.inOut"
      });

      currentPanel = nextPanel;
    }
  });
});