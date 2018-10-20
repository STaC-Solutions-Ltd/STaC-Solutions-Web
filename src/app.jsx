import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/common/header';
import Home from './components/home';
import Post from './components/post';
import Posts from './components/posts';
import Footer from './components/common/footer';
import FourOhFour from './components/404';
import './style.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog/:post" component={Post} />
          <Route path="/blog" component={Posts} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app-div')
);
