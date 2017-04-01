<?php
// ==========================================
// Ideamart : Sample PHP SMS API
// ==========================================
// Author : Pasindu De Silva
// Licence : MIT License
// http://opensource.org/licenses/MIT
// ==========================================
ini_set('error_log', 'sms-app-error.log');
require_once 'lib/Log.php';
require_once 'lib/SMSReceiver.php';
require_once 'lib/SMSSender.php';
define('SERVER_URL', 'http://localhost:7000/sms/send');
define('APP_ID', 'APPID');
define('APP_PASSWORD', 'password');
$logger = new Logger();
echo json_encode("1234");
try{
    // Creating a receiver and intialze it with the incomming data
    $receiver = new SMSReceiver(file_get_contents('php://input'));

    //Creating a sender
    $sender = new SMSSender( SERVER_URL, APP_ID, APP_PASSWORD);
		

    $message = $receiver->getMessage(); // Get the message sent to the app
    $address = $receiver->getAddress();	// Get the phone no from which the message was sent
    $logger->WriteLog($receiver->getAddress());
        // Send a broadcast message to all the subcribed users
    $response = $sender->sendMessage("1234",$address);
	
}catch(SMSServiceException $e){
    $logger->WriteLog($e->getErrorCode().' '.$e->getErrorMessage());
}
?>