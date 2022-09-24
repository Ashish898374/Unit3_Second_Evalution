// Add the coffee to local storage with key "coffee"

const url=`https://masai-api.herokuapp.com/coffee/menu`
 async function setdata(){
    try{
    let res= await fetch(url);
    let name=await res.json();
    // console.log(name)
    append(name.menu.data)
}catch(err){
    console.log(err)
}
}
setdata()
let arr=JSON.parse(localStorage.getItem("coffee")) ||[];
 let y=document.getElementById("coffee_count")
 y.innerHTML=arr.length
 console.log(y)

function append(data){
    
    data.forEach(function(el){
        

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
        // btn.setAttribute( "id", "add_to_bucket")
        btn.innerText="add to card";
        btn.style.marginLeft="110px"
        btn.addEventListener("click",function(){
            addtocard(el)
        })
        
        div.append(img,price,title,btn)
        
        document.getElementById("add_to_bucket").append(div)
    })
}
function addtocard(el){
arr.push(el)
alert("add to product")
localStorage.setItem("coffee",JSON.stringify(arr))
window.location.reload();
}
