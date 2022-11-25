<?php

class Connect{
  private $server='localhost';
  private $dbname="api";
  private $user="root";
  private $pass="";

  public function connect(){
    try{
      $conn= new PDO('mysql:host='.$this->server.';dbname='.$this->dbname,$this->user,$this->pass);
      return $conn;
    }catch (\Exception $e){
      echo "Database Error:".$e->getMessage();
    }
  
  }

}