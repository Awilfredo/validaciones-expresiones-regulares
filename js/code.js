function validarDatos(){
    const name= document.getElementById('nombre');
    const lastName= document.getElementById('apellido');
    const email= document.getElementById('email');
    const pass= document.getElementById('password');
    var isValid=true;


    var expRegNombres=new RegExp("^([a-zA-z]{4,12}[\\s]?){1,2}$");
    
    var expRegCorreo= new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");

    var expRegpass= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$");

    if(!expRegNombres.test(name.value)){
        name.className="form-control is-invalid";
        isValid=false;
    } else{
        name.className="form-control";
    }

    if(!expRegNombres.test(lastName.value)){
        lastName.className="form-control is-invalid";
        isValid=false;
    }else{
        lastName.className="form-control";
    }

    if (!expRegCorreo.test(email.value)) {
        email.className="form-control is-invalid";  
        isValid=false;              
    } else {
        email.className="form-control";
    }

    if(isValid){
        if (!expRegpass.test(pass.value)) {
            pass.className="form-control is-invalid";
            alert("La Contraseña debe tener:\nMinimo 8 caracteres\nMaximo 15\nAl menos una letra mayúscula\nAl menos una letra minucula\nAl menos un dígito\nNo espacios en blanco\nAl menos 1 caracter especial");
            pass.value="";         
        } else {
            pass.className="form-control";
                     
        }
    }


}