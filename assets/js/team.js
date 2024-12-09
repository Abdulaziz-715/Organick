const form = document.querySelector('.subscribe__form');
    const number = '996555459645';

    function sendToWhatsapp(text, phone) {
      text = encodeURIComponent(text);
      let url = `https://wa.me/${phone}?text=${text}`;
      window.open(url, '_blank');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = e.currentTarget.querySelector('input').value;

      if (!text.trim()) {
        alert('Введите текст сообщения!');
        return;
      }

      sendToWhatsapp(text, number);
    });

    
var product = [
  {
    id: 1,
    name: "Giovani Bacardo",
    text: "Farmer",
    foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Image%20(2).png",
    fcImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector.svg",
    twImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector%20(1).svg",
    instImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Insta.svg",
  },
  {
    id: 2,
    name: "Marianne Loreno",
    text: "Designer",
    foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Image%20(1).png",
    fcImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector.svg",
    twImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector%20(1).svg",
    instImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Insta.svg",
  },
  {
    id: 3,
    name: "Riga Pelore",
    text: "Farmer",
    foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Image.png",
    fcImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector.svg",
    twImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector%20(1).svg",
    instImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Insta.svg",
  },
  {
    id: 4,
    name: "Keira Knightley",
    text: "Farmer",
    foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/organik_.png",
    fcImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector.svg",
    twImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector%20(1).svg",
    instImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Insta.svg",
  },
  {
    id: 5,
    name: "Scott Lawrence",
    text: "Designer",
    foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/organik_1.png",
    fcImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector.svg",
    twImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector%20(1).svg",
    instImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Insta.svg",
  },
  {
    id: 6,
    name: "Karen Allen",
    text: "Farmer",
    foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/organik_2.png",
    fcImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector.svg",
    twImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Vector%20(1).svg",
    instImg: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/about.images/Insta.svg",
  },

]
var wrapper = document.querySelector(".organic_list")
function productRes(item) {
  var orli = document.createElement("li");
  orli.classList.add("organic_item");
  var orimg = document.createElement("img");
  orimg.setAttribute("src", item.foto);
  var ortit = document.createElement("h6")
  ortit.classList.add("organic_title")
  ortit.textContent = item.name;
  var orbx = document.createElement("div");
  orbx.classList.add("organic_box")
  orbx.textContent = item.text
  var orft = document.createElement("div");
  orft.classList.add("organic_foto");
  var oraim = document.createElement("img")
  oraim.setAttribute("src", item.instImg)
  var oraim_2 = document.createElement("img")
  oraim_2.setAttribute("src", item.fcImg)
  var oraim_3 = document.createElement("img")
  oraim_3.setAttribute("src", item.twImg)

  wrapper.appendChild(orli)
  orli.appendChild(orimg)
  orli.appendChild(ortit)
  orli.appendChild(orbx)
  orbx.appendChild(orft)
  orft.appendChild(oraim)
  orft.appendChild(oraim_2)
  orft.appendChild(oraim_3)
}

for (newProduct of product) {
  productRes(newProduct)
}