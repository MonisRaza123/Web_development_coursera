(function(){
 var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
 for(var i=0; i<names.length;i++){
 	var lowername=names[i].toLowerCase();
 	if(lowername.charAt(0)=='j'){
 		 window.byeSpeaker.speak(names[i])
		}
	else{
		window.helloSpeaker.speak(names[i])
	}
 	}

})();