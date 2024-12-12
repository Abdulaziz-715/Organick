function sendToWhatsApp() {

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;


    const phoneNumber = "996555459645";


    const whatsappMessage = `Hello!%0A%0AHere is my information:%0A%0A*Full Name:* ${encodeURIComponent(fullName)}%0A*Email:* ${encodeURIComponent(email)}%0A*Company:* ${encodeURIComponent(company)}%0A*Subject:* ${encodeURIComponent(subject)}%0A*Message:* ${encodeURIComponent(message)}`;


    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;


    window.open(whatsappURL, '_blank');
}

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