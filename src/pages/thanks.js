import React from 'react';
import { Link } from 'gatsby';
import * as styles from 'styles/error.module.scss';

import Button from 'components/atoms/Button/Button';
import Footer from 'components/organisms/Footer/Footer';
import PageTemplate from 'components/templates/PageTemplate/PageTemplate';

const ThanksPage = () => {
  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Wiadomość wysłana!</h2>
          <p className={styles.paragraph}>
            Twoja wiadomość została przekazana do realizacji. Odpowiem tak
            szybko jak to możliwe.
          </p>
          <Link to="/">
            <Button>Powrót do strony głównej</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </PageTemplate>
  );
};

export default ThanksPage;
