const footer = document.getElementById("footer-delimiter");
const scroller = document.getElementById("scroller");

window.addEventListener("scroll",getcoord);
window.addEventListener("resize", getcoord);

function getcoord() {
  scroller.style.marginLeft = -((footer.getBoundingClientRect().top-626)/1135)*200+ "vw";
}