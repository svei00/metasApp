import './App.css';
import Header from './components/share/js/Header'
import Main from './components/share/js/Main'
import Footer from './components/share/js/Footer'
import List from './components/share/list/List'
import Details from './components/share/create/Details';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main className="nm-convex-gray-100">
        <List></List>
        <Details></Details>
      </Main>
      <Footer></Footer>      
    </div>
  );
}

export default App;
