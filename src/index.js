import React from 'react';
import ReactDOM from 'react-dom';
import OS from './components/os/os';
import registerServiceWorker from './registerServiceWorker';

window
  .isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

ReactDOM.render(<OS />, document.getElementById('root'));
registerServiceWorker();
