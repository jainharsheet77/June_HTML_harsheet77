import Blog from './components/Blog/Blog';
import Topbar from './components/Topbar/Topbar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch} from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
       <ErrorBoundary>
       <Products></Products>
      </ErrorBoundary>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </div>
  );
  
}

export default App;
