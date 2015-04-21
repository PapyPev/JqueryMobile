$(window).load(function() {
	$.ajax({ 
		type: "GET", 
		url: "http://iris.local/minitwit/api/timeline", 
		dataType:'json',
		success: function(response){
			message = "toto"

			$("#timeline").html(message)

			for(key in response.response){
				$("#timeline").append("<tr>"
					+ "<td>"+response.response[key]["from"]+"</td>"
	    			+ "<td>"+response.response[key]["pub_date"]+"</td>"
	    			+ "<td>"+response.response[key]["text"]+"</td>"
	    			+ "</tr>")
			}

		},  
		error: function(){
			alert("fail load json");
		},
	});	
});