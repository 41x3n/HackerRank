function matchingStrings(strings, queries) {
	let hashmap = {};
	let arr = [];
	strings.forEach((s) => {
		if (s in hashmap) hashmap[s]++;
		else hashmap[s] = 1;
	});
	queries.forEach((q) => {
		if (q in hashmap) arr.push(hashmap[q]);
		else arr.push(0);
	});
	return arr;
}
