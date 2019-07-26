class ContactApi {
  static async saveContact(contact) {
    const options = {
      method: 'POST',
      body: JSON.stringify(contact),
    };
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    options.body = JSON.stringify(contact);
    const response = await fetch('http://localhost:5001/contact', options);
    const data = await response.json();
    return data;
  }
}

export default ContactApi;
