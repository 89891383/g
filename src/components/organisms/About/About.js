import React from 'react';
import * as styles from './About.module.scss';

import Section from 'components/templates/SectionTemplate/SectionTemplate';

const About = () => {
  return (
    <Section title={'O mnie'}>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan auctor
        quis ornare in erat faucibus. Morbi ullamcorper magna sed non sociis.
        Vitae, purus convallis rhoncus vestibulum sit amet, egestas. Mattis mi,
        non, neque neque, ante quam at. Ullamcorper orci purus, nisi, turpis
        vestibulum consectetur.
      </p>
    </Section>
  );
};

export default About;
