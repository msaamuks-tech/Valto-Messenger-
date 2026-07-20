const username = localStorage.getItem("username");
const email = localStorage.getItem("email");


document.getElementById("profileName").textContent = username || "Гость";

document.getElementById("profileEmail").textContent = email || "Нет email";

const profileTitle = document.getElementById("profileTitle");

if (profileTitle) {
    profileTitle.textContent = username;
}

document.getElementById("logout").addEventListener("click", function(){

    localStorage.clear();

    alert("Вы вышли из аккаунта");

    window.location.href = "index.html";

});
