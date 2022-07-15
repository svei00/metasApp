import Links from '../js/Links'
import '../../share/css/Main.css'
import {ReactComponent as ListIcon} from '../../../img/lista.svg';
import {ReactComponent as CreateIcon} from '../../../img/nueva.svg';

function Main({children}) {     // In this case the children its the props (Property)
    return (
      <>                        {/*// This is a Fragment in React we have to encapsule all in a tag*/}
        <div className='page'>
          <aside className='aside'>
            {/* Was"
            <a href='/list'>List</a>
            <a href="/create">Create</a>
            */}
            <Links href="/list" text="Goal List">
              <ListIcon className='icon' />
            </Links>
            <Links href="/create" text="Create Goal">
              <CreateIcon className='icon' />
            </Links>
          </aside>
          <main className='main'>
            {children}
          </main>
        </div>
      </>
    );
  }
  
  export default Main;