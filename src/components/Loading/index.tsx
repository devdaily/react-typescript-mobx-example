import React, { Component } from 'react'
import './index.scss'

interface LoadingProps {
  visible?: boolean
}

export default class Loading extends Component<LoadingProps> {
  static defaultProps = {
    visible: false
  }

  render() {
    return (
      <>
        {this.props.visible ?
          <div className="loading">
            <div className="loading-inner">
              <svg className="circular" viewBox="25 25 50 50">
                <circle cx="50" cy="50" r="20" fill="none" />
              </svg>
            </div>
          </div>
          : null}
      </>
    )
  }
}