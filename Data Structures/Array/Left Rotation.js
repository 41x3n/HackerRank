function rotateLeft(d, arr) {
	// Write your code here
	for (let i = 0; i < d; i++) {
		let firstEl = arr.shift();
		arr.push(firstEl);
	}
	return arr;
}
