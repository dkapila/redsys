$('#testService').click(function(){
    console.log (this.checked);
    if (this.checked) {
    	console.log ("started");
        $.get("/start", {project : "sample_project", file : "energy.tex"},
        	function (data) {
        		var x = confirm (data);
        		if (x === true) {
	        		$.get("/start", {permissions : "accept", project : "sample_project", file : "energy.tex"});	
        		}
        	});
    }
    else {
    	console.log ("no");
        $.get("/stop");
    }
});



