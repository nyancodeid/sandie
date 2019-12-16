import { h } from 'preact'

import IconButton from 'preact-material-components/IconButton'
import Radio from "preact-material-components/Radio"
import FormField from "preact-material-components/FormField"
import Checkbox from 'preact-material-components/Checkbox'

import "preact-material-components/FormField/style.css"
import "preact-material-components/Radio/style.css"
import 'preact-material-components/Checkbox/style.css'

export const ButtonIcon = (props) => {
  return <IconButton onClick={props.onClick}>
    <IconButton.Icon on>{props.icon}</IconButton.Icon>
    <IconButton.Icon>{props.icon}</IconButton.Icon>
  </IconButton>
}
export const PasswordFormat = ({ formats, onChange }) => {
  const onChangeValue = function() {
    onChange(this.selected)
  }

  return formats.map((option, i) => {
    return (
      <FormField>
        <Radio
          id={`radio-${i}`}
          name="Controlled Options"
          checked={option.checked}
          onChange={onChangeValue.bind({ selected: option.id })}
        />
        <label for={`radio-${i}`}>{option.name}</label>
      </FormField>
    )
  })
}
export const PasswordChar = ({ chars, onChange }) => {
  const disabled = []

  const onChangeValue = function() {
    chars.forEach((char) => {
      const checked = (char.id === this.selected) ? this.checked : char.checked
      if (checked) disabled.push(char)
    })

    onChange(this.selected, this.checked, (disabled.length === 1) ? disabled[0] : undefined)
  }
  
  return chars.map((option, i) => {
    return (
      <FormField>
        <Checkbox
          id={`checkbox-${i}`}
          name="Controlled Checkbox"
          checked={option.checked}
          disabled={option.disabled}
          onChange={onChangeValue.bind({ selected: option.id, checked: !option.checked })}
        />
        <label for={`checkbox-${i}`}>{option.name}</label>
      </FormField>
    )
  })
}
