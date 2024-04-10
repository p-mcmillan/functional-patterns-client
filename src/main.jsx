import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from 'react-ga4'

const googleId = 'G-K8LNPTWM80'

ReactGA.initialize(`${googleId}`)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
