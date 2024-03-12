"use strict";

(function() {
    const hamburgerMenuEl = document.querySelector('.hamburger-menu');

    const subscribeClickEl = document.querySelectorAll('.card-subscribe');
    const modal = document.getElementById('subscribeModal');
    
    const subscribeButtonEl = document.querySelector('.subscribeButton');
    const cancelButtonEl = document.querySelector('.cancelButton');

    const emailInputEl = document.getElementById('input-email');
    const confirmEmailInputEl = document.getElementById('input-confirm-email');

    const errorMessageEmailEl = document.querySelector('.error-message-email');
    const errorMessageconfirmEmailEl = document.querySelector('.error-message-confirm-email');
    let isInvalid = false;

    hamburgerMenuEl.addEventListener('click', function () {
        hamburgerMenuEl.classList.toggle('active');
    });

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function checkErrorMessage() {
        console.log("Check!");
        if (errorMessageEmailEl.innerText != "") {
            console.log("email 错");
            emailInputEl.classList.add('error-input');
        } else {
            console.log("email 对");
            emailInputEl.classList.remove('error-input');
        }

        if (errorMessageconfirmEmailEl.innerText != "") {
            console.log("confirm email 错");
            confirmEmailInputEl.classList.add("error-input");
        } else {
            console.log("confirm email 对");
            confirmEmailInputEl.classList.remove("error-input");
        }
    }

    subscribeButtonEl.addEventListener('click', (e) => {
        if (!emailInputEl.value) {
            errorMessageEmailEl.innerText = "This field is required";
            checkErrorMessage();
            isInvalid = true;
        } else {
            errorMessageEmailEl.innerText = "";
            if (!emailInputEl.value.includes('@')) {
                errorMessageEmailEl.innerText = "This field be a valid email address including @";
                checkErrorMessage();
                isInvalid = true;
            } else {
                errorMessageEmailEl.innerText = "";
                if(emailInputEl.value != confirmEmailInputEl.value) {
                    errorMessageconfirmEmailEl.innerText = "This field must match the provided email address";
                    checkErrorMessage();
                    isInvalid = true;
                } else {
                    errorMessageconfirmEmailEl.innerText = "";
                    checkErrorMessage();
                    isInvalid = false;
                }
            }
        }
        
        if (isInvalid) {
            e.preventDefault();
        }
    
    });

    cancelButtonEl.addEventListener('click', closeModal);

    document.addEventListener('keyup', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    subscribeClickEl.forEach(function (link) {
        link.addEventListener('click', openModal);
    });



    
})();