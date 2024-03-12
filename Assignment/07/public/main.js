"use strict";

(function() {

    const formEl = document.querySelector('.register-form');
    const nameInputEl = document.querySelector('.register-form__input--username');
    const emailInputEl = document.querySelector('.register-form__input--email');
    const emailInputErrorEl = document.querySelector('.register-form__error--message-email');
    const confirmEmailInputEl = document.querySelector('.register-form__input--email-confirmation');
    const confirmEmailInputErrorEl = document.querySelector('.register-form__error--message-email-confirmation');
    const errorMessageNameEl = document.querySelector('.register-form__error--message-name');
    let isInvalid = false;
    errorMessageNameEl.classList.remove('error-visible');


    nameInputEl.addEventListener('input', (e) => {
        console.log(e.target.value);
        errorMessageNameEl.classList.remove('error-visible');
        if( !nameInputEl.value) {
            console.log("name是空的");
            errorMessageNameEl.classList.add('error-visible');
        } else {
            console.log("name有内容");
            errorMessageNameEl.classList.remove('error-visible');
        }
    });

    formEl.addEventListener('submit', (event) => {
        errorMessageNameEl.classList.remove('error-visible');
        if( !nameInputEl.value) {
            console.log("submit: fail. name是空的");
            errorMessageNameEl.classList.add('error-visible');
            isInvalid = true;
        } else {
            isInvalid = false;
        }

        if (!emailInputEl.value) {
            emailInputErrorEl.innerText = "This field is required.";
            isInvalid = true;
        } else {
            emailInputErrorEl.innerText = "";
            isInvalid = false;
        }
        
        if (!confirmEmailInputEl.value) {
            confirmEmailInputErrorEl.innerText = "This field is required.";
            isInvalid = true;
        } else if (confirmEmailInputEl.value != emailInputEl.value){
            confirmEmailInputErrorEl.innerText = "The email does not match.";
            isInvalid = true;
        } else {
            confirmEmailInputErrorEl.innerText = "";
            isInvalid = false;
        }

        if (isInvalid) {
            event.preventDefault();
        }
    })
})();