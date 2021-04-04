function reverseArray(a) {
	let rev = [];
	for (let i = a.length - 1; i >= 0; i--) rev.push(a[i]);
	return rev;
}
