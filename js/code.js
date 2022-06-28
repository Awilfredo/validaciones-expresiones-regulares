function validarDatos(){
    const name= document.getElementById('nombre');
    const lastName= document.getElementById('apellido');
    const email= document.getElementById('email');


    var expRegNombres=new RegExp("^([a-zA-z]{4,12}[\\s]?){1,2}$");
    
    var expRegCorreo= new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");

    if(!expRegNombres.test(name.value)){
        name.className="form-control is-invalid";
    } else{
        name.className="form-control";
    }

    if(!expRegNombres.test(lastName)){
        lastName.className="form-control is-invalid";
    }else{
        lastName.className="form-control";
    }


}