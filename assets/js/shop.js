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
      category: "Vegetable",
      foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Vegetable__img.png",
      price: "20.00",
      title: "Calabrese Broccoli",
      discount: "13.00",
      preview: "5",
      starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
  },

  {
      id: 2,
      category: "Fresh",
      foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Fresh__img.png",
      price: "20.00",
      title: "Fresh Banana Fruites",
      discount: "14.00",
      preview: "5",
      starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
  },
  {
      id: 3,
      category: "Millets",
      foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Millets__img.png",
      price: "20.00",
      title: "White Nuts",
      discount: "15.00",
      preview: "5",
      starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
  },
  {
      id: 4,
      category: "Vegetable",
      foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Vegetable2__img.png",
      price: "20.00",
      title: "Vegan Red Tomato",
      discount: "17.00",
      preview: "5",
      starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
  },
  {
      id: 5,
      category: "Health",
      foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Health__img.png",
      price: "20.00",
      title: "Mung Bean",
      discount: "11.00",
      preview: "5",
      starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
  },
  {
      id: 6,
      category: "Nuts",
      foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Nuts__img.png",
      price: "20.00",
      title: "Brown Hazelnut",
      discount: "12.00",
      preview: "5",
      starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
  },
  {
      id:    7,
      category: "Fresh",
      foto: "C:/Users/ihodj/OneDrive/Рабочий%20стол/Organick/assets/images/main.images/Fresh2__img.png",
      price: "20.00",
      title: "Eggs",
      discount: "17.00",
      preview: "5",
      starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
  },
  {
      id: 8,
      category: "Fresh",
      foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Fresh3__img.png",
      price: "20.00",
      title: "Zelco Suji Elaichi Rusk",
      discount: "15.00",
      preview: "5",
      starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Stars.png",
  },
  {
    id: 9,
    category: "Health",
    foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/shop.images/fruit_nine.png",
    price: "20.00",
    title: "Mung Bean",
    discount: "11.00",
    preview: "5",
    starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
},
{
    id: 10,
    category: "Nuts",
    foto: "C:/Users/ihodj/OneDrive/Рабочий%20стол/Organick/assets/images/shop.images/fruit_tenn.png",
    price: "20.00",
    title: "Brown Hazelnut",
    discount: "12.00",
    preview: "5",
    starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
},
{
    id: 11,
    category: "Fresh",
    foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/shop.images/fruit_elevenn.png",
    price: "20.00",
    title: "Eggs",
    discount: "17.00",
    preview: "5",
    starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
},
{
    id: 12,
    category: "Fresh",
    foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/shop.images/fruit_twelef.png",
    price: "20.00",
    title: "Zelco Suji Elaichi Rusk",
    discount: "15.00",
    preview: "5",
    starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Stars.png",
}
]

var wrapper = document.querySelector(".fruit_item")
function productRes(item) {
  var card = document.createElement("li");
  card.classList.add("fruit_item_list");
  var category = document.createElement("p")
  category.classList.add("fruit_btn")
  category.textContent = item.category
  var foto = document.createElement("img")
  foto.classList.add("fruit_img")
  foto.setAttribute("src", item.foto)
  var title = document.createElement("h3")
  title.textContent = item.title
  title.classList.add("fruit_title")
  var line = document.createElement("div")
  line.classList.add("box_one")
  var cardView = document.createElement("div")
  cardView.classList.add("box")
  var price = document.createElement("p")
  price.classList.add("fruit_sum")
  price.textContent = item.discount
  var discount = document.createElement("span")
  discount.textContent = item.price
  var review = document.createElement("div")
  review.classList.add("card__stars")
  var stars = document.createElement("img")
  var stars_2 = document.createElement("img")
  var stars_3 = document.createElement("img")
  var stars_4 = document.createElement("img")
  var stars_5 = document.createElement("img")
  stars.setAttribute("src", item.starts)
  stars_2.setAttribute("src", item.starts)
  stars_3.setAttribute("src", item.starts)
  stars_4.setAttribute("src", item.starts)
  stars_5.setAttribute("src", item.starts)


  wrapper.appendChild(card)
  card.appendChild(category)
  card.appendChild(foto)
  card.appendChild(title)
  card.appendChild(line)
  card.appendChild(cardView)
  cardView.appendChild(price)
  cardView.appendChild(review)
  review.appendChild(stars)
  review.appendChild(stars_2)
  review.appendChild(stars_3)
  review.appendChild(stars_4)
  review.appendChild(stars_5)
  price.appendChild(discount)

}

for (newProduct of product) {
  productRes(newProduct)
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
var shopSearch = document.querySelector(".input")
function productRes(item) {
    var card = document.createElement("li");
    card.classList.add("fruit_item_list");
    var category = document.createElement("p")
    category.classList.add("fruit_btn")
    category.textContent = item.category
    var foto = document.createElement("img")
    foto.classList.add("fruit_img")
    foto.setAttribute("src", item.foto)
    var title = document.createElement("h3")
    title.textContent = item.title
    title.classList.add("fruit_title")
    var line = document.createElement("div")
    line.classList.add("box_one")
    var cardView = document.createElement("div")
    cardView.classList.add("box")
    var price = document.createElement("p")
    price.classList.add("fruit_sum")
    price.textContent = item.discount
    var discount = document.createElement("span")
    discount.textContent = item.price
    var review = document.createElement("div")
    review.classList.add("card__stars")
    var stars = document.createElement("img")
    var stars_2 = document.createElement("img")
    var stars_3 = document.createElement("img")
    var stars_4 = document.createElement("img")
    var stars_5 = document.createElement("img")
    stars.setAttribute("src", item.starts)
    stars_2.setAttribute("src", item.starts)
    stars_3.setAttribute("src", item.starts)
    stars_4.setAttribute("src", item.starts)
    stars_5.setAttribute("src", item.starts)
  
  
    wrapper.appendChild(card)
    card.appendChild(category)
    card.appendChild(foto)
    card.appendChild(title)
    card.appendChild(line)
    card.appendChild(cardView)
    cardView.appendChild(price)
    cardView.appendChild(review)
    review.appendChild(stars)
    review.appendChild(stars_2)
    review.appendChild(stars_3)
    review.appendChild(stars_4)
    review.appendChild(stars_5)
    price.appendChild(discount)
  
  }
  