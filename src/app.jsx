import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/common/header.jsx'
import Home from './Components/home.jsx'
import Post from './Components/Post.jsx'
import Posts from './Components/Posts.jsx'
import Footer from './components/common/footer.jsx'
import FourOhFour from './Components/404.jsx'

const store = configureStore();

class App extends React.Component {
    render() {
        return (
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
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("app-div")
);