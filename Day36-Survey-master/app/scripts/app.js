import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import Start from './components/start_view.js'
import Questions from './components/question_view.js'
import Results from './components/results_view.js'


export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/"          component={AppRoot} />
          <Route path="/start"           component={Start} />
          <Route path="/question"        component={Questions} />
          <Route path="/results"         component={Results} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
