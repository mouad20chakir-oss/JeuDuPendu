const buttons = document.querySelectorAll(".btn");

words = ["banana","apple","orange","coconut","strawberry"]
let randomIndex = Math.floor(Math.random()* words.length)



buttons.forEach(function(button) {
    button.addEventListener("click", function () {
        for(let i=0;i<words.length;i++){
            if(button==words[randomIndex]){
                document.getElementById("feet2").style.visibility = "visible";
            }
        }
        
        document.getElementsByClassName("input").textContent = button.value;
    });
});
