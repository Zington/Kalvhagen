import React, {Component} from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from './common/Header';
import Home from './home/Home';
import Training from './Training';
import About from './about/About';
import Schedule from './Schedule';
import Footer from './common/Footer';

import '../style/styles.scss';

const history = createHistory();
history.listen(() => {
  window.scrollTo(0,0);
});

class App extends Component {

  render () {
    return (
      <Router history={history}>
        <div>
          <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/training" component={Training}/>
              <Route path="/about" component={About}/>
              <Route path="/schedule" component={Schedule}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
