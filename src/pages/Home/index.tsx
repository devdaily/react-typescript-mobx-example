import React, { Component } from 'react'
import './index.scss'
import { observer, inject } from 'mobx-react'
import { IMobxStore } from '../../stores/mobxStore'

interface HomeProps {
  mobxStore?: IMobxStore
}

@inject('mobxStore')
@observer
class App extends Component<HomeProps> {
  render() {
    return (
      <div className="home">
        home
      </div>
    )
  }
}

export default App
