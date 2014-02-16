//function and closure dev pattern

var controls = function(el) {
    
    var audioControls = el,
        playButton = document.getElementById('play'),
        stopButton = document.getElementById('stop');
    
    //eventListeners opzetten
    playButton.addEventListener('click', play, false);
    stopButton.addEventListener('click', stop, false);
    
    function play() {
        
        //we gebruiken de parent function variabele, dit is CLOSURE
        audioControls.setAttribute('class', 'playing');
    }
    
    function stop() {
        
        //idem als in play functie
        audioControls.setAttribute('class', 'stopped');
    }
     
    //zet een soort API op
    return play, stop;
};

(function () {
    
    var element = document.getElementById('controls'),
        action = controls(element);
        
    //gebruik de API
    action.play;
    action.stop;
})();



