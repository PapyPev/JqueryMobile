function submittest(element){
 
        var $this = $(this); // L'objet jQuery du formulaire
 
        // Je récupère les valeurs
        var pseudo = $("#pseudo").val();
        var text = $("#text").val();

        var text = pseudo + " : " + text;

        console.log(text);






        alert(text);
}
