let display = document.getElementById("display");
let buttons = document.querySelectorAll(".b");
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        let value = button.getAttribute("data-value");
        if (button.id === "equal"){
            display.innerText = eval(display.innerText);
        }
        else if (button.id === "clear"){
            display.innerText = "";
        }
        else{
            display.innerText += value;
        }
    });
});