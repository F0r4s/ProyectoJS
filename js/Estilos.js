/* Estilo */

document.getElementById("BotonRegistro").addEventListener("click" , registro );

document.getElementById("inicio-sesion").addEventListener("click" , iniciarsesion );

window.addEventListener ("resize" , anchopag);

let cajalogin_registro = document.querySelector(".cajalogin-registro");
let caja_fondologin = document.querySelector(".caja_fondologin");
let caja_fondoregistro = document.querySelector(".caja_fondoregistro");
let form_login = document.querySelector(".form_login");
let form_registro = document.querySelector(".form_registro");

function anchopag(){
    if (innerWidth > 850){
        caja_fondologin.style.display= "block";
        caja_fondoregistro.style.display= "block";

    }
    else {
        caja_fondoregistro.style.display = "block";
        caja_fondoregistro.style.opacity = "1";
        caja_fondologin.style.display = "none";
        form_login.style.display ="block";
        form_registro.style.display = "none";
        cajalogin_registro.style.left = "0px";
    }
    }

    anchopag();

function registro() {
    if (innerWidth > 850){
        cajalogin_registro.style.left = "410px";
        caja_fondologin.style.opacity= "1";
        caja_fondoregistro.style.opacity= "0";
        form_registro.style.display = "block";
        form_login.style.display = "none";
    }
    else {
        cajalogin_registro.style.left = "0px";
        caja_fondologin.style.display= "block";
        caja_fondologin.style.opacity= "1";
        caja_fondoregistro.style.display= "none";
        form_registro.style.display = "block";
        form_login.style.display = "none";
    }
 

}

function iniciarsesion() {
    if (innerWidth > 850) {

    cajalogin_registro.style.left = "10px";
    caja_fondologin.style.opacity= "0";
    caja_fondoregistro.style.opacity= "1";
    form_registro.style.display = "none";
    form_login.style.display = "block";
}
else {
    cajalogin_registro.style.left = "0px";
    caja_fondologin.style.display= "none";
    caja_fondoregistro.style.display= "block";
    form_registro.style.display = "none";
    form_login.style.display = "block";
}

}

const criptoYa = "https://criptoya.com/api/dolar";

const divDolar = document.getElementById("contaainer");

setInterval( () => {
    fetch(criptoYa)
        .then( response => response.json())
        .then(({blue, ccl, mep, oficial, solidario}) => {
            divDolar.innerHTML = `
            <table class="table table-dark table-striped">
        <thead>
            <tr>
              <th scope="col">Tipo de Dolar</th>
              <th scope="col">Cotizacion (en pesos)</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Dolar Oficial:</th>
              <td>${oficial}</td>
            
             
            </tr>
            <tr>
              <th scope="row"> Dolar Solidario </th>
              <td>${solidario}</td>
            
              
            </tr>
            <tr>
              <th scope="row">Dolar MEP</th>
              <td colspan="2">${mep}</td>
              
            </tr>
            <tr>
                <th scope="row">Dolar Blue</th>
                <td colspan="2">${blue} </td>
                
              </tr>
              <tr>
                <th scope="row">Dolar CCL</th>
                <td colspan="2">${ccl}</td>
                
              </tr>

          </tbody>
      </table>
            `
        })
        .catch(error => console.error(error))
    }, 3000)
