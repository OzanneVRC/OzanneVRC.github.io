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
console.log("🎬 Script running");

document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline();

  // Fade in site wrapper and restore pointer events
  tl.to('#site-wrapper', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    onComplete: () => {
      document.getElementById('site-wrapper').style.pointerEvents = 'auto';
    }
  });

  // Animate nav buttons
  tl.from('.nav button', {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.5');

  // Animate active panel content
  tl.from('.panel.active h1, .panel.active p', {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.3');
});

  });
});
