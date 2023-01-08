<?php
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Credentials: true');


	$items = <<< HEREDOC
[
	{
		"titre": "Pommes",
		"description": "Une douceur sucrée",
		"prix": "2",
		"categorie": "fruits",
		"img" : "../img/pomme.png",
		"id": "pomme"
	},
	{
		"titre": "Bouteilles de lait",
		"description": "Du lait purement alsacien !",
		"prix": "1.5",
		"categorie": "laitiers",
		"img" : "../img/bouteille_lait.png",
		"id": "lait"
	},
	{
		"titre": "Brocolis",
		"description": "Pour faire le plein de fer",
		"prix": "2",
		"categorie": "legumes",
		"img" : "../img/brocoli.png",
		"id": "brocoli"
	},
	{
		"titre": "Oeufs",
		"description": "Collectés en plein air",
		"prix": "3.5",
		"categorie": "laitiers",
		"img" : "../img/oeufs.png",
		"id": "oeufs"
	},
	{
		"titre": "Framboises",
		"description": "Belles et juteuses",
		"prix": "3",
		"categorie": "fruits",
		"img" : "../img/framboise.png",
		"id": "framboise"
	},
	{
		"titre": "Carottes",
		"description": "Bonnes et bio",
		"prix": "2.5",
		"categorie": "legumes",
		"img" : "../img/carotte.png",
		"id": "carotte"
	},
	{
		"titre": "Fromage",
		"description": "Du fromage bien français",
		"prix": "10",
		"categorie": "laitiers",
		"img" : "../img/fromage.png",
		"id": "fromage"
	},
	{
		"titre": "Patates",
		"description": "Production locale",
		"prix": "2",
		"categorie": "legumes",
		"img" : "../img/patate.png",
		"id": "patate"
	},
	{
		"titre": "Bananes",
		"description": "Très bonnes pour la santé",
		"prix": "2",
		"categorie": "fruits",
		"img" : "../img/banane.png",
		"id": "banane"
	}
]
HEREDOC;

	echo $items;
?>