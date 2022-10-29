import React from 'react';
import * as styles from './ContactForm.module.scss';

import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const ContactForm = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <form
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="Contact"
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
        type="email"
        placeholder="Jak mam się do Ciebie zwracać?"
        value={name}
        setValue={setName}
      />

      <FormField
        label="Twoja wiadomość"
        type="email"
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
