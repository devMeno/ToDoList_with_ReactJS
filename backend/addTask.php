<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin:*");
include("dbConnexion.php");

$requete = "INSERT INTO activity(tache) VALUES (?)";
$insert = $bdd->prepare($requete);
$insert->execute([$_POST["new"]]);

echo $_POST['new'];