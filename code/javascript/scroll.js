const title = document.getElementById("section4-title");
const punch = document.getElementById("section4-punch");
const section2 = document.getElementById("recommanded-section");
const logo = document.getElementsByClassName("logo-container")[0];
const account = document.getElementsByClassName("account")[0];
const accountText = document.getElementsByClassName("account-text")[0];
const accountLogo = document.getElementsByClassName("account-logo")[0];

//-1844
//-2400
window.addEventListener("scroll", coordinate);
var Tappeared = 0;
function coordinate() {
  if (title.getBoundingClientRect().top -630< 0 && Tappeared!=1) {
    title.animate([
      {
        opacity : "0"
      },
      {
        opacity : "1"
      }
    ],{
      duration : 1000,
      fill: "forwards",
      
    })
    punch.animate([
      {
        opacity : "0"
      },
      {
        opacity : "1"
      }
    ],{
      delay : 500,
      duration : 1000,
      fill: "forwards",
      
    })
    Tappeared = 1;
  }

  if (section2.getBoundingClientRect().top <545 && section2.getBoundingClientRect().top > -1128) {
    logo.style.background = "var(--logo-gradient-blue)";
    account.style.background = "var(--account-gradient-blue)";
    accountText.style.background = "var(--account-gradient-blue)";
    accountLogo.style.background = "var(--account-gradient-blue)";
    accountText.style.webkitBackgroundClip = "text";
  } else if (section2.getBoundingClientRect().top < -1128 && section2.getBoundingClientRect().top > -2000) {
    logo.style.background = "#0079C8";
    account.style.background = "#0079C8";
    accountText.style.background = "#0079C8";
    accountLogo.style.background = "#0079C8";
    logo.style.backgroundColor = "#0079C8";
    account.style.backgroundColor = "#0079C8";
    accountText.style.backgroundColor = "#0079C8";
    accountLogo.style.backgroundColor = "#0079C8";
    accountText.style.webkitBackgroundClip = "text";
  } else if (section2.getBoundingClientRect().top < - 2000 && section2.getBoundingClientRect().top > -2700) {
    logo.style.background = "#ffbfd3";
    account.style.background = "#ffbfd3";
    accountText.style.background = "#ffbfd3";
    accountLogo.style.background = "#ffbfd3";
    logo.style.backgroundColor = "#ffbfd3";
    account.style.backgroundColor = "#ffbfd3";
    accountText.style.backgroundColor = "#ffbfd3";
    accountLogo.style.backgroundColor = "#ffbfd3";
    accountText.style.webkitBackgroundClip = "text";

  } else if (section2.getBoundingClientRect().top <-2600) {
    logo.style.background = "white";
    account.style.background = "white";
    accountText.style.background = "white";
    accountLogo.style.background = "white";
    logo.style.backgroundColor = "white";
    account.style.backgroundColor = "white";
    accountText.style.backgroundColor = "white";
    accountLogo.style.backgroundColor = "white";
    accountText.style.webkitBackgroundClip = "text";
  } else {
    logo.style.background = "var(--logo-gradient-red)";
    account.style.background = "var(--account-gradient-red)";
    accountText.style.background = "var(--account-text-red)";
    accountLogo.style.background = "var(--account-logo-red)";
    accountText.style.webkitBackgroundClip = "text";
  }
}
