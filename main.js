let shop = document.getElementById('shop')

let shopItemsData = [{
    id: "xdxd",
    name: "Casual Shirt",
    price: 45,
    desc: "I love you 78",
    img: "images/img-1.jpg"
},
{
    id: "xdxd1",
    name: "Casual Shirt1",
    price: 450,
    desc: "I love you 789",
    img: "images/img-2.jpg"
},
{
    id: "xdxd2",
    name: "Casual Shirt2",
    price: 4500,
    desc: "I love you 7890",
    img: "images/img-3.jpg"
},
{
    id: "xdxd3",
    name: "Casual Shirt3",
    price: 45000,
    desc: "I love you 78900",
    img: "images/img-4.jpg"
}]

let generateShop = ()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
       let{id,name,price,desc,img}=x;
        return`
        <div class="item">
            <img width="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join(""));
}

generateShop();