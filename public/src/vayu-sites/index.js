import { createRoot } from '@wordpress/element';
import App from './App';
import { Provider } from 'react-redux';
 import store from './store';
const el = document.getElementById( 'vayuroot' );

if (el) {
  const root = createRoot(el);
root.render(<Provider store={store}> <App /></Provider>);
}
