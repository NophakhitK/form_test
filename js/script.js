function verifyPassword() {
    var pw1 = document.getElementById("user_password").value;
    if (pw1 == "") {
        alert("PLEASE FILL IN PASSWORD");
        document.getElementById("message").innerHTML = "Fill Password Please!";
        return false
    }
    if (pw1 < 8) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
        alert("pasword must be greater than 8")
        return false;
    }
    if (pw1 > 15) {
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    }
}
