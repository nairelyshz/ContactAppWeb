function contacts(params, admin){
    const app = params;

    // Get all contact
    app.get('/contacts', function (req, res) {
        res.send('[GET]Saludos desde express');
    });
    
    // Get a contact
    app.get('/contact/:contactId', function (req, res) {
        
        res.send('[GET]Saludos desde express a '+ req.params.contactId);
    });
    
    //Create a contact
    app.post('/contact', function (req, res) {
        res.send('[POST]Saludos desde express');
    });
    
    //Update a contact
    app.put('/contact', function (req, res) {
        res.send('[POST]Saludos desde express');
    });
    
    //Delete a contact
    app.delete('/contact', function (req, res) {
        res.send('[POST]Saludos desde express');
    });
  
}

module.exports = contacts;
