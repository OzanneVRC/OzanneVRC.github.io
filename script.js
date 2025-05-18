console.log("🎬 Script running"); // Check if script loads at all

document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ DOM fully loaded");

  const wrapper = document.getElementById('site-wrapper');
  if (!wrapper) {
    console.error("❌ Couldn't find #site-wrapper");
    return;
  }

  // Fade in the whole site
  gsap.to(wrapper, {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    onComplete: () => {
      wrapper.style.pointerEvents = 'auto';
      console.log("✅ Animation complete, site visible");
    }
  });

  // Animate nav buttons
  gsap.from('.nav button', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.1,
    delay: 1 // Wait until wrapper is fully visible
  });

  // Animate content of the active panel
  gsap.from('.panel.active h1, .panel.active p', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.15,
    delay: 1.2
  });

  console.log("✅ Animation started");
});
