<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll(".panel");
    const activePanel = document.querySelector(".panel.active");

    panels.forEach(panel => {
      if (panel !== activePanel) {
        // Set all other panels offscreen and invisible
        gsap.set(panel, { x: "100%", opacity: 0 });
        panel.classList.remove("active");
      } else {
        // Make sure active panel is in position
        gsap.set(panel, { x: "0%", opacity: 1 });
        panel.classList.add("active");
      }
    });

    let currentPanel = activePanel;

    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("data-page");
        const nextPanel = document.getElementById(targetId);

        if (!nextPanel || nextPanel === currentPanel) return;

        gsap.set(nextPanel, { x: "100%", opacity: 1 });
        nextPanel.classList.add("active");

        gsap.to(currentPanel, {
          duration: 0.6,
          x: "-100%",
          ease: "power2.inOut",
          onComplete: () => {
            currentPanel.classList.remove("active");
            gsap.set(currentPanel, { x: "100%", opacity: 0 });
          }
        });

        gsap.to(nextPanel, {
          duration: 0.6,
          x: "0%",
          ease: "power2.inOut"
        });

        currentPanel = nextPanel;
      });
    });
  });