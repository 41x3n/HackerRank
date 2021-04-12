function removeDuplicates(head) {
	let pt = head;
	while (head) {
		let data = head.data;
		while (head.next) {
			if (data == head.next.data) head.next = head.next.next;
			else break;
		}
		head = head.next;
	}
	return pt;
}
