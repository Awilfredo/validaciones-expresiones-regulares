function validarDatos(){
    const name= document.getElementById('nombre');
    const lastName= document.getElementById('apellido');
    const email= document.getElementById('email');
    const pass= document.getElementById('password');
    const advertencia= document.getElementById('pass-req')
    var isValid=true;
    var expRegNombres=new RegExp("^([a-zA-z]{4,12}[\\s]?){1,2}$");
    var expRegCorreo= new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
    var expRegpass= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$");

    name.classList.toggle('is-invalid', !expRegNombres.test(name.value));
    lastName.classList.toggle('is-invalid', !expRegNombres.test(lastName.value));
    email.classList.toggle('is-invalid', !expRegCorreo.test(lastName.value));

    isValid=expRegpass.test(pass.value);
    pass.classList.toggle('is-invalid', !isValid);
    advertencia.classList.toggle('d-none', isValid)

        if (!isValid) {
            pass.focus();
            pass.value="";
        }
    }