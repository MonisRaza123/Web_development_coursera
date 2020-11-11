(function(window){
	var byeSpeaker={

	speakWord:"Good Bye",
    speak:function(name){
      console.log(byeSpeaker.speakWord+" "+name);
     }
	};

	window.byeSpeaker=byeSpeaker;
})(window);