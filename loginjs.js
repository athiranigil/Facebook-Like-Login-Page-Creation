$(document).ready(function(){
    $("#topform").validate({
        rules:{
            topem:{
                required:true,
                email:true
            },
            toppass:{
                required:true,
                minlength:6
            }
        },
        messages:{
            topem:{
                email:"Enter a valid email address"
            },
            toppass:{
                required:"Enter a password",
                minlength:"Enter minimum 6 characters"
            }
        }
    });
});
