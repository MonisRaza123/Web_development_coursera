(function(window){
	var helloSpeaker={
      
	  speakWord:"Hello",
      speak: function(name){
      console.log(helloSpeaker.speakWord+" "+name);
     }
	};

	window.helloSpeaker=helloSpeaker;
})(window);