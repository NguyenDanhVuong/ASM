
function validateName() {
    var name = document.getElementById('name');
    var mess = document.getElementById('mess');

    if(name.value.length == 0) {
        mess.style.color = "red";
        mess.innerHTML = "Error";
    }else if(name.value.length < 5) {
        mess.style.color = "red";
        mess.innerHTML = "Username phai dai hon 5 ky tu";
    }else {
        mess.style.color = "green";
        mess.innerHTML = "True";
    }
}

document.getElementById('name').onkeyup = function() {
validateName();
}

function validateFullname(){
    var fullname = document.getElementById('fullname');
    var full = document.getElementById('full');

    if(fullname.value.length == 0){
        full.style.color = "red";
        full.innerHTML = "Error";
    }else if(fullname.value.length < 5) {
        full.style.color = "red";
        full.innerHTML = "Vui long nhap day du ho ten.";
    }else {
        full.style.color = "green";
        full.innerHTML = "True";
    }
}
document.getElementById('fullname').onkeyup = function() {
validateFullname();
}

function validatePass(){
    var password = document.getElementById('password');
    var pass = document.getElementById('pass');

    if(password.value.length == 0){
        pass.style.color = "red";
        pass.innerHTML = "Error";
    }else if(password.value.length < 8){
        pass.style.color = "red";
        pass.innerHTML = "Mat khau phai dai hon 8 ky tu";
    }else{
        pass.style.color = "green";
        pass.innerHTML = "True";
    }
}
document.getElementById('password').onkeyup = function() {
validatePass();
}

function validateRePass(){
    var repassword = document.getElementById('repassword')
    var repass = document.getElementById('repass');
    
    if(repassword.value.length == 0){
        repass.style.color = "red";
        repass.innerHTML = "Error";
    }else if (repassword.value != password.value) {
        repass.style.color = "red";
        repass.innerHTML = "Mat khau khong khop.";
    }else{
        repass.style.color = "green";
        repass.innerHTML = "True";
    }
}
document.getElementById('repassword').onkeyup = function() {
validateRePass();
}
