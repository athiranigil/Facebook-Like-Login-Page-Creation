$(document).ready(function(){
    $("#signup-form").validate({
    rules:{
      fname:{
        required:true,
        minlength:4
      },
      sname:{
        required:true,
        minlength:2
       },
      emailAddress:{
        
        email:true
      },
      password:{
        minlength:6,
        maxlength:8

      },
      day:{
        required:true

      },
      month:{
        required:true

      },
      year:{
        required:true

      },
      rd:{
        required:true
      }

    },
    messages:{
        fname:{
        required:"enter first name",
        minlength:"enter minimum 4 charecter"
        },
        sname:{
        required:"Enter surname",
        minlength:"Enter minimum 2 characters"
        },
        emailAddress:{
        email:"Enter a valid email address"
        },
        password:{
        minlength:"Enter minimum 6 characters",
        maxlength:"Enter maximum 8 characters"
        },
        day:{
        required:"Select day"
        },
        month:{
        required:"Select month"
        },
        year:{
        required:"Select year"
        },
        rd:{
        required:"Check the box"
        }
    }
  });
});

