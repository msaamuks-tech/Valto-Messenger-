const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const inputs = document.querySelectorAll("input");

    const email = inputs[0].value;
    const password = inputs[1].value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {

        alert("Вход выполнен!");

        window.location.href = "home.html";

    } else {

        alert("Неверный email или пароль");

    }

});
