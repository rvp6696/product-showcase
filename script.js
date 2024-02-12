
let productList = document.getElementById("product-grid")
let productUrl = "https://fakestoreapi.com/products"
let popUpLayer = document.querySelector(".popup-layer")

const displayProductGrid = async () => {
    await fetch(productUrl)
        .then(res => res.json())
        .then((productData) => {
            let temp = ""
            productData.map((details, index) => {

                temp += `<div class="thumbnail" onclick="popUpTrigger('${details.id}'); popupmsg()">
                        <img class="thumbnail-img" src="${details.image}" alt="${details.title}"/>
                        </div>`
            })
            productList.innerHTML = temp
        })
}


let popupmsg = () => {
    let popup = document.getElementById("popup")
    popup.classList.toggle("active")
}


let popUpTrigger = async (productId) => {


    await fetch(`${productUrl}/${productId}`)
        .then(res => res.json())
        .then((productData) => {
            let temp = ""

                temp += `<a><i class="fa-solid fa-circle-xmark fa-3x" onclick="popupmsg()"> </i></a>
                        <div class="popup-img">
                            <img src="${productData.image}" alt="${productData.title}"/>
                        </div>

                        <div class="product-content">
                            <h2>${productData.title}</h2>
                            <p> ${productData.description} </p>
                            <p><span class="grey-text"><i>Category: ${productData.category}</i></span></p>
                            <p>Price: <b><i class="fa-solid fa-dollar-sign"></i>${productData.price}</b></p>
                        </div>`

            popUpLayer.innerHTML = temp
        })
}


