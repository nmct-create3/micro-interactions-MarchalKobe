let email = {},
    password = {},
    signInButton;

const handleFloatingLabel = () => {
    const floatingLabel = document.querySelector(".js-floating-label");
    const floatingInput = document.querySelector(".js-floating-input");

    if(floatingInput) {
        floatingInput.addEventListener("blur", () => {
            if(floatingInput.value.length > 0) {
                floatingLabel.classList.add("is-floating");
            } else {
                floatingLabel.classList.remove("is-floating");
            };
        });
    }
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

    password.input = document.querySelector(".js-password-input");
    password.field = document.querySelector(".js-password-field");
    password.errorMessage = document.querySelector(".js-password-error-message");

    signInButton = document.querySelector(".js-sign-in-button");
};

const enableListeners = () => {
    email.input.addEventListener("blur", () => {
        if(isEmpty(email.input.value)) {
            addErrors(email, "This field is required");
            email.input.addEventListener("input", doubleCheckEmailAddress);
        } else if(!isValidEmailAddress(email.input.value)) {
            addErrors(email, "Invalid emailaddress");
            email.input.addEventListener("input", doubleCheckEmailAddress);
        } else {
            email.input.removeEventListener("input", doubleCheckEmailAddress);
        };
    });

    password.input.addEventListener("blur", () => {
        console.log(isValidPassword(password.input.value));
        if(isEmpty(password.input.value)) {
            addErrors(password, "This field is required");
            password.input.addEventListener("input", doubleCheckPassword);
        } else if (!isValidPassword(password.input.value)) {
            addErrors(password, "Invalid password");
            password.input.addEventListener("input", doubleCheckPassword);
        } else {
            password.input.removeEventListener("input", doubleCheckPassword);
        };
    });

    signInButton.addEventListener("click", (event) => {
        event.preventDefault();
    });
};

const doubleCheckEmailAddress = () => {
    if(!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)) {
        removeErrors(email);
    };
};

const doubleCheckPassword = () => {
    if(!isEmpty(password.input.value) && isValidPassword(password.input.value)) {
        removeErrors(password);
    };
};

const isValidEmailAddress = (emailAddress) => {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = (fieldValue) => {
    return !fieldValue || !fieldValue.length;
 };

 const isValidPassword = (value) => {
    if(value.length > 1) {
        return true;
    } else {
        return false;
    };
 }

const addErrors = (object, error) => {
    object.field.classList.add("has-error");
    object.errorMessage.innerHTML = error;
};

const removeErrors = (object) => {
    object.field.classList.remove("has-error");
    object.errorMessage.innerHTML = "";
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();

    getDOMElements();
    if(email.input) {
        enableListeners();
    }
});