import React from 'react';
import * as styles from './About.module.scss';

import Section from 'components/templates/SectionTemplate/SectionTemplate';
import aboutImage from 'images/about.svg';

const About = () => {
  return (
    <Section title={'O mnie'}>
      <div className={styles.wrapper}>
        <p className={styles.paragraph}>
          Cześć! Nazywam się Patryk. <br />
          <br />
          Tworzę aplikacje do sieci, zajmuję się głównie <b>
            front-end'em
          </b>{' '}
          czyli w ogromnym skrócie warstwą wizualną i interaktywną stron
          internetowych. Programowaniem interesuję się od 12 roku życia, a
          tworzenia stron internetowych zacząłem uczyć się około 2 lata temu.{' '}
          <br />
          <br />W przyszłości chciałbym nauczyć się tworzenia aplikacji
          mobilnych. Aktualnie jestem uczniem technikum w kierunku
          “programista”, cały czas staram się rozwijać swoje umiejętności
          techniczne, ale także miękkie.
        </p>
        <img className={styles.image} src={aboutImage} alt="About me image" />
      </div>
    </Section>
  );
};

export default About;
