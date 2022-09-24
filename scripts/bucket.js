// On clicking remove button the item should be removed from DOM as well as localstorage.


let arr=JSON.parse(localStorage.getItem("coffee")) ||[];
var total=arr.reduce(function(sum,el){
    return sum+Number(el.price)

},0)
console.log(total)

document.querySelector("h3").innerHTML=`${total}`;

arr.forEach(function(el,index){
    let div=document.createElement("div");
    
    let img=document.createElement("img");
    img.src=el.image;
    img.style.width="300px"
    img.style.height="300px"
    let price=document.createElement("p")

    price.innerText=el.price;
    price.style.marginLeft="130px"
    let title=document.createElement("p");
    title.innerText=el.title;
    title.style.marginLeft="130px"
    let btn=document.createElement("button");
    btn.innerText="Remove";
    btn.style.marginLeft="110px"
    btn.addEventListener("click",function(){
        remove(el,index)
    })
    
    div.append(img,price,title,btn)

    document.getElementById("remove_coffee").append(div)
})
function remove(el,index){
    arr.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload();
}