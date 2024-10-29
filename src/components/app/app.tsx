import { useState } from 'react';

import styles from './app.module.scss';

interface AppProps {
	children: React.ReactNode | React.ReactNode[];
}

export const App = ({ children }: AppProps) => {
	const [count, setCount] = useState(0);

	return (
		<div>
			{children}
			<button
				className={styles.button}
				type='button'
				onClick={() => setCount(count + 1)}
			>
				Count: {count}
			</button>
		</div>
	);
};
