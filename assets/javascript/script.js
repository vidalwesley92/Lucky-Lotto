document.addEventListener("DOMContentLoaded", function() {
    let generate = document.getElementsByTagName("button"); 

    for (let button of generate) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "generate") {
                console.log("generate");
                //generateNumbers();
            } else {
                console.log("reset");
                //reset();
            }
        });
    }

});

function generateNumbers() {
    let num1 = Math.floor(Math.random() * 47) + 1;
    let num2 = Math.floor(Math.random() * 47) + 1;
    let num3 = Math.floor(Math.random() * 47) + 1;
    let num4 = Math.floor(Math.random() * 47) + 1;
    let num5 = Math.floor(Math.random() * 47) + 1;
    let num6 = Math.floor(Math.random() * 47) + 1;
}

function compareNumbers() {
    let userNumber = document.getElementsByTagName("input").value;
    if (userNumber === "") {
        console.log("?");
    } else {
        console.log("1");
    }
}

function reset() {

}