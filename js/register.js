const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");

    const username = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;
    const repeatPassword = inputs[3].value;

    if (password !== repeatPassword) {
        alert("Пароли не совпадают");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Аккаунт создан!");

    window.location.href = "login.html";
});
