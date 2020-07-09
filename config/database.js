var admin = require('firebase-admin');


var serviceAccount = require("../contactsapp-f8965-firebase-adminsdk-9vl00-fe047f4161.json");

function databaseConfig(){
        admin.initializeApp({
            apiKey: "AIzaSyBp8TWtxrT5GfVj24rplZu77uQDjUrJrWI",
            authDomain: "contactsapp-f8965.firebaseapp.com",
            databaseURL: "https://contactsapp-f8965.firebaseio.com",
            projectId: "contactsapp-f8965",
            storageBucket: "contactsapp-f8965.appspot.com",
            messagingSenderId: "840370745890",
            appId: "1:840370745890:web:878162dd0b77f3974e107b",
            measurementId: "G-HPHCT4PGVW",
            credential: admin.credential.cert(serviceAccount),
        });
        return admin;
    
}

module.exports = databaseConfig;