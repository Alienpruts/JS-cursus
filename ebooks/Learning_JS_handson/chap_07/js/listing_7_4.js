// method to get all contacts from adressbook

(function () { 


//definieer var met searchform in voor gebruik in je functies later
var searchForm = document.getElementById('search-form');

//het searchfield waarop de focus en blur events gebruikt zullen worden
var searchField = document.getElementById('q');

//definieer het adr object dat al je functies zal bevatten
var adr = {
    getAllContacts: function() {

        var target = document.getElementById('output');
        var book = contacts.adressBook;
        var count = book.length;
        var i;

        //verwijder inhoud van div output, indien er iets al in zit
        target.innerHTML = '';

        //check de count vooraleer je in de loop stapt
        if (count > 0) {
            for (i = 0; i < count; i++) {
                
                //maak een apart object aan met de inhoud van addressboek met pointer i     
                var obj = book[i];
                //maak de HTML op met de info uit dat object
                target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a><p>';
            }
        }
    },
    
    //definieer de methodes in listing 7.4.3
    addActiveSection : function() {
        //voeg een classe active toe aan de wrapping div van het element
        this.parentNode.setAttribute('class','active');
    },
    
    removeActiveSection : function() {
        //verwijder de classes van de wrapping div van het element
        this.parentNode.removeAttribute('class');
    },
    
    addHoverClass : function() {
        //voeg een classe hovering toe aan het element
        searchForm.setAttribute('class','hovering');
    },
    
    removeHoverClass : function() {
        //verwijder de class van het element
        searchForm.removeAttribute('class');
    },
   
    search : function(event) {
        
        var searchValue = searchField.value;
        //prevent default behavior of browser
        event.preventDefault();
        
        //save the target
        var target = document.getElementById('output');
        
        var book = contacts.adressBook;
        var count = book.length;
        var i;
        
        //verwijder wat er al in target zit voor de zekerheid
        target.innerHTML = '';
        
        //check of de count > 0 EN dat de searchwaarde niet leeg is
        if(count > 0 && searchValue !== '') {
            
            //loop door de contacten
            for (i = 0; i < count; i++) {
                
                var obj = book[i];
                //doorzoek de naam waarde van het object met indexOf
                var isItFound = obj.name.indexOf(searchValue)
                
                //indien waarde niet gevonden retourneert indexOf -1
                if (isItFound !== -1) {
                    target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                }
            }
        }
    }
};

//de button waarop je de actie wil hebben
var button = document.getElementById('get-all');

//activeer het click event op de button
button.addEventListener('click',adr.getAllContacts,false);


//focus event (focus op iets zetten, in dit geval het searchfield)
searchField.addEventListener('focus',adr.addActiveSection,false);

//blur event (focus verliezen)
searchField.addEventListener('blur',adr.removeActiveSection,false);

//Weetje : dit kan beter opgelost worden met CSS, maar we gebruiken het hier toch
//mouseover event op de searchform
searchForm.addEventListener('mouseover',adr.addHoverClass, false);

//mouseout event op de searchform
searchForm.addEventListener('mouseout',adr.removeHoverClass, false);

//activeer submit event op submit
//Werkt niet samen met event keyup, commentarieer dat dus
//searchForm.addEventListener('submit',adr.search, false);

//activeer keyup event ipv submit event (commentarieer dus submit event code)
//gebruikt voor autocomplete velden
searchForm.addEventListener('keyup',adr.search,false);
})();