<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>MiniTwit Public Timeline</title>
	<link rel="stylesheet" href="jquerymobile/jquery.mobile-1.4.5.min.css">
	<script src="jquerymobile/jquery-2.1.3.min.js"></script>
	<script src="jquerymobile/jquery.mobile-1.4.5.min.js"></script>
	<script type="text/javascript" src="scripts/test.js"></script>
</head>
<body>

<p>Enter names in the fields, then click "Submit" to submit the form:</p>

<form id="monForm" action="">
    <label for="pseudo">Pseudo</label>
    <input type="text" id="pseudo" name="pseudo" />
 
    <label for="text">text</label>
    <input type="text" id="text" name="text" />
 
    <input type="submit" id="envoyer" value="Envoyer" />
</form>

<script type="text/javascript">$( "#monform" ).on( "submit", submittest)</script>

</body>
</html>
