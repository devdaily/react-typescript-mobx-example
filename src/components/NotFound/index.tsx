import * as React from 'react'

interface notfound {
  className?: string
  disabled?: boolean
  onClick?(): void
  to?: string
  cmd?: string
}

export default class NotFound extends React.Component<notfound> {
  static defaultProps = {
    disabled: false
  }

  render() {
    return (
      <div className="notfound">NotFound</div>
    )
  }
}