<?php
include 'class/database.php';
        
$accion=(isset($_GET['accion']))?$_GET['accion']:'leer';
$claseConexion = new database();
        
switch($accion){
    case 'usr':
        $sql = "SELECT * FROM usuarios ORDER BY IdUsr DESC";
            $stmt = $claseConexion->obtenerConexion()->query($sql);
            $response = $stmt->fetchAll();
            echo json_encode ($response);
    break;
    case 'tocada': 
        $sql = "SELECT * FROM tocada ORDER BY IdTocada DESC";


         $stmt = $claseConexion->obtenerConexion()->query($sql);
            $response = $stmt->fetchAll();
            echo json_encode ($response);
    break;
    case 'eliminar':
    
    break;
    default:
    
    break;
}