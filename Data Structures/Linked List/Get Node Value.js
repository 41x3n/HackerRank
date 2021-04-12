function getNode(head, positionFromTail) {
	let arr = [];
	while (head) {
		arr.push(head.data);
		head = head.next;
	}

	return arr[arr.length - positionFromTail - 1];
}
