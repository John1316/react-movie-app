import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import './index.css';
import MediaContextProvider from './MediaContext/MediaContext';
import AuthContextProvider from './MediaContext/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <MediaContextProvider>
            <App />
        </MediaContextProvider>
    </AuthContextProvider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
