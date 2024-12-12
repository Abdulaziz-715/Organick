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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}