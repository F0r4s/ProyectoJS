const criptoYa = "https://criptoya.com/api/dolar";

const divDolar = document.getElementById("contaainer");

setInterval(() => {
    fetch(criptoYa)
        .then(response => response.json())
        .then(({ blue, ccl, mep, oficial, solidario }) => {
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
