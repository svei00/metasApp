import './App.css';
import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/share/js/Layout';
/* Was:
import Header from './components/share/js/Header'
import Main from './components/share/js/Main'
import Footer from './components/share/js/Footer'
*/
import List from './components/share/list/List'
import Details from './components/share/create/Details';
import NotFound from './components/share/js/notFound';
import Modal from './components/share/js/Modal';
import { Context } from './services/Memory';
import { getGoals } from './services/Queries';


function App() {

  const [, dispatch] = useContext(Context);                                               // Was: const goals = useContext(Context); // remember we remove state but conserve the ,
    
    useEffect(() => {
        (async () => {
            const goals = await getGoals();
            dispatch({ type: 'set', goals });        
        })();
    },[]);

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<NotFound />} />
        <Route path='/list' element={<List />}>
          <Route path='/list/:id' element={
            <Modal>
              <Details />
          </Modal >    
          }/>      {/*: Tells React that the contect is dinamyc */}  
        </Route>
        <Route path='/create' element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />

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
