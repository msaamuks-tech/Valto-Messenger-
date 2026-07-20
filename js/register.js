const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    localStorage.setItem("user", username);
    localStorage.setItem("password", password);

    alert("Аккаунт создан!");

    window.location.href = "login.html";
});
