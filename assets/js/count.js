var p = 0;
var pMessage = document.querySelector("#p");

var btnPlus = document.querySelector("#plus");
var btnMinus = document.querySelector("#minus");

btnPlus.addEventListener("click", function () {
    p++;
    pMessage.textContent = p;
});

btnMinus.addEventListener("click", function () {
    if (p > 0) {
        p--;
    }
    pMessage.textContent = p;
});