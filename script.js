const SHOW_SIGNUP_BUTTON = document.querySelector("#show-signup");
const JOINER_SIGNUP = document.querySelector(".joiner-signup");
const JOINER_LOGIN = document.querySelector(".joiner-login");
const BACK_BUTTON = document.querySelector(".fa-arrow-left");

SHOW_SIGNUP_BUTTON.addEventListener('click', function(){
    JOINER_LOGIN.style.display = "none";
    JOINER_SIGNUP.style.display = "block";
    BACK_BUTTON.style.display = "block";
});

BACK_BUTTON.addEventListener('click', function(){
    JOINER_LOGIN.style.display = "block";
    JOINER_SIGNUP.style.display = "none";
    BACK_BUTTON.style.display = "none";
});
