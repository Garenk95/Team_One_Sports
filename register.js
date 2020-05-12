function test() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    confirm_pass = document.getElementById("confirm_password").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone_number").value;

    //make sure passwords match
    passwordsMatch = validatePasswords(password, confirm_pass);
    if (passwordsMatch == true) {
        console.log("passwords match");
        let userData = { username: username, password: password, email: email, phone: phone };
        localStorage.setItem(username, JSON.stringify(userData));
        window.location.href = `homepage.html`;
    } else {
        //clear password fields
        //instruct user to re-enter passwords
        console.log("passwords do not match");
    }

}

function validatePasswords(password_1, password_2) {
    if (password_1 == password_2) {
        return true;
    } else {
        return false;
    }
}
