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
            $("#namecheck").html("Recipe name is at least 3 characters");
            nameError = false;
            return false;
        }
        else {
            $("#namecheck").hide();
            console.log("name success")
            nameError = true;
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
            descriptionError = false;
            return false;
        }
        else {
            $("#descriptioncheck").hide();
            console.log("description success")
            descriptionError = true;
            return true;
        }
    }

    $("#portioncheck").hide();
    let portionError = true;
    $("#portion").keyup(function () {
        validatePortion();
    });
    function validatePortion() {
        let portionValue = $("#portion").val();
        if (portionValue.length == "") {
            $("#portioncheck").show();
            portionError = false;
            return false;
        }
        else {
            $("#portioncheck").hide();
            console.log("portion success")
            portionError = true;
            return true;
        }
    }

    $("#durationPicker").on("input", function () {
        validateDuration();
    });

    $("#durationcheck").hide();
    let durationError = true;
    function validateDuration() {
        var durationValue = $("#durationPicker").val().toLowerCase();

        var regex = /^(\d+)\s*(hours?|mins?)\s*((\d+)\s*mins?)?$/;
        if (durationValue.length == "") {
            $("#durationcheck").show();
            durationError = false;
            return false;
        }
        else if (regex.test(durationValue)) {
            console.log("Valid duration:", durationValue);
            $("#durationcheck").hide()
            console.log("duration success")
            durationError = true;
            return true;
        } else {
            console.log("Invalid duration:", durationValue);
            $("#durationcheck").show()
            $("#durationcheck").html("Invalid duration!")
        }
    }

    $("#durationPicker2").on("input", function () {
        validateDuration2();
    });
    $("#durationcheck2").hide();
    let duration2Error = true;
    function validateDuration2() {
        var duration2Value = $("#durationPicker2").val().toLowerCase();

        var regex = /^(\d+)\s*(hours?|mins?)\s*((\d+)\s*mins?)?$/;
        if (duration2Value.length == "") {
            $("#durationcheck2").show();
            duration2Error = false;
            return false;
        }
        else if (regex.test(duration2Value)) {
            console.log("Valid duration:", duration2Value);
            $("#durationcheck2").hide()
            console.log("duration 2 success")
            duration2Error = true;
            return true;
        } else {
            console.log("Invalid duration:", duration2Value);
            $("#durationcheck2").show()
            $("#durationcheck2").html("Invalid duration!")
        }
    }

    $(function () {
        function addListItem($input, $list, e) {
            if (e.type === "keydown" && e.which !== 13) return;

            e.preventDefault();

            var newItemText = $input.val().trim();

            if (newItemText !== "") {
                $list.append("<li>" + newItemText + "</li>");
                $input.val("");
            }
        }

        var $input1 = $("#listIngredient"),
            $list1 = $("#list1"),
            $input2 = $("#listStep"),
            $list2 = $("#list2");

        $("#btn1").click(function (e) {
            addListItem($input1, $list1, e);
        });

        $("#listIngredient").keydown(function (e) {
            addListItem($input1, $list1, e);
        });

        $("#btn2").click(function (e) {
            addListItem($input2, $list2, e);
        });

        $("#listStep").keydown(function (e) {
            addListItem($input2, $list2, e);
        });
    });

    $("#list1check").hide();
    let ingredientError = true;
    $("#list1").on("input", function () {
        validateIngredient();
    })
    function validateIngredient() {
        let ingredientValue = $("#list1").find("li");
        if (ingredientValue.length === 0) {
            $("#list1check").show();
            ingredientError = false;
            return false;
        }
        else {
            $("#list1check").hide();
            console.log("ingredient success")
            ingredientError = true;
            return true;
        }
    }

    $("#list2check").hide();
    let stepError = true;
    $("#list2").on("input", function () {
        validateStep();
    })
    function validateStep() {
        let stepValue = $("#list2").find("li");
        if (stepValue.length === 0) {
            $("#list2check").show();
            stepError = false;
            return false;
        }
        else {
            $("#list2check").hide();
            console.log("step success")
            stepError = true;
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
            console.log("photo success")
            photoError = true;
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
            console.log("category success")
            categoryError = true;
            return true;
        }
    }

    $("#submitbtn").click(function (event) {
        validateName();
        validateDescription();
        validatePortion();
        validatePhoto();
        validateCategory();
        validateIngredient();
        validateStep();
        validateDuration();
        validateDuration2();
        if (
            nameError == true &&
            descriptionError == true &&
            portionError == true &&
            ingredientError == true &&
            stepError == true &&
            durationError == true &&
            duration2Error == true &&
            photoError == true &&
            categoryError == true
        ) {
            console.log("success")
            return true;
        } else {
            console.log("failure")
            console.log("nameError:", nameError)
            console.log("descriptionError:", descriptionError)
            console.log("portionError:", portionError)
            console.log("ingredientError:", ingredientError)
            console.log("stepError:", stepError)
            console.log("durationError:", durationError)
            console.log("duration2Error:", duration2Error)
            console.log("photoError:", photoError)
            console.log("categoryError:", categoryError)
            return false;
        }
    });
});