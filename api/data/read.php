<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../events/events.php';

$database=new Database();
$db=$database->getConnection();

$events=new Events($db);

$stmt=$events->readAll();
$num=$stmt->rowCount();

$data="";
 
// check if more than 0 record found

 
     
    $x=1;
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
 $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
//    json_encode("jkasun");
echo json_encode($row);
//        // extract row
//        // this will make $row['name'] to
//        // just $name only
//        extract($row);
//
//        $data .= '{';
//            $data .= '"id":"'  . $ID . '",';
//            $data .= '"name":"'   . $name . '",';
//            $data .= '"description":"'   . html_entity_decode($description) . '",';
//        $data .= '}';
//
//        $data .= $x<$num ? ',' : '';
//
//        $x++;
//    }


//echo '[' . $data . ']';
//echo $data;

?>