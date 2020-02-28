var contenido=document.querySelector('#contenido')

var imp=console.log
// alert(accion);
getUsuario = () =>{
    fetch('json.php?accion='+accion)
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
 getTocadas = () =>{
    fetch('json.php?accion='+accion)
    .then(resp=> resp.json())
     .then(data=>{
         contenido.innerHTML =  "";

         for(let valor of data){
             // msg(valor)
             contenido.innerHTML += `
                 <div class="card mb-5 p-0">
                     <div class="card-header">
                         ${valor.Nombre} ${valor.telefono}
                     </div>
                     <div class="card-body">
                         <h5 class="card-title">${valor.descripcion}</h5>
                         <p class="card-text">${valor.precioTotal}</p>
                         <p class="card-text">${valor.aporte}</p>
                         <a href="#" class="btn btn-primary">Go somewhere</a>
                     </div>
                 </div>
             `
         }
     })

 }
 
 