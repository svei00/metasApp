import Links from "./Links";
import styles from "../../share/css/Main.module.css"; // Was Global: import '../../share/css/Main.css'import {ReactComponent as ListIcon} from '../../../img/lista.svg';
import { ReactComponent as ListIcon } from "../../../img/lista.svg";
import { ReactComponent as CreateIcon } from "../../../img/nueva.svg";

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {                                  // Was: function Main({ children }) {
  // In this case the children its the props (Property)
  return (
    <>
      {" "}
      {/*// This is a Fragment in React we have to encapsule all in a tag*/}
      <div className={styles.page}>
        {" "}
        {/*// Was: className='page'  */}
        <aside className={styles.aside}>
          {" "}
          {/*// Was: className='aside'*/}
          {/* Was"
            <a href='/list'>List</a>
            <a href="/create">Create</a>
            
            <Links href="/list" text="Goal List">
              <ListIcon className='icon' />
            </Links>
            <Links href="/create" text="Create Goal">
              <CreateIcon className='icon' />
            </Links>
            */}
          <Links to="/list" text="Goals List" Icon={ListIcon} />
          <Links to="/create" text="New Goal" Icon={CreateIcon} />
        </aside>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

export default Main;
