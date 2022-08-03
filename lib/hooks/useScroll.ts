import { useEffect } from 'react';

const useScroll = () => {
	useEffect(() => {
		globalThis.onscroll = () => {
			console.log('hi');
		};
	});
};

export default useScroll;
