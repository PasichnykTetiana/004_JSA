const btnTop = document.getElementById("up")
const btnDown = document.getElementById("down")
const btnRight = document.getElementById("right")
const btnLeft = document.getElementById("left")
const text = document.getElementById("text")
let topPos = 200,
    leftPos = 200;
btnTop.onclick = function () {
    topPos += 10;
text.style.top = topPos + "px"
}
btnRight.onclick = function () {
    leftPos += 10;
    text.style.left = leftPos + "px"
}
btnDown.onclick = function () {
    topPos -= 10;
    text.style.top = topPos + "px"
}
btnLeft.onclick = function () {
    leftPos -= 10;
    text.style.left = leftPos + "px"
}