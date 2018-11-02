import React, { Component } from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import landing from './pages/Landing'
import GenericNotFound from './pages/GenericNotFound';
import home from './pages/Home'
import myAccount from './pages/Account'
import ResetPass from './pages/ResetPass'
import { sagaMiddleware } from './middleware'
import saga from './sagas'
import { Provider } from 'react-redux';
import store from './store';
import MainLayout from './components/MainLayout';
import logout from './containers/Logout';
import './utils/validation';

class App extends Component {

  render() {
    
    return (
      <div>
        <Provider store={store}>
          <Router>
            <MainLayout>
              <Switch>
                <Route exact path="/" component={home} />
                <Route path="/home" component={home} />
                <Route path="/account" component={myAccount} />
                <Route path="/landing" component={landing} />
                <Route path="/password/reset" component={props => <ResetPass {...props} type='reset' />} />
                <Route path="/password/new" component={props => <ResetPass {...props} type='new' />} />
                <Route path="/logout" component={logout} />
                <Route component={GenericNotFound} />
              </Switch>
              <ReduxToastr closeOnToastrClick={true} progressBar={true} />
            </MainLayout>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
sagaMiddleware.run(saga);
