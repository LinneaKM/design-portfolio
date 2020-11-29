(function () {
    'use strict';
    let cards = document.getElementsByClassName("kmom-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function() {
            let linkpath = cards[i].firstElementChild.innerText;
            
            if (linkpath.slice(0,4) == "Kmom") {
                window.location += "/" + linkpath.toLowerCase();

            } else if (linkpath.slice(0,7) == "Rapport" ){
                let reportNum = linkpath.slice(-1);
                let reportFile = "";
                console.log("hej");
                switch(reportNum) {
                    case "1":
                        reportFile = "01_colors";
                      break;
                    case "2":
                      reportFile = "02_load";
                      break;
                    case "3":
                        reportFile = "03_design_principles";
                        break;
                  }
                
                  window.location += "/" + reportFile;
            }  
            
        });     
    }
})();
