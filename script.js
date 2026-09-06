const buttons = document.querySelectorAll(".more-button")

buttons.forEach(function(button) {
    const card = button.parentElement;
    const detailsText = card.querySelector(".details-text");
    button.addEventListener("click", function() {
    if (detailsText.style.display === "none") {
        detailsText.style.display = "block";
    }
    else
        detailsText.style.display = "none";
});
});