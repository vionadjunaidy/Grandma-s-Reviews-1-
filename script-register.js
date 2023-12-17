$(document).ready(function () {
    $("#namecheck").hide();
    let nameError = true;
    $(".username").keyup(function () {
        validateName();
    });
    function validateName() {
        let nameValue = $(".username").val();
        if (nameValue.length === 0) {
            $("#namecheck").show();
            $("#namecheck").css("background-color", "yellow");
            nameError = false;
            return false;
        } else {
            $("#namecheck").hide();
            nameError = true;
            return true;
        }
    }

    $('#datecheck').hide();
    let dateError = true;
    $(".date").change(function () {
        validateDate();
    });
    function validateDate() {
        let dateValue = $(".date").val();
        if (dateValue == "") {
            $("#datecheck").show();
            $("#datecheck").css("background-color", "yellow");
            dateError = false;
            return false;
        }
        else {
            $("#datecheck").hide();
            dateError = true;
            return false;
        }
    }


    let passwordError = true;

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
    }

    $("#emailcheck").hide();
    let emailError = true;

    $(".email").keyup(function () {
        validateEmail();
    });

    function validateEmail() {
        let emailValue = $(".email").val();

        if (emailValue.length === 0) {
            $("#emailcheck").show();
            $("#emailcheck").html("Invalid!");
            $("#emailcheck").css("background-color", "yellow");
            emailError = false;
            return false;
        } else {
            let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
            let isValid = regex.test(emailValue);

            if (isValid) {
                $("#emailcheck").show();
                $("#emailcheck").html("Valid!");
                $("#emailcheck").css("background-color", "lightgreen");
                emailError = true;
                return true;
            } else {
                $("#emailcheck").show();
                $("#emailcheck").html("Invalid!");
                $("#emailcheck").css("background-color", "yellow");
                emailError = false;
                return false;
            }
        }
    }

    $("#registerbtn").click(function (event) {
        validateName();
        validateDate();
        validatePassword();
        validateEmail();
        if (
            nameError == true &&
            dateError == true &&
            passwordError == true &&
            emailError == true
        ) {
            console.log("Success")
            return true;
        } else {
            console.log("Failure")
            return false;
        }
    });

});