
import './App.css';
import { Switch, Route, Link,  BrowserRouter as Router,
} from "react-router-dom";
import Signup from "./Signup";
import LogIn from './LogIn';
import 'antd/dist/antd.css';
import Header from "../src/PublicLayout/Header";

function App() {
  return (
    <>

<Router>     
     <Switch>
     <Route exact path="/">
            <Header/>
           <Signup/>
           <LogIn/>
           
          </Route> 
          <Route exact path="/home">
            <Header/>
           <Signup/>
           <LogIn/>
           
          </Route>
          <Route exact path="/log_in"> 
            <Header/>
           <LogIn/>
          </Route>
          <Route exact path="/sign_up"> 
            <Header/>
           <Signup/>
          </Route>
            </Switch>
   
    </Router>
    </>
  );
}

export default App;



