var container2 = document.getElementsByClassName("card-caroussel")[0];
var slider = document.getElementsByClassName("slider")[0];
var cards = document.getElementsByClassName("card").length;
var buttons = document.getElementsByClassName("btn");
var cardList = document.getElementsByClassName("card");
var lecteur = document.getElementsByClassName("lecteur")[0];
var tab_lecteur = ['<iframe  src="https://open.spotify.com/embed/track/41hl3QWKVaFZMZTNZhrARK?utm_source=generator"   allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class = "lecteur-spo"></iframe>'
,                 '<iframe  src="https://open.spotify.com/embed/track/4sUTagdmyuyAxd7RvbygpQ?utm_source=generator"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class = "lecteur-spo"></iframe>',
                  '<iframe  src="https://open.spotify.com/embed/track/6YWjskKykdPsBuiTBOg1VK?utm_source=generator"   allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class = "lecteur-spo"></iframe>',
                  '<iframe  src="https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator"   allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class = "lecteur-spo"></iframe>',
                  '<iframe  src="https://open.spotify.com/embed/track/59xD5osEFsaNt5PXfIKUnX?utm_source=generator"   allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class = "lecteur-spo"></iframe>',
                  '<iframe  src="https://open.spotify.com/embed/track/7jxVIgDoI1ePWpTmkiNr7K?utm_source=generator"   allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class = "lecteur-spo"></iframe>',
                  '<iframe  src="https://open.spotify.com/embed/track/0Kvkx0NcqsdYOhQzYfDuDZ?utm_source=generator"   allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class = "lecteur-spo"></iframe>'];

var currentPosition = 0;
var currentMargin = 0;
var slidePerPage = 0;
var slideCount = cards - slidePerPage;
var containerWidth = container2.offsetWidth;
var prevKeyActive = false;
var nextKeyACtive = true;

window.addEventListener("load", ()=> {
  cardList[0].classList.add("selected");
})
window.addEventListener("resize", checkWidth) 

function checkWidth() {
  containerWidth = container2.offsetWidth;
  setParams(containerWidth);
}

function setParams() {
  if (window.innerWidth < 800) {
    slidePerPage = 1;
    currentMargin = 35;
  } else {
      slidePerPage = 3;
      currentMargin = (window.innerWidth/100)*1.5;
  }
  slider.style.marginLeft = -((cardList[0].offsetWidth+2*currentMargin)*(currentPosition))+"px";

}

setParams();

function slideRight() {
  if (currentPosition!=0) {
    slider.style.marginLeft = -((cardList[0].offsetWidth+2*currentMargin)*(currentPosition-1)) + "px";
    cardList[currentPosition].classList.remove("selected");
    currentPosition--;
    cardList[currentPosition].classList.add("selected");
    lecteur.innerHTML = tab_lecteur[currentPosition];
    console.log(currentPosition);
  }
  if (currentPosition===0) {
    buttons[0].classList.add('inactive');
  }
  if (currentPosition < slideCount) {
    buttons[1].classList.remove('inactive');
  }
}

function slideLeft() {
  if (currentPosition!=slideCount-1) {
    slider.style.marginLeft = -((cardList[0].offsetWidth+2*currentMargin)*(currentPosition+1)) + "px";
    cardList[currentPosition].classList.remove("selected");
    currentPosition++;
    cardList[currentPosition].classList.add("selected");
    lecteur.innerHTML = tab_lecteur[currentPosition];
    console.log(currentPosition);
  }
  if (currentPosition== slideCount-1) {
    buttons[1].classList.add('inactive');
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
  }

}