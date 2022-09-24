  function payment(n,b,a){
    this.name=n;
    this.number=b;
    this.address=a;
  }
  
  
  
  
  function getdata(e){
    e.preventDefault();
    let from=document.getElementById("form");
    // from.innerHTML=null
    let name=from.name.value;
    let Number=form.number.value;
    let address=form.address.value;
    let out= new payment(name,Number,address)
    console.log(out)
    setTimeout(function(){
        alert("your arder is accepted")
    },0)
    setTimeout(function(){
        alert("Your order is being Prepared ")
    },3000)
    setTimeout(function(){
        alert("Your order is being packed ")
    },8000)
    setTimeout(function(){
        alert("Your order is out for delivery ")
    },1000)
    setTimeout(function(){
        alert("Order delivered")
    },12000)
}