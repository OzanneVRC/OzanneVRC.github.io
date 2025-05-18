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
  });
});
