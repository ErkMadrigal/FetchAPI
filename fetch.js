var contenido=document.querySelector('#contenido')

// const msg = console.log
// const traer =()=>{
//     fetch('texto.txt')
//     .then(data=> data.text())
//     .then(data=>{
//         contenido.innerHTML= `${data}`
//     })
// }

const traer = ()=>{
    fetch('jsonUsuarios.php')
    .then(resp=> resp.json())
    .then(data=>{
        contenido.innerHTML =  "";

         for(let valor of data){
            // msg(valor)
            contenido.innerHTML += `
                <div class="card mb-5">
                    <div class="card-header">
                        ${valor.NombreUsr} ${valor.ApellidoUsr}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${valor.telefono}</h5>
                        <p class="card-text">${valor.correo}</p>
                        <p class="card-text">${valor.CargoUsr}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            `
        }
    })
}

 setInterval(()=>traer(), 1000)
