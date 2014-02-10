// demonstratie touchscreen events

(function () {
    
    var body = document.getElementsByTagName('body')[0];
    
    var touchControls = {
        
        
        pokeTheScreen : function() {
            
            body.innerHTML += 'You just poked me, bastard!<br>';
            
        },
        
        stopPokingTheScreen : function() {
            
            body.innerHTML += 'Please don\'t do that again!!<br><br>';
        },
        
        showMovement : function() {
            
            body.innerHTML += 'Moving! <br>';
        },
        
        changedOrientation : function() {
            
            alert('changed orientation : ' + window.orientation );
            body.innerHTML = '';
        }
    };
    
    //event listeners op de body zetten
    body.addEventListener('touchstart', touchControls.pokeTheScreen, false);
    body.addEventListener('touchmove', touchControls.showMovement, false);
    body.addEventListener('touchend', touchControls.stopPokingTheScreen, false);
    window.addEventListener('orientationchange', touchControls.changedOrientation, false);
    
})();


