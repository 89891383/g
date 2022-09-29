import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import * as styles from "./NavItems.module.scss";
import { navItems } from "@src/config/navItems";

const NavItems = ({ itemClassName, activeClassName, type }) => {
   return (
      <>
         {navItems.map((item) => {
            if (type === "desktop") {
               return (
                  <motion.div
                     whileHover={{ scale: 1.15 }}
                     className={styles.item}
                     style={{ display: "inline-block" }}
                     key={item.url}
                  >
                     <Link
                        to={item.url}
                        className={itemClassName}
                        activeClassName={activeClassName}
                     >
                        {item.titleDesktop}
                     </Link>
                  </motion.div>
               );
            } else {
               return (
                  <Link
                     to={item.url}
                     className={itemClassName}
                     activeClassName={activeClassName}
                     key={item.url}
                  >
                     {item.titleMobile}
                  </Link>
               );
            }
         })}
      </>
   );
};

export default NavItems;
