$(document).ready(function () {
    let passwordError = true;
    let ConfirmPasswordError = true;

    $(".password").keyup(function () {
        validatePassword();
    });

    $(".confirm-password").keyup(function () {
        validateConfirmPassword();
    });

    function validatePassword() {
        let password = $(".password").val();
        let requirements = $("#passwordRequirements");

        // Reset requirements text
        requirements.html("");

        if (password.length === 0) {
            requirements.append("<b><p>Password is missing</p></b>");
            passwordError = false;
        } else {
            let hasLength = password.length >= 8;
            let hasUppercase = /[A-Z]/.test(password);
            let hasLowercase = /[a-z]/.test(password);
            let hasDigit = /\d/.test(password);
            let hasSpecialChar = /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",.<>?~\\\/]/.test(password);

            if (!hasLength) {
                requirements.append("<p>Minimum 8 characters</p>");
            }

            if (!hasUppercase) {
                requirements.append("<p>At least one uppercase letter</p>");
            }

            if (!hasLowercase) {
                requirements.append("<p>At least one lowercase letter</p>");
            }

            if (!hasDigit) {
                requirements.append("<p>At least one digit</p>");
            }

            if (!hasSpecialChar) {
                requirements.append("<p>At least one special character</p>");
            }

            passwordError = hasLength && hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
        }

        // Check if passwords match
        validateConfirmPassword();
    }

    function validateConfirmPassword() {
        let password = $(".password").val();
        let confirmPassword = $(".confirm-password").val();
        let requirements = $("#ConfirmPasswordRequirements");

        // Reset requirements text
        requirements.html("");

        if (confirmPassword !== password) {
            requirements.append("<b><p>Incorrect password</p></b>");
            ConfirmPasswordError = false;
        } else {
            requirements.append("<p>Passwords match</p>");
            ConfirmPasswordError = true;
        }
    }

    $("#resetbtn").click(function (event) {
        validatePassword();
        if (passwordError && ConfirmPasswordError) {
            console.log("Success");
            return true;
        } else {
            console.log("Failure");
            return false;
        }
    });
});