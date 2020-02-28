<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>fetchAPI</title>
  </head>
  <body>
    <a href="tocadas.php"> <button class="btn btn-primary w-100 mt-5">Buscar</button></a>
    <!-- <div class="container my-s text-center" onclick="traer()">
           <button class="btn btn-primary w-100 mt-5">Buscar</button>
        <div class="mt-5" id="contenido">
            
        </div>
    </div> -->
    <div class="container my-s text-center">
        <div class="mt-5" id="contenido">
            
        </div>
    </div>
    <script>
      var accion='<?php echo 'usr';?>';
    </script>
    <script src="app.js"></script>
    <script>
      setInterval(()=>getUsuario(),1000)
    </script>
  </body>
</html>