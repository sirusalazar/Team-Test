import React, { Component } from 'react';
import { Card } from 'react-md';

import ContactForm from './ContactForm';
import ContactApi from '../../api/contactApi';
import NotificationHandler from '../../utils/NotificationHandler';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { values: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit() {
    try {
      const { values } = this.state;
      const response = await ContactApi.saveContact(values);
      if (response) {
        NotificationHandler.showSuccess('Contact saved successfully');
      }
    } catch (error) {
      NotificationHandler.showError('An error has occurred try later');
    }
  }

  handleChange(value, evt) {
    const { values } = this.state;
    values[evt.target.id] = value;
    this.setState({ values });
  }

  render() {
    return (
      <div className="contact-container">
        <Card className="md-block-centered">
          <ContactForm
            onSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </Card>
      </div>
    );
  }
}

export default ContactContainer;
