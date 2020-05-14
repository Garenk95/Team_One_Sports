
function isSessionActive() {
    let sessionKey = sessionStorage.getItem("userID");

    //if a session key exists
    //aka user has successfully logged in
    if (parseInt(sessionKey) >= 1) {
        console.log("There is an active session");
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`http://localhost:5000/activeSession/${sessionKey}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                var obj = result;
                var user = JSON.parse(obj);
                //this is where we change the html for the "Log in" and "Sign up" buttons
                document.getElementById("header_log_in_button").outerHTML = `Welcome, ${user["username"]}`;
                document.getElementById("header_sign_up_button").innerHTML = "Log out";
            })
            .catch(error => console.log('error', error));
    } else {
        console.log("There is no session currently active");
    }
}
function signUpOrLogOut() {
    let sessionKey = sessionStorage.getItem("userID");
    if (parseInt(sessionKey) >= 1) {
        sessionStorage.clear();
        window.location.href = `homepage.html`;
    } else {
        window.location.href = `register.html`;
    }
}