$(document).ready(function () {
    $("#namecheck").hide();
    let nameError = true;
    $("#name").keyup(function () {
        validateName();
    });
    function validateName() {
        let nameValue = $("#name").val();
        if (nameValue.length == "") {
            $("#namecheck").show();
            nameError = false;
            return false;
        }
        else if (nameValue.length < 3) {
            $("#namecheck").show();
            $("#namecheck").html("Restaurant name is at least 3 characters");
            nameError = false;
            return false;
        }
        else {
            $("#namecheck").hide();
            nameError = true;
            return true;
        }
    }

    $("#daycheck").hide();
    let dayError = true;
    $("#day").keyup(function () {
        validateDay();
    });
    function validateDay() {
        let dayValue = $("#day").val();
        if (dayValue.length == "") {
            $("#daycheck").show();
            dayError = false;
            return false;
        }
        else if (dayValue.length < 6) {
            $("#daycheck").show();
            $("#daycheck").html("Operating day is at least 6 characters");
            dayError = false;
            return false;
        }
        else {
            $("#daycheck").hide();
            dayError = true;
            return true;
        }
    }

    $('#openTimecheck').hide();
    let openError = true;
    $("#open").change(function () {
        validateOpen();
    })
    function validateOpen() {
        let openValue = $("#open").val();
        if (openValue == "") {
            $("#openTimecheck").show();
            openError = false;
            return false;
        }
        else {
            $("#openTimecheck").hide();
            openError = true;
            return true;
        }
    }

    $('#closeTimecheck').hide();
    let closeError = true;
    $("#close").change(function () {
        validateClose();
    })
    function validateClose() {
        let closeValue = $("#close").val();
        if (closeValue == "") {
            $("#closeTimecheck").show();
            closeError = false;
            return false;
        }
        else {
            $("#closeTimecheck").hide();
            closeError = true;
            return true;
        }
    }

    $("#phonecheck").hide();
    let phoneError = true;
    $("#phone").keyup(function () {
        validatePhone();
    });
    function validatePhone() {
        let phoneValue = $("#phone").val();
        if (phoneValue.length == "") {
            $("#phonecheck").show();
            phoneError = false;
            return false;
        }
        else if (validatePhone_num('phone')) {
            $("#phonecheck").show();
            $("#phonecheck").html("Invalid");
            phoneError = false;
            return false;
        }
        else {
            $("#phonecheck").hide();
            phoneError = true;
            return true;
        }
    }

    function validatePhone_num(phone) {
        var a = document.getElementById(phone).value;
        var filter = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/;
        if (filter.test(a)) {
            return false;
        }
        else {
            return true;
        }
    }

    $("#descriptioncheck").hide();
    let descriptionError = true;
    $("#description").keyup(function () {
        validateDescription();
    });
    function validateDescription() {
        let descriptionValue = $("#description").val();
        if (descriptionValue.length == "") {
            $("#descriptioncheck").show();
            descriptionError = false;
            return false;
        }
        else if (descriptionValue.length < 30 || descriptionValue.length > 250) {
            $("#descriptioncheck").show();
            $("#descriptioncheck").html("Length of description must be between 30 and 250 characters!");
            descriptinoError = false;
            return false;
        }
        else {
            $("#descriptioncheck").hide();
            descriptionError = true;
            return true;
        }
    }

    $("#locationcheck").hide();
    let locationError = true;
    $("#location").keyup(function () {
        validateLocation();
    });
    function validateLocation() {
        let locationValue = $("#location").val();
        if (locationValue.length == "") {
            $("#locationcheck").show();
            locationError = false;
            return false;
        }
        else {
            $("#locationcheck").hide();
            locationError = true;
            return true;
        }
    }

    $('#photocheck').hide();
    let photoError = true;
    $("#img").change(function () {
        validatePhoto();
    })
    function validatePhoto() {
        let photoValue = $("#img").val();
        if (photoValue == "") {
            $("#photocheck").show();
            photoError = false;
            return false;
        }
        else {
            $("#photocheck").hide();
            phoneError = true;
            return true;
        }
    }

    $('#categorycheck').hide();
    let categoryError = true;
    $("#category").change(function () {
        validateCategory();
    })
    function validateCategory() {
        let categoryValue = $("#category").val();
        if (categoryValue == "initial") {
            $("#categorycheck").show();
            categoryError = false;
            return false;
        }
        else {
            $("#categorycheck").hide();
            categoryError = true;
            return true;
        }
    }

    $("#submitbtn").click(function (event) {
        validateName();
        validateDescription();
        validateOpen();
        validateDay();
        validatePhone();
        validateClose();
        validateLocation();
        validatePhoto();
        validateCategory();
        if (
            nameError == true &&
            dayError == true &&
            openError == true &&
            closeError == true &&
            phoneError == true &&
            descriptionError == true &&
            locationError == true &&
            phoneError == true &&
            categoryError == true
        ) {
            console.log("success")
            return true;
        } else {
            console.log("failure")
            return false;
        }
    });
});