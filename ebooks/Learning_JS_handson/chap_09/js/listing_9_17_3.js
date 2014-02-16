//event driven JS

function play() {
    
    //voeg een klasse toe aan de parent node van waar er geklikt werd
    this.parentNode.setAttribute('class', 'playing');
}

function stop() {
    
    //voeg een klasse toe aan de parent node van waar er geklikt werd
    this.parentNode.setAttribute('class', 'stopped');
}

(function () {
    
    //vars met de audiocontrol buttons
    var playButton = document.getElementById('play'),
        stopButton = document.getElementById('stop');
    
    //eventListener voor playactie
    playButton.addEventListener('click', play, false);
    
    //eventListener voor stopactie
    stopButton.addEventListener('click', stop, false);
    
})();