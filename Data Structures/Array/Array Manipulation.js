function arrayManipulation(n, queries) {
	let arr = new Array(n + 1).fill(0);
	queries.forEach((q) => {
		arr[q[0] - 1] += q[2];
		arr[q[1]] -= q[2];
	});
	let max = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		max = Math.max(max, sum);
	}
	return max;
}
