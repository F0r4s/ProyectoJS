/* Musi */

class Credito {
    constructor(nombre, apellido, dni, scoring,nro , nivel, capital, cuotas, intereses, gastos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.scoring = scoring;
        this.nro = nro;
        this.nivel = nivel;
        this.capital = capital;
        this.cuotas = cuotas;
        this.intereses = intereses;
        this.gastos = gastos;
        
    }
}

const credito1 = new Credito("pepe","foris", 14125388, 123 , 1, 51, 1000, 2, 300, 150);
const credito2 = new Credito("Lio","Messi", 13285152, 451 , 2, 0, 10000, 12, 1500, 750);
const credito3 = new Credito("Leonel","Messi", 13285152, 452 , 3, 2, 10000, 24, 1500, 750);
const credito4 = new Credito("Leopoldo","Messi", 13285152, 655 , 4, 3, 10000, 36, 1500, 750);


const arrayCreditos = [credito1, credito2, credito3, credito4];

arrayCreditos.forEach((Credito) => {
    console.log(Credito);
    
    const guardarUser = (clave, valor) => { localStorage.setItem(clave, valor) };

    guardarUser("listaCliente", JSON.stringify(arrayCreditos));

})




const formCliente = document. getElementById("formCliente");

formCliente.addEventListener ('submit' , (e) =>{
    e.preventDefault();
    validar1();
    limpiar();

} );

function limpiar() { 
    document.getElementById ('formRefi').reset();
    document.getElementById ('formCliente').reset();
    document.getElementById ('formBonif').reset();
    document.getElementById ('formSim').reset();
}


function newUser() {

    let nombre = document.getElementById("usname").value;
    let apellido = document.getElementById("usApellido").value;
    let dni = document.getElementById("usdni").value;
    let scoring = document.getElementById("usScoring").value;
    let nivel = document.getElementById("usnivel").value;
    let capital = document.getElementById("uscap").value;
    let cuotas = document.getElementById("uscuotas").value;
    let intereses = interes();
    let gastos = intereses /2;
    
    
    let nro = Math.ceil(Math.random() * 100000);

    
    let credito = new Credito(nombre, apellido, dni, scoring, nro, nivel, capital, cuotas, intereses, gastos);
    arrayCreditos.push(credito);
    console.log(arrayCreditos);

    Swal.fire({
        icon: 'success',
        title: 'Felicidades!, nuevo cliente cargado' ,
    });



     }

     function validar1() {
        let nombre = document.getElementById("usname").value;
        let apellido = document.getElementById("usApellido").value;
        let dni = document.getElementById("usdni").value;
        let scoring = document.getElementById("usScoring").value;
        let nivel = document.getElementById("usnivel").value;
        let capital = document.getElementById("uscap").value;
        let cuotas = document.getElementById("uscuotas").value;
    
        if (nombre === '' || apellido === '' || dni === '' || scoring === '' || nivel === '' || cuotas === '' || capital === '') {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Olvidaste algun dato, veriifica',
    
            })
        }
        else {
            newUser();
        }
    
    }


const formRefi = document. getElementById("formRefi");

formRefi.addEventListener ('submit' , (e) =>{
    e.preventDefault();
    refi();
    limpiar();

} );

function refi (){  
    

    let search = document.getElementById("ncred").value;
    const buscar = arrayCreditos.find(credito => credito.nro == search);
    let creditoRefi = 0
    
    
    if (buscar) {
    
        console.log(buscar)
    
        const creditoRefi = (buscar.capital + buscar.intereses)* 2.3
        
        console.log(creditoRefi.toFixed(2))
    
        let cuotas = document.getElementById("planRef").value;
    
        function refinanciador(creditoRefi) {
    
            switch (cuotas) {
                case "12":
                    return ("Tu plan es de 12 cuotas de" + " " + (creditoRefi / 12).toFixed(2) );
                    break;
                case "18":
                    return ("Tu plan es de 18 cuotas de"+ " " + ((creditoRefi * 1.21) / 18).toFixed(2) );
                    break;
                case "24":
                    return ("Tu plan es de 24 cuotas de"+ " " +((creditoRefi * 2.20) / 24).toFixed(2));
                    break;
                case "36":
                    return ("Tu plan es de 36 cuotas de"+ " " + ((creditoRefi * 3.20) / 36).toFixed(2));
                    break;
        
                default:
                    return "No hay refinanciacion vigente por esa cantidad de cuotas";
                    break;
        
            }
        }
  
   let CreditoRefis = (refinanciador(creditoRefi));  
   let result = document.getElementById("resultadoRef");

result.innerHTML = CreditoRefis
    
         
    } 
    
    
    else {
        alert("Este credito no puede ser refinanciado")
    }
    
    };

    
    function interes(){
        let capital = document.getElementById("uscap").value;
        let cuotas = document.getElementById("uscuotas").value;

        switch (cuotas){
            case "12":
                return  ((capital * 1.2).toFixed(2) );
                break;
            case "18":
                return ((capital * 1.5).toFixed(2) );
                break;
            case "24":
                return ((capital * 2.4).toFixed(2) );
                break;
            case "36":
                return ((capital * 3.6).toFixed(2) );
                break;
    
            default:
                return "No puede cargarse un credito acorde a esa cantidad de cuotas";
                break;

        }
    }

    const resultado = document.getElementById("resultado");

