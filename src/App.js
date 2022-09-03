import "./App.css";
import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import Layout from "./components/share/js/Layout";
/* Was:
import Header from './components/share/js/Header'
import Main from './components/share/js/Main'
import Footer from './components/share/js/Footer'
*/
import List from "./components/private/list/List";
import Details from "./components/private/create/Details";
import NotFound from "./components/share/js/notFound";
import Modal from "./components/share/js/Modal";
import { Context } from "./services/Memory";
import { getGoals } from "./services/Queries";
import Signup from "./components/public/signup/signup";
import Signin from "./components/public/signin/signin";
import { Login } from "./components/share/js/Login";

function App() {
  const [, dispatch] = useContext(Context); // Was: const goals = useContext(Context); // remember we remove state but conserve the ,

  useEffect(() => {
    (async () => {
      const goals = await getGoals();
      dispatch({ type: "set", goals });
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" 
        element={<Navigate to="/list" />}  // Was: element={<Layout />}> 
      />                                 
        <Route element={<Layout />}>
          <Route path='/login' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* // Was: <Route index element={<NotFound />} /> */}
        <Route element={<Layout exclusive/>}>
         <Route element={<Login />}>  
            <Route path="/list" element={<List />}>
              <Route
                path="/list/:id"
                element={
                  <Modal>
                    <Details />
                  </Modal>
                }
              /> { /* // Was {" "} */}
          {/*: Tells React that the contect is dinamyc */}
        </Route>
        <Route path="/create" element={<Details />} />
      </Route>
    </Route> 

      {/* Was:
      <div className="App">
        <Header></Header>
        <Main className="nm-convex-gray-100">
          <List></List>
          <Details></Details>
        </Main>
        <Footer></Footer>      
      </div>
      mover to layout */}
    </Routes>
  );
}

export default App;
