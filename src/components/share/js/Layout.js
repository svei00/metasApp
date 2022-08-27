import { Outlet } from "react-router";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header></Header>
      <Main className="nm-convex-gray-100">
        {/* 
            Was in App.js
            <List></List>
            <Details></Details> */}
        <Outlet></Outlet>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
