document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });
  


const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});



const mouseData = [
  {
    name: "REDDRAGON M610",
    price: "₱375.00",
    photo: "m1.webp"
  },
  {
    name: "ASUS TUF M3",
    price: "₱725.00",
    photo: "m2.jpg"
  },
  {
    name: "PULSAR Xlite V2 PXW26",
    price: "₱3,590.00",
    photo: "m3.webp"
  },
  {
    name: "PWNAGE UC-MC2W",
    price: "₱3,995.00",
    photo: "m4.webp"
  }
  ,
  {
    name: "RAZER OROCHI V2",
    price: "₱2,950.00",
    photo: "m5.png"
  }
  ,
  {
    name: "Logitech G Pro Wireless",
    price: "₱5,995.00",
    photo: "m6.png"
  }
  ,
  {
    name: "GLORIOUS MODEL O",
    price: "₱2,550.00",
    photo: "m7.png"
  }
  ,
  {
    name: "DRAGONWAR HEPTAESTUS",
    price: "₱395.00",  
    photo: "m8.png"
  }
];



function mouseTemplate(mouse) {
  return `
    <div class="mouse">
    <img class="mouse-photo shop-item-image" src="${mouse.photo}">
    <h2 class="mouse-name shop-item-title">${mouse.name} <br> <span class="price shop-item-price">${mouse.price}</span></h2>
    <button class="atc-btn btn btn-primary shop-item-button">Add to cart</button>
    </div>
  `;
}

document.getElementById("app").innerHTML = `
  <h1 class="app-title">Choose a product (${mouseData.length} results)</h1>
  ${mouseData.map(mouseTemplate).join("")} 
`;














if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}






function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}



function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var name = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var photo = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(name, price, photo)
    updateCartTotal()
}



function addItemToCart(name, price, photo) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == name) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column mouse">
            <img class="cart-item-image" src="${photo}" width="100" height="100">
            <span class="cart-item-title">${name}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}




