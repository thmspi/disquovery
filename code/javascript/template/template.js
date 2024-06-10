const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const opinion_container = document.getElementsByClassName("opinion-container")[0];
const fav_cont = document.getElementById("fav-container");
const fav_button = document.getElementById("fav-checkbox");
document.getElementById("like").setAttribute("autocomplete", "off");
document.getElementById("dislike").setAttribute("autocomplete", "off");
document.getElementById("fav-checkbox").setAttribute("autocomplete", "off");
document.getElementById("like").checked = false;
document.getElementById("dislike").checked = false;
document.getElementById("fav-checkbox").checked = false;;
var disp_like = 0;

like.addEventListener("click", ()=> {
  if (disp_like == 1) {
    like.checked = false;
    fav_cont.style.opacity = "0";
    fav_cont.style.pointerEvents = "none";
    fav_button.checked = false;
    disp_like = 0;
  } else {
    disp_like = 1;
    fav_cont.style.opacity = "1";
    fav_cont.style.pointerEvents = "all";
  }
});

dislike.addEventListener("click", ()=> {
  if (disp_like == -1) {
    disp_like = 0;
    dislike.checked = false;
  } else {
    disp_like = -1;
    like.checked = false;
    fav_cont.style.opacity = "0";
    fav_cont.style.pointerEvents = "none";
    fav_button.checked = false;
  }
})

fav_button.addEventListener("click", ()=> {
  console.log("hey");
})