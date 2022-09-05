const ran = (min: number, max: number, prev: number) => {
	// Return a random number between min and max-1 and that is different than prev
	min = Math.ceil(min);
	max = Math.floor(max);
	let rand = prev;
	while (rand === prev) {
		rand = Math.floor(Math.random() * (max - min) + min);
	}
	return rand;
};
export default ran;
