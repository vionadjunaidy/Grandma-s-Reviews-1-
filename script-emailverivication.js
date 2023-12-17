$(document).ready(function () {
    $("#emailcheck").hide();
    let emailError = true;

    $("#autoSizingInputGroup").keyup(function () {
        validateEmail();
    });

    function validateEmail() {
        let emailValue = $("#autoSizingInputGroup").val();

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

    $("#emailbtn").click(function (event) {
        validateEmail();
        if (emailError) {
            return true;
        } else {
            return false;
        }
    });
});