const formulario = document.getElementById("formulario");

const filtrar = () =>{

    resultado.innerHTML = '';
    
    const texto = formulario.value.toLowerCase();
    for ( let credito of arrayCreditos ){
        let nombre = credito.apellido.toLowerCase();

        if ( nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li class="list-group-item "> Nombre: ${credito.nombre}  ${credito.apellido} - Nro: ${credito.nro} - Capital:${credito.capital} - Intereses: ${credito.intereses} - GastosAdm: ${credito.gastos} - Nivel: ${credito.nivel} </li>
            `
        }

    }
    if ( resultado.innerHTML === '' ){
        resultado.innerHTML = `<li>Producto no encontrado</li>`
    }

}

formulario.addEventListener('keyup', filtrar)
filtrar();



const formBonif = document. getElementById("formBonif");

formBonif.addEventListener ('submit' , (e) =>{
    e.preventDefault();
    const valor = calculadora ();
let result = document.getElementById("resultadoBonif");

result.innerHTML = valor;

    limpiar();

} );

function calculadora()

 {

let nivel = document.getElementById("nivelbonif").value;

let capital = +document.getElementById("capitalbonif").value;
let intereses = +document.getElementById("interesbonif").value;
let gastosAdministrativos = +document.getElementById("gastosbonif").value;

    switch (nivel) {
        case "51":
            return "el monto bonificado es " + (capital + (intereses + gastosAdministrativos) * 0.25);
            break;
        case "1":
            return "el monto bonificado es " + (capital + (intereses + gastosAdministrativos) * 0.25);
            break;
        case "2":
            return "el monto bonificado es " +  (capital + (intereses + gastosAdministrativos) * 0.7);
            break;
        case "3":
            return "el monto bonificado es " +  (capital + (intereses + gastosAdministrativos) * 0.8);
            break;
        case "4":
            return "el monto bonificado es " +  (capital + (intereses + gastosAdministrativos) * 0.9);
            break;
        case "52":
            return "el monto bonificado es " +   (capital + (intereses + gastosAdministrativos) * 0.15);
            break;

        default:
            return "Para el nivel que indicaste no existe Bonificacion Vigente!";
            break;

    }

    
}

const formSim = document. getElementById("formSim");

formSim.addEventListener ('submit' , (e) =>{
    e.preventDefault();
    const simulador = generadorPlan();
let result = document.getElementById("resultadoSim");

result.innerHTML = simulador;

    limpiar();

} );

function generadorPlan() {

    let capital = +document.getElementById("simCapital").value;
    
    let cuotas = +document.getElementById("simCuotas").value;
    
    switch (cuotas) {
    
            case 12:
                return ("Tu plan es de 12 cuotas de" + " " + ((capital*1.6) / 12).toFixed(2) );
                break;
    
            case 18:
                return ("Tu plan es de 18 cuotas de"+ " " + ((capital*2.4) / 18).toFixed(2) );
                break;
            case 24:
                return ("Tu plan es de 24 cuotas de"+ " " +((capital*3.2) / 24).toFixed(2));
                break;
            case 36:
                return ("Tu plan es de 36 cuotas de"+ " " + ((capital*4.8) / 36).toFixed(2));
                break;
    
            default:
                return "No hay un plan disponible por esa cantidad de cuotas, revisa";
                break;
        
    
    }
    
    }
