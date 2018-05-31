import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import store from './store'
import Theader from './components/Theader'
import Tbody from './components/Tbody'
import Tfooter from './components/Tfooter'

ReactDOM.render(<Provider store={store}>
	<div>
		<Theader></Theader>
		<hr/>
		<Tbody></Tbody>
		<hr/>
		<Tfooter></Tfooter>
	</div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
