/**************************
    Date: 2019-04-25
    Author: Amber Murphy
    Class: CITW 165
    Exercise: Exercise #10
    code based on examples from https://jqueryvalidation.org/files/demo/
**************************/

// validate signup form on keyup and submit
$("#email_form").validate({
    rules: {
        first_name: "required",
        last_name: "required",
        email: {
            required: true,
            email: true
        },
        email_confirm: {
            required: true,
            equalTo: "#email"
        },
        zip: {
            required: true,
            email: true,
            minlength: 5
        }
    },
    messages: {
        first_name: "Please enter your firstname",
        last_name: "Please enter your lastname",
        email: {
            required: "Please provide an email address"
        },
        email_confirm: {
            required: "Please provide an email address",
            equalTo: "Please enter the same email as above"
        },
        zip: "Please enter a valid zip code",
        minlength: "Your zip code must be at least 5 characters long"
    }
});

$("#email_form").validate();
