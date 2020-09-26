import 'react-hot-loader'

import React from 'react'
import ReactDOM from 'react-dom'

import store, {Provider} from 'store/Store'
import AppRoot from 'components/other/AppRoot'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('wrapper')
)
