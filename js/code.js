function validarDatos(){
    const name= document.getElementById('nombre');
    const lastName= document.getElementById('apellido');
    const email= document.getElementById('email');
    const pass= document.getElementById('password');
    const advertencia= document.getElementById('pass-req');
    const dui= document.getElementById("dui");
    const nit= document.getElementById("nit");
    const area= document.getElementById("area");
    const telefono= document.getElementById("tel");
    const edad=document.getElementById("edad");
    const advertenciaEdad= document.getElementById("edad-req");
    var expRegNombres=new RegExp("^([a-zA-Z]{4,12}[\\s]?){1,2}$");
    var expRegCorreo= new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
    //var expRegpass= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$");
    var expRegpass= new RegExp("^[a-zA-Z0-9]{6,15}$");
    var expRegDui= new RegExp("^[0-9]{7}[-][0-9]$");
    var expRegNit= new RegExp("^[0-9]{4}[-][0-9]{6}[-][0-9]{3}[-][0-9]");
    var expRegArea= new RegExp("^[+][0-9]{1,4}");
    var expRegNum= new RegExp("^[0-9]{8}");
    var expRegEdad= new RegExp("^[0-9]{1,2}");

    var isValidName= expRegNombres.test(name.value);
    var isValidLatName= expRegNombres.test(lastName.value);
    var isValidEdad= expRegEdad.test(edad.value)
    var isValidDui= expRegDui.test(dui.value);
    var isValidNit= expRegNit.test(nit.value);
    var isValidarea= expRegArea.test(area.value);
    var isValidNum= expRegNum.test(telefono.value);
    var isValidEmail= expRegCorreo.test(email.value);
    var isValidPass= expRegpass.test(pass.value);

    name.classList.toggle("is-invalid", !isValidName);
    name.classList.toggle("is-valid", isValidName);
    lastName.classList.toggle("is-invalid", !isValidLatName);
    lastName.classList.toggle("is-valid", isValidLatName);
    dui.classList.toggle("is-invalid", !isValidDui);
    dui.classList.toggle("is-valid", isValidDui);
    nit.classList.toggle("is-invalid", !isValidNit);
    nit.classList.toggle("is-valid", isValidNit);
    area.classList.toggle("is-invalid", !isValidarea);
    area.classList.toggle("is-valid", isValidarea);
    telefono.classList.toggle("is-invalid", !isValidNum);
    telefono.classList.toggle("is-valid", isValidNum);
    email.classList.toggle("is-invalid", !isValidEmail);
    email.classList.toggle("is-valid", isValidEmail);    
    pass.classList.toggle("is-invalid", !isValidPass);
    pass.classList.toggle("is-valid", isValidPass);
    advertencia.classList.toggle("d-none", isValidPass);
    advertenciaEdad.classList.toggle("d-none", isValidEdad);

    if(edad.value!=""&& (parseInt(edad.value)>=18 && parseInt(edad.value)<=65)){
        edad.classList.toggle("is-valid", true);
        edad.classList.toggle("is-invalid", false);
    }else{
        edad.classList.toggle("is-invalid", true);
        edad.classList.toggle("is-valid", false);
    }

    if(!isValidPass && pass.value!=""){
        pass.focus();
        pass.value= "";      
    }

    }