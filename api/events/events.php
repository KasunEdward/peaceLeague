<?php
class Events{
 
    private $conn; 
    private $table_name = "event"; 
 
    // object properties 
    public $id; 
    public $name; 
    public $description; 
    public $price; 
    public $created; 
 
    // constructor with $db as database connection 
    public function __construct($db){ 
        $this->conn = $db;
    }

   // read products
public function readAll(){
 
    // select all query
    $query = "SELECT
				ID, name, description,longitude,latitude
			FROM
				" . $this->table_name . "
			ORDER BY
				ID DESC";
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
    // execute query
    $stmt->execute();
    return $stmt;
}}

//public function addEvent(){
//        $query = "INSERT INTO ".$this->table_name." (name, description, create_user_Id, longitude, latitude) VALUES (?,?,?,?)"
//    }
//
//}
?>