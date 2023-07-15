<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin:*");
include("dbConnexion.php");

$requete = "SELECT * FROM activity";
$req = $bdd->query($requete);
$answer = $req->fetchAll();
$answer = json_encode($answer);

echo $answer;
