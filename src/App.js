import './App.css';
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


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<NotFound />} />
        <Route path='/list' element={<List />} />
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
