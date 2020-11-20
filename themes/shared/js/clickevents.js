(function () {
    'use strict';
    let cards = document.getElementsByClassName("kmom-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function() {
            let linkpath = cards[i].firstElementChild.innerText;
            
            window.location += "/" + linkpath.toLowerCase();
            
        });     
    }
})();
