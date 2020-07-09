function contacts(params, admin){
    
    const app = params;
    const ContactsController = require('./contactsController');
    const controller = new ContactsController(admin);
    
    // Get all contact
    app.get('/contacts',async (req, res) => {
        const allContacts = await controller.getAllContacts(req.body);
        console.log(allContacts);
        res.send({status: 200, message: 'All contacts', data: allContacts});
    });
    
    // Get a contact
    app.get('/contact/:contactId', function (req, res) {
        
        res.send('[GET]Saludos desde express a '+ req.params.contactId);
    });
    
    //Add a contact
    app.post('/contact', async (req, res)=> {
        const contact = await controller.addContact(req.body);
        res.send({status: 200, message: 'contact added', data: contact});
    });
    
    //Update a contact
    app.put('/contact', function (req, res) {
        const contact = controller.updateContact(req.body);
        if(contact){
            res.send({status: 200, message: 'Contact updated', data: req.body});
        }else{
            res.send({status: 500, message: 'Try later'});

        };
    });
    
    //Delete a contact
    app.delete('/contact', function (req, res) {
        const contact = controller.deleteContact(req.body);
        if(contact){
            res.send({status: 200, message: 'Contact deleted', data: contact});
        }else{
            res.send({status: 500, message: 'Try later'});

        };    });
  
}

module.exports = contacts;
