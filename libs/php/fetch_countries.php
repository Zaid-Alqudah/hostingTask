<?php

$url = 'http://api.geonames.org/countryInfo?username=kisecel309';
$response = file_get_contents($url);


$xml = simplexml_load_string($response);
$countries = [];


foreach ($xml->country as $country) {
    $countryData = [
        'countryCode' => (string)$country->countryCode,
        'countryName' => (string)$country->countryName
    ];
    $countries[] = $countryData;
}


header('Content-Type: application/json');
echo json_encode($countries);
?>
