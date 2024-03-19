<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
  
    $country = $_GET['country'] ?? '';
    $language = $_GET['lang'] ?? '';

    $url = "http://api.geonames.org/countryInfo?country=$country&lang=$language&username=kisecel309";
    $response = file_get_contents($url);

    $xml = simplexml_load_string($response);
    $countryData = [];

    foreach ($xml->country as $country) {
        foreach ($country->children() as $child) {
            $countryData[$child->getName()] = (string) $child;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($countryData);
}
?>
