$(window).load(function(){

	var connexion = false;
	var pseudo = "Pev";
	// TODO : getpseudo

	if (connexion) {

		$("#timeline_panel").html(
		'<ul data-role="listview">'
			+'<button data-icon="home" data-theme="b" onclick="timeline_getPublic();">Publique</button>'
			+'<button data-icon="grid" onclick="timeline_getPersonnel(\''+pseudo+'\');">Personnelle</button>'
			+'<button data-icon="delete" onclick="timeline_getDeconnexion();">Deconnexion</button>'
			+'<br />'
			+'<div data-role="footer">'
				+'<h4><small>IMERIR2A</small></h4>'
			+'</div><!-- /footer -->'
		+'</ul>').trigger('create');

	} else{

		$("#timeline_panel").html(
		'<ul data-role="listview">'
			+'<button data-icon="home" data-theme="b" onclick="timeline_getPublic();">Publique</button>'
			+'<button data-icon="grid" onclick="timeline_getInscription();">Inscription</button>'
			+'<button data-icon="check" onclick="timeline_getConnexion();">Connexion</button>'
			+'<br />'
			+'<div data-role="footer">'
				+'<h4><small>IMERIR2A</small></h4>'
			+'</div><!-- /footer -->'
		+'</ul>').trigger('create');

	};

	

});

