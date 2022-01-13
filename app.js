//Simple form animation

function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        addEventListener("click", ()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextField = parent.nextElementSibling;

            //check validateUser
                if (input.type === "text" && validateUser(input)) {
                document.getElementById("notification").innerHTML =
                  "enter yoour email please";
                nextSlide(parent, nextField);
              } else if (input.type === "email" && validateEmail(input)) {
                document.getElementById("notification").innerHTML =
                  "enter yoour password please";
                nextSlide(parent, nextField);
              } else if (input.type === "password" && validateUser(input)) {
                document.getElementById("notification").innerHTML = "finished !";
                nextSlide(parent, nextField);
              } else {
                parent.style.animation = "shake 500ms ease ";
              }
            //get rid of animation
            parent.addEventListener("animationend", ()=>{
                parent.style.animation = "";
            });
        });
    });
}





function validateUser(user){
    if(user.value.length < 7){
        // console.log("Not enough characters");
        check("#7a2e28");
    }else{
        check("#12c6e6");
        return true;
    }
}


function validateEmail(email){
    const emailSpellingCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailSpellingCheck.test(email.value)){
        check("#12c6e6");
        return true; 
    }else{
        check("#7a2e28");
    }
}



function nextSlide(parent, nextField){
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextField.classList.add("active");
}


function check(color){
    document.body.style.backgroundColor = color;
}



animatedForm();
