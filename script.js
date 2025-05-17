<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
let currentPanel = document.querySelector(".panel.active");

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("data-page");
      const nextPanel = document.getElementById(targetId);

      if (!nextPanel || nextPanel === currentPanel) return;

      // Start next panel off-screen right
      gsap.set(nextPanel, { x: "100%", opacity: 1 });
      nextPanel.classList.add("active");

      // Slide out current panel to the left
      gsap.to(currentPanel, {
        duration: 0.6,
        x: "-100%",
        ease: "power2.inOut",
        onComplete: () => {
          // Only hide after animation finishes
          currentPanel.classList.remove("active");
          gsap.set(currentPanel, { x: "100%", opacity: 0 });
        }
      });

      // Slide in next panel from right
      gsap.to(nextPanel, {
        duration: 0.6,
        x: "0%",
        ease: "power2.inOut"
      });

      currentPanel = nextPanel;
    });
  });