const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const opinion_container = document.getElementsByClassName("opinion-container")[0];
var disp_like = 0;

like.addEventListener("click", ()=> {
  if (disp_like == 1) {
    like.checked = false;
    disp_like = 0;
  } else {
    disp_like = 1;
  }
});