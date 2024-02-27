const wrapper = document.getElementById("products-wrapper")

const fetchProducts = async () => {
    const response = await fetch("https://65c603d9e5b94dfca2e0c57d.mockapi.io/products")

    const products = await response.json()
    console.log(products)

    const productsSliced = products.slice(0, 35)

    productsSliced.forEach((product) => {
        const card = document.createElement("a")
        card.href = "./product/product.html"


        card.setAttribute("class", "card")
        const productImg = document.createElement("img")
        productImg.setAttribute("class", "post-img")
        const title = document.createElement("h4")
        title.setAttribute("class", "card-title")
        const price = document.createElement("p")
        price.setAttribute("class", "price")
        const contentBlock = document.createElement("div")
        contentBlock.setAttribute("class", "contentBlock")

        productImg.src = product.image
        title.innerText = product.title
        price.innerText = `${product.price} €`
    

        card.append(productImg)
        card.append(contentBlock)
        contentBlock.append(title, price)
        wrapper.append(card)
    })
}
fetchProducts()