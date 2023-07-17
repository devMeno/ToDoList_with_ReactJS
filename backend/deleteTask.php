<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin:*");
include("dbConnexion.php");

$requete = "DELETE FROM activity WHERE id =?";
$insert = $bdd->prepare($requete);
$insert->execute([$_POST["to_delete"]]);

echo $_POST['to_delete'];