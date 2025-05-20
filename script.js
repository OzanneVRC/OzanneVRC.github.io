document.getElementById("defOp").click();
console.log("Main page script is running."); // Debug just to see if script loads at all. (' w ' ;;)

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

// This is the GSAP neon flashing animation, it works on page load only!
window.addEventListener('load', () => {
  const panel = document.querySelector('.panel');
  const tl = gsap.timeline();

  tl.to(panel, {duration: 0.1, opacity: 0.2, boxShadow: "0 0 20px 5px #502430", repeat: 5, yoyo: true, ease: "power1.inOut"})
    .to(panel, {duration: 0.5, opacity: 1, boxShadow: "0 0 15px 3px #502430", ease: "power2.out"});
});
