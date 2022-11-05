$(document).ready(function () {
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    $(".boton").click(function () {
        $(".error").remove();
        if ($(".nombre").val() == "") {
            $(".nombre").focus().after(" ", "<span class='error'>Ingrese su nombre</p>");
            return false;

        } else if ($(".apellido").val() == "") {
            $(".apellido").focus().after("<span class='error'>Ingrese su apellido</span>");
            return false;

        } else if ($(".email").val() == "" || !emailreg.test($(".email").val())) {
            $(".email").focus().after("<span class='error'>Ingrese un email correcto</span>");
            return false;

        } else if ($(".telefono").val() == "") {
            $(".telefono").focus().after("<span class='error'>Ingrese su teléfono</span>");
            return false;


        } else if ($(".referido").val() == "") {
            $(".referido").focus().after("<span class='error'>Seleccione una opción</span>");
            return false;

        } else if ($(".mensaje").val() == "") {
            $(".mensaje").focus().after("<span class='error'>Ingrese un mensaje</span>");
            return false;
        }
    });

    //Se elimina el error al colocar correctamente los campos (fadOut)
    $(".nombre, .apellido, .telefono, .mensaje").keyup(function () {
        if ($(this).val() != "") {
            $(".error").fadeOut();
            return false;
        }
    });

    $(".email").keyup(function () {
        if ($(this).val() != "" && emailreg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });


});