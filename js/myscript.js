// Products
const product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0
    },
    freshCombo: {
        name: "GAMBURGER",
        price: 31900,
        amount: 0
    }
}

const btnPlusorMinus = document.querySelectorAll(".main__product-btn"),
    delivery = document.querySelector(".cart");

for (let i = 0; i < btnPlusorMinus.length; i++) {
    btnPlusorMinus[i].addEventListener("click", function () {
        addOrSubrict(this);
    })
}

function addOrSubrict(element) {
    const parent = element.closest(".main__product");
    const parentId = parent.getAttribute("id");
    const elementSym = element.getAttribute("data-symbol");
    const output = parent.querySelector(".main__product-num");
    console.log(elementSym);
    if (elementSym == "+") {
        product[parentId].amount++
    } else if (elementSym == "-" && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    output.innerHTML = product[parentId].amount
}

const time = document.querySelector(".header__timer-extra")



function timer() {
    time.innerHTML++

    if (time.innerHTML <50) {
        fast = setTimeout(() => timer(), 10);
    } else if (time.innerHTML < 75) {
        fast = setTimeout(() => timer(), 50);
    } else if (time.innerHTML < 100) {
        fast = setTimeout(() => timer(), 100);
    }
    
    if (time.innerHTML == 100) {
        clearTimeout(fast)
    }
}
timer()