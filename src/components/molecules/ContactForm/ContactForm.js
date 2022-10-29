import React from 'react';

import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const ContactForm = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    location.href = '/thanks';
  };

  return (
    <form
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="Contact"
      onSubmit={(event) => handleSubmit(event)}
      method="POST"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Contact" />
      <FormField
        label="Adres E-Mail"
        name="E-Mail"
        type="email"
        placeholder="Gdzie odpisać?"
        value={email}
        setValue={setEmail}
      />

      <FormField
        name="Name"
        label="Imię / Nick"
        type="text"
        placeholder="Jak mam się do Ciebie zwracać?"
        value={name}
        setValue={setName}
      />

      <FormField
        label="Twoja wiadomość"
        type="text"
        placeholder="Co chcesz napsiać?"
        value={message}
        setValue={setMessage}
        isArea
      />

      <Button isSubmit>Wyślij wiadomość</Button>
    </form>
  );
};

export default ContactForm;
