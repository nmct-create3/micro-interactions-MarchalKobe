let email = {},
    password = {},
    signInButton;

const handleFloatingLabel = () => {
   
}

const handlePasswordSwitcher = () => {
    const passwordInput = document.querySelector(".js-password-input"),
    passwordToggle = document.querySelector(".js-password-toggle");

    if(!passwordInput || !passwordToggle) {
        console.error("De classes werden niet gevonden", passwordInput, passwordToggle);
        return;
    };

    passwordToggle.addEventListener("change", () => {
        if(passwordInput.type == "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
};

const getDOMElements = () => {
    email.input = document.querySelector(".js-email-input");
    email.field = document.querySelector(".js-email-field");
    email.errorMessage = document.querySelector(".js-email-error-message");

    password.input = document.querySelector("");
    password.field = document.querySelector("");
    password.errorMessage = document.querySelector("");

    signInButton = document.querySelector(".js-sign-in-button");
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    // handleFloatingLabel();
    handlePasswordSwitcher();

    getDOMElements();
});