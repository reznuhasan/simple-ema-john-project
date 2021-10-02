
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NoFound from './Components/NoFound/NoFound';
import Review from './Components/Review/Review';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route>
            <NoFound></NoFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
