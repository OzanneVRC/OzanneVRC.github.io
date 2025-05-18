// script.js
const buttons = document.querySelectorAll('.nav button');
const panels = document.querySelectorAll('.panel');
let currentPanel = document.querySelector('.panel.active');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetPanel = document.getElementById(targetId);

    if (targetPanel === currentPanel) return;

    // Animate the current panel out
    gsap.to(currentPanel, {
      x: '-100%',
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        currentPanel.classList.remove('active');
        currentPanel.style.transform = 'translateX(100%)';
      }
    });

    // Animate the new panel in
    targetPanel.classList.add('active');
    gsap.fromTo(targetPanel,
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 0.6,
        ease: 'power2.inOut'
      }
    );

    currentPanel = targetPanel;

// Divider
window.addEventListener('load', () => {
  const timeline = gsap.timeline();

  // Animate the whole site into view
  timeline.to('#site-wrapper', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  });

  // Animate nav buttons
  timeline.to('.nav button', {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.6'); // Overlap slightly with site-wrapper animation

  // Animate the visible panel (default is .panel.active)
  timeline.to('.panel.active h1, .panel.active p', {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.4'); // Overlap slightly with nav buttons
});
  });
});
