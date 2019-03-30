import React, { Component } from 'react'
// import { RouteComponentProps } from 'react-router'
import { Router, Route, Switch } from 'react-router-dom'
// import { Switch, Route, withRouter } from 'react-router-dom'
import routes from '../../routes'
import * as Loadable from 'react-loadable'
import NotFound from '../../components/NotFound'
import Loading from '../../components/Loading'
import * as util from '../../utils'

class App extends Component {
  render() {
    return (
      <Router history={util.history}>
        <Switch>
            {
              routes.map((route:any, index:number) => {
                const loadingVisible = <Loading visible={true} />
                const LoadableComponent = Loadable({
                  loader: route.component,
                  loading: () => loadingVisible
                })
                return <Route exact key={index} path={route.path} component={LoadableComponent} />
              })
            }
            <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

// export default withRouter(App)
export default App