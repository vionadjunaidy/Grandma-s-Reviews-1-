$(document).ready(function () {
    $("#codecheck").hide();
    let codeError = true;
    $("#autoSizingInputGroup").keyup(function () {
        validateCode();
    });
    function validateCode() {
        let codeValue = $("#autoSizingInputGroup").val();
        if (codeValue.length == "") {
            $("#codecheck").show();
            $("#codecheck").css("background-color", "yellow");
            codeError = false;
            return false;
        }
        else {
            $("#codecheck").hide();
        }
    }

    $("#verifybtn").click(function (event) {
        validateCode();
        if (codeError == true) {
            return true;
        } else {
            return false;
        }
    });
});