/* Estilo */

document.getElementById("BotonRegistro").addEventListener("click", registro);

document.getElementById("inicio-sesion").addEventListener("click", iniciarsesion);

window.addEventListener("resize", anchopag);

let cajalogin_registro = document.querySelector(".cajalogin-registro");
let caja_fondologin = document.querySelector(".caja_fondologin");
let caja_fondoregistro = document.querySelector(".caja_fondoregistro");
let form_login = document.querySelector(".form_login");
let form_registro = document.querySelector(".form_registro");

function anchopag() {
  if (innerWidth > 850) {
    caja_fondologin.style.display = "block";
    caja_fondoregistro.style.display = "block";

  }
  else {
    caja_fondoregistro.style.display = "block";
    caja_fondoregistro.style.opacity = "1";
    caja_fondologin.style.display = "none";
    form_login.style.display = "block";
    form_registro.style.display = "none";
    cajalogin_registro.style.left = "0px";
  }
}

anchopag();

function registro() {
  if (innerWidth > 850) {
    cajalogin_registro.style.left = "410px";
    caja_fondologin.style.opacity = "1";
    caja_fondoregistro.style.opacity = "0";
    form_registro.style.display = "block";
    form_login.style.display = "none";
  }
  else {
    cajalogin_registro.style.left = "0px";
    caja_fondologin.style.display = "block";
    caja_fondologin.style.opacity = "1";
    caja_fondoregistro.style.display = "none";
    form_registro.style.display = "block";
    form_login.style.display = "none";
  }


}

function iniciarsesion() {
  if (innerWidth > 850) {

    cajalogin_registro.style.left = "10px";
    caja_fondologin.style.opacity = "0";
    caja_fondoregistro.style.opacity = "1";
    form_registro.style.display = "none";
    form_login.style.display = "block";
  }
  else {
    cajalogin_registro.style.left = "0px";
    caja_fondologin.style.display = "none";
    caja_fondoregistro.style.display = "block";
    form_registro.style.display = "none";
    form_login.style.display = "block";
  }

}

