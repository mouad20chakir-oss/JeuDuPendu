const buttons = document.querySelectorAll(".btn");
const letters = document.querySelectorAll(".keyword div");

const head = document.getElementById("head");
const body = document.getElementById("bod");
const hands = document.getElementById("hands");
const feet1 = document.getElementById("feet1");
const feet2 = document.getElementById("feet2");

const words = ["banana","apple","orange","coconut"];

let randomIndex = Math.floor(Math.random() * words.length);
let pass = words[randomIndex];

let count = 0;
let correct = 0;

/* display underscores */
for(let i = 0; i < pass.length; i++){
    letters[i].textContent = "_";
}

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let letter = button.textContent.toLowerCase();
        let found = false;

        for(let i = 0; i < pass.length; i++){

            if(pass[i] === letter){
                letters[i].textContent = letter;
                correct++;
                found = true;
            }

        }

        if(!found){
            count++;
        }

        switch(count){

            case 1:
                head.style.visibility = "visible";
                break;

            case 2:
                body.style.visibility = "visible";
                break;

            case 3:
                hands.style.visibility = "visible";
                break;

            case 4:
                feet1.style.visibility = "visible";
                break;

            case 5:
                feet2.style.visibility = "visible";
                alert("Game Over 😅 The word was: " + pass);
                location.reload();
                break;
        }

        if(correct === pass.length){
            alert("You Win 🎉");
            location.reload();
        }

        button.disabled = true;

    });

});


