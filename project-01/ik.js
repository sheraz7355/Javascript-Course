let colors = document.querySelectorAll(".button");
let body = document.querySelector(".body-color");

colors.forEach(bt => {
    bt.addEventListener("click",function(e){
        let color = e.target.id;
        console.log(color);
        body.style.backgroundColor = color;
    })
});