function setup(buttonId, audioId) {
	document.getElementById(buttonId).addEventListener("click", function(){
	    var audio = document.getElementById(audioId);
	  	if (this.className == 'is-playing'){
	    	this.className = "";
	    	this.innerHTML = "Play"
	    	audio.pause();
	    	audio.currentTime = 0
	  	} else {
			this.className = "is-playing";
			this.innerHTML = "Pause";
			that = this;
			audio.currentTime = 0;
			audio.onended = function() {
				that.className = "";
				that.innerHTML = "Play"
				audio.currentTime = 0
			};
			audio.play();
	}
	});
}

setup("AudioButton1", "punks")
setup("AudioButton2", "karma")
setup("AudioButton3", "pleasemrlizard")
setup("AudioButton4", "beta")
setup("AudioButton12", "wp")
setup("AudioButton6", "dreamcarl")
setup("AudioButton7", "6treants")
setup("AudioButton8", "simplecalculus")
setup("AudioButton9", "thankyoupurge")
setup("AudioButton10", "gg")
setup("AudioButton11", "passiveaggressive")
