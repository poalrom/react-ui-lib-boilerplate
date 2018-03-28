// @flow

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import ButtonSpec from './components/button/__tests__/Button.spec';

const rootElement = document.getElementById('root');
if (rootElement) {
  render(
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Link to="/button">Кнопка</Link>
            </div>
          )}
        />
        <Route exact path="/button" component={ButtonSpec} />
      </div>
    </Router>,
    rootElement,
  );
}
