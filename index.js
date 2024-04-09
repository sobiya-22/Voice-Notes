
for (var i = 0; i < document.querySelectorAll(".rag").length; i++) {
    document.querySelectorAll(".rag")[i].addEventListener("click", function () {
        var current_rag = this.innerHTML;
        this.style.color = "black";
        var location = "sounds/" + current_rag + ".mp3";
        var audio = new Audio(location);
        audio.play();
        buttonAnimation(current_rag);
    });
}

document.addEventListener("keydown", function (event) {
    buttonAnimation(event.key);
    switch (event.key) {
        case '1':
            var Sa = new Audio("sounds/Sa.mp3");
            Sa.play();
            break;
        case '2':
            var Re = new Audio("sounds/Re.mp3");
            Re.play();
            break;
        case '3':
            var Ga = new Audio("sounds/Ga.mp3");
            Ga.play();
            break;
        case '4':
            var Ma = new Audio("sounds/Ma.mp3");
            Ma.play();
            break;
        case '5':
            var Pa = new Audio("sounds/Pa.mp3");
            Pa.play();
            break;
        case '6':
            var Dha = new Audio("sounds/Dha.mp3");
            Dha.play();
            break;
        case '7':
            var Ni = new Audio("sounds/Ni.mp3");
            Ni.play();
            break;
        case '8':
            var Saa = new Audio("sounds/Saa.mp3");
            Saa.play();
            break;
    }
});
function buttonAnimation(currentKey){
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}