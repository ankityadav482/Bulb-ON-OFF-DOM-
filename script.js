var btn = document.querySelector("button")
var blb = document.querySelector("#bulb")

var flag =0;
btn.addEventListener("click",function(){
    if(flag==0){
        blb.style.backgroundColor="yellow"
        btn.innerHTML="Off"
        flag=1

    }else{
        blb.style.backgroundColor="blue"
        btn.innerHTML="Click"
        flag=0
    }
})