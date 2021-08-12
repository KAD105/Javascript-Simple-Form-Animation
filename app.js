function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        addEventListener("click", ()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextField = parent.nextElementSibling;

            //check validateUser
            if(input.type === "text" && validateUser(input)){
                console.log("Everything is OK")
            }
        });
    });
}

animatedForm();

function validateUser(user){
    if(user.value.length < 7){
        console.log("Not enough characters");
        error("#d91e31");
    }else{
        error("#12c6e6");
        return true;
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}