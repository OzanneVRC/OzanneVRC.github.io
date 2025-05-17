const panels = document.querySelectorAll(".panel");
let currentPanel = document.querySelector(".panel.active");

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("data-page");
    const nextPanel = document.getElementById(targetId);

    if (nextPanel !== currentPanel) {
      // Animate out current panel
      gsap.to(currentPanel, {
        duration: 0.5,
        x: "-100%",
        opacity: 0,
        onComplete: () => {
          currentPanel.classList.remove("active");
          currentPanel.style.left = "100%"; // Reset position
        }
      });

      // Prepare next panel
      nextPanel.style.left = "100%";
      nextPanel.classList.add("active");

      // Animate in
      gsap.to(nextPanel, {
        duration: 0.5,
        x: "0%",
        opacity: 1
      });

      currentPanel = nextPanel;
    }
  });
});