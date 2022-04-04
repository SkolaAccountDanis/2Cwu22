var audio = document.getElementById("clickSFX");
var hovertouch = document.getElementById("scrollformobile");

console.log(hovertouch)

hovertouch.addEventListener("click", () => {
    audio.play()
})

