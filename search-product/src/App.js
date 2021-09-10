import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Search from './components/Search/seach';
import Details from './components/Details/details';
import Error from './components/Error/error';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" render={() => <><Home /></> } exact />
          <Route path="/items/:id" render={() => <><Details /></> }/>
          <Route path="/items" render={() => <><Search /></> } />
          <Route path="*" render={() => <><Error /></> } />
        </Switch>
      </div>
    </BrowserRouter>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //     Bienvenido a Search Product
    //   </header>
    // </div>
  );
}

export default App;
