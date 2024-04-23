document.addEventListener("DOMContentLoaded", function() {
   
    function generateNumbers() {
        let newNumbers = Math.floor(Math.random() * 47) + 1;
    } 

    function generateSixNumbers(){
        let sixNumbers = [];
    
        while(sixNumbers.length<6) {
            let randomNumbers = generateRandomNumber();
            if (!sixNumbers.includes(randomNumber)) {
                sixNumbers.push(randomNumber);
            }
        }
    
        document.getElementsById("num1").value = sixNumbers[0];
        document.getElementsById("num2").value = sixNumbers[1];
        document.getElementsById("num3").value = sixNumbers[2];
        document.getElementsById("num4").value = sixNumbers[3];
        document.getElementsById("num5").value = sixNumbers[4];
        document.getElementsById("num6").value = sixNumbers[5];
    }
})   