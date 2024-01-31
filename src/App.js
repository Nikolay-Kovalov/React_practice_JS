import React from "react";
import Home from "./Home";
import CounterContainer from "./CounterContainer"
import FormFirst from "./FormFirst";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

class App extends React.Component{
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">React</Link>
                            </li>
                               <li>
                                <Link to="/counter">Counter</Link>
                            </li>
                               <li>
                                <Link to="/form">Form</Link>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                    <Route path="/" exact element={Home} />
                    <Route path="./CounterContainer" element={CounterContainer} />
                        <Route path="./FormFirst" element={FormFirst} />
                        </Switch>
                </div>
                    <CounterContainer />
   
          </Router>  

       )
   }
}

export default App;