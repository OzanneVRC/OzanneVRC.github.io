document.getElementById("defOp").click();
console.log("Main page script is running."); // Check if script loads at all

function openTab(evt, tabName) {

  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("ptabsContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("ptabsContent");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className =+ " active";
}

// GSAP neon flashing animation on page load with quicker, staticky flicker
window.addEventListener('load', () => {
  const panel = document.querySelector('.panel');
  const tl = gsap.timeline();

  // Helper function to generate random glow intensity
  function randomGlow() {
    const intensity = Math.random() * 20 + 5; // 5 to 25px
    return `0 0 ${intensity}px ${intensity / 2}px #502430`;
  }

  // Create flicker timeline with random glow and opacity flickers
  for (let i = 0; i < 10; i++) {
    tl.to(panel, {
      duration: 0.05,
      opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1 opacity
      boxShadow: randomGlow(),
      ease: "power1.inOut"
    });
  }

  // Stabilize to full opacity and subtle glow
  tl.to(panel, {
    duration: 0.3,
    opacity: 1,
    boxShadow: "0 0 15px 3px #502430",
    ease: "power2.out"
  });
});
