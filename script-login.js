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
        } else {
            $("#namecheck").hide();
            nameError = true;
        }
    }

    let passwordError = true;

    $(".password").keyup(function () {
        validatePassword();
    });

    function validatePassword() {
        let password = $(".password").val();
        let requirements = $("#passwordRequirements");

        // Reset requirements text
        requirements.html("");

        if (password.length === 0) {
            requirements.append("<b><p>Password is missing</p></b>");
            passwordError = false;
        }

        else {
            passwordError = true;
        }
    }

    $("#submitbtn").click(function (event) {
        validateName();
        validatePassword();
        if (nameError && passwordError) {
            return true;
        } else {
            return false;
        }
    });
});