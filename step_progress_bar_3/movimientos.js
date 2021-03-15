const cancelar = document.querySelector(".btn-cancelar");
const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante4 = document.querySelector(".adelante-pag4");
const btn_atras3 = document.querySelector(".volver-pag3");
const btn_final = document.querySelector(".Fin");

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

//GUARDAR DATOS.
var newUser="";

let max = 4;
let cont = 1;

/* cancelar.addEventListener("click", function(e){
  e.preventDefault();
  
  Swal.fire({
    title: '¿Estás seguro de querer salir?',
    text: "Se perderán los datos, si es que ya llenó algunos.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, deseo salir.'
  }).then((result) => {
    if (result.value) {
      location.href="inicio.html"
    }
  })
}); */

btn_adelante2.addEventListener("click", function(e){
  
  e.preventDefault();
  var nombre = document.getElementById("nombres").value;
  var apellido1 = document.getElementById("apellido1").value;
  var apellido2 = document.getElementById("apellido2").value;

  if ( nombre=="" && apellido1=="" && apellido2==""){
    document.getElementById("nombres-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("nombres").style.borderColor="#DA2A33"
    document.getElementById("apellido1-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("apellido1").style.borderColor="#DA2A33"
    document.getElementById("apellido2-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("apellido2").style.borderColor="#DA2A33"
    
  }else if ( (nombre=="" || apellido1=="" || apellido2=="") ||
             (nombre.length<2 || apellido1.length<2 || apellido2.length<2) ||
             (!verificarNombre(nombre) || !verificarNombre(apellido1) || !verificarNombre(apellido2))
           ){
    
    if ( nombre=="" ){
      document.getElementById("nombres-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else if ( nombre.length<2 ){
      document.getElementById("nombres-error").innerHTML = "* Debe tener 2 o más caractéres."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else if ( !verificarNombre(nombre) ){
      document.getElementById("nombres-error").innerHTML = "* Dato no válido."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("nombres-error").innerHTML = ""
      document.getElementById("nombres").style.borderColor="lightgrey"      
    }

    if ( apellido1=="" ){
      document.getElementById("apellido1-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("apellido1").style.borderColor="#DA2A33"      
    }else if ( apellido1.length<2 ){
      document.getElementById("apellido1-error").innerHTML = "* Debe tener 2 o más caractéres."
      document.getElementById("apellido1").style.borderColor="#DA2A33"      
    }else if ( !verificarNombre(apellido1) ){
      document.getElementById("apellido1-error").innerHTML = "* Dato no válido."
      document.getElementById("apellido1").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("apellido1-error").innerHTML = ""
      document.getElementById("apellido1").style.borderColor="lightgrey"      
    }

    if ( apellido2=="" ){
      document.getElementById("apellido2-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("apellido2").style.borderColor="#DA2A33"      
    }else if ( apellido2.length<2 ){
      document.getElementById("apellido2-error").innerHTML = "* Debe tener 2 o más caractéres."
      document.getElementById("apellido2").style.borderColor="#DA2A33"      
    }else if ( !verificarNombre(apellido2) ){
      document.getElementById("apellido2-error").innerHTML = "* Dato no válido."
      document.getElementById("apellido2").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("apellido2-error").innerHTML = ""
      document.getElementById("apellido2").style.borderColor="lightgrey"      
    }
    
  } else {

    document.getElementById("nombres-error").innerHTML = ""
    document.getElementById("nombres").style.borderColor="lightgrey"
    document.getElementById("apellido1-error").innerHTML = ""
    document.getElementById("apellido1").style.borderColor="lightgrey"
    document.getElementById("apellido2-error").innerHTML = ""
    document.getElementById("apellido2").style.borderColor="lightgrey"

    movPag.style.marginLeft = "-25%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

    var aux = nombre + ", " + apellido1 + " " +apellido2;
    newUser = aux.toUpperCase();

/*
    alert("El usuario: \n" + newUser +"\nHa sido registrado con éxito.");

    Swal.fire({
      title: 'Registro',
      html: 'El usuario: <br><b style="color: blue;";>"'+ newUser +'"</b><br> Ha sido registrado con éxito.'
    })
*/

  }

  function verificarNombre($n){
    var ExpRegular_Nombre = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+((?:[\s{1}][A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+)+)?$/;
    return ExpRegular_Nombre.test($n);
  }

});

btn_adelante3.addEventListener("click", function(e){

  e.preventDefault();
  
  var fechaNac = document.querySelector('input[type="date"]').value;
  var sexo = document.getElementById("sexo").value;

  if ( sexo==-1 && fechaNac=="" ){
    document.getElementById("fechaNac-error").innerHTML = "* Seleccione una fecha."
    document.getElementById("fechaNac").style.borderColor="#DA2A33"
    document.getElementById("sexo-error").innerHTML = "* Seleccione una opción."
    document.getElementById("sexo").style.borderColor="#DA2A33"
    
  }else if ( sexo==-1 || fechaNac=="" ){
    
    if ( sexo==-1 ){
      document.getElementById("sexo-error").innerHTML = "* Seleccione una opción."
      document.getElementById("sexo").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("sexo-error").innerHTML = ""
      document.getElementById("sexo").style.borderColor="lightgrey"      
    }

    if ( fechaNac=="" ){
      document.getElementById("fechaNac-error").innerHTML = "* Seleccione una fecha."
      document.getElementById("fechaNac").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("fechaNac-error").innerHTML = ""
      document.getElementById("fechaNac").style.borderColor="lightgrey"      
    }
    
  } else {

    document.getElementById("sexo-error").innerHTML = ""
    document.getElementById("sexo").style.borderColor="lightgrey"
    document.getElementById("fechaNac-error").innerHTML = ""
    document.getElementById("fechaNac").style.borderColor="lightgrey"

    movPag.style.marginLeft = "-50%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

  }

});

btn_adelante4.addEventListener("click", function(e){

  e.preventDefault();
  
  var correo = document.getElementById("correo").value;
  var numCel = document.getElementById("numCel").value;

  if ( correo=="" && numCel=="" ){

    document.getElementById("correo-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("correo").style.borderColor="#DA2A33"
    document.getElementById("numCel-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("numCel").style.borderColor="#DA2A33"  

  }else if ( correo=="" || numCel=="" || 
             correo.length<6 || numCel.length!=9 || 
             !verificarCorreo(correo) || !verificarNumCel(numCel) 
           ){
    
    if ( correo=="" ){
      document.getElementById("correo-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("correo").style.borderColor="#DA2A33"      
    }else if ( correo.length<6 ){
      document.getElementById("correo-error").innerHTML = "* Debe tener 6 o más caractéres."
      document.getElementById("correo").style.borderColor="#DA2A33"      
    }else if ( !verificarCorreo(correo) ){
      document.getElementById("correo-error").innerHTML = "* Ingreso de datos inválidos."
      document.getElementById("correo").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("correo-error").innerHTML = ""
      document.getElementById("correo").style.borderColor="lightgrey"      
    }

    if ( numCel=="" ){
      document.getElementById("numCel-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("numCel").style.borderColor="#DA2A33"      
    }else if ( numCel.length!=9 && !verificarNumCel(numCel) ){
      document.getElementById("numCel-error").innerHTML = "* Debe ingresar solo números."
      document.getElementById("numCel").style.borderColor="#DA2A33"      
    }else if ( numCel.length!=9 ){
      document.getElementById("numCel-error").innerHTML = "* Debe tener 9 dígitos."
      document.getElementById("numCel").style.borderColor="#DA2A33"      
    }else if ( !verificarNumCel(numCel) ){
      document.getElementById("numCel-error").innerHTML = "* Ingreso de datos inválidos."
      document.getElementById("numCel").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("numCel-error").innerHTML = ""
      document.getElementById("numCel").style.borderColor="lightgrey"      
    }
    
  } else {

    document.getElementById("correo-error").innerHTML = ""
    document.getElementById("correo").style.borderColor="lightgrey"
    document.getElementById("numCel-error").innerHTML = ""
    document.getElementById("numCel").style.borderColor="lightgrey"

    movPag.style.marginLeft = "-75%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

  }

  function verificarCorreo($n){
    var ExpRegular_Correo = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return ExpRegular_Correo.test($n);

/*     if ($n.match(ExpRegular_Correo)){
      return true
    }else{
      return false;
    } */

  }

  function verificarNumCel($m){
    var ExpRegular_Num = /^[\d]+$/;
    return ExpRegular_Num.test($m);
  }

});

let c = 0;

btn_final.addEventListener("click", function(e){

  e.preventDefault();

  c++;
  console.log(c);

  var usuario = document.getElementById("usuario").value;
  var contra = document.getElementById("contra").value;

  if ( usuario=="" && contra=="" ){

    document.getElementById("usuario-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("usuario").style.borderColor="#DA2A33"
    document.getElementById("contra-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("contra").style.borderColor="#DA2A33"  

  }else if ( usuario=="" || contra=="" || 
             usuario.length<2 || contra.length<5 || 
             !verificarUsuario(usuario) || !verificarContra(contra) 
           ){
    
    if ( usuario=="" ){
      document.getElementById("usuario-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("usuario").style.borderColor="#DA2A33"      
    }else if ( usuario.length<2 && !verificarUsuario(usuario) ){
      document.getElementById("contra-error").innerHTML = "* Solo mayúsculas, minúsculas y letras."
      document.getElementById("contra").style.borderColor="#DA2A33"      
    }else if ( usuario.length<2 ){
      document.getElementById("usuario-error").innerHTML = "* Debe tener 3 o más caractéres."
      document.getElementById("usuario").style.borderColor="#DA2A33"      
    }else if ( !verificarUsuario(usuario) ){
      document.getElementById("usuario-error").innerHTML = "* Ingreso de datos inválidos."
      document.getElementById("usuario").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("usuario-error").innerHTML = ""
      document.getElementById("usuario").style.borderColor="lightgrey"      
    }

    if ( contra=="" ){
      document.getElementById("contra-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("contra").style.borderColor="#DA2A33"      
    }else if ( contra.length<5 && !verificarContra(contra) ){
      document.getElementById("contra-error").innerHTML = "* Mínimo una MAY, MIN y NUM."
      document.getElementById("contra").style.borderColor="#DA2A33"      
    }else if ( contra.length<5 ){
      document.getElementById("contra-error").innerHTML = "* Debe tener 6 a más caractéres."
      document.getElementById("contra").style.borderColor="#DA2A33"      
    }else if ( !verificarContra(contra) ){
      document.getElementById("contra-error").innerHTML = "* Ingreso de caractéres inválidos."
      document.getElementById("contra").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("contra-error").innerHTML = ""
      document.getElementById("contra").style.borderColor="lightgrey"      
    }
    
  } else {

    document.getElementById("usuario-error").innerHTML = ""
    document.getElementById("usuario").style.borderColor="lightgrey"
    document.getElementById("contra-error").innerHTML = ""
    document.getElementById("contra").style.borderColor="lightgrey"

    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

    setTimeout(function(){
    
      let timerInterval;
      Swal.fire({
  
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
  
        title: 'Realizando registro...',
        timer: 1000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerRight()
              }
            }
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          Swal.fire({
            title: '¡ATENCIÓN!',
            html: "Al continuar con el registro, <br>usted acepta los términos y condiciones.",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, continuar.',
            footer: '<a href="termCond.html" target="_blank">Ver términos y condiciones.</a>'
          }).then((result) => {
            if (result.value) {
              Swal.fire({
                icon: 'success',
                title: '¡Enhorabuena!',
      
                html: 'El usuario: <br>' +
                      '<b style="color: #0E2C48; font-size: px;";>' + 
                      newUser +'</b><br> Ha sido registrado con éxito.',
      
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> ACEPTAR',
                allowOutsideClick: false,
                allowEscapeKey: false,
                stopKeydownPropagation: false  
              }
              ).then((result) => {
                if (result.value) {
                  limpiar();
                  location.reload();            
                }
              })
            }else {
              cont -= 1;
            }
          })
        }
      });    
    });

  }

  function verificarUsuario($n){
    var ExpRegular_Correo = /^[a-zA-Z][a-zA-Z0-9_]{3,9}$/;
    return ExpRegular_Correo.test($n);
  }

  function verificarContra($m){
    var ExpRegular_Num = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/; /* al menos un dígito, al menos una minúscula y al menos una mayúscula. */
    return ExpRegular_Num.test($m);
  }

  function limpiar(){
    document.getElementById("nombres").value = "";
    document.getElementById("apellido1").value = "";
    document.getElementById("apellido2").value = "";
    document.querySelector('input[type="date"]').value = "";
    document.getElementById("sexo").value = -1;
    document.getElementById("correo").value = "";
    document.getElementById("numCel").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("contra").value = "";
  }

});


btn_atras1.addEventListener("click", function(e){

  e.preventDefault();

  movPag.style.marginLeft = "0%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});

btn_atras2.addEventListener("click", function(e){

  e.preventDefault();

  movPag.style.marginLeft = "-25%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});

btn_atras3.addEventListener("click", function(e){

  e.preventDefault();

  movPag.style.marginLeft = "-50%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});