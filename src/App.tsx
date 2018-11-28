import * as React from 'react';

import { Switch,BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './view/home'

class App extends React.Component {
  public render() {
    return (
      <div>
       {/* <Home/> */}
        <Router>
          <Switch>

             {/* <Redirect  path="/" to="/home" />
            <Route  path="/Home" component={Home} />*/}
			 <Route  path="/Home" render={() => <Home />} /> 


          </Switch>
          </Router>

       
      </div>
    );
  }
}

export default App;
