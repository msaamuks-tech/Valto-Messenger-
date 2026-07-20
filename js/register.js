const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const inputs = document.querySelectorAll("input");

    const username = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;
    const repeatPassword = inputs[3].value;

    if (!username || !email || !password || !repeatPassword) {
        alert("Заполни все поля");
        return;
    }

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
