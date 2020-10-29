// Products
const product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        calory: 100,
        get sum() {
            return this.amount * this.price
        },
        get kcall() {
            return this.amount * this.calory
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        calory: 200,
        get sum() {
            return this.amount * this.price
        },
        get kcall() {
            return this.amount * this.calory
        }
    },
    freshCombo: {
        name: "GAMBURGER",
        price: 31900,
        amount: 0,
        calory: 300,
        get sum() {
            return this.amount * this.price
        },
        get kcall() {
            return this.amount * this.calory
        }
    }
}



const btnPlusorMinus = document.querySelectorAll(".main__product-btn"),
    delivery = document.querySelector(".addCart");

for (let i = 0; i < btnPlusorMinus.length; i++) {
    btnPlusorMinus[i].addEventListener("click", function () {
        addOrSubrict(this);
    })
}

function addOrSubrict(element) {
    const parent = element.closest(".main__product");
    const parentId = parent.getAttribute("id");
    const price = parent.querySelector(".main__product-price span")
    const elementSym = element.getAttribute("data-symbol");
    const output = parent.querySelector(".main__product-num");
    const kcall = parent.querySelector(".main__product-kcall span");

    console.log(elementSym);
    if (elementSym == "+") {
        product[parentId].amount++
    } else if (elementSym == "-" && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    output.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].sum
    kcall.innerHTML = product[parentId].kcall
}

const time = document.querySelector(".header__timer-extra")

function timer() {
    time.innerHTML++
    if (time.innerHTML < 50) {
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

const receipt = document.querySelector(".receipt")
const receiptWindow = document.querySelector(".receipt__window")
const receiptWindowOut = document.querySelector(".receipt__window-out")
const receiptWindowBtn = document.querySelector(".receipt__window-btn")


delivery.addEventListener("click", function () {
    let menu = "Purchased: \n\n"
    let totalPrice = 0;
    let totalCalory = 0;
    for (key in product) {
        for (keyid in product[key]) {
            if (product[key].amount > 0 && keyid == "amount") {
                menu += `${product[key].amount}x${product[key].name} \ncalory: ${product[key].kcall}\n\n`;
                totalPrice += product[key].sum;
                totalCalory += product[key].kcall;
            }
        }
    }
    receipt.style.display = "flex";
    setTimeout(() => {
        receipt.style.opacity = "1";
        receiptWindow.style.top = "0";
    }, 100)
    document.body.style.overflow = "hidden"
    receiptWindowOut.innerHTML = `${menu} \n\n Total calory: ${totalCalory} \n\n Total price: ${totalPrice}`;
})

receiptWindowBtn.addEventListener("click", () => location.reload());

const productInfo = document.querySelectorAll(".main__product-info");

for (let i = 0; i < productInfo.length; i++) {
    productInfo[i].addEventListener("dblclick", function () {
        dblclick(this);
    })
}

function dblclick(element) {
    const parent = element.closest(".main__product-info");
    const img = parent.querySelector(".main__product-img");
    const close = document.querySelector(".view__close");
    const viewImg = document.querySelector(".view img");
    const attribute = img.getAttribute("src");
    viewImg.removeAttribute("src");
    viewImg.setAttribute("src", attribute);
    const view = document.querySelector(".view");
    view.classList.add("active");
    close.addEventListener("click", () => {
        const view = document.querySelector(".view");
        view.classList.remove("active");
    })
}