function Main({children}) {     // In this case the children its the props (Property)
    return (
      <>                        {/*// This is a Fragment in React we have to encapsule all in a tag*/}
        <sidenav>
          <a href='/list'>List</a>
          <a href="/create">Create</a>
        </sidenav>
        <main>
          {children}
        </main>
      </>
    );
  }
  
  export default Main;