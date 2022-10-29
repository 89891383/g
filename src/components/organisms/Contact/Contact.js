import React from 'react';

import Section from 'components/templates/SectionTemplate/SectionTemplate';
import ContactForm from 'components/molecules/ContactForm/ContactForm';

const Contact = () => {
  return (
    <Section title={'Kontakt'}>
      <ContactForm />
    </Section>
  );
};

export default Contact;
