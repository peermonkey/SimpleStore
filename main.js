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
}];

let basket = JSON.parse(localStorage.getItem("data"))|| [];

let generateShop = ()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
       let{id,name,price,desc,img}=x;
       let search = basket.find((x)=>x.id===id)||[];
        return`
        <div id=product-id${id} class="item">
            <img width="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$${price}</h2>
                    <div class="buttons">
                        <i onclick ="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">
                        ${search.item===undefined?0 : search.item}</div>
                        <i onclick ="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join(""));
}

generateShop();

let increment = (id) =>{
    let selectedItem = id;
    let search =basket.find((x)=> x.id === selectedItem.id);
    if(search === undefined){

    
    basket.push({
        id: selectedItem.id,
        item :1,
    })}
    else{
        search.item +=1;

    }
    
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket))
};
let decrement = (id) =>{
    let selectedItem = id;
    let search =basket.find((x)=> x.id === selectedItem.id);
    if(search===undefined) return
    else if(search.item === 0){return}
    else{
        search.item -=1;
    }
    update(selectedItem.id);
    
    basket = basket.filter((x)=>x.item !==0);
    
    
//console.log(basket)

localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) =>{
    let search = basket.find((x)=>x.id === id);
    document.getElementById(id).innerHTML =search.item;
    calculation();
};

let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
    
}

calculation();
