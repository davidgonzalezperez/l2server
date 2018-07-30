<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
$id='localhost';
$usuario='root';
$password='';
$db="hola";


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$user = $request->user;
$pass = $request->pass;

$con=mysqli_connect($id,$usuario,$password)or die("Problemas al conectar");
mysqli_select_db($con, $db)or die("Problemas al seleccionar la bd");


mysqli_query($con, "INSERT INTO accounts (login,Password) VALUES ('$user','$pass')");
$postdata="datos insertados";

$data = Array(
	'status' => 'ok'
);


echo json_encode($data)

 ?>