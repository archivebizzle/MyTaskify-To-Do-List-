const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");
const form = document.querySelector("#signup");

const isRequired = value => value === '' ? false : true;
const isBet = (len, min, max) => len < min || len > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove("success");
    formField.classList.add("error");

    const error = formField.querySelector("small");
    error.textContent = message;
}

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 10;
    const userName = username.value.trim();

    if (!isRequired(userName)) {
        showError(username, 'Username cannot be blank');
    } else if (!isBet(userName.length, min, max)) {
        showError(username, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(username);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email1 = email.value.trim();
    if (!isRequired(email1)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(email1)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}


const checkPassword = () => {

    let valid = false;

    const password1 = password.value.trim();

    if (!isRequired(password1)) {
        showError(password, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password1)) {
        showError(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(password);
        valid = true;
    }

    return valid;
}

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword1 = confirmPassword.value.trim();
    const password1 = password.value.trim();
    if (!isRequired(confirmPassword1)) {
        showError(confirmPassword, 'Please enter the password again');
    } else if (password1 !== confirmPassword1) {
        showError(confirmPassword, 'Confirm password does not match');
    } else {
        showSuccess(confirmPassword);
        valid = true;
    }

    return valid;
}

form.addEventListener('submit', function(e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        let form = document.forms[0];
        form.submit();
    }

});