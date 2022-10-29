import React from 'react';
import * as styles from './About.module.scss';

import Section from 'components/templates/SectionTemplate/SectionTemplate';

const About = () => {
  return (
    <Section title={'O mnie'}>
      <p className={styles.paragraph}>
        <b>Cześć 👋, nazywam się Patryk.</b>
        <br /> <b>Revku</b> to mój pseudonim i jednocześnie marka, którą tworzę
        i staram cały czas rozwijać. Tworzę aplikacje do sieci, zajmuję się
        głównie <b>front-end'em</b> czyli w ogromnym skrócie warstwą wizualną i
        interaktywną stron internetowych. Programowaniem interesuję się od 12
        roku życia, a tworzenia stron internetowych zacząłem uczyć się około 2
        lata temu. W przyszłości chciałbym nauczyć się tworzenia aplikacji
        mobilnych. Aktualnie jestem uczniem technikum w kierunku “programista”,
        cały czas staram się rozwijać swoje umiejętności techniczne, ale także
        miękkie.
      </p>
    </Section>
  );
};

export default About;
