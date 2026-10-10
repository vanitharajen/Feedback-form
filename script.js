var message=document.getElementById("message");
let count=document.getElementById("count");
let warning=document.getElementById("warning");
message.addEventListener("input",function(){
    count.textContent=message.value.length+"/200 characters";
    if (message.value.length>=200){
        console.log("warningjhjh");
        warning.textContent="Character limit reached!";
    }
    else{
        warning.textContent="";
    }
})