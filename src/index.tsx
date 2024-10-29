import { createRoot } from 'react-dom/client';

import { App } from './components/app/app';

import './index.scss';

const root = createRoot(document.querySelector('#root')!);
root.render(
	<App>
		<h1>Hello, React!</h1>
	</App>
);
