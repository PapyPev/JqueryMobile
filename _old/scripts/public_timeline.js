$('#public_timeline').on('pagebeforeshow', function(){
	$.ajax({ 
		type: "GET", 
		//url: "http://iris.local/minitwit/api/timeline", 
		url: "http://localhost:8080/minitwit/api/timeline",
		dataType:'json',
		success: function(response){
			message = ""
			for(key in response.response){
				message = message + "<li data-icon=\"false\"><a href=\"index.html\">"
				    +"<h2>"+response.response[key]["from"]+"</h2>"
				    +"<p>"+response.response[key]["text"]+"</p>"
				    +"<p class=\"ui-li-aside\"><strong>"+(new Date(response.response[key]["pub_date"]*1000))+"</strong></p>"
				    +"</a></li>"
				//alert(message)
				
			}			
			$("#timeline").html(message)
			$("#timeline").listview("refresh")

		},  
		error: function(){
			alert("fail load json");
		},
	});	
})
