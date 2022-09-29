import React from "react";
import * as styles from "./Section.module.scss";

const SectionTemplate = ({ title, children }) => {
   return (
      <div className={styles.wrapper}>
         <h2 className={styles.title}>{title}</h2>
         {children}
      </div>
   );
};

export default SectionTemplate;
