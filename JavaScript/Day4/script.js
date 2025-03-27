const form = document.querySelector('.main-form');

const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('usernameError');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const passInput = document.getElementById('password');
const passError = document.getElementById('passError');

const confirmPassInput = document.getElementById('confirmPass');
const confirmPassError = document.getElementById('confirmPassError');

function validateUsername(e) {
    e.preventDefault();

    if(usernameInput.value === ""){
        usernameError.textContent = "Username should not be empty."
    }
    else if (usernameInput.value.length < 5){
        usernameError.textContent = "Username minimum length must be greater than 4"
    }
    else if (usernameInput.value.length > 12) {
        usernameError.textContent = "Username minimum length must be less than 13"
    }
    else if (["admin" , "user" , "username"].includes(usernameInput.value)){
        usernameError.textContent = 'username is taken'
    }
}

function validateEmail (e) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
    return regex.test(emailInput.value)
}

function validatePassword (password) {
    let isUpperCaseIncluded = false;
    let isLowerCaseIncluded = false;
    let hasNumericalCharacter = false;

    for(let i = 0; i<password.length; i++){
        const charCode = password.charCodeAt(i)
        const char = password[i]

        if(isNaN(char) == false){
            hasNumericalCharacter = true
        }
        else{
        if(char === char.toUpperCase()){
            isUpperCaseIncluded = true
        }

        if(char === char.toLowerCase()){
            isLowerCaseIncluded = true
        }
    }   
        
    }
    return isUpperCaseIncluded && isLowerCaseIncluded && hasNumericalCharacter
}

function validateConfirmPassword(password , confirmPass){
    return password === confirmPass
}

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    validateUsername(e);

    if(!validateEmail(e)){
        emailError.textContent = 'Email is not valid.'
    }

    if(!validatePassword(passInput.value)){
        passError.textContent = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
    }

    if(!validateConfirmPassword(passInput.value , confirmPassInput.value)){
        confirmPassError.textContent = "The password does not match"
    }

})

