import { Outlet } from "react-router";
import Header from "./Header";
import styles from "../../share/css/Layout.module.css";
import Footer from "./Footer";
import Aside from "./Aside";

function Layout( {exclusive} ) {              // Change private for exclusive because private is a reserved word
  return (
    <>
      <Header></Header> 
      <main className={styles.main}>
        {exclusive && <Aside />}
        <section className={styles.section}>
          <Outlet></Outlet>
        </section>
      </main>    
      <Footer></Footer>
    </>
  );
}

export default Layout;


/*
Was before the change of public and private routes

<Main className="nm-convex-gray-100"> 
  <Header></Header> 
  // Was in App.js 
  //   <List></List>
  //   <Details></Details> 
  <Outlet></Outlet>
</Main>
<Footer></Footer>

*/