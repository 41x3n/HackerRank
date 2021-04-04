function dynamicArray(n, queries) {
	// Write your code here
	let arr = new Array(n).fill(0).map(() => new Array());
	let lastAnswer = 0;
	let reArr = [];
	for (let i = 0; i < queries.length; i++) {
		if (queries[i][0] == 1) {
			let pos = (queries[i][1] ^ lastAnswer) % n;
			arr[pos].push(queries[i][2]);
		} else if (queries[i][0] == 2) {
			let pos = (queries[i][1] ^ lastAnswer) % n;
			lastAnswer = arr[pos][queries[i][2] % arr[pos].length];
			reArr.push(lastAnswer);
		}
	}
	return reArr;
}
