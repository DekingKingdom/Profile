var img = document.getElementById("img1");
var btn = document.getElementById("btn1");


function switchLight(){
    if (btn.innerHTML == "ON"){
        img.src = "IMAGE\\light_on.png";
        btn.innerHTML = "OFF";
        btn.style.backgroundColor = "red";
        
    }else{
        img.src = "IMAGE\\light_off.png";
        btn.innerHTML = "ON";
        btn.style.backgroundColor = "green";
    }
}
