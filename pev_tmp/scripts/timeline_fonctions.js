function timeline_getPublic() {
	$("#timeline_content").html('public').trigger('create');
	$("#timeline_titre").html('Titre Public').trigger('create');
}

function timeline_getPersonnel() {
	$("#timeline_content").html('personnel').trigger('create');
	$("#timeline_titre").html('Titre Personnel').trigger('create');
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
	$("#timeline_content").html('connexion').trigger('create');
	$("#timeline_titre").html('Titre Connexion').trigger('create');
}

function timeline_getDeconnexion() {
	$("#timeline_content").html('deconnexion').trigger('create');
	$("#timeline_titre").html('Titre Deconnexion').trigger('create');
}