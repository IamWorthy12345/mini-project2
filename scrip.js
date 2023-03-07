const JOINER_SIGNUP = document.querySelector(".joiner-signup");
const JOINER_LOGIN = document.querySelector(".joiner-login");
const BACK_BUTTON = document.querySelector(".fa-arrow-left");
const SIGNUP_BUTTON = document.querySelector("#btn-signup-joiner");
const SIGNIN_BUTTON_DIV = document.querySelector("#joiner-signin-buttons");
const SIGNIN_BUTTON = SIGNIN_BUTTON_DIV.querySelector("button");
const SIGNIN_DIV = document.querySelector(".signin-container");
const SIGNIN_FORM = SIGNIN_DIV.querySelector("form");

SIGNUP_BUTTON.addEventListener('click', function(){
    JOINER_LOGIN.style.display = "none";
    JOINER_SIGNUP.style.display = "block";
    BACK_BUTTON.style.display = "block";
    SIGNUP_BUTTON.style.display = "none";
    SIGNIN_BUTTON.innerHTML = "Sign Up";
    SIGNIN_FORM.style.height = "max-content";
});

BACK_BUTTON.addEventListener('click', function(){
    JOINER_LOGIN.style.display = "block";
    JOINER_SIGNUP.style.display = "none";
    SIGNUP_BUTTON.style.display = "block";
    SIGNIN_BUTTON.innerHTML = "Log In";
    BACK_BUTTON.style.display = "none";
});
