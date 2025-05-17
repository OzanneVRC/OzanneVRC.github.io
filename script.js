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
          currentPanel.style.transform = "";
        }
      });

      // Animate in next panel
      nextPanel.classList.add("active");
      gsap.fromTo(nextPanel, 
        { x: "100%", opacity: 0 }, 
        { duration: 0.5, x: "0%", opacity: 1 }
      );

      currentPanel = nextPanel;
    }
  });
});
