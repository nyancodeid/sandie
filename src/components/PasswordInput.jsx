import { h, Component } from 'preact'

export default class PasswordInput extends Component {
  constructor () {
    super()
  }

  componentDidMount () {
  }

  render () {
    return <input className="password-display" type="text" value={this.props.password} />
  }
}