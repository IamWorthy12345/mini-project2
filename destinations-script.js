const BOOK_TOUR = document.querySelectorAll(".btn-book-tour");

for(let i = 0; i < BOOK_TOUR.length; i++){
    BOOK_TOUR[i].addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = "book-tour.html";
    });
}