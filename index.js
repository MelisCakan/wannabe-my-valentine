const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const big = document.querySelector(".big");


const noBtnRect = noBtn.getBoundingClientRect();
const bigRect = big.getBoundingClientRect();

noBtn.addEventListener("mouseover", function(){
    const i = Math.floor(Math.random() * (bigRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (bigRect.height - noBtnRect.height)) + 1;

     noBtn.style.left = i + "px";
     noBtn.style.top = j + "px";
})

yesBtn.addEventListener("click", function() {
    document.querySelector(".cat-gif").setAttribute("src", "./photos/happygif.gif");
    document.querySelector(".cat-gif").setAttribute("alt", "happy cute cat gif");
    document.querySelector("h2").innerHTML = "I knew it hehe ♥"
    document.querySelector("h2").style.marginTop = "40px";
    document.querySelector(".wannabe").innerHTML = "We'll be a great couple!!";

    noBtn.classList.add("hidden");
    yesBtn.classList.add("hidden");

    document.querySelector(".container").style.paddingBottom = "0px";
})