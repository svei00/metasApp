import React from "react";
import styles from "../../share/css/Aside.module.css";
import Links from "./Links";
import { ReactComponent as ListIcon } from "../../../img/lista.svg";
import { ReactComponent as CreateIcon } from "../../../img/nueva.svg";

function Aside() {
  return (
   
        <aside className={styles.aside}>
          <Links to="/list" text="Goals List" Icon={ListIcon} />
          <Links to="/create" text="New Goal" Icon={CreateIcon} />
        </aside>
  );
}

export default Aside;