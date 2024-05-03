const card = document.getElementById("gradient-card");

document.addEventListener("mousemove", (e)=> {
  rotateElement(e, card);
});

function rotateElement(e, element) {
  const x = e.clientX;
  const y = e.clientY;

  var middleX;
  if (window.innerWidth > 750) {
    middleX = window.innerWidth*0.75;
  } else {
    middleX = window.innerWidth/2;
  }

  const middleY = window.innerHeight/2;

  const offsetX = ((x-middleX)/middleX)*20;
  const offsetY = ((y - middleY)/middleY)*20;

  element.style.setProperty("--rotateX", -offsetY + "deg");
  element.style.setProperty("--rotateY", offsetX + "deg");
}

