document.addEventListener("DOMContentLoaded", function() {
    const thomasCircle = document.getElementById("thomas-circle");
    const abdelWahebCircle = document.getElementById("abdel-waheb-circle");
    const thomasPortrait = document.getElementById("thomas-portrait");
    const abdelWahebPortrait = document.getElementById("abdel-waheb-portrait");
    const thomasImage = thomasPortrait.querySelector("img");
    const abdelWahebImage = abdelWahebPortrait.querySelector("img");
    const thomasText = document.getElementById("thomas-text");
    const abdelWahebText = document.getElementById("abdel-waheb-text");
    const thomasRemplacementText = document.getElementById("thomas-remplacement-text");
    const abdelWahebRemplacementText = document.getElementById("abdel-waheb-remplacement-text");

    thomasCircle.addEventListener("mouseover", function() {
        abdelWahebImage.style.display = "none";
        abdelWahebText.style.display = "none";
        abdelWahebRemplacementText.style.display = "block";
    });

    abdelWahebCircle.addEventListener("mouseover", function() {
        thomasImage.style.display = "none";
        thomasText.style.display = "none";
        thomasRemplacementText.style.display = "block";
    });

    thomasCircle.addEventListener("mouseout", function() {
        abdelWahebImage.style.display = "block";
        abdelWahebText.style.display = "block";
        abdelWahebRemplacementText.style.display = "none";
    });

    abdelWahebCircle.addEventListener("mouseout", function() {
        thomasImage.style.display = "block";
        thomasText.style.display = "block";
        thomasRemplacementText.style.display = "none";
    });
        
});
