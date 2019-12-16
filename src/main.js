import { h, render } from 'preact'
// Style
import 'preact-material-components/Elevation/style.css';
import 'preact-material-components/IconButton/style.css';
import 'preact-material-components/Icon/style.css';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Snackbar/style.css';
// Custom
import './style.scss'

import PasswordForm from './components/PasswordForm'

render(<PasswordForm />, document.getElementById('form'))
