const username = localStorage.getItem("username");

const welcome = document.getElementById("welcome");

if (username) {
    welcome.textContent = "Привет, " + username + " 👋";
}
