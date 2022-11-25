<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Methods:*");


include 'Connect.php';

$obJODB=new Connect();

$conn=$obJODB->connect();

$method=$_SERVER['REQUEST_METHOD'];


switch($method){

  case "GET":

    echo json_decode("Lucas");
  break;



  case "POST";

  
   
  break;    
}
