import React from 'react';
import * as button from '@atoms/Button/Button.module.scss';

import Section from '@templates/SectionTemplate/SectionTemplate';
import FormField from '@atoms/FormField/FormField';

const Contact = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <Section title={'Get in touch'}>
      <form
        method="GET"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="Contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Contact" />
        <FormField
          label="E-Mail"
          type="email"
          placeholder="e.g. revku@revku.dev"
          value={email}
          setValue={setEmail}
        />
        <FormField
          name="Name"
          label="Name / Nickname"
          type="email"
          placeholder="e.g. Revku"
          value={name}
          setValue={setName}
        />
        <FormField
          label="Message"
          type="email"
          placeholder="Your message"
          value={message}
          setValue={setMessage}
          isArea
        />

        <button className={button.button} type="submit">
          Send Message
        </button>
      </form>
    </Section>
  );
};

export default Contact;
