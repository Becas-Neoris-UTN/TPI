const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{4,25}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    apellido: false,
    email: false,
    telefono: false

}


const validarFormulario = (e) =>{
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
             
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            
        break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
        break;
        case "telefono":
            validarCampo(expresiones.telefono,e.target,'telefono');
            
        break;
    }

}
const validarCampo = (expresion,input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');                   
        campos[campo] = true;


    } else{
            document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle') ;    
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');                    
            campos[campo] = false;          
    }
}

inputs.forEach((input)=> {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

formulario.addEventListener('submit', (e) => {
     e.preventDefault();
    const terminos = document.getElementById('terminos');
     if(campos.nombre && campos.apellido && campos.email && campos.telefono && terminos.checked ){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(()=>{
        document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');

        }, 5000);
        document.querySelectorAll('.form__grupo-correcto').forEach((icono)=>{
            icono.classList.remove('form__grupo-correcto');
        });
    } else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(()=>{
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

    }, 5000);
        document.querySelectorAll('.form__grupo-correcto').forEach((icono)=>{
            icono.classList.remove('form__grupo-correcto');
    })};            
});