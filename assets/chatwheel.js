function setup(buttonId, audioId) {
	document.getElementById(buttonId).addEventListener("click", function(){
	    var audio = document.getElementById(audioId);
	  	if (this.className == 'is-playing'){
	    	this.className = "";
	    	this.innerHTML = "Play"
	    	audio.pause();
	    	audio.currentTime = 0
	  	} else{
	    	this.className = "is-playing";
	    	this.innerHTML = "Pause";
	    	audio.currentTime = 0
	    	audio.play();
	  	}
	});
}

setup("AudioButton1", "punks")
setup("AudioButton2", "karma")
setup("AudioButton3", "pleasemrlizard")
