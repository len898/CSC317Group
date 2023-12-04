"use strict";

function createAccount() {
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var error = "false";

   
    if(firstname == ''){ 
        document.getElementById('fnameError').innerText = 'The FirstName field is required.';
        document.getElementById('fnameError').style.display = 'block';
        error = "true";   
    }
    else {
        document.getElementById('fnameError').style.display = 'none'; 
    }

    if(lastname == ''){ 
        document.getElementById('lnameError').innerText = 'The LastName field is required.';
        document.getElementById('lnameError').style.display = 'block';
        error = "true";   
    }
    else {
        document.getElementById('lnameError').style.display = 'none';
    }

    if(username == ''){ 
        document.getElementById('usernameError').innerText = 'The username field is required.';
        document.getElementById('usernameError').style.display = 'block';
        error = "true";   
    }
    else {
        document.getElementById('usernameError').style.display = 'none';
    }

    if(email == ''){ 
        document.getElementById('emailError').innerText = 'The email field is required.';
        document.getElementById('emailError').style.display = 'block';
        error = "true";   
    }
    else  if (!isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'please enter a valid email address';
        document.getElementById('emailError').style.display = 'block';
        error = "true";

    } 
    else {
        document.getElementById('emailError').style.display = 'none';  
    }

    if(password == ''){ 
        document.getElementById('passwordError').innerText = 'The password field is required.';
        document.getElementById('passwordError').style.display = 'block';
        error = "true";   
    }
    else if(!isValidPassword(password)) {
            document.getElementById('passwordError').innerText = 'please enter a valid password';
            document.getElementById('passwordError').style.display ='block';
            error = "true";
        }
    else {
        document.getElementById('passwordError').style.display = 'none'; 
        document.getElementById('passwordValidation').style.display = 'none';
    }
    

    if(error == "false"){
        alert("your account has been successfully created");
        
        window.location.href = 'login.html';
        document.getElementsByClassName('error').style.display = 'none';
        
    } 
    else{ 
        return;
    }
}

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;

        return ((password.length >= 6) && (password.length <= 20) && password.match(lowerCaseLetters) 
         && password.match(upperCaseLetters) && password.match(numbers));
        
    }

    function displayPasswordValidation(){
        document.getElementById('passwordValidation').style.display = 'block';
    }

    function removePasswordValidation(){
        document.getElementById('passwordValidation').style.display = 'none';
    }
    
    window.onload = function () { 
        document.getElementById("fname").focus();
                   
    };

   