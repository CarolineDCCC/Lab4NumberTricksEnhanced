'use strict';
let step1 = 0;
let step2 = 0;
let step3 = 0;
let step4 = 0;
let answer = 0;



    let numEntry = prompt("Please enter any whole number.", 100);
        let guessNumber = parseInt(numEntry);
        if(isNaN(guessNumber)) {
            alert("Please enter a valid number.");
            window.location.reload(false)
        
        }
       
            step1 = guessNumber + 9;
            step2 = step1 * 2;
            step3 = step2 - 4;
            step4 = step3 / 2;
            answer = step4 - guessNumber;

            document.getElementById('win-text').style.display = "inline";
            

            document.write('<p><span style=\'color: #ffffff; font-size: 1.5em;\'>The number you entered is ' + guessNumber + '</span></p>');
            document.write('<p><span style=\'color: #ffffff; font-size: 1.5em;\'>' + guessNumber + ' plus 9 equals ' + step1 + '</span></p>');
            document.write('<p><span style=\'color: #ffffff; font-size: 1.5em;\'>' + step1 + ' multiplied by 2 equals ' + step2 + '</span></p>');
            document.write('<p><span style=\'color: #ffffff; font-size: 1.5em;\'>' + step2 + ' minus 4 equals ' + step3 + '</span></p>');
            document.write('<p><span style=\'color: #ffffff; font-size: 1.5em;\'>' + step3 + ' divided by 2 equals ' + step4 + '</span></p>');
            document.write('<p><span style=\'color: #ffffff; font-size: 1.5em;\'>' + step4 + ' minus your original number of ' + guessNumber + ' equals...  </span></p>');
            document.write('<p><span style=\'color: #ffffff; font-size: 1.5em;\'>Your answer is ' + answer + '</span></p>');    
        
    


    const playAgain = document.querySelector('StartOver');

    playAgain.addEventListener('click', function refreshPage(){
        location.reload();
        return false;
    });
