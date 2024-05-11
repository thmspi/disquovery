const b1 = document.getElementById("1");
const b2 = document.getElementById("2");
const b3 = document.getElementById("3");
const b4 = document.getElementById("4");
const b5 = document.getElementById("5");
const b6 = document.getElementById("6");
const b7 = document.getElementById("7");
const b8 = document.getElementById("8");
const b9 = document.getElementById("9");
const b10 = document.getElementById("10");
const b11 = document.getElementById("11");
const b12 = document.getElementById("12");
const b13 = document.getElementById("13");
const b14 = document.getElementById("14");
const b15 = document.getElementById("15");
const b16 = document.getElementById("16");

b1.addEventListener("mouseover", ()=> {
  b2.classList.add('adjacent');
  b5.classList.add('adjacent');
});

b1.addEventListener("mouseout", ()=> {
  b2.classList.remove('adjacent');
  b5.classList.remove('adjacent');
});


b2.addEventListener("mouseover", ()=> {
  b1.classList.add('adjacent');
  b3.classList.add('adjacent');
  b6.classList.add('adjacent');
});

b2.addEventListener("mouseout", ()=> {
  b1.classList.remove('adjacent');
  b3.classList.remove('adjacent');
  b6.classList.remove('adjacent');
});


b3.addEventListener("mouseover", ()=> {
  b2.classList.add('adjacent');
  b4.classList.add('adjacent');
  b7.classList.add('adjacent');
});

b3.addEventListener("mouseout", ()=> {
  b2.classList.remove('adjacent');
  b4.classList.remove('adjacent');
  b7.classList.remove('adjacent');
});


b4.addEventListener("mouseover", ()=> {
  b3.classList.add('adjacent');
  b8.classList.add('adjacent');
});

b4.addEventListener("mouseout", ()=> {
  b3.classList.remove('adjacent');
  b8.classList.remove('adjacent');
});

b5.addEventListener("mouseover", ()=> {
  b1.classList.add('adjacent');
  b6.classList.add('adjacent');
  b9.classList.add('adjacent');
});

b5.addEventListener("mouseout", ()=> {
  b1.classList.remove('adjacent');
  b6.classList.remove('adjacent');
  b9.classList.remove('adjacent');
});


b6.addEventListener("mouseover", ()=> {
  b2.classList.add('adjacent');
  b5.classList.add('adjacent');
  b7.classList.add('adjacent');
  b10.classList.add('adjacent');
});

b6.addEventListener("mouseout", ()=> {
  b2.classList.remove('adjacent');
  b5.classList.remove('adjacent');
  b7.classList.remove('adjacent');
  b10.classList.remove('adjacent');
});


b7.addEventListener("mouseover", ()=> {
  b3.classList.add('adjacent');
  b6.classList.add('adjacent');
  b8.classList.add('adjacent');
  b11.classList.add('adjacent');
});

b7.addEventListener("mouseout", ()=> {
  b3.classList.remove('adjacent');
  b6.classList.remove('adjacent');
  b8.classList.remove('adjacent');
  b11.classList.remove('adjacent');
});


b8.addEventListener("mouseover", ()=> {
  b4.classList.add('adjacent');
  b7.classList.add('adjacent');
  b12.classList.add('adjacent');
});

b8.addEventListener("mouseout", ()=> {
  b4.classList.remove('adjacent');
  b7.classList.remove('adjacent');
  b12.classList.remove('adjacent');
});


b9.addEventListener("mouseover", ()=> {
  b5.classList.add('adjacent');
  b10.classList.add('adjacent');
  b13.classList.add('adjacent');
});

b9.addEventListener("mouseout", ()=> {
  b5.classList.remove('adjacent');
  b10.classList.remove('adjacent');
  b13.classList.remove('adjacent');
});


b10.addEventListener("mouseover", ()=> {
  b6.classList.add('adjacent');
  b9.classList.add('adjacent');
  b11.classList.add('adjacent');
  b14.classList.add('adjacent');
});

b10.addEventListener("mouseout", ()=> {
  b6.classList.remove('adjacent');
  b9.classList.remove('adjacent');
  b11.classList.remove('adjacent');
  b14.classList.remove('adjacent');
});


b11.addEventListener("mouseover", ()=> {
  b7.classList.add('adjacent');
  b10.classList.add('adjacent');
  b12.classList.add('adjacent');
  b15.classList.add('adjacent');
});

b11.addEventListener("mouseout", ()=> {
  b7.classList.remove('adjacent');
  b10.classList.remove('adjacent');
  b12.classList.remove('adjacent');
  b15.classList.remove('adjacent');
});


b12.addEventListener("mouseover", ()=> {
  b8.classList.add('adjacent');
  b11.classList.add('adjacent');
  b16.classList.add('adjacent');
});

b12.addEventListener("mouseout", ()=> {
  b8.classList.remove('adjacent');
  b11.classList.remove('adjacent');
  b16.classList.remove('adjacent');
});


b13.addEventListener("mouseover", ()=> {
  b9.classList.add('adjacent');
  b14.classList.add('adjacent');
});

b13.addEventListener("mouseout", ()=> {
  b9.classList.remove('adjacent');
  b14.classList.remove('adjacent');
});


b14.addEventListener("mouseover", ()=> {
  b10.classList.add('adjacent');
  b13.classList.add('adjacent');
  b15.classList.add('adjacent');
});

b14.addEventListener("mouseout", ()=> {
  b10.classList.remove('adjacent');
  b13.classList.remove('adjacent');
  b15.classList.remove('adjacent');
});


b15.addEventListener("mouseover", ()=> {
  b11.classList.add('adjacent');
  b14.classList.add('adjacent');
  b16.classList.add('adjacent');
});

b15.addEventListener("mouseout", ()=> {
  b11.classList.remove('adjacent');
  b14.classList.remove('adjacent');
  b16.classList.remove('adjacent');
});


b16.addEventListener("mouseover", ()=> {
  b12.classList.add('adjacent');
  b15.classList.add('adjacent');
});

b16.addEventListener("mouseout", ()=> {
  b12.classList.remove('adjacent');
  b15.classList.remove('adjacent');
});