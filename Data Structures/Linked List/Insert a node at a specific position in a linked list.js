function insertNodeAtPosition(head, data, position) {
	let counter = 1;
	let ll = head;
	while (ll && counter < position) {
		ll = ll.next;
		counter++;
	}
	let temp = ll.next;
	let node = new SinglyLinkedListNode(data);
	ll.next = node;
	node.next = temp;

	return head;
}
