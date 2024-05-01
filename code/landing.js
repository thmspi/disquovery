const container = document.getElementsByClassName("favorite")[0];
const star = document.getElementsByClassName("star")[0];
const fav = document.getElementsByClassName("fav-text")[0];
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const hidedSection = document.getElementsByClassName("hided-menu-lines")[0];

var hamburgerMenuDisplayed = 0;


container.addEventListener("mouseover", ()=> 
  {
    fav.animate ([
        {
          color : "#666666"
        },
        {
          color : "#DEA52B"
        }
      ],
      {
        duration : 150,
        fill : "both",
      }
    );
    star.animate([
          {
            transform : "rotate(0deg)",
          },
          {
            transform : "rotate(-20deg)",
            offset : 0.1,
          },
          {
            transform : "rotate(200deg)",
            offset : 0.85,
          },

          {
            transform : "rotate(144deg)",
          }
      ], 
      {
        duration : 300,
        fill : "forwards",
      }
    );
  }
)
container.addEventListener("mouseout", ()=> {
  fav.animate ([
    {
      color : "#DEA52B"
    },
    {
      color : "#666666"
    }
  ],
  {
    duration : 150,
    fill : "both",
  }
);
})

hamburgerMenu.addEventListener("click", toggleDisplay);

function toggleDisplay() {
  if (hamburgerMenuDisplayed == 1) {
    hamburgerMenuDisplayed = 0;
    hidedSection.style.display = "none";
  } else {
    hamburgerMenuDisplayed = 1;
    hidedSection.style.display = "block";
  }
}