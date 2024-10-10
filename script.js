var istatus = document.querySelector("h3")
var btn = document.querySelector("button")
var flag=0
btn.addEventListener("click",function(){
    if(flag==0){
        istatus.innerHTML="Friend"
        istatus.style.color="green"
        btn.innerHTML="Remove Friend"
        btn.style.backgroundColor="rgba(0, 255, 255, 0.468)"
        btn.style.color="blue"
        flag=1
    }else{
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        btn.innerHTML="Add Friend"
         btn.style.backgroundColor="darkkhaki"
        btn.style.color="white"
        flag=0
    }
})