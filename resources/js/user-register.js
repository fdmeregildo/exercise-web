$(function () {
    


   $("#frmUserRegister").validate({
        
        rules: {
            txtNombre: {
                "required": true,
                "maxlength": 10
            },
            txtApellidos: {
                "required": true,
                "maxlength": 20
            },
            txtTelefono: {
                "digits" : true
            },
            txtEmail: {
                "required": true,
                "email": true
            }
        },
        messages: {
            txtNombre:  {
                "required": "Por favor, ingrese el nombre.",
                "maxlength": "El nombre no puede superar los 10 caracteres."
            },
            txtApellidos:  {
                "required": "Por favor, ingrese los apellidos.",
                "maxlength": "Los apellidos no pueden superar los 20 caracteres."
            },
            txtTelefono: {
                "digits" : "Ingrese un número de teléfono válido."
            },
            txtEmail: {
                "required": "Por favor, ingrese el email.",
                "email": "Ingrese un email válido."
            }
        },
        submitHandler: function(form) {
           
            $(".alert-success").show();
            form.reset();
          }
    });

    $(".alert-success").hide();

});


