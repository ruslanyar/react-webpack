import { useState } from 'react';

interface AppProps {
	children: React.ReactNode | React.ReactNode[];
}

export const App = ({ children }: AppProps) => {
	const [count, setCount] = useState(0);

	return (
		<div>
			{children}
			<button type='button' onClick={() => setCount(count + 1)}>
				Count: {count}
			</button>
		</div>
	);
};
