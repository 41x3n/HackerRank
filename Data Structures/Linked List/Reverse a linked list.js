function reverse(head) {
	let rev = null;
	while (head) {
		let temp = head;
		head = head.next;
		temp.next = rev;
		rev = temp;
	}
	return rev;
}
