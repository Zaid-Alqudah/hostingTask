<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
 
    $north = $_GET['north'] ?? '';
    $south = $_GET['south'] ?? '';
    $east = $_GET['east'] ?? '';
    $west = $_GET['west'] ?? '';

 
    $url = "http://api.geonames.org/weatherJSON?north=$north&south=$south&east=$east&west=$west&username=kisecel309";
    
    $response = file_get_contents($url);
    

    header('Content-Type: application/json');
    echo $response;
}
?>
