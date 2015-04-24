function timeline_setPublication() {
	
	var post = document.getElementById("pub_message").value;
	alert(post)

	// TODO : recharger la timeline

}

function timeline_getPersonnel(pseudo) {

	var titre = "TimeLine de " + pseudo;

	$("#timeline_contenant").html('').trigger('create');
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

			var formulairePublication = 
				'<form name="publicationForm" action="" method="post">'
					+ '<label for="textarea">Publier un message :</label>'
					+ '<textarea name="textarea" id="pub_message"></textarea>'
					+ '<input type="button" id="publication_envoyer" value="Publier" onclick="timeline_setPublication();" />'
				+ '</form>';

			// Raffraichissement de l'interface
			$("#timeline_contenant").html(formulairePublication)
			$("#timeline_contenant").trigger("create")

			// -------------------

			var message = "";

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

	$("#timeline_contenant").html('').trigger('create');
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

function timeline_setInscription() {

	var pseudo = document.getElementById("inscr_pseudo").value;
	var mail = document.getElementById("inscr_mail").value;
	var mdp1 = document.getElementById("inscr_mdp1").value;
	var mdp2 = document.getElementById("inscr_mdp2").value;

	alert("INSCRIRE" + pseudo + " " + mail + " " + mdp1 + " " + mdp2)
}

function timeline_getInscription() {
	$("#timeline_messages").html('').trigger('create');
	$("#timeline_contenant").html(
		'<form name="inscriptionForm" action="" method="post">'
			+ '<label for="textinput-s">Pseudo : </label>'
			+ '<input type="text" name="inscr_pseudo" id="inscr_pseudo" placeholder="Pseudo" value="" data-clear-btn="true">'
			+ '<label for="textinput-s">E-mail : </label>'
			+ '<input type="text" name="inscr_mail" id="inscr_mail" placeholder="exemple@fai.fr" value="" data-clear-btn="true">'
			+ '<label for="password">Mot de passe : </label>'
			+ '<input type="password" name="inscr_mdp1" id="inscr_mdp1" value="" data-clear-btn="true">'
			+ '<label for="password">Vérification mdp: </label>'
			+ '<input type="password" name="inscr_mdp2" id="inscr_mdp2" value="" data-clear-btn="true">'
			+ '<input type="button" id="inscr_envoyer" value="Envoyer" onclick="timeline_setInscription();" />'
		+ '</form>'
	).trigger('create');
	$("#timeline_titre").html('Titre Inscription').trigger('create');
}

function timeline_setConnexion() {

	var pseudo = document.getElementById("connex_pseudo").value;
	var mdp = document.getElementById("connex_mdp").value;

	alert("CONNEXION " + pseudo + " " + mdp)
}

function timeline_getConnexion() {

	$("#timeline_contenant").html('').trigger('create');
	$("#timeline_titre").html('Titre Connexion').trigger('create');

	$("#timeline_contenant").html(
		'<form name="connexionForm" action="" method="post">'
			+ '<label for="connex_pseudo">Pseudo</label>'
			+ '<input type="text" id="connex_pseudo" name="connex_pseudo" />'
			+ '<label for="text">Mot de Passe</label>'
			+ '<input type="password" id="connex_mdp" name="connex_mdp" />'
			+ '<input type="button" id="connex_envoyer" value="Envoyer" onclick="timeline_setConnexion();" />'
		+ '</form>').trigger('create');
}

function timeline_getDeconnexion() {
	$("#timeline_messages").html('').trigger('create');
	$("#timeline_contenant").html('deco').trigger('create');
	$("#timeline_titre").html('Titre deco').trigger('create');
}