/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { Button } from 'react-md';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import customInput from '../../common/Form/fields';

let ContactForm = ({ handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit} className="form">
    <Field
      name="name"
      id="name"
      component={customInput}
      label="First Name"
      placeholder="Your name..."
      error="Please write down your first name"
      length={255}
      change={handleChange}
    />
    <Field
      name="lastName"
      id="lastName"
      component={customInput}
      label="Last Name"
      placeholder="your last name..."
      error="Please write down your last name"
      length={255}
      change={handleChange}
    />
    <Field
      name="email"
      id="email"
      component={customInput}
      label="Email"
      placeholder="Your email address..."
      error="Don’t forget to tell us what your email address is"
      length={255}
      change={handleChange}
    />
    <Field
      name="subject"
      id="subject"
      component={customInput}
      label="sbuject"
      placeholder="Let us know your concerns!"
      rows={4}
      error="Don’t forget to write something to use!"
      length={500}
      change={handleChange}
    />
    <div className="form-buttons">
      <Button raised primary iconChildren="send" type="submit">
        Submit
      </Button>
    </div>
  </form>
);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

ContactForm = reduxForm({
  form: 'contactForm',
})(ContactForm);

export default ContactForm;
