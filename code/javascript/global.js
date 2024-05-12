const container = document.getElementById("favorite");
const star = document.getElementById("star");
const fav = document.getElementById("fav-text");


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
}
)