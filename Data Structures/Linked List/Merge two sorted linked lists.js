function mergeLists(head1, head2) {
	let node = new SinglyLinkedListNode();
	let prev = node;
	while (head1 !== null && head2 !== null) {
		if (head1.data <= head2.data) {
			prev.next = head1;
			head1 = head1.next;
		} else {
			prev.next = head2;
			head2 = head2.next;
		}
		prev = prev.next;
	}
	if (head1 === null) {
		prev.next = head2;
	}
	if (head2 === null) {
		prev.next = head1;
	}

	// return the sorted linked list
	return node.next;
}
