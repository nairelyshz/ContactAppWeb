import React from 'react';
import '../styles/home.css';
import Contact from '../components/contact';
import ContactForm from '../components/contactForm';

class Home extends React.Component{
    state = {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          contactNumber: ''
        },
      };
    
      handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
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
                        onChange={this.handleChange}/>
                </div>
              </div>
              <div className='list-contact'></div>
            </div>
          );
      }
  
}

export default Home;
