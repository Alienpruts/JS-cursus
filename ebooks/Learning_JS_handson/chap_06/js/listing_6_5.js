//Een JSON object met data

var contacts = {
    "adressBook": [
        {
            'name': 'hillisha',
            'email': 'hill@example.com'
        },
        {
            'name': 'paul',
            'email': 'cleveland@example.com'
        },
        {
            'name': 'vishaal',
            'email': 'vish@example.com'
        },
        {
            'name': 'mike',
            'email': 'grady@example.com'
        },
        {
            'name': 'jamie',
            'email': 'dusted@example.com'
        }
    ]
};

//we gebruiken een for loop om het JSON object te doorlopen

var object = contacts.adressBook;
var contactsCount = object.length;
//zet de target voor de innerHTML
var target = document.getElementsByTagName('body')[0];
var i;

if (contactsCount > 0) {

    for (i = 0; i < contactsCount; i = i + 1) {
        var personObject = object[i],
                name = personObject.name,
                email = personObject.email;

        //we voegen iedere persoon z'n data in via innerHTML via een if statement

        if (name === 'hillisha') {
            target.innerHTML += '<p><a href="mailto: ' + email + '">' + name + '</a>!!!</p>';
        } else if (name === 'paul') {
            target.innerHTML += '<p><a href="mailto: ' + email + '">' + name + '</a>?</p>';
        } else {
            target.innerHTML += '<p><a href="mailto: ' + email + '">' + name + '</a></p>';
        };
        
        //We doen daarna hetzelfde met een switch statement
        switch(name) {
            case 'hillisha':
                target.innerHTML += '<p><a href="mailto: ' + email + '">' + name + '</a>!!!</p>';
                break;
            
            case 'paul':
                target.innerHTML += '<p><a href="mailto: ' + email + '">' + name + '</a>?</p>';
                break;
               
            default:
                target.innerHTML += '<p><a href="mailto: ' + email + '">' + name + '</a></p>';
        };
    }
}