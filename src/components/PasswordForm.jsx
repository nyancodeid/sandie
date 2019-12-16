import { h, Component } from 'preact'

import Elevation from 'preact-material-components/Elevation'
import PasswordInput from './PasswordInput'
import Typography from 'preact-material-components/Typography'
import Slider from 'preact-material-components/Slider'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import Snackbar from 'preact-material-components/Snackbar'

import { generatePassword } from './PasswordGenerator'
import { ButtonIcon, PasswordFormat, PasswordChar } from './components'
import { defaultState } from './config'

import 'preact-material-components/Slider/style.css'

export default class PasswordForm extends Component {
  constructor () {
    super()
    this.passwordController = this.passwordController.bind(this)
    this.state = defaultState
  }

  componentDidMount () {
    this.passwordController(this.state.options)
  }
  /**
   * @method passwordController
   * @description generate password
   */
  passwordController () {
    const password = generatePassword(this.state)
    this.setState({ password: password })
  }
  /**
   * @method copyPassword
   * @description copy password into clipboard
   */
  copyPassword () {
    if (this.state.password.length > 0) {
      const textArea = document.createElement('textarea')
      textArea.value = this.state.password
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      textArea.remove()

      this.bar.MDComponent.show({
        message: 'Kata sandi berhasil disalin'
      })
    }
  }

  /**
   * @method onSliderChanges
   * @description handler for slider changes event to get value from slider
   * @param {Object} event
   */
  onSliderChanges (event) {
    const { value } = event.detail
    const valueNumber = Number(value)

    // the change slider is always called twice
    // we need to get the specific value we want
    if (Number.isNaN(valueNumber)) return false
    if (value === this.state.length) return false

    this.setState({ length: valueNumber }, this.passwordController)
  }
  /**
   * @method onFormatChanges
   * @description handler when radio element value was changed
   * 
   * @param {String} format ex. "easyToSay", "easyToRead"
   */
  onFormatChanges (format) {
    let formats = this.state.formats

    Object.keys(formats).forEach(id => {
      formats[id] = (format === id) ? true : false
    })
    const formatRadio = this.state.formatRadio.map(radio => {
      return { ...radio, checked: (radio.id === format) ? true : false }
    })

    // passwordController called when setState was complete (callabck)
    // so we set this method into callback parameter.
    this.setState({ formats, formatRadio }, 
      this.passwordController)
  }
  /**
   * @method onCharChanges
   * @description handler when checkbox element value eas changes
   * 
   * @param {String} char ex. "lowecase", "uppercase"
   * @param {Boolean} checked ex. true, false
   */
  onCharChanges (char, checked, disabled) {
    let chars = this.state.chars
    let charKeys = Object.keys(chars)

    charKeys.forEach(id => {
      chars[id] = (id === char) ? checked : chars[id]
    })
    const charCheckbox = this.state.charCheckbox.map(checkbox => {
      if (typeof disabled !== "undefined") {
        return { ...checkbox, 
          checked: (checkbox.id === char) ? checked : checkbox.checked,
          disabled: (disabled.id === checkbox.id) ? true : false }
      } else {
        return { ...checkbox, 
          checked: (checkbox.id === char) ? checked : checkbox.checked,
          disabled: false }
      }
    })

    // passwordController called when setState was complete (callabck)
    // so we set this method into callback parameter.
    this.setState({ chars, charCheckbox }, this.passwordController)
  }
  /**
   * @method onRegenerate
   * @description handler when regenerate button clicked
   */
  onRegenerate () {
    this.passwordController()
  }

  render () {
    return <div>
      <Elevation z={1} className="padding-8">
        <PasswordInput
          password={ this.state.password } />
        <ButtonIcon icon="content_copy" onClick={this.copyPassword.bind(this)} ></ButtonIcon>
        <ButtonIcon icon="refresh" onClick={this.onRegenerate.bind(this)} ></ButtonIcon>
      </Elevation>
      <Elevation z={1} className="padding-8">
        <Typography headline6>Customize your password</Typography>
        <div>
          <LayoutGrid id="control">
            <LayoutGrid.Inner>
              <LayoutGrid.Cell cols="6">
                <span>Password Length { this.state.length }</span>
                <Slider discrete onInput={this.onSliderChanges.bind(this)} 
                  step={1}
                  value={this.state.length}
                  max={50}
                  min={3} />
              </LayoutGrid.Cell>
              <LayoutGrid.Cell className="password-format" cols="3">
                <PasswordFormat formats={this.state.formatRadio} 
                  onChange={this.onFormatChanges.bind(this)}></PasswordFormat>
              </LayoutGrid.Cell>
              <LayoutGrid.Cell className="password-char" cols="3">
                <PasswordChar chars={this.state.charCheckbox}
                  onChange={this.onCharChanges.bind(this)}></PasswordChar>
              </LayoutGrid.Cell>
            </LayoutGrid.Inner>
          </LayoutGrid>
        </div>
      </Elevation>

      <Snackbar ref={bar=>{this.bar=bar}}/>
    </div>
  }
}