import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      {' '}
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
