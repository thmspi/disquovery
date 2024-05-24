const blur1 = document.getElementsByClassName("border-blur")[0];
const blur2 = document.getElementsByClassName("border-blur")[1];
const blur3 = document.getElementsByClassName("border-blur")[2];

const container1 = document.getElementById("left-cont");
const container2 = document.getElementById("box-row1");
const container3 = document.getElementById("box-row2");


function getPos(e, container, blur) {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left - blur.offsetWidth/2;
  const y = e.clientY - rect.top - blur.offsetHeight/2;
  blur.style.setProperty("--X", x+"px");
  blur.style.setProperty("--Y", y+"px");
}

container1.onmousemove = e => {
  getPos(e, container1, blur1);
}

container2.onmousemove = e => {
  getPos(e, container2, blur2);
}

container3.onmousemove = e => {
  getPos(e, container3, blur3);
}