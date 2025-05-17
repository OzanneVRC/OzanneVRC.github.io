<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
   document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll(".panel");
    let currentPanel = document.querySelector(".panel.active");

    // Fallback: If no active panel is set in HTML, default to first
    if (!currentPanel) {
      currentPanel = panels[0];
      currentPanel.classList.add("active");
    }

    // Set panel positions
    panels.forEach(panel => {
      if (panel === currentPanel) {
        gsap.set(panel, { x: "0%", opacity: 1 });
        panel.classList.add("active");
      } else {
        gsap.set(panel, { x: "100%", opacity: 0 });
        panel.classList.remove("active");
      }
    });

    // Navigation logic
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("data-page");
        const nextPanel = document.getElementById(targetId);

        if (!nextPanel || nextPanel === currentPanel) return;

        // Start next panel offscreen right
        gsap.set(nextPanel, { x: "100%", opacity: 1 });
        nextPanel.classList.add("active");

        // Slide current out left
        gsap.to(currentPanel, {
          duration: 0.6,
          x: "-100%",
          ease: "power2.inOut",
          onComplete: () => {
            currentPanel.classList.remove("active");
            gsap.set(currentPanel, { x: "100%", opacity: 0 });
          }
        });

        // Slide next in
        gsap.to(nextPanel, {
          duration: 0.6,
          x: "0%",
          ease: "power2.inOut"
        });

        currentPanel = nextPanel;
      });
    });
  });