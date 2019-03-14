import React, { Component, Suspense } from 'react';
import routes from './routers';
import './App.css';
import './icon/style.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { toggleIcon } from './demo';

// use hoc for class based components
class LegacyWelcomeClass extends Component {

  componentDidMount() {
    toggleIcon();
  }

  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })
    }
    return <Switch>{result}</Switch>

  }

  render() {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    return (
      <div className="App">
        <Router>
          {this.showContentMenus(routes)}
        </Router>
      </div>
    );
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);




// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Welcome />
    </Suspense>
  );
}



// export default App;
