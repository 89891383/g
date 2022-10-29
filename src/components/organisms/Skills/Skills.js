import React from 'react';
import * as styles from './Skills.module.scss';

import Section from 'components/templates/SectionTemplate/SectionTemplate';
import SkillsQuery from 'hooks/get-skills-data';
import SkillsItem from 'components/atoms/SkillsItem/SkillsItem';

const Skills = () => {
  const [skills, setSkills] = React.useState([]);

  return (
    <Section title={'Technologie i umiejętności'}>
      <SkillsQuery setSkills={setSkills} />
      <div className={styles.wrapper}>
        {skills.map((item) => {
          item = item.node;

          return (
            <SkillsItem
              key={item.id}
              imageUrl={item.icon.url}
              name={item.name}
              level={item.levelName}
              background={item.background.hex}
              text={item.text.hex}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
