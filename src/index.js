import React from 'react';
import ReactDOM from 'react-dom';
import OS from './components/os/os';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<OS />, document.getElementById('root'));
registerServiceWorker();
