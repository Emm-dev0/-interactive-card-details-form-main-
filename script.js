// variable for the confirm button
var complete = document.getElementById("submit");
var form = document.getElementById("form")
var submitBtn = document.getElementById("submin-btn");
// variables to validate the card name
var cardName = document.getElementById("card-name");
var cardNameError = document.getElementById('card-name-error');
var showCardName = document.getElementById('cardName1');
//variables to validate the card number
var cardNum = document.getElementById('card-num');
var cardNumError = document.getElementById('card-num-error');
var showCardNum = document.getElementById('cardNum1');
//variables to validate exp month
var expMonth = document.getElementById('exp-month');
var expMonthError = document.getElementById('month-error');
var showExpMonth = document.getElementById('expMonth1');
//variables to validate exp year
var expYear = document.getElementById('exp-year');
var expYearError = document.getElementById('year-error');
var showExpYear = document.getElementById('expYear1');
// variables to validate cvc
var cvcNum = document.getElementById('cvc-num');
var cvcError = document.getElementById("cvc-error");
var showCvc = document.getElementById("cvc1");



submitBtn.addEventListener("click", validate);

//validates all the user entries
function validate() {

//validates user card name
    function valCardName() {
        var letters = /^[A-Za-z\s]*$/;
        if(cardName.value.match(letters) && cardName.value.length >= 4) {
           showCardName.innerText = cardName.value;
           cardNameError.innerText = "";
        } else {
            cardNameError.innerText = "invalid name";
        }  
    }
    valCardName();

//validates user card number
    function valCardNum() {
        var numbers = /^[0-9\s]*$/;

        if(cardNum.value.match(numbers) && cardNum.value.length == 19 ) {
            showCardNum.innerHTML = cardNum.value;
            cardNumError.innerText = '';
        } else {
            cardNumError.innerText = 'invalid card number';
        }
    }
    valCardNum();

//validates card exp month
    function valExpMonth() {
        var number = /^[0-9]+$/;
    
        if(expMonth.value.match(number) && expMonth.value <= 12 && expMonth.value.length == 2) {
            console.log('hola');
            showExpMonth.innerHTML = expMonth.value;
            expMonthError.innerText = '';
        } else {
            expMonthError.innerText = 'invalid month';
        }
    }
    valExpMonth();

    function valExpYear() {
        var number = /^[0-9]+$/;

        if(expYear.value.match(number) && expYear.value >= 22 && expYear.value.length == 2) {
            showExpYear.innerHTML = expYear.value;
            expYearError.innerText = '';
        } else {
            expYearError.innerText = 'invalid year';
        }
    }
    valExpYear();

    function valCvc() {
        var number = /^[0-9]+$/;
        if(cvcNum.value.match(number) && cvcNum.value.length == 3) {
            showCvc.innerHTML = cvcNum.value;
            cvcError.innerText = '';
        } else {
            cvcError.innerText = "invalid cvc"
        }
    }
    valCvc();

    if ( cardNameError.innerText == "" && cardNumError.innerText == '' &&  expMonthError.innerText == '' && expYearError.innerText == '' && cvcError.innerText == '') {
        console.log('good to go');
        // document.location.href = "submit.html"
        form.style.display = 'none';
        complete.style.display = 'flex';
        
    } else {
        console.log('!error');
       
    }
}