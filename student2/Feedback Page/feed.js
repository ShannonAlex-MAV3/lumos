// Validation

function validateForm() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let satisfaction = document.getElementById("satisfaction").value;

//compulsory name

if (name == "" || name == null ) {
    document.getElementById("error-msg-1").innerHTML = "Field Required!";
}
else{
    document.getElementById("error-msg -1").innerHTML = "";
}
//compulsory email
if (email == "" || email == null ) {
    document.getElementById("error-msg-2").innerHTML = "Field Required!";
}
else{
    document.getElementById("error-msg -2").innerHTML = "";
}
//compulsory phone
if (phone == "" || phone == null ) {
    document.getElementById("error-msg-3").innerHTML = "Field Required!";
}
else{
    document.getElementById("error-msg -3").innerHTML = "";
}
//compulsory satisfaction
if (satisfaction == "" || satisfaction == null ) {
    document.getElementById("error-msg-4").innerHTML = "Field Required!";
}
else{
    document.getElementById("error-msg -4").innerHTML = "";
}
if (!name || !email || !message || !satisfaction) {
    alert("Please fill in all the required fields.");
    return;
}
}

