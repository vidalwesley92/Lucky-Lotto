document.addEventListener("DOMContentLoaded", function() {
// generate random numbers.
    function generateRandomNumber() {
        return Math.floor(Math.random() * 47) + 1;
    }

// generate lotto numbers that are not equal another inside of the array
    function generateLottoNumbers() {

// Array that will store the generated numbers
        let lottoNumbers = [];

        // Generate six different random numbers between 1 and 47 using the function generateRandomNumber
        // inspired by << https://stackoverflow.com/questions/62176298/how-to-approach-creating-array-of-random-numbers-with-no-repeats>>
        while (lottoNumbers.length < 6) {
            let randomNumber = generateRandomNumber();
            if (!lottoNumbers.includes(randomNumber)) {
                lottoNumbers.push(randomNumber);
            }
        }

// Replaces the values inside the inputs with the generated numbers
        document.getElementById('num1').value = lottoNumbers[0];
        document.getElementById('num2').value = lottoNumbers[1];
        document.getElementById('num3').value = lottoNumbers[2];
        document.getElementById('num4').value = lottoNumbers[3];
        document.getElementById('num5').value = lottoNumbers[4];
        document.getElementById('num6').value = lottoNumbers[5];
    }


// Event listener for the "GENERATE" button
    document.querySelector('button[data-type="generate"]').addEventListener("click", function() {
        generateLottoNumbers();
    });

});

// restart button function

document.querySelector('button[data-type="reset"]').addEventListener("click", function() {

    document.getElementById('num1').value = "";
        document.getElementById('num2').value = "";
        document.getElementById('num3').value = "";
        document.getElementById('num4').value = "";
        document.getElementById('num5').value = "";
        document.getElementById('num6').value = "";
});