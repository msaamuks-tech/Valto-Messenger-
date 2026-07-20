document.querySelectorAll(".chat").forEach(chat => {

    chat.addEventListener("touchstart", () => {
        chat.classList.add("active");
    });

    chat.addEventListener("touchend", () => {
        setTimeout(() => {
            chat.classList.remove("active");
        }, 120);
    });

    chat.addEventListener("touchcancel", () => {
        chat.classList.remove("active");
    });

});
