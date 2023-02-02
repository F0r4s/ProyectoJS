



/*Login */


class Usuario {
    constructor(nombre, correo, legajo, contraseña) {
        this.nombre = nombre;
        this.correo = correo;
        this.legajo = legajo;
        this.contraseña = contraseña;

    }
}

const operador1 = new Usuario("Rodrigo Daniel", "xxx@gmail.com", 1, "Coder");
const operador2 = new Usuario("Diego Maradona", "xxx1@gmail.com", 2, "Coder1");



const arrayUsuarios = [operador1, operador2];



arrayUsuarios.forEach((Usuario) => {
    console.log(Usuario);
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

    guardarLocal("listaUsuarios", JSON.stringify(arrayUsuarios));
})




const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    validar();
    limpiar();

});

function limpiar() {
    document.getElementById('formRegistro').reset();
    document.getElementById('formLogin').reset();

}

function validar() {
    let opname = document.getElementById("opname").value;
    let opmail = document.getElementById("opmail").value;
    let oplegajo = document.getElementById("oplegajo").value;
    let opcontraseña = document.getElementById("opcontraseña").value;

    if (opname === '' || opmail === '' || oplegajo === '' || opcontraseña === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Olvidaste algun dato, veriifica',

        })
    }
    else {
        nuevoUsuario();
    }

}

function nuevoUsuario() {

    let nombre = document.getElementById("opname").value;
    let correo = document.getElementById("opmail").value;
    let legajo = document.getElementById("oplegajo").value;
    let contraseña = document.getElementById("opcontraseña").value;

    let operador = new Usuario(nombre, correo, legajo, contraseña);


    arrayUsuarios.push(operador);

    console.log(arrayUsuarios);

    (async () => {
        let optimo = await Swal.fire({
            icon: 'success',
            title: 'Creaste un nuevo Usuario',
        });

        if (optimo) {
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido a la empresa' + ' ' + nombre + '!' ,
            });
        };

    })()



}

const formLogin = document.getElementById("formLogin");

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    login();




});


function login() {

    let user = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    const ingreso = arrayUsuarios.find(operador => operador.correo === user && operador.contraseña === pass);

    let logUser = 0


    if (ingreso) {

        console.log(ingreso);

        Swal.fire({
            toast: 'true',
            icon: 'success',
            title: user + '  inicio sesion',
            position: 'bottom-end'


        });

        setTimeout(() => {
            window.location.href = "../paginas/menu.html";
        }, 5000);



    }

    else {
        Swal.fire({
            toast: 'true',
            icon: 'error',
            title: 'Oops...',
            text: 'Algun dato es incorrecto, verifica',

        });
        limpiar();

    }

}

