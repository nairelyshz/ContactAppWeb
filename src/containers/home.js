import React from 'react';
import '../styles/home.css';
import Contact from '../components/contact';
import ContactForm from '../components/contactForm';
import ContactList from '../components/contactList';

class Home extends React.Component{
    state = {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          contactNumber: ''
        },
        data: []
      };
    contacts=[];
    
      handleChange = e => {
        e.preventDefault();

        console.log(e.target.value);
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        
        });
      };
      handleUpdateList = (e) =>{
        e.preventDefault();
        this.contacts.push(this.state.form);
        console.log(this.contacts);
        this.setState({data:this.contacts})
      }
      render(){
        return (
            <div className="home">
              <div className='row-new-contact'>
                <div className='view-new-contact'>
                <Contact firstName={this.state.form.firstName}
                        lastName={this.state.form.lastName}
                        email={this.state.form.email}
                        contactNumber={this.state.form.contactNumber}/>
                </div>
                <div className='new-contact'>
                    <ContactForm formValues={this.state.form}
                        onChange={this.handleChange}
                        updateList={this.handleUpdateList}/>
                </div>
              </div>
              <div className='list-contact'>
                <div className='container'>
                  <ContactList contacts={this.contacts}/>
                </div>
              </div>
            </div>
          );
      }
  
}

export default Home;
