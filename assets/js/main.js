
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
        id: 7,
        category: "Fresh",
        foto: "C:/Users/ihodj/OneDrive/Рабочий%20стол/Organick/assets/images/main.images/Fresh2__img.png",
        price: "20.00",
        title: "Eggs",
        discount: "17.00",
        preview: "5",
        starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star.svg",
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
    }
]

var wrapper = document.querySelector(".product__wrapper")
function productRes(item) {
    var card = document.createElement("li");
    card.classList.add("product__card");
    var category = document.createElement("p")
    category.classList.add("card__view")
    category.textContent = item.category
    var foto = document.createElement("img")
    foto.classList.add("card__img")
    foto.setAttribute("src", item.foto)
    var title = document.createElement("h3")
    title.textContent = item.title
    title.classList.add("card__name")
    var line = document.createElement("div")
    line.classList.add("line")
    var cardView = document.createElement("div")
    cardView.classList.add("card__review")
    var price = document.createElement("p")
    price.classList.add("card__price")
    price.textContent = item.discount
    var discount = document.createElement("strike")
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



var offer = [
    {
        id: 1,
        category: "Vegetable",
        foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Vegetable__img.png",
        price: "20.00",
        title: "Mung Bean",
        discount: "11.00",
        preview: "5",
        starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
    },

    {
        id: 2,
        category: "Fresh",
        foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Kabachok__img.png",
        price: "20.00",
        title: "Brown Hazelnut",
        discount: "12.00",
        preview: "5",
        starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
    },
    {
        id: 3,
        category: "Millets",
        foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Luk__img.png",
        price: "20.00",
        title: "Onio",
        discount: "17.00",
        preview: "5",
        starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
    },
    {
        id: 4,
        category: "Vegetable",
        foto: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Kapusta__img.png",
        price: "20.00",
        title: "Cabbage",
        discount: "17.00",
        preview: "5",
        starts: "file:///C:/Users/ihodj/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Organick/assets/images/main.images/Star__icon.svg",
    },
]


var wrapper = document.querySelector(".offcard__wrapper")
function productRes(item) {
    var card = document.createElement("li");
    card.classList.add("product__card");
    var category = document.createElement("p")
    category.classList.add("card__view")
    category.textContent = item.category
    var foto = document.createElement("img")
    foto.classList.add("card__img")
    foto.setAttribute("src", item.foto)
    var title = document.createElement("h3")
    title.textContent = item.title
    title.classList.add("card__name")
    var line = document.createElement("div")
    line.classList.add("line")
    var cardView = document.createElement("div")
    cardView.classList.add("card__review")
    var price = document.createElement("p")
    price.classList.add("card__price")
    price.textContent = item.discount
    var discount = document.createElement("strike")
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

for (newOffer of offer) {
    productRes(newOffer)
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