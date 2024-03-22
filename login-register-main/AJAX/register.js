// function ajaxLogin() {
//     $(".error").text("");
//     $('#email-info').removeClass("error");
//     $('#password-info').removeClass("error");

//     var emailId = $('#login-email-id').val();
//     var password = $('#login-password').val();
//     var actionString = 'login';

//     if (emailId == "") {
//         $('#email-info').addClass("error");
//         $(".error").text("Email is required");
//     } else if (!validateEmailId(emailId)) {
//         $('#email-info').addClass("error");
//         $('.error').text("Invalid email format");
//     } else if (password == "") {
//         $('#password-info').addClass("error");
//         $(".error").text("Password is required");
//     } else {
//         // show loader
//         $('#loaderId').show();
//         $.ajax({
//             url: 'login.php',
//             type: 'POST',
//             data: {
//                 emailId: emailId,
//                 password: password,
//                 action: actionString
//             },
//             success: function (response) {
//                 if (response.trim() == 'error') {
//                     $('#login-success-message').hide();
//                     $('#ajaxloader').hide();
//                     $('#login-error-message').html("Invalid credentials. Please try again.");
//                     $('#login-error-message').show();
//                 } else {
//                     $('.demo-container').html(response);
//                     $("#login-dialog").dialog("close");
//                 }
//             },
//             error: function () {
//                 $('#ajaxloader').hide();
//                 $('#login-error-message').html("An error occurred. Please try again later.");
//                 $('#login-error-message').show();
//             }
//         });
//     }
// }