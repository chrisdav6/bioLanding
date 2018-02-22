// $(document).ready(function () {

//     $("#robly_embedded_subscribe").click(function (e) {
//         e.preventDefault();

//         var email = $("#DATA0").val();
//         if (!is_valid_email_address(email)) {
//             alert("Please enter a valid email address.");
//             return false;
//         }
//             if (!$("#DATA0").val()) {
//                 alert("Please fill in all required fields!");
//                 return false
//             }

//         var s = document.getElementsByClassName('sublist_fb_option');
//         if (s.length > 0) {
//             var selected = false;
//             for (var i = 0; i < s.length; i++) {
//                 if (s[i].checked) {
//                     selected = true;
//                 }
//             }
//             if (!selected) {
//                 alert("Please select a mailing list.");
//                 return false;
//             }
//         }


//         var f = $("#robly_embedded_subscribe_form");
//         f.submit();

//         return false;
//     });

// });

// function is_valid_email_address(emailAddress) {
//     var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
//     return pattern.test(emailAddress);
// }