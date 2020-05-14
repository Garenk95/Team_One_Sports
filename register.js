
function test() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    confirm_pass = document.getElementById("confirm_password").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone_number").value;

    //make sure passwords match
    let passwordsMatch = validatePasswords(password, confirm_pass);
    if (passwordsMatch == true) {
        var myHeaders = new Headers();
        myHeaders.append("Access-Control-Allow-Origin", "*");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`http://localhost:5000/signUp/${username}/${password}/${email}/${phone}`, requestOptions)
            .then(response => {
                alert("You will now be redirected to the homepage. \nThank you for signing up with Team 1 Sports!");
                window.location.href = `homepage.html`;
            })
            .catch(error => alert("Unable to communicate to server"));
    } else {
        //clear password fields
        //instruct user to re-enter passwords
        console.log("passwords do not match");
    }
}
function validatePasswords(password_1, password_2) {
    if (password_1 === password_2) {
        return true;
    } else {
        return false;
    }
}
