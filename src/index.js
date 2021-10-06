import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCP9umejB11l1hC3us4wKPMUm0N-n-uPao",
    authDomain: "portfolio-wakeupneo.firebaseapp.com",
    projectId: "portfolio-wakeupneo",
    storageBucket: "portfolio-wakeupneo.appspot.com",
    messagingSenderId: "325722788046",
    appId: "1:325722788046:web:c8c3ff6d521f471ad7409f",
    measurementId: "G-5FT4HS60PE"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

