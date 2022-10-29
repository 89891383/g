import React from 'react';
import * as styles from './ContactForm.module.scss';

import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const ContactForm = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const validateForm = () => {
    setErrors({});
    const newErrors = {};
    let errorsCount = 0;

    if (!email) {
      newErrors.email = true;
      errorsCount++;
    }

    if (!name) {
      newErrors.name = true;
      errorsCount++;
    }

    if (!message) {
      newErrors.message = true;
      errorsCount++;
    }

    setErrors(newErrors);

    if (errorsCount == 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm() == false) {
      return 0;
    }

    const formData = {
      'E-Mail': email,
      Name: name,
      Message: message,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Contact', ...formData }),
    })
      .then(() => (location.href = '/thanks'))
      .catch((error) => console.log(error));
  };

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
        label="Adres E-Mail / Discord"
        name="E-Mail"
        type="text"
        placeholder="Gdzie odpisać?"
        value={email}
        setValue={setEmail}
      />
      {errors.email && <p className={styles.error}>Podaj adres e-mail!</p>}

      <FormField
        name="Name"
        label="Imię / Nick"
        type="text"
        placeholder="Jak mam się do Ciebie zwracać?"
        value={name}
        setValue={setName}
      />
      {errors.name && <p className={styles.error}>Podaj swoje imię!</p>}

      <FormField
        label="Twoja wiadomość"
        name="Message"
        type="text"
        placeholder="Co chcesz napsiać?"
        value={message}
        setValue={setMessage}
        isArea
      />
      {errors.message && <p className={styles.error}>Napisz wiadomość!</p>}

      <div className={styles.buttons}>
        <Button onClick={(event) => handleSubmit(event)}>
          Wyślij wiadomość
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
