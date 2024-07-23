import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactGA from 'react-ga4';

const googleId01 = import.meta.env.VITE_API_GA_TRACKING_01;
const googleId02 = import.meta.env.VITE_API_GA_TRACKING_02;

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
});

ReactGA.initialize([
  {
    trackingId: googleId01,
  },
  {
    trackingId: googleId02,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
