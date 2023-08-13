let toggle = document.getElementById("toggleButton"); 
let Menu = document.getElementById("menuBar");
const Hide = document.getElementById("hide"); 

toggle.addEventListener("click", function () {
    Menu.style.display = "block";
});


Hide.addEventListener("click" , function(){
    Menu.style.display = "none"; 
})

