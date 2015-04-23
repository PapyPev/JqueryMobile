$(window).load(function(){

	var connexion = false;

	if (connexion) {

		$("#timeline_panel").html(
		'<ul data-role="listview">'
			+'<li><h4>Navigation</h4></li>'
			+'<button data-icon="home" data-theme="b" onclick="timeline_getPublic();">Public</button>'
			+'<button data-icon="grid" onclick="timeline_getPersonnel();">Personnel</button>'
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
			+'<li><h4>Navigation</h4></li>'
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

