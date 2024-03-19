<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {

    $latitude = $_GET['latitude'] ?? '';
    $longitude = $_GET['longitude'] ?? '';

 
    $url = "http://api.geonames.org/timezoneJSON?lat=$latitude&lng=$longitude&username=kisecel309";
    $response = file_get_contents($url);
    
 
    header('Content-Type: application/json');
    echo $response;
}
?>
