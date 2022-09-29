import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import * as styles from "./MobileMenu.module.scss";
import close from "@images/close.svg";
import NavItems from "@molecules/NavItems/NavItems";

const MobileMenu = ({ setIsMenuOpen }) => {
   return (
      <motion.div
         className={styles.wrapper}
         initial={{ right: -300 }}
         animate={{ right: 0 }}
         transition={{ ease: "easeInOut", duration: 1, times: [0.5, 0.5] }}
      >
         <div className={styles.header}>
            <img src={close} onClick={() => setIsMenuOpen(false)} />
         </div>
         <div className={styles.content}>
            <NavItems
               activeClassName={styles.active}
               itemClassName={styles.item}
               type={"mobile"}
            />
         </div>
      </motion.div>
   );
};

export default MobileMenu;
