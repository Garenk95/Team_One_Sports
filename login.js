const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`http://localhost:5000/login/${username}/${password}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            //parse response
            //save id response to local storage if successful
            //and redirect to homepage
        })

        .catch(error => console.log('error', error));
});