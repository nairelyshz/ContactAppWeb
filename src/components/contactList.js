import React from 'react';
import ContactsApi from '../services/contactsApi';
import '../styles/contactItem.css';


class ContactListItem extends React.Component{


    render(){
        return(
            <div className="ContactsListItem">
                <div>
                <strong>
                    {this.props.contact.firstName} {this.props.contact.lastName}
                </strong>
                <br />{this.props.contact.email}
                <br />
                {this.props.contact.contactNumber}
                </div>
            </div>);
    }
}


class ContactList extends React.Component{


    render(){
        return(<div className="ContactsList">
            {this.props.contacts.map(contact => {
            return (
              <li key={contact.email}>
                <ContactListItem contact={contact} />
              </li>
            );
          })}
        </div>);
    }
}

export default ContactList;