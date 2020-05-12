const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    var userData = JSON.parse(localStorage.getItem(username));
    console.log(userData);


    if (username === userData.username && password === userData.password) {
        alert("You have successfully logged in.");
        location.assign("store.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});