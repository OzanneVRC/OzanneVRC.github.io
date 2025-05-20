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

// GSAP animation: fade in logo, then snappy pulse-y flicker panel
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo');
  const panel = document.querySelector('.panel');
  const tl = gsap.timeline();

  // Fade in logo over 0.6 seconds
  tl.to(logo, {duration: 0.6, opacity: 1, ease: "power2.inOut"});

  // Snappy pulse-y flicker animation for panel
  tl.to(panel, {
    duration: 0.1,
    opacity: 0.7,
    boxShadow: "0 0 10px 2px #502430",
    ease: "power1.inOut",
    yoyo: true,
    repeat: 4
  });

  // Stabilize panel quickly
  tl.to(panel, {
    duration: 0.3,
    opacity: 1,
    boxShadow: "0 0 15px 3px #502430",
    ease: "power2.out"
  });
});
