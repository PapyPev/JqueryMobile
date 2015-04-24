$(window).load(function(){

	var connexion = true;
	var pseudo = "Pev";

	if (connexion) {

		$("#timeline_panel").html(
		'<ul data-role="listview">'
			+'<button data-icon="home" data-theme="b" onclick="timeline_getPublic();">Public</button>'
			+'<button data-icon="grid" onclick="timeline_getPersonnel(\''+pseudo+'\');">Personnel</button>'
			+'<button data-icon="search" onclick="timeline_getRechercher();">Rechercher</button>'
			+'<button data-icon="delete" onclick="timeline_getDeconnexion();">Deconnexion</button>'
			+'<br />'
			+'<div data-role="footer">'
				+'<h4><small>IMERIR2A</small></h4>'
			+'</div><!-- /footer -->'
		+'</ul>').trigger('create');

	} else{

		$("#timeline_panel").html(
		'<ul data-role="listview">'
			+'<button data-icon="home" data-theme="b" onclick="timeline_getPublic();">Public</button>'
			+'<button data-icon="grid" onclick="timeline_getInscription();">Inscription</button>'
			+'<button data-icon="check" onclick="timeline_getConnexion();">Connexion</button>'
			+'<button data-icon="search" onclick="timeline_getRechercher();">Rechercher</button>'
			+'<br />'
			+'<div data-role="footer">'
				+'<h4><small>IMERIR2A</small></h4>'
			+'</div><!-- /footer -->'
		+'</ul>').trigger('create');

	};

	

});

