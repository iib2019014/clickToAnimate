cards = document.querySelectorAll(".card");
popup = document.getElementById("popup");
text = document.querySelector(".text");
bell_icon = document.querySelector(".fa-bell");

cards.forEach(card => {
    card.addEventListener("click", function(event) {
        if(popup.classList.contains("popup-comes")) {
            text.style.animation = "fold-text .5s ease-in-out 1 forwards";

            setTimeout(() => {
                text.classList.remove("text-unfolded");
                bell_icon.classList.remove("bell-icon-grows");
                popup.classList.remove("popup-comes");

                popup.style.animation = "unbounce-popup .5s ease-in-out 1 forwards";
            }, 500);
        }

        else {
            popup.style.animation = "";
            popup.classList.add("popup-comes");

            setTimeout(() => {
                bell_icon.classList.add("bell-icon-grows");

                setTimeout(() => {
                    text.style.animation = "";
                    text.classList.add("text-unfolded");
                }, 200);
            }, 600);
        }
    })
});