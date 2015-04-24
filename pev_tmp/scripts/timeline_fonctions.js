function timeline_getPersonnel(pseudo) {

	var titre = "TimeLine de " + pseudo;

	$("#timeline_titre").html(titre).trigger('create');

	var adresse = "http://iris.local/minitwit/api/timeline/"+pseudo;

	// Recuperation des donnees JSON
	$.ajax({ 
		type: "GET", 
		url: adresse, 
		//url: "http://localhost:8080/minitwit/api/timeline",
		dataType:'json',

		// Succes de recuperation des donnees
		success: function(response){

			message = ""

			for(key in response.response){
				message = message + "<li data-icon=\"false\"><a href=\"http://iris.local/minitwit/api/timeline/"+response.response[key]["from"]+"\">"
					+ "<h2>"+response.response[key]["from"]+"</h2>"
					+ "<p>"+response.response[key]["text"]+"</p>"
					+ "<p class=\"ui-li-aside\"><strong>"+(new Date(response.response[key]["pub_date"]*1000))+"</strong></p>"
					+ "</a></li>"
			}

			// S'il n'y a pas de message a charger
			if (message == "") {
				message = "Pas de Message"
			}
			
			// Raffraichissement de l'interface
			$("#timeline_messages").html(message)
			$("#timeline_messages").listview("refresh")
			

		},  

		error: function(){
			alert("fail load json");
		},
		
	});	

}

function timeline_getPublic() {

	$("#timeline_titre").html('TimeLine Publique').trigger('create');

	// Recuperation des donnees JSON
	$.ajax({ 
		type: "GET", 
		url: "http://iris.local/minitwit/api/timeline", 
		//url: "http://localhost:8080/minitwit/api/timeline",
		dataType:'json',

		// Succes de recuperation des donnees
		success: function(response){

			message = ""

			for(key in response.response){
				message = message + "<li data-icon=\"false\"><a href=\"#\" onclick=\"javascript:timeline_otherPersonnel(\'"+response.response[key]["from"]+"\');\">"
					+ "<h2>"+response.response[key]["from"]+"</h2>"
					+ "<p>"+response.response[key]["text"]+"</p>"
					+ "<p class=\"ui-li-aside\"><strong>"+(new Date(response.response[key]["pub_date"]*1000))+"</strong></p>"
					+ "</a></li>"
			}

			// S'il n'y a pas de message a charger
			if (message == "") {
				message = "Pas de Message"
			}
			
			// Raffraichissement de l'interface
			$("#timeline_messages").html(message)
			$("#timeline_messages").listview("refresh")
			

		},  

		error: function(){
			alert("fail load json");
		},

	});	
	
}

function timeline_getRechercher() {
	$("#timeline_content").html('rechercher').trigger('create');
	$("#timeline_titre").html('Titre Rechercher').trigger('create');
}

function timeline_getInscription() {
	$("#timeline_content").html('inscription').trigger('create');
	$("#timeline_titre").html('Titre Inscription').trigger('create');
}

function timeline_getConnexion() {
	$("#timeline_content").html('<form name="monForm" action="" method="post"> <!-- Ajout method="post" --><label for="pseudo">Pseudo</label><input type="text" id="pseudo" name="pseudo" /><label for="text">text</label><input type="text" id="text" name="text" /><input type="button" id="envoyer" value="Envoyer" onclick="test();" /> <!-- appele la fonction dans le fichier test.js --></form>').trigger('create');
	$("#timeline_titre").html('Titre Connexion').trigger('create');
}

function timeline_getDeconnexion() {
	$("#timeline_content").html('deconnexion').trigger('create');
	$("#timeline_titre").html('Titre Deconnexion').trigger('create');
}