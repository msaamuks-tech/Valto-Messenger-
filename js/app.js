console.log("Добро пожаловать в Valto!");
document.querySelectorAll(".chat").forEach(chat => {

    chat.addEventListener("click", function (e) {

        e.preventDefault();

        document.body.classList.add("page-out");

        const link = this.closest("a").href;

        setTimeout(() => {
            window.location.href = link;
        }, 250);

    });

});
