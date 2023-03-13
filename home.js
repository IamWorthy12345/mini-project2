const BUTTON_BOOK = document.querySelector('#btn-show-tours');
const USER_LOGGED = document.querySelector('.stored-user');

if (USER_LOGGED.textContent.endsWith('Logged In')){
    BUTTON_BOOK.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = 'destinations.html';
    });
} else {
    BUTTON_BOOK.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = 'signin.html';
    });
}