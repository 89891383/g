import React from 'react';

import Section from '@templates/SectionTemplate/SectionTemplate';
import FormField from '@atoms/FormField/FormField';
import Button from '@atoms/Button/Button';

const Contact = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <Section title={'Kontakt'}>
      <form
        method="GET"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="Contact"
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
    </Section>
  );
};

export default Contact;
