import React from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import * as styles from "./Header.module.scss";
import { socials } from "@src/config/socials";

const Header = () => {
   return (
      <div>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>Welcome, I am Revku!</h1>
            <p className={styles.subtitle}>front-end developer</p>

            <div className={styles.socials}>
               {socials.map((item) => {
                  return (
                     <motion.div key={item.name} whileHover={{ scale: 1.2 }}>
                        <motion.a
                           whileHover={{ backgroundColor: item.hoverColor }}
                           className={styles.socialItem}
                           href={item.url}
                           target="_blank"
                           data-tip={item.name}
                           data-for={item.name}
                        >
                           <img src={item.icon} alt={item.name} />
                        </motion.a>
                        <div>
                           <ReactTooltip
                              id={item.name}
                              effect="solid"
                              backgroundColor={item.hoverColor}
                           />
                        </div>
                     </motion.div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Header;
