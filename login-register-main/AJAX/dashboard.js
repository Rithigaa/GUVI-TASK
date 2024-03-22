// $(document).ready(function () {
//     // Check user session and load dashboard content
//     $.ajax({
//         type: 'GET',
//         url: 'check_session.php', // Replace 'check_session.php' with your PHP script to check user session
//         success: function (response) {
//             if (response === 'authorized') {
//                 // Load dashboard content
//                 $.ajax({
//                     type: 'GET',
//                     url: 'dashboard.php', // Your PHP script that displays the dashboard
//                     success: function (dashboardHtml) {
//                         $('body').html(dashboardHtml);
//                     }
//                 });
//             } else {
//                 // Redirect to login page if not authorized
//                 window.location.replace('login.php');
//             }
//         }
//     });
// });